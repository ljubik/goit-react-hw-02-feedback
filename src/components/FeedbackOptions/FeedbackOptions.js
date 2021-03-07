import React from "react";
import style from "../FeedbackOptions/FeedbackOptions.module.css";
import PropTypes from 'prop-types';


function FeedbackOptions({ options, leaveFeedback }) {
   
    return (       
        <div className={style.centerContainer}>
            <ul className={style.ulList}>
                <li className={style.liList}><button name="good" onClick={leaveFeedback} className={style.green}>Good</button></li>
                <li className={style.liList}><button name="neutral" onClick={leaveFeedback} className={style.yellow}>Neutral</button></li>
                <li className={style.liList}><button name="bad" onClick={leaveFeedback} className={style.red}>Bad</button></li>
            </ul>
        </div>
    );
  }
  
  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    leaveFeedback: PropTypes.func.isRequired,
  };

  export default FeedbackOptions;