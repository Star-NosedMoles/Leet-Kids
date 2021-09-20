import React, { useState, useEffect, useRef } from 'react'
import Games from './Games.jsx'
import img from './images.png';


export default function Display() {
  const [show, setShow] = useState("home");
  const [gameName, setGameName] = useState('no game');
  const [playerLevel, setPlayerLevel] = useState(1);
  const [game2Status, setGame2Status] = useState('homeBtnBlocked')
  const [game3Status, setGame3Status] = useState('homeBtnBlocked')
  const [game4Status, setGame4Status] = useState('homeBtnBlocked')

  function unlockGame(gameRef) {
    console.log(gameRef);
    if(gameRef === 'games1') setGame2Status('homeBtn')
    else if(gameRef === 'games2') setGame3Status('homeBtn')
    else if(gameRef === 'games3') setGame4Status('homeBtn')
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
        {/* <img src={img} id="Mole"></img> */}
        <div className= "Home">
          <h1>Learning JavaScript</h1>
          <h2>with Mole</h2>
          

          <button id= "homeBtn" onClick={()=>{
              setGameName("games1");
              setShow('games');
            } }>Game 1
             {/* <img src={img} id="MoleInBtn"></img>  */}
             </button>

          <button id= {game2Status} onClick={()=>{
              setGameName("games2");
              setShow('games');
            } }>Game 2</button>

          <button id= {game3Status} onClick={()=>{
              setGameName("games3");
              setShow('games');
            } }>Game 3</button>

          <button id= {game4Status} onClick={()=>{
              setGameName("games4");
              setShow('games');
            } }>Game 4</button>

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
