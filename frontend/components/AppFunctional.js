import React, { cloneElement, useState } from 'react'

const initialState = {
  x: 2,
  y: 2
}

const initialCount = 0;

export default function AppFunctional(props) {
  const [grid, setGrid] = useState(initialState)
  const [count, setCount] = useState(initialCount);
  const [letter, setLetter] = useState('B')

  const leftBtn = () => {
    const increase = count + 1;
    setCount(increase);
    const move = grid.x - 1;
    setGrid({ x: move, y: grid.y });

    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");
    const six = document.querySelector(".six");
    const seven = document.querySelector(".seven");
    const eight = document.querySelector(".eight");
    const nine = document.querySelector(".nine");

    if (five.classList.contains("active")) {
      five.classList.remove("active");
      four.classList.add("active");
    } else if (six.classList.contains("active")) {
      six.classList.remove("active");
      five.classList.add("active");
    } else if (two.classList.contains("active")) {
      two.classList.remove("active");
      one.classList.add("active");
    } else if (three.classList.contains("active")) {
      three.classList.remove("active");
      two.classList.add("active");
    } else if (eight.classList.contains("active")) {
      eight.classList.remove("active");
      seven.classList.add("active");
    } else if (nine.classList.contains("active")) {
      nine.classList.remove("active");
      eight.classList.add("active");
    }
  }

  const rightBtn = () => {
    const increase = count + 1;
    setCount(increase);
    const move = grid.x + 1;
    setGrid({ x: move, y: grid.y });

    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");
    const six = document.querySelector(".six");
    const seven = document.querySelector(".seven");
    const eight = document.querySelector(".eight");
    const nine = document.querySelector(".nine");

    if (five.classList.contains("active")) {
      five.classList.remove("active");
      six.classList.add("active");
    } else if (four.classList.contains("active")) {
      four.classList.remove("active");
      five.classList.add("active");
    } else if (one.classList.contains("active")) {
      one.classList.remove("active");
      two.classList.add("active");
    } else if (two.classList.contains("active")) {
      two.classList.remove("active");
      three.classList.add("active");
    } else if (seven.classList.contains("active")) {
      seven.classList.remove("active");
      eight.classList.add("active");
    } else if (eight.classList.contains("active")) {
      eight.classList.remove("active");
      nine.classList.add("active");
    }
  }

  const upBtn = () => {
    const increase = count + 1;
    setCount(increase);
    const move = grid.y - 1;
    setGrid({ x: grid.x, y: move });

    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");
    const six = document.querySelector(".six");
    const seven = document.querySelector(".seven");
    const eight = document.querySelector(".eight");
    const nine = document.querySelector(".nine");

    if (five.classList.contains("active")) {
      five.classList.remove("active");
      two.classList.add("active");
    } else if (eight.classList.contains("active")) {
      eight.classList.remove("active");
      five.classList.add("active");
    } else if (seven.classList.contains("active")) {
      seven.classList.remove("active");
      four.classList.add("active");
    } else if (four.classList.contains("active")) {
      four.classList.remove("active");
      one.classList.add("active");
    } else if (nine.classList.contains("active")) {
      nine.classList.remove("active");
      six.classList.add("active");
    } else if (six.classList.contains("active")) {
      six.classList.remove("active");
      three.classList.add("active");
    }
  }

  const downBtn = () => {
    const increase = count + 1;
    setCount(increase);
    const move = grid.y + 1;
    setGrid({ x: grid.x, y: move });

    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");
    const six = document.querySelector(".six");
    const seven = document.querySelector(".seven");
    const eight = document.querySelector(".eight");
    const nine = document.querySelector(".nine");

    if (five.classList.contains("active")) {
      five.classList.remove("active");
      eight.classList.add("active");
    } else if (two.classList.contains("active")) {
      two.classList.remove("active");
      five.classList.add("active");
    } else if (one.classList.contains("active")) {
      one.classList.remove("active");
      four.classList.add("active");
    } else if (four.classList.contains("active")) {
      four.classList.remove("active");
      seven.classList.add("active");
    } else if (three.classList.contains("active")) {
      three.classList.remove("active");
      six.classList.add("active");
    } else if (six.classList.contains("active")) {
      six.classList.remove("active");
      nine.classList.add("active");
    }
  }

  const resetCount = () => {
    setCount(initialCount);
    setGrid(initialState);

    document.querySelector(".active").classList.remove("active");
    document.querySelector(".five").classList.add("active");
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({ grid.x }, { grid.y })</h3>
        <h3 id="steps">You moved { count } times</h3>
      </div>
      <div id="grid">
        <div className="square one"></div>
        <div className="square two"></div>
        <div className="square three"></div>
        <div className="square four"></div>
        <div className="square five active"></div>
        <div className="square six"></div>
        <div className="square seven"></div>
        <div className="square eight"></div>
        <div className="square nine"></div>
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
