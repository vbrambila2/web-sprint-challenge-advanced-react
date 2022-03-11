import React, { useState } from 'react'

const initialState = []

const initialCount = 0;

export default function AppFunctional(props) {
  const [grid, setGrid] = useState(initialState)
  const [count, setCount] = useState(initialCount);

  const increaseCount = () => {
    const increase = count + 1;
    setCount(increase);
  }

  const resetCount = () => {
    setCount(initialCount)
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved { count } times</h3>
      </div>
      <div id="grid">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square active">B</div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button onClick={increaseCount} id="left">LEFT</button>
        <button onClick={increaseCount} id="up">UP</button>
        <button onClick={increaseCount} id="right">RIGHT</button>
        <button onClick={increaseCount} id="down">DOWN</button>
        <button onClick={resetCount} id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
