import React, { Component } from 'react';
import './Board.css';
import Logo from './logo.gif'
import Announcement from './Announcement.js';
import ResetButton from './ResetButton.js';
import Tile from './Tile.js';
import ResetButtonScore from './ResetButtonScore.js';


class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
        gameBoard:[
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: 'o',
      winner: null,
      counterplayer: {x: 0, o: 0}
    }
  }

  count(winner) {
    let counter = this.state.counterplayer;
    counter[winner] = counter[winner] + 1;

    return counter;
  }

  updateBoard(loc, player){
    if(this.state.gameBoard[loc] === 'x' || this.state.gameBoard[loc] === 'o' || this.state.winner){
      //invalid move
      return;
    }
    let currentGameBoard = this.state.gameBoard;
    currentGameBoard.splice(loc, 1, this.state.turn);
    this.setState({
      gameBoard: currentGameBoard
    });
    let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
    if(topRow.match(/xxx|ooo/)){
      this.setState({
        winner: this.state.turn,
        counterplayer: this.count(this.state.turn)
      });
      return;
    }
    let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
    if(middleRow.match(/xxx|ooo/)){
      this.setState({
        winner: this.state.turn,
        counterplayer: this.count(this.state.turn)
      });
      return;
    }
    let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
    if(bottomRow.match(/xxx|ooo/)){
      this.setState({
        winner: this.state.turn,
        counterplayer: this.count(this.state.turn)
      });
      return;
    }
    let leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
    if(leftCol.match(/xxx|ooo/)){
      this.setState({
        winner: this.state.turn,
        counterplayer: this.count(this.state.turn)
      });
      return;
    }
    let middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
    if(middleCol.match(/xxx|ooo/)){
      this.setState({
        winner: this.state.turn,
        counterplayer: this.count(this.state.turn)
      });
      return;
    }
    let rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
    if(rightCol.match(/xxx|ooo/)){
      this.setState({
        winner: this.state.turn,
        counterplayer: this.count(this.state.turn)
      });
      return;
    }
    let leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
    if(leftDiag.match(/xxx|ooo/)){
      this.setState({
        winner: this.state.turn,
        counterplayer: this.count(this.state.turn)
      });
      return;
    }
    let rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
    if(rightDiag.match(/xxx|ooo/)){
      this.setState({
        winner: this.state.turn,
        counterplayer: this.count(this.state.turn)
      });
      return;
    }
    let moves = this.state.gameBoard.join('').replace(/ /g, '');
    if(moves.length === 9) {
      this.setState({
        winner: 'd'
      });
    }
    this.setState({
      turn: (this.state.turn === 'o') ? 'x':'o'
    });
  }
//   counterVictory(){
//     if(this.state.winner === "x"){
//       this.setState({
//         counterplayerx: (this.state.counterplayerx + 1)
//       })
//     } else if (this.state.winner === "o"){
//       this.setState({
//         counterplayero: (this.state.counterplayero + 1)
//     })
//   }
// }
  resetBoard(){
    this.setState({
      gameBoard:[
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' '
    ],
    turn: 'x',
    winner: null
  });
  }
  resetScores() {
    this.setState({
      counterplayer: {x: 0, o: 0}
    })
  }
  render() {
    return(
    <div className="container">
      <div className="menu">
      <img src={Logo} className="Logo"></img>
      <Announcement
        winner={this.state.winner}
        turn={this.state.turn}
        />
      </div>
      <button className="ButtonToPlayerIs"> Is to Player {this.state.turn}</button>
      <div className="contentBoard">
      {this.state.gameBoard.map(function(value, i){
        return(
          <Tile
          key={i}
          loc={i}
          value={value}
          updateBoard={this.updateBoard.bind(this)}
          turn={this.state.turn}
          />
        )}.bind(this))}
        </div>
        <div className="InfoZone">
        <ResetButton reset={this.resetBoard.bind(this)}/>
        <ResetButtonScore resetscore={this.resetScores.bind(this)}/>
        <button className="resetButton3"> Victory To Player X : {this.state.counterplayer.x}</button>
        <button className="resetButton3"> Victory To Player O : {this.state.counterplayer.o}</button>
        </div>
    </div>
  )}
}

export default Board;
