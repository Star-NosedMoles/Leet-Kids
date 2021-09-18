import React, { useState, useEffect } from 'react';

export default function Games(props) {

  return (
    <div>
      <p>Home</p>
      <button onClick={()=>{props.render()}}>Game 1</button>
      <button>Game 2</button>
      <button>Game 3</button>
      <button>Game 4</button>

    </div>
  )
}
