import React, { useState, useEffect } from 'react';
import img from './images.png';

export default function Games(props) {

  return (
    <div className= "Home">
      <h1>Learning JavaScript</h1>
      <img src= {img} ></img>
      <h2>with Mole</h2>
      
      <button id= "homeBtn" onClick={()=>{props.render()}}>Game 1</button>
      <button id= "homeBtn" onClick={()=>{props.render()}}>Game 2</button>
      <button id= "homeBtn" onClick={()=>{props.render()}}>Game 3</button>
      <button id= "homeBtn" onClick={()=>{props.render()}}>Game 4</button>
    </div>
  )
}
