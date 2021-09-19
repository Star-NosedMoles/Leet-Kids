import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Games(props) {
  //the state will be given by the button that was pressed
  // const [level,setLevel] = 
  // const [promptType, setPromptType] = useState('game1');
  const [prompts, setPrompts] = useState([]);
  const [level, setLevel] = useState(1);
  
  function levelUp(value){
    // console.log(prompts);
    // console.log(value);
    if(value === prompts[level - 1]){
      setLevel(prevLevel => prevLevel + 1);
    }
  }
  //for now, we want to increment our state Level by one for every time Submit is clicked
    //we also want the appropriate prompt to appear on the page depending on the current state of the players level 
  useEffect(() => {
    // axios.get(`api/${props.gameNumber}`)
      axios.get(`/api`)
      .then(res => {
        const cleanResult = res.data.map((el)=>{
          if(el.level === level){
            return el.prompt;
          }
        })
        // console.log(cleanResult);
        setPrompts(cleanResult);
        // console.log(prompts)
      })
  },[prompts,level])
  
  return (
    <div className= "gamePage">
      <h3>{props.gameNumber}</h3>
      <h3>{level}</h3>
      <p id="prompts">{prompts}</p>
      <input id = 'userAnswer' type = 'text' placeholder = "your answer!"></input>
      <button id="submit" onClick={() => levelUp(document.getElementById('userAnswer').value)}>submit</button>   
    </div>
  )
}

// function Test(props){
//   props.gameNumber;
//    return; 
//   //  (
// //     <div>HI</div>
// //   )
// }

// export default {Games, Test}