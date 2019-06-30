import React, { Component } from "react";

export default class Dice extends Component {
  render() {
    return (
      <div>
        <i className={`fas fa-dice-${this.props.face}`} />
      </div>
    );
  }
}
