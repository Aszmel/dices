import React, { Component } from "react";
import Dice from "./Dice";

export default class RollDice extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      die1: "",
      die2: "",
      active: false
    };
  }

  rollNumber = () => {
    let cubes = ["one", "two", "three", "four", "five", "six"];
    let randomNumber1 = Math.floor(Math.random() * 5 + 1);
    let randomNumber2 = Math.floor(Math.random() * 5 + 1);
    this.setState({
      active: true,
      die1: cubes[randomNumber1],
      die2: cubes[randomNumber2]
    });
    setTimeout(() => {
      this.setState({ active: false });
    }, 800);
  };

  render() {
    return (
      <div>
        <h1>Roll the Dice</h1>
        <div
          className={`dices ${this.state.active ? "active disabled" : null}`}
        >
          <Dice face={this.state.die1} />
          <Dice face={this.state.die2} />
        </div>
        <div>
          <button onClick={this.rollNumber}>
            {this.state.active ? "Rolling..." : "Roll the dice!"}
          </button>
        </div>
      </div>
    );
  }
}
