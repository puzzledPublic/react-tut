import React from 'react';
import './Square.css';
//함수 컴포넌트. (render 함수 하나만 갖고(여기서 return문이 render 함수에서 쓰일 내용), 상태를 갖지 않는 컴포넌트)
const Square = (props) => {
      return (
        <button 
          className="square" 
          onClick={() => props.onClick()}  //button 클릭시 Board에서 props로 전달한 함수를 실행한다.
        >
          {props.value}
        </button> //Board에서 props로 전달한 값을 출력한다.
      );
}

export default Square;