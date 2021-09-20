import React, { useState, useEffect, useRef } from 'react'
import Games from './Games.jsx'
import imgMole from './moleLeft.png';
import padLock from './padLock.png';


export default function Display() {
  const [show, setShow] = useState("home");
  const [gameName, setGameName] = useState('no game');
  const [playerLevel, setPlayerLevel] = useState(1);
  const [game2Status, setGame2Status] = useState('homeBtnBlocked')
  const [game3Status, setGame3Status] = useState('homeBtnBlocked')
  const [game4Status, setGame4Status] = useState('homeBtnBlocked')
  const [locked2Status, setLocked2Status] = useState(<img src={padLock} id="MoleInBtn"></img>)
  const [locked3Status, setLocked3Status] = useState(<img src={padLock} id="MoleInBtn"></img>)
  const [locked4Status, setLocked4Status] = useState(<img src={padLock} id="MoleInBtn"></img>)
  
  function unlockGame(gameRef) {
    console.log(gameRef);
    if(gameRef === 'games1'){
      setGame2Status('homeBtn')
      setLocked2Status(<img src={imgMole} id="MoleInBtn"></img>)
    } 
    else if(gameRef === 'games2'){
      setGame3Status('homeBtn')
      setLocked3Status(<img src={imgMole} id="MoleInBtn"></img>)
    } 
    else if(gameRef === 'games3'){
      setGame4Status('homeBtn')
      setLocked4Status(<img src={imgMole} id="MoleInBtn"></img>)
    } 
    console.log(game2Status);
  }

  function changeState(){
    setShow("games");
  }

  function changeToHome(){
    setShow("home");
  }

  useEffect(() => {
    console.log('show State changed')
  },[show])

  if(show==="home"){
    return (
      <div>
       
        <div className= "Home">
          <h1>Learning JavaScript</h1>
          <h2>with Mole</h2>
           <img src={imgMole} id="Mole"></img>

          <button id= "homeBtn" onClick={()=>{
              setGameName("games1");
              setShow('games');  
            }}>Game 1
            <img src={imgMole} id="MoleInBtn"></img>
             </button>

          <button id= {game2Status} onClick={()=>{
              setGameName("games2");
              setShow('games');
            } }>Game 2
            {locked2Status}
            </button>

          <button id= {game3Status} onClick={()=>{
              setGameName("games3");
              setShow('games');
            } }>Game 3
            {locked3Status}
            </button>

          <button id= {game4Status} onClick={()=>{
              setGameName("games4");
              setShow('games');
            } }>Game 4
            {locked4Status}
            </button>

        </div>
      </div>
        )
        }
    else{
    return (
        <div>
          <button onClick={changeToHome} id="backHome">Home page</button>
          <Games gameNumber={gameName} currentLevel={playerLevel} sendLevel={setPlayerLevel} backHome = {setShow} unlockGame={unlockGame}/>
        </div>
      )
  }
}
