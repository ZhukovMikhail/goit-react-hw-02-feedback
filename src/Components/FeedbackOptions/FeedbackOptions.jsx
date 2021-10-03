import React, { Component } from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <button type="button" onClick={this.hendleGoodbtn}>
        Good
      </button>
      <button type="button" onClick={this.hendleNeutralbtn}>
        Neutral
      </button>
      <button type="button" onClick={this.hendleBadbtn}>
        Bad
      </button>
    </>
  );
}

export default FeedbackOptions;
