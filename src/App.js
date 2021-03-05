import React, { Component } from "react";
import "./App.css";
import Feedback from "./components/feedback/feedback"


class App extends Component {
  state = {
    good: 55,
    neutral: 0,
    bad: 45,
  }

  render() {
  return (
    <>
    <Feedback raiting={this.state}/>
    </>
  );
}};

export default App;
