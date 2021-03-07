import React from 'react';
import PropTypes from 'prop-types';

import style from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <div className={style.container}>
        <h2 className={style.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

Section.defaultProps = {
  title: ' ',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;