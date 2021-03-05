import React, { Component } from "react";
import style from "./feedback.module.css";
import PropTypes from "prop-types";

class Feedback extends Component {


  render() {
    const { raiting } =  this.props;
    const { good, neutral, bad} = {...raiting}
    console.log(raiting)
    const total = good + neutral + bad
    const positive = Math.round( good / total * 100, 1 ) 
  return (
    <div className={style.fedback}>
      Please leave feedback!
      <ul className={style.ulList}>
        <li className={style.liList}><button className={style.green}>Good</button></li>
        <li className={style.liList}><button className={style.yellow}>neutral</button></li>
        <li className={style.liList}><button className={style.red}>bad</button></li>
      </ul>
      
      
      
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
