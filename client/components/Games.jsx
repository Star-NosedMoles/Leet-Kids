import React, { useState, useEffect } from "react";
import axios from "axios";
import moleRight from './moleRight.png';
import star from './star.png';

//We were trying to use regex to replace the /n of the database with \n because we couldn't add \n in mongo 
//works with this example, but we couldn't make it work on the actual prompts
const example = "To start off, we will teach you how to create and assign variables! :)\n Below we have an variable called 'example', but it has not been assigned anything yet.\n \n let example;\n \n To solve this problem try and assign 'example' the value of 6.\n"
const result = example.replace(/\n/g, '\n');
console.log(result)


export default function Games(props) {
  //declaring states 
  const [prompts, setPrompts] = useState(''); //this has the current prompt based on the game number and level
  const [level, setLevel] = useState(props.currentLevel); //this is the level that is coming from the display, in this way we were able to avoid the level to reset when each game ends
  const [stars ,setStars] = useState([<img id='star' src={star}></img>]); //this is adding the stars next to the level number on the screen
  const [gameActive, setGameActive] = useState(false); //this is for the if statement on line 60. The logic of this line is for having the games blocked when you are at the home page, no
  const [answer, setAnswer] = useState(''); //to grab the answer of the current game
  const [gameName, setGameName] = useState(''); 
  const [hint, setHint] = useState(''); 
  const [tempHint, setTempHint] = useState('');

  const [timer, setTimer] = useState();
  const [tempTimer, setTempTimer] = useState();

  const [leftPosition, setLeftPosition] = useState(800);
  const [movingMoley,setMovingMoley] = useState(moleRight);

 //to check if the answer matches and update the level, also adding the star!!
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

  //grabing the game from the DB
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
          //this blocks the game and takes you back if the fetch was undefined and the game was not active
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
  
  //this needs to be dynamic! now working just for one size of screen.
  //It's the timer and the mole moving!
  useEffect(()=> {

    if(timer <= 0) props.backHome('home')
    setTimer(timer => timer - .1)
    setLeftPosition(left =>  left + 0.006)
    
  },[timer])


  //rendering the game!
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
    </div>
  );
}
