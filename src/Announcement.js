import React, { Component } from 'react';
import './Announcement.css';


function Announcement(props)
{

  let playerWinner = props.winner ? 'visible' : 'hidden';
  let popupWinner = props.winner ? 'overlayVisible' : 'overlay';
  let WhoIsPlayer = props.turn === 'x' ? 'Player X' : 'Player O';
  if(props.winner === 'd'){
    return (
      <div id="popup1" className={popupWinner}>
      	<div className="popup">
      		<a className="close" href="#">&times;</a>
      		<div className="content">
      			<h2> We have no winner </h2>
      		</div>
      	</div>
      </div>
    )
  } else if (props.winner === 'x'){
    return (
    <div id="popup1" className={popupWinner}>
      <div className="popup">
        <a className="close" href="#">&times;</a>
        <div className="content">
        <h2> Winner is player X with {props.numberOfClickToWinX} movements
        </h2>
        </div>
      </div>
    </div>
    )
  } else{
    return (
      <div id="popup1" className={popupWinner}>
        <div className="popup">
          <a className="close" href="#">&times;</a>
          <div className="content">
          <h2> Winner is player O with {props.numberOfClickToWinO} movements
          </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Announcement;
