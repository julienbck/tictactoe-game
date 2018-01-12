import React, { Component } from 'react';
import './Announcement.css';

function Announcement(props)
{
  let playerWinner = props.winner ? 'visible' : 'hidden';
  let WhoIsPlayer = props.turn === 'x' ? 'Player X' : 'Player O';
  if(props.winner === 'd'){
    return (
    <div className="topBar">
    <div className= {playerWinner}>
    <h2> We have no winner </h2>
    </div>
    </div>
    )
  } else {
    return (
    <div className="topBar">
    <div className= {playerWinner}>
    <h2> Winner is {WhoIsPlayer} </h2>
    </div>
    </div>
    )
  }
}

export default Announcement;
