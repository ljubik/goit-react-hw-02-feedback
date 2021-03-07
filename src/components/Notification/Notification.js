import React from 'react';
import PropTypes from 'prop-types';

import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

Notification.defaultProps = {
  message: 'Nothing to show',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;