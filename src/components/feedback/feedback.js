import React, { Component } from "react";
import style from "./feedback.module.css";
import PropTypes from "prop-types";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

class Feedback extends Component {
  state = {
    show: false,

  };



  render() {
    const { show } = this.state;
    const { toggle, handleChange, handleSubmit, getElem } = this;
    const { raiting, addEl } =  this.props;
    console.log(raiting)
    const { good, neutral, bad} = {...raiting}
    
    const total = good + neutral + bad
    const positive = Math.round( good / total * 100, 1 ) 
    

  return (
    <div className={style.fedback}>
      Please leave feedback!
      {/* <ul className={style.ulList}>
        <li className={style.liList}><button name="good" onClick={addEl} className={style.green}>Good</button></li>
        <li className={style.liList}><button name="neutral" onClick={addEl} className={style.yellow}>Neutral</button></li>
        <li className={style.liList}><button name="bad" onClick={addEl} className={style.red}>Bad</button></li>
      </ul> */}
      <FeedbackOptions addEl={addEl}/>
      
      
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

Feedback.defaultProps = {
  name: "Anonymus",
  tag: "unique",
  location: "Erth",
  avatar: "https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg",
  stats: {
    followers: 0,
    views: 0,
    likes: 0
  }
};

Feedback.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
};

export default Feedback;
