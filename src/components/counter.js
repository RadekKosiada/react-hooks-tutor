import React, { useState } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.addCounter = this.addCounter.bind(this);
  }
  addCounter() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="without-hooks">
        <h3>CLASS COMPONENT</h3>
        <button onClick={this.addCounter}>Click me!</button>
        <p>Counter (WITHOUT hooks): {this.state.count}</p>
      </div>
    );
  }
}

function Counter2() {
  // declare a new state variable: count;
  // useState is a new way to use the exact same capabilities that this.state provides in a class;
  // state variables are preserved by React;
  // we pass initial state as argument to useState();
  // state doesnt't have to be an object!;
  // [count, setCount] is like 'this.state.count' and 'this.setState' together;
  // that means useState() returns current state AND a function that updates it;
  const [count, setCount] = useState(0);
  // to store two different values, we call useState() again;
  const [fruit, setFruit] = useState("banana");
  return (
    <div className="with-hooks">
      <h3>FUNCTION COMPONENT</h3>
      {/* we don't need this.setState */}
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      {/* in a function we can use 'count' directly; WE DON'T NEED this.state.count */}
      <p>Counter (WITH hooks): {count}</p>
    </div>
  );
}

export { Counter2, Counter };
