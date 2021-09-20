import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Games(props) {
  //the state will be given by the button that was pressed
  // const [level,setLevel] =
  // const [promptType, setPromptType] = useState('game1');
  const [prompts, setPrompts] = useState([]);
  const [level, setLevel] = useState(props.playerLevel);
  const [victory, setVictory] = useState('');
  
  function levelUp(value){
    
    // console.log(prompts);
    // console.log(value);
    if(value === prompts[level - 1]){
      setLevel(prevLevel => prevLevel + 1);
      props.levelFunction(level);
      document.getElementById('userAnswer').value = ''
    } else {
      document.getElementById('userAnswer').value = ''
    }
  }
  // function winCondition()  {
  //   setVictory('Congratulations!')
  // }
  
  //for now, we want to increment our state Level by one for every time Submit is clicked
  //we also want the appropriate prompt to appear on the page depending on the current state of the players level
  //component did mount
  //component did update
  //component did unmount
  useEffect(() => {
      // axios.post(`/api/${props.gameNumber}`)
      
      axios.get(`/api/${props.gameNumber}`) // "games1"
        // axios.get(`/api`)
        .then((res) => {
          const cleanResult = res.data.map((el) => {
            if (el.level === level) {
              return el.prompt;
            }
          });
          setPrompts(cleanResult);
          console.log(prompts)
          // if(prompts[level] === undefined) setPrompts('Game Locked!')
          //setPrompts(cleanResult);
          return 'Game Locked!';
        });
        if (prompts[prompts.length - 1] !== undefined) {setVictory('Victory')}
  }, [level])

  // useEffect(() => {
    
  // },[level])
  return (
    <div className="gamePage">
      <h3>{props.gameNumber}</h3>
      <h3>{level}</h3>
      <h3>{victory}</h3>
      <p id="prompts">{prompts}</p>
      <input id = 'userAnswer' type = 'text' placeholder = "your answer!"></input>
      <button id="submit" onClick={() => levelUp(document.getElementById('userAnswer').value)}>submit</button>
    </div>
  );
}

// function Test(props){
//   props.gameNumber;
//    return;
//   //  (
// //     <div>HI</div>
// //   )
// }

// export default {Games, Test}
