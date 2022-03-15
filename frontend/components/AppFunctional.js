import React, { useEffect, useState } from 'react';
import axios from 'axios';

const initialState = {
  "x": 2,
  "y": 2,
  "steps": 0,
  "email": ""
}

const initialMessage = ""

export default function AppFunctional(props) {
  const [grid, setGrid] = useState(initialState)
  const [message, setMessage] = useState(initialMessage)

  const url = 'http://localhost:9000/api/result'; 

  // useEffect(() => {
  //   postInfo(grid);
  // }, [grid]);

  const letter = 'B';

  const leftBtn = () => {
    const increase = grid.steps + 1;
    const move = grid.x - 1;
    if(move >= 1) {
      setGrid({ x: move, y: grid.y, steps: increase, email: grid.email});
      setMessage(initialMessage);
      
      console.log(grid, "within");
    } else if(move < 1) {
      setGrid({ x: 1, y: grid.y, steps: grid.steps, email: grid.email });
      setMessage("You can't go left");
      console.log(grid, "outside");
    }

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
    const increase = grid.steps + 1;
    const move = grid.x + 1;
    if(move <= 3) {
      setGrid({ x: move, y: grid.y, steps: increase, email: grid.email });
      setMessage(initialMessage);
    } else if(move > 3) {
      setGrid({ x: 3, y: grid.y, steps: grid.steps, email: grid.email });
      setMessage("You can't go right");
    }

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
    const increase = grid.steps + 1;
    const move = grid.y - 1;
    if(move >= 1) {
      setGrid({ x: grid.x, y: move, steps: increase, email: grid.email });
      setMessage(initialMessage);
    } else if(move < 1) {
      setGrid({ x: grid.x, y: 1, steps: grid.steps, email: grid.email });
      setMessage("You can't go up");
    }

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
    const increase = grid.steps + 1;
    const move = grid.y + 1;
    if(move <= 3) {
      setGrid({ x: grid.x, y: move, steps: increase, email: grid.email });
      setMessage(initialMessage);
    } else if(move > 3) {
      setGrid({ x: grid.x, y: 3, steps: grid.steps, email: grid.email });
      setMessage("You can't go down");
    }
    

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
    setGrid(initialState);
    setMessage(initialMessage);

    const active = document.querySelector(".active");
    active.classList.remove("active");
    active.innerHTML = "";
    const five = document.querySelector(".five");
    five.classList.add("active");
    five.innerHTML = letter;
  }

  console.log(grid, "grid");

  const postInfo = (grid) => {
    axios.post(url, {...grid})
      .then(res => {
        console.log(res, "res in postInfo");
        setMessage(res.data.message);
      })
      .catch(err => console.error(err))
  }

  const postEmail = (newEmail) => {
    axios.post(url, newEmail)
      .then(res => {
        console.log(res, "email in postEmail");
        setMessage(res.data.message);
      })
      .catch(err => console.error(err))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newEmail = {
      x: grid.x, 
      y: grid.y, 
      steps: grid.steps, 
      email: grid.email
    }
    postEmail(newEmail);
  }

  const onChange = (e) => {
    e.preventDefault()
    setGrid({ x: grid.x, y: grid.y, steps: grid.steps, email: e.target.value })
    console.log(grid, "form");
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({ grid.x }, { grid.y })</h3>
        <h3 id="steps">You moved { grid.steps } times</h3>
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
        <h3 id="message">{ message }</h3>
      </div>
      <div id="keypad">
        <button onClick={leftBtn} id="left">LEFT</button>
        <button onClick={upBtn} id="up">UP</button>
        <button onClick={rightBtn} id="right">RIGHT</button>
        <button onClick={downBtn} id="down">DOWN</button>
        <button onClick={resetCount} id="reset">reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input 
          id="email" 
          type="email" 
          placeholder="type email"
          name="email"
          value={grid.email}
          onChange={onChange}
          >
        </input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
