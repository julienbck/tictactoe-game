import React, { Component } from 'react';
import './Board.css'

function ResetButtonScore(props){
    return(
      <button className="resetButton" onClick={props.resetscore}>Reset Score</button>
    );
  }

export default ResetButtonScore;
