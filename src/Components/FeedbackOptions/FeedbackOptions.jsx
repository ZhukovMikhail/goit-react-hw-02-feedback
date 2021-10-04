import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      type="button"
      className={styles.button}
      key={option}
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;
