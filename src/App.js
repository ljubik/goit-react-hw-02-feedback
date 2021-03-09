import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import Statistic from "./components/Statistic/Statistic";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  addEl = (e) => {
    console.log(`e.target.name`, e.target.name );
    this.setState(prevstate  => ({ [e.target.name]:  prevstate[e.target.name] + 1 } ));
  };

 countFeedback = event => {
    const { name } = event.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotal = () => {
   const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    return this.countTotal()
      ? Math.round((this.state.good / this.countTotal()) * 100)
      : 0;
  };



  render() {
    const total = this.countTotal();
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.countPositivePercentage();

  return (
    <>
    <Section title="Please leave your feedback !"/>
    <FeedbackOptions  
      options={['good', 'neutral', 'bad']}
      leaveFeedback={this.countFeedback}
    />

    <Section title="Statistics">
          {total ? (
            <Statistic 
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}/>
          ) : (
            <Notification message="No feedback given !" />
          )}
        </Section>
    </>
  );
}};

export default App;
