import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import Contact from './Contact';
class App extends React.Component{
    
    constructor(props){
        super(props);
        //state값의 초기화
        this.state = {
            value : Math.round(Math.random()*100)
        };
        this.updateValue = this.updateValue.bind(this);
    }
    //state값을 바꿀 메소드 정의 //props로 자식 컴포넌트에 넘길 용도
    updateValue(randomValue){
        this.setState({
            value : randomValue
        });
    }
    
    render(){
        return(
            <div>
                <Header title={this.props.headerTitle}/>
                <Content title={this.props.contentTitle} body={this.props.contentBody}/>
                <RandomNumber number={this.state.value} onUpdate={this.updateValue}/>
                <Contact/>
            </div>        

        );
    }
}
//디폴트 prop값
App.defaultProps = {
    headerTitle : 'Default Header',
    contentTitle : 'Default contentTitle',
    contentBody : 'Default contentBody'
};
//타입 validation
App.propTypes = {
    headerTitle : React.PropTypes.string.isRequired,
    contentTitle : React.PropTypes.string,
    contentBody : React.PropTypes.string
}
export default App;