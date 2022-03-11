import React, { cloneElement, useState } from 'react'

const initialState = {
  x: 2,
  y: 2
}

const initialCount = 0;

export default function AppFunctional(props) {
  const [grid, setGrid] = useState(initialState)
  const [count, setCount] = useState(initialCount);
  
  const letter = 'B';

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
      four.innerHTML = letter;
      five.innerHTML = "";
    } else if (six.classList.contains("active")) {
      six.classList.remove("active");
      five.classList.add("active");
      five.innerHTML = letter;
      six.innerHTML = "";
    } else if (two.classList.contains("active")) {
      two.classList.remove("active");
      one.classList.add("active");
      one.innerHTML = letter;
      two.innerHTML = "";
    } else if (three.classList.contains("active")) {
      three.classList.remove("active");
      two.classList.add("active");
      two.innerHTML = letter;
      three.innerHTML = "";
    } else if (eight.classList.contains("active")) {
      eight.classList.remove("active");
      seven.classList.add("active");
      seven.innerHTML = letter;
      eight.innerHTML = "";
    } else if (nine.classList.contains("active")) {
      nine.classList.remove("active");
      eight.classList.add("active");
      eight.innerHTML = letter;
      nine.innerHTML = "";
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
      six.innerHTML = letter;
      five.innerHTML = "";
    } else if (four.classList.contains("active")) {
      four.classList.remove("active");
      five.classList.add("active");
      five.innerHTML = letter;
      four.innerHTML = "";
    } else if (one.classList.contains("active")) {
      one.classList.remove("active");
      two.classList.add("active");
      two.innerHTML = letter;
      one.innerHTML = "";
    } else if (two.classList.contains("active")) {
      two.classList.remove("active");
      three.classList.add("active");
      three.innerHTML = letter;
      two.innerHTML = "";
    } else if (seven.classList.contains("active")) {
      seven.classList.remove("active");
      eight.classList.add("active");
      eight.innerHTML = letter;
      seven.innerHTML = "";
    } else if (eight.classList.contains("active")) {
      eight.classList.remove("active");
      nine.classList.add("active");
      nine.innerHTML = letter;
      eight.innerHTML = "";
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
      two.innerHTML = letter;
      five.innerHTML = "";
    } else if (eight.classList.contains("active")) {
      eight.classList.remove("active");
      five.classList.add("active");
      five.innerHTML = letter;
      eight.innerHTML = "";
    } else if (seven.classList.contains("active")) {
      seven.classList.remove("active");
      four.classList.add("active");
      four.innerHTML = letter;
      seven.innerHTML = "";
    } else if (four.classList.contains("active")) {
      four.classList.remove("active");
      one.classList.add("active");
      one.innerHTML = letter;
      four.innerHTML = "";
    } else if (nine.classList.contains("active")) {
      nine.classList.remove("active");
      six.classList.add("active");
      six.innerHTML = letter;
      nine.innerHTML = "";
    } else if (six.classList.contains("active")) {
      six.classList.remove("active");
      three.classList.add("active");
      three.innerHTML = letter;
      six.innerHTML = "";
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
      eight.innerHTML = letter;
      five.innerHTML = "";
    } else if (two.classList.contains("active")) {
      two.classList.remove("active");
      five.classList.add("active");
      five.innerHTML = letter;
      two.innerHTML = "";
    } else if (one.classList.contains("active")) {
      one.classList.remove("active");
      four.classList.add("active");
      four.innerHTML = letter;
      one.innerHTML = "";
    } else if (four.classList.contains("active")) {
      four.classList.remove("active");
      seven.classList.add("active");
      seven.innerHTML = letter;
      four.innerHTML = "";
    } else if (three.classList.contains("active")) {
      three.classList.remove("active");
      six.classList.add("active");
      six.innerHTML = letter;
      three.innerHTML = "";
    } else if (six.classList.contains("active")) {
      six.classList.remove("active");
      nine.classList.add("active");
      nine.innerHTML = letter;
      six.innerHTML = "";
    }
  }

  const resetCount = () => {
    setCount(initialCount);
    setGrid(initialState);

    const active = document.querySelector(".active");
    active.classList.remove("active");
    active.innerHTML = "";
    const five = document.querySelector(".five");
    five.classList.add("active");
    five.innerHTML = letter;
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
        <div className="square five active">{ letter }</div>
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
