import React, { Component } from "react";
import "./App.css";
import Feedback from "./components/feedback/feedback"


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  addEl = (e) => {
    console.log(`e.target.name`, e.target.name );
    const getVal = this.state;
    this.setState(prevstate  => ({ [e.target.name]:  prevstate[e.target.name] + 1 } ));
  };

  render() {
    const { addEl } = this;
  return (
    <>
    <Feedback raiting={this.state} addEl={addEl}/>
    </>
  );
}};

export default App;
