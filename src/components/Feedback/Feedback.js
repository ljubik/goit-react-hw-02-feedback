import React, { Component } from "react";
import style from "../../components/Feedback/Feedback.module";
// import PropTypes from "prop-types";
import FeedbackOptions from "../../components/FeedbackOptions/FeedbackOptions";

class Feedback extends Component {
  state = {
    show: false,

  };

  render() {
    const { raiting, addEl } =  this.props;
    console.log(raiting)
    const { good, neutral, bad} = {...raiting}
    
    const total = good + neutral + bad
    const positive = Math.round( good / total * 100, 1 ) 
    

  return (
    <div className={style.fedback}>
        Please leave feedback!

      <FeedbackOptions addEl={addEl} raiting={raiting} />
                  <div className={style.fedbackList}>
                <h3>Statistics:</h3>
                <ul className={style.statList}>
                    <li ><p>Good: { good }</p></li>
                    <li ><p>Neutral: { neutral }</p></li>
                    <li ><p>Bad: { bad }</p></li>
                    <li ><p>Total: { total }</p></li>
                    <li ><p>Positive feedback: { positive }%</p></li>
                </ul>
            </div>

    </div>
  );
}};

export default Feedback;
