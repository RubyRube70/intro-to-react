import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 0. this is a class component, tutorial says its the child componet but idk why?
 // 1. render method is empty does that mean that it doesnt render anything and it just needs to be there?
 // 2. onClick passes a function i understand that but what purpose does {this.props.value} serve?
class Square extends React.Component {
    render() {
      return (
        <button 
            className="square" 
            onClick={()=> this.props.onClick({value:'x'})}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
//   3. this is a class component, its the parent component but idk why?
//   4. squares: Array(9).fill(null is the same as writting squares: null, 9 times?)
// left off on completing the game on the tutorial 
  class Board extends React.Component {
      constructor(props){
          super(props);
          this.state={
              squares: Array(9).fill(null,'x','o')
          }
      }
    renderSquare(i) {
      return <Square 
                value={this.state.squares[i]} 
                onClick={()=>this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: X';
  
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
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  