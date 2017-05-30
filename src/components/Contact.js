import React from 'react';
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contactData: [
                { name: "Abet", phone: "010-0000-0001" },
                { name: "Betty", phone: "010-0000-0002" },
                { name: "Charlie", phone: "010-0000-0003" },
                { name: "David", phone: "010-0000-0004" }
            ],
            selectedKey : -1,
            selected: {
                name : "",
                phone : ""
            }
        }
    }
    onInsert(name, phone){
        this.setState({
            contactData : this.state.contactData.concat({name : name, phone, phone})
        });
    }
    onSelect(key){
        if(key == this.state.selectedKey){
            console.log('key select cacelled');
            this.setState({
                selectedKey : -1,
                selected : {
                    name : "",
                    phone : ""
                }
            });
            return;
        }
        this.setState({
            selectedKey: key,
            selected : this.state.contactData[key]
        });
        console.log(key + ' is selected');
    }
    isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }
    onRemove(){
        if(this.state.selectedKey == -1){
            console.log('contact is not selected');
            return;
        }
        
        this.setState({
            contactData : this.state.contactData.filter((item, index)=>{ return index!=this.state.selectedKey}),
            selectedKey :  -1
        });
    }
    onEdit(name, phone){
        this.setState({
            contactData : this.state.contactData.fill({name : name, phone : phone},this.state.selectedKey, this.state.selectedKey + 1),
            selected : {name : name, phone : phone}
        });
    }
    render(){
        return(
            <div>
                <h1>Contact</h1>
                <ul>
                    {this.state.contactData.map((contact, i)=>{
                        return (<ContactInfo name={contact.name} phone={contact.phone} key={i} contactKey={i} isSelected={this.isSelected.bind(this)(i)} onSelect={this.onSelect.bind(this)}/>)
                    })}
                </ul>
                <ContactCreator onInsert={this.onInsert.bind(this)}/>
                <ContactRemover onRemove={this.onRemove.bind(this)}/>
                <ContactEditor onEdit={this.onEdit.bind(this)} isSelected={this.state.selectedKey != -1} contact={this.state.selected}/>
            </div>
        );
    }
}
class ContactInfo extends React.Component{
    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }
    shouldComponentUpdate(nextProps, nextState){
    	return (JSON.stringify(nextProps) != JSON.stringify(this.props));	
    } 
    render(){
        let getStyle = isSelect =>{
            if(!isSelect) return;
            let style = {
                fontWeight : 'bold',
                backgroundColor : '#4efcd8'
            };
            return style;
        }
        return(
            <li style={getStyle(this.props.isSelected)} onClick={this.handleClick.bind(this)}>{this.props.name} {this.props.phone}</li>
        );
    }
}
class ContactCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            phone : ""
        }
    }
    handleChange(event){
        let nextState = {};
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }
    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name:"", 
            phone:""
        });
    }
    render(){
        return(
            <div>
                <p>
                    <input type="text" name="name" placeholder="name.." value={this.state.name} onChange={this.handleChange.bind(this)}/>
                    <input type="text" name="phone" placeholder="phone.." value={this.state.phone} onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>Insert</button>
                </p>
            </div>
        );
    }
}
class ContactRemover extends React.Component{
    handleClick(){
        this.props.onRemove();
    }
    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>Remove Selected Contact</button>
        );
    }
}
class ContactEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            phone : ""
        }
    }
    handleClick(){
        if(!this.props.isSelected){
            console.log('contact is not selected');
            return;
        }
        this.props.onEdit(this.state.name, this.state.phone);
    }
    handleChange(event){
        let nextState = {};
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            name : nextProps.contact.name,
            phone : nextProps.contact.phone
        });
    }
    render(){
        return(
            <div>
                <p>
                    <input type="text" name="name" placeholder='name..' value={this.state.name} onChange={this.handleChange.bind(this)}/>
                    <input type="text" name="phone" placeholder='phone..' value={this.state.phone} onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>Edit Contact</button>
                </p>
            </div>
        );
    }
}
export default Contact;