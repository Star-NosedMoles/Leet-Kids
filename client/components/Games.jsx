import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Games(props) {
  //declaring states 
  const [prompts, setPrompts] = useState('');
  const [level, setLevel] = useState(props.currentLevel);
  const [gameActive, setGameActive] = useState(false);
  
  function levelUp(value){
    if(value === prompts){
      setLevel(prevLevel => prevLevel + 1);
      document.getElementById('userAnswer').value = ''
    } else {
      document.getElementById('userAnswer').value = ''
    }
  }
  // useEffect(() => {
  //   props.playerLevel = level
  // },[victory])

  //for now, we want to increment our state Level by one for every time Submit is clicked
  //we also want the appropriate prompt to appear on the page depending on the current state of the players level
  //component did mount
  //component did update
  //component did unmount
  useEffect(() => {
      // axios.post(`/api/${props.gameNumber}`)
      axios.get(`/api/${props.gameNumber}`) // "games1"
        // axios.get(`/api`)
        // .then((res)=> console.log(res.data))
        .then((res) => {
          let cleanResult;
          res.data.forEach((el) => {
            if (el.level === level) {
              cleanResult= el.prompt;
            }
          })
          if(cleanResult === undefined && gameActive == true){
            //create a better victory page
            setPrompts('Victory!');
            props.sendLevel(level);
            props.unlockGame(props.gameNumber)
            setTimeout(() => props.backHome('home'),2500)
          }
          else if(cleanResult===undefined && gameActive === false) {
            props.backHome('home');
          }
          else{
            setPrompts(cleanResult);
            setGameActive(true);
          } 
        })
  }, [level])

  
  return (
    <div className="gamePage">
      <h3>{props.gameNumber}</h3>
      <h3>{level}</h3>
      <p id="prompts">{prompts}</p>
      <input id = 'userAnswer' type = 'text' placeholder = "your answer!"></input>
      <button id="submit" onClick={() => levelUp(document.getElementById('userAnswer').value)}>submit</button>
    </div>
  );
}
