import React, { Component } from 'react';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div>Statistics:</div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>positive feedback:{positivePercentage}%</p>
    </>
  );
}
export default Statistics;
