import React, { useState, useEffect } from 'react'
import Games from './Games.jsx'
import Home from './Home.jsx'

export default function Display(props) {
  const [show, setShow] = useState("home");

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
          <Home render={changeState}/>
        </div>
      )
  }
  else{
    return (
        <div>
          <button onClick={changeToHome}>Home</button>
          <Games/>
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
