import React from "react";

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
      <div>
        <button onClick={this.addCounter} >Click me!</button>
        <p>Counter: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
