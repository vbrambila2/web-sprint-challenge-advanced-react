import React from 'react';
import axios from 'axios';

const initialState = {
  grid: {
    "x": 2,
  "y": 2,
  "steps": 0,
  "email": ""
  },
  message: ""
}

const url = 'http://localhost:9000/api/result';

const letter = 'B';

export default class AppClass extends React.Component {
  constructor() {
    super()
    this.state = initialState
    console.log(this.state.grid, "state");
  }

  leftBtn = () => {
    const { grid } = this.state;
    const increase = grid.steps + 1;
    const move = grid.x - 1;
    if(move >= 1) {
      this.setState({ grid: { x: move, y: grid.y, steps: increase, email: grid.email }, message: "" });      
    } else if(move < 1) {
      this.setState({ grid: { x: 1, y: grid.y, steps: grid.steps, email: grid.email }, message: "You can't go left" });
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

  rightBtn = () => {
    const { grid } = this.state;
    const increase = grid.steps + 1;
    const move = grid.x + 1;
    if(move <= 3) {
      this.setState({ grid: { x: move, y: grid.y, steps: increase, email: grid.email }, message: "" });
    } else if(move > 3) {
      this.setState({ grid: { x: 3, y: grid.y, steps: grid.steps, email: grid.email }, message: "You can't go right" });
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

  upBtn = () => {
    const { grid } = this.state;
    const increase = grid.steps + 1;
    const move = grid.y - 1;
    if(move >= 1) {
      this.setState({ grid: { x: grid.x, y: move, steps: increase, email: grid.email }, message: "" });
    } else if(move < 1) {
      this.setState({ grid: { x: grid.x, y: 1, steps: grid.steps, email: grid.email }, message: "You can't go up" });
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

  downBtn = () => {
    const { grid } = this.state;
    const increase = grid.steps + 1;
    const move = grid.y + 1;
    if(move <= 3) {
      this.setState({ grid: { x: grid.x, y: move, steps: increase, email: grid.email }, message: "" });
    } else if(move > 3) {
      this.setState({ grid: { x: grid.x, y: 3, steps: grid.steps, email: grid.email }, message: "You can't go down" });
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

  resetCount = () => {
    this.setState(initialState);

    const active = document.querySelector(".active");
    active.classList.remove("active");
    active.innerHTML = "";
    const five = document.querySelector(".five");
    five.classList.add("active");
    five.innerHTML = letter;
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { grid } = this.state;

    const postEmail = (newEmail) => {
      axios.post(url, newEmail)
        .then(res => {
          this.setState({ grid: { x: grid.x, y: grid.y, steps: grid.steps, email: "" }, message: res.data.message });
        })
        .catch(err => console.error(err))
    }

    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if(grid.email === "foo@bar.baz") {
      this.setState({grid: {x: grid.x, y: grid.y, steps: grid.steps, email: ""}, message: "foo@bar.baz failure #71"});
    } else if (grid.email === "") {
      this.setState({grid: {x: grid.x, y: grid.y, steps: grid.steps, email: ""}, message: "Ouch: email is required"});
    } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      this.setState({grid: {x: grid.x, y: grid.y, steps: grid.steps, email: ""}, message: "Ouch: email must be a valid email"});
    } else {
      postEmail(grid);
      console.log(grid, "state for class");
      e.target.value = "";
    }
  }
  
  onChange = (e) => {
    e.preventDefault();
    const { grid } = this.state;
    this.setState({ grid: { x: grid.x, y: grid.y, steps: grid.steps, email: e.target.value } });
  }

  render() {
    const { className } = this.props;
    const { grid, message } = this.state;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({ grid.x }, { grid.y })</h3>
          <h3 id="steps">{ grid.steps === 1 ? `You moved ${grid.steps} time` : `You moved ${grid.steps} times` }</h3>
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
          <button onClick={this.leftBtn} id="left">LEFT</button>
          <button onClick={this.upBtn} id="up">UP</button>
          <button onClick={this.rightBtn} id="right">RIGHT</button>
          <button onClick={this.downBtn} id="down">DOWN</button>
          <button onClick={this.resetCount} id="reset">reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input 
            id="email" 
            //type="email"
            placeholder="type email"
            name="email"
            value={grid.email}
            onChange={this.onChange}
            >
            </input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
