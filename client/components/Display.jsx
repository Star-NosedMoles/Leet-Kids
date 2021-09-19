import React, { useState, useEffect } from 'react'
import Games from './Games.jsx'
import img from './images.png';


export default function Display() {
  const [show, setShow] = useState("home");
  const [gameName, setGameName] = useState('no game')

  function changeState(){
    setShow("games");
  }

  function changeToHome(){
    setShow("home");
  }

  useEffect(() => {
    console.log('show State changed')
  },[show])

  playingWithLevel ((level)=>{
    console.log(level);
  })

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
          } }>Game 1 <img src={img} id="MoleInBtn"></img> </button>          

        <button id= "homeBtnBlocked" onClick={()=>{
            setGameName("games2");
            setShow('games');
          } }>Game 2</button>

        <button id= "homeBtnBlocked" onClick={()=>{
            setGameName("games3");
            setShow('games');
          } }>Game 3</button>

        <button id= "homeBtnBlocked" onClick={()=>{
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
          <Games gameNumber={gameName} />
        </div>
      )
  }
}


// constructor(props) {
//   super(props);
//   this.state= {};
//   this.showGames = this.showGames.bind(this);
// }

// componentDidMount() {
//     this.setState({
//         show:'home'
//     })
// }
// showGames = () => {
//     this.setState({
//         show:'games'
//     })
// }
