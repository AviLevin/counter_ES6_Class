import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    console.log("count", count); 
    return (
      <div className="App">
      <div className="container">
        <h1>
          Counter with <span className="title"> ES6 Class</span>
        </h1>{" "}
        <h2>You clicked <span className="title">{count}</span>  times!</h2>
        <button className="btn btn-primary" onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <button className="btn btn-primary" onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>

      </div>
      
      </div>
    );
  }
}

export default App;
