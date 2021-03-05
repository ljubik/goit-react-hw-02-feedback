import React, { Component } from "react";
import style from "./FeedbackOptions.module.css";


function FeedbackOptions({addEl}) {
    // const { addEl } =  this.props;
    return (
        <ul className={style.ulList}>
            <li className={style.liList}><button name="good" onClick={addEl} className={style.green}>Good</button></li>
            <li className={style.liList}><button name="neutral" onClick={addEl} className={style.yellow}>Neutral</button></li>
            <li className={style.liList}><button name="bad" onClick={addEl} className={style.red}>Bad</button></li>
        </ul>
    );
  }
  
  export default FeedbackOptions;