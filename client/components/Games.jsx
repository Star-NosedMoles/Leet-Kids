import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Games(props) {
  //the state will be given by the button that was pressed
  // const [level,setLevel] = 
  // const [promptType, setPromptType] = useState('game1');
  const [prompts, setPrompts] = useState([]);
  // const [prompts, setPromts] = useState([]);
  useEffect(() => {
    // axios.get(`api/${props.gameNumber}`)
      axios.get('/api')
      .then(res => {
        console.log(res.data)

        const cleanResult = res.data.map((el)=>{
          return el.prompt;
        })
        // console.log(cleanResult);
        setPrompts(cleanResult);
        // console.log(prompts)
      })
    
      

  },[setPrompts])
  
  return (
    <div className= "gamePage">
      <h3>{props.gameNumber}</h3>
      <p id="prompts">{prompts}</p>
      <input placeholder = "your answer!"></input>   
      {/* <p>{Home.gamename}</p>  */}
      {/* <button onClick={() => setPromptType('game1')}>Get Prompt</button> */}
      <button id="submit">submit</button>
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