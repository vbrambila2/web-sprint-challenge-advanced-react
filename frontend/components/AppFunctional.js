import React, { useState } from 'react'

const initialState = {
  x: 2,
  y: 2
}

const initialCount = 0;

export default function AppFunctional(props) {
  const [grid, setGrid] = useState(initialState)
  const [count, setCount] = useState(initialCount);
  console.log(grid, "grid");

  const leftBtn = () => {
    const increase = count + 1;
    setCount(increase);
    const move = grid.x - 1;
    setGrid({ x: move, y: grid.y });
  }
  const rightBtn = () => {
    const increase = count + 1;
    setCount(increase);
    const move = grid.x + 1;
    setGrid({ x: move, y: grid.y });
  }
  const upBtn = () => {
    const increase = count + 1;
    setCount(increase);
    const move = grid.y - 1;
    setGrid({ x: grid.x, y: move });
  }
  const downBtn = () => {
    const increase = count + 1;
    setCount(increase);
    const move = grid.y + 1;
    setGrid({ x: grid.x, y: move });
  }

  const resetCount = () => {
    setCount(initialCount);
    setGrid(initialState);
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({ grid.x }, { grid.y })</h3>
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
        <button onClick={leftBtn} id="left">LEFT</button>
        <button onClick={upBtn} id="up">UP</button>
        <button onClick={rightBtn} id="right">RIGHT</button>
        <button onClick={downBtn} id="down">DOWN</button>
        <button onClick={resetCount} id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
