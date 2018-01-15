import React, { Component } from 'react';
import './Tile.css';


function Tile(props) {
  let tileClass = `tile item${props.loc}`
  let textTileClass = `item${props.loc}text`

  if (props.value !== " ") {
    tileClass += props.value === 'x' ? ' playerx' : ' playero'
    textTileClass += props.value === 'x' ? ' playerx' : ' playero'
  }



  return(
    <div
      className={tileClass}
      onClick={() => props.updateBoard(props.loc, props.turn)}>
      <p className={textTileClass}>{props.value}</p>
    </div>
  )
}

export default Tile;
