import React, { useState } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.addCounter = this.addCounter.bind(this);
  }
  addCounter() {
    this.setState({count: this.state.count+1})
  }
  render() {
    return (
      <div className="without-hooks">
        <h3>CLASS COMPONENT</h3>
        <button onClick={this.addCounter} >Click me!</button>
        <p>Counter (WITHOUT hooks): {this.state.count}</p>
      </div>
    );
  }
}

function Counter2() {
  return (
    <div className="with-hooks">
      <h3>FUNCTION COMPONENT</h3>
      <button >Click me!</button>
      <p>Counter (WITH hooks): 0</p>
    </div>
  );
}

export { Counter2, Counter } ;
