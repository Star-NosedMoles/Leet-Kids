import React, { useState, useEffect } from "react";
import axios from "axios";
import moleRight from './moleRight.png';
import star from './star.png';

const example = "To start off, we will teach you how to create and assign variables! :)\n Below we have an variable called 'example', but it has not been assigned anything yet.\n \n let example;\n \n To solve this problem try and assign 'example' the value of 6.\n"
const result = example.replace(/\n/g, '\n');
console.log(result)




export default function Games(props) {
  //declaring states 
  const [prompts, setPrompts] = useState('');
  const [level, setLevel] = useState(props.currentLevel);
  const [stars ,setStars] = useState([<img id='star' src={star}></img>]);
  const [gameActive, setGameActive] = useState(false);
  const [answer, setAnswer] = useState('');
  const [gameName, setGameName] = useState('');
  const [hint, setHint] = useState('');
  const [tempHint, setTempHint] = useState('');
  const [timer, setTimer] = useState();
  const [tempTimer, setTempTimer] = useState();
  // const [time,setTime] = useState();
  const [leftPosition, setLeftPosition] = useState(800);
  const [movingMoley,setMovingMoley] = useState(moleRight)
  function levelUp(value){
    if(value === answer){
      setLevel(prevLevel => prevLevel + 1);
      setLeftPosition(800);
      setStars(()=> stars.concat([<img id="star" src={star}></img>]));
      document.getElementById('userAnswer').value = ''
    } else if(level === 16){
      props.backHome('finished')
    }
    else {
      document.getElementById('userAnswer').value = ''
    }
  }
  useEffect(() => {
      setHint('');
      setTimer(timer);
      axios.get(`/api/${props.gameNumber}`) 
        .then((res) => {
          let cleanResult;
          let cleanAnswer;
          let cleanHint;
          let cleanGameName;
          let cleanTimer;
          res.data.forEach((el) => {
            if (el.level === level) {
              cleanResult= el.prompt;
              cleanAnswer= el.answer;
              cleanHint = el.hint;
              cleanGameName = el.name;
              cleanTimer = el.maxTimer;
            }
          })
          if(cleanResult === undefined && gameActive == true){
            //create a better victory page
            // setPrompts('Victory!');
            props.sendLevel(level);
            props.unlockGame(props.gameNumber)
            props.backHome('victory')
            setTimeout(() => props.backHome('home'),2000)
          }
          else if(cleanResult===undefined && gameActive === false) {
            props.backHome('home');
          }
          else{
            setTempTimer(cleanTimer)
            setTimer(cleanTimer);
            setAnswer(cleanAnswer);
            setPrompts(cleanResult);
            setTempHint(cleanHint);
            setGameName(cleanGameName);
            setGameActive(true);
          } 
        })
  }, [level])
  
  useEffect(()=> {
    // console.log(prompts)
    // console.log(tempTimer)
    // const newTime = 90/tempTimer
    // console.log(newTime)
    if(timer <= 0) props.backHome('home')
    setTimer(timer => timer - .1)
    setLeftPosition(left =>  left + 0.006)
    // setLeftPosition(prevPosition => )
  },[timer])



  // useEffect(() => {
  //   if (document.getElementById('movingMoley').style.left === '1000px') {
  //     document.getElementById("movingMoley").style.left = '100px'
  //   }
  // },[leftPosition])

  return (
    <div>
      <div id='timerMole'>
        <img id='movingMoley' src={movingMoley}  style={{left:`${leftPosition}px`}}></img>
        <h1 id='timer'>{Math.floor(timer/1000)}</h1>
      </div>
      
    <div className="gamePage">
      <h3>{gameName}</h3>

      <p id="level">{`Level ${level}`}  {stars}</p>
      {/* <p>{stars}</p> */}
      <p id="prompts">{prompts}</p>

      
      <input id = "userAnswer" type = "text" placeholder = "your answer!"></input>
      
      <div className="buttons">
        <button id="submit" onClick={() => levelUp(document.getElementById('userAnswer').value)}>submit</button>
        <button id="hint" onClick={()=> {setHint(tempHint)}}>Hint</button>
      </div>
      <div className="hintDiv">
        <h3 id="hintH3">{hint}</h3>
      </div>
      
      
    </div>

      {/* style={{marginLeft:leftPosition}} */}
    </div>
  );
}
