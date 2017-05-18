import React from 'react';
class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        );
    }
}
/*prop 타입 지정 @deprecated prop-types 모듈 사용 권장
Content.propTypes = {
    title : React.PropTypes.string,
    body : React.PropTypes.string.isRequired
};*/
export default Content;