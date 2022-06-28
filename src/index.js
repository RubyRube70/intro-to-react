import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// function reset (props){
//     return(


//     )
// }
const initialState ={
    squares: Array(9).fill(null),
    
}

function Square(props){
    return(
        <button className='square'
        onClick={props.onClick}>
            {props.value}
        </button>
    );
}
  class Board extends React.Component {
      constructor(props){
          super(props);
          this.state= initialState
          console.log('triggered by board')
      };
    renderSquare(i) {
        const squares = this.state.squares;
        console.log('rendering squares')
      return <Square 
                value={squares[i]} 
                onClick={()=>this.handleClick(i)}
      />;
    }
    handleClick(i) {
        console.log('HANDLING CLICK')
        const xIsNext = this.state.xIsNext
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = xIsNext ? 'x' :'o';
        this.setState({
            squares:squares,
            xIsNext:!xIsNext,
        });
    }
    handleReset = ()=> {
        console.log('reset clicked')
        this.setState(initialState)
    }
    render() {
        console.log('winner or next player')
        let xIsNext = this.state.xIsNext;
        const winner = calculateWinner(this.state.squares);
        let status;
        let newGame;
        if (winner) {
          status = 'Winner: ' + winner;
          newGame = 
          <>
          <div className='reset'>
          <button type="button"
          onClick={this.handleReset}>
          <label htmlFor="reset">New Game</label>
          </button>
          </div>
          </>
        } else {
          status = 'Next player: ' + (xIsNext ? 'X' : 'O');
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
          <div className="reset">
              {newGame}
              </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board 
                xIsNext={true}
            />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  function calculateWinner(squares) {
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
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
