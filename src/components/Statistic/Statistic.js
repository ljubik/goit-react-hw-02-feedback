import React from 'react';
import PropTypes from 'prop-types';

import style from '../../components/Statistic/Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={style.centerContainer}>
      <p className={style.good}>Good: {good}</p>
      <p className={style.neutral}>Neutral: {neutral}</p>
      <p className={style.bad}>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p className={(positivePercentage >= 1) ? style.feedbackGood : style.feedbackBad}>Positive feedback: {positivePercentage}%</p>  
    </div>
  );
};

Statistic.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistic;