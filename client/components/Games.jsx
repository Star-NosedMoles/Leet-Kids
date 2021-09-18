import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Games() {
  //the state will be given by the button that was pressed
  const [promptType, setPromptType] = useState('game1');
  const [prompts, setPrompts] = useState([]);
  // const [prompts, setPromts] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log(res)
        console.log(res.data)
        setPrompts(res.data)
      })
  },[promptType])
  return (
    <div>
      <p>Games</p>
      <p>{JSON.stringify(prompts)}</p>
      <input placeholder= "your answer!"></input>
      
      <button onClick={() => setPromptType('game1')}>Get Prompt</button>
      <button onClick>submit</button>
    </div>
  )
}
