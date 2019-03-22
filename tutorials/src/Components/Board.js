import React from 'react';
import Square from './Square';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
      super(props);
      //Square들의 상태. (게임 결과를 판정하기 쉽도록 각각의 Square가 자신의 상태를 갖지 않게하고 상위 컴포넌트인 Board에 둔다.)
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,  //'X', 'O'를 번갈아 두기 위한 flag
      };
    }

    //Square에서 호출하기 위한 메소드(Board의 상태를 바꾼다.)
    handleClick(i) {
      const squares = this.state.squares.slice(); //상태 불변성을 위한 복사본 생성.
      if(this.calculateWinner(squares) || squares[i]) { //승부가 결정 났다면 바로 리턴.
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    renderSquare(i) {
        return <Square 
                  value={this.state.squares[i]}
                  onClick={() => this.handleClick(i)}    
                />;
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);  //render 할 때마다 이긴 사람이 있는지, 누가 다음 차례인지 확인하여 표시 변경. 
        let status;
        if(winner) {
          status = `Winner: ${winner}`;
        }else {
          status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }
        return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          );
    }

    //누가 이겼는지 검사하는 함수
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
}
export default Board;