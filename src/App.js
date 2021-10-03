import './App.css';
import React, { Component } from 'react';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions.jsx'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentageOfGood: 0,
  };

  hendleGoodbtn = e => {
    this.setState(prev => ({ good: prev.good + 1 }));
    this.hendleTotalValue();
    this.onPercentageOfGood();
  };
  hendleNeutralbtn = e => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
    this.hendleTotalValue();
    this.onPercentageOfGood();
  };
  hendleBadbtn = e => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
    this.hendleTotalValue();
    this.onPercentageOfGood();
  };
  hendleTotalValue = e => {
    this.setState(prev => ({
      total: prev.total + 1,
    }));
    console.log(this.state.total + 1);
  };
  onPercentageOfGood = e => {
    this.setState(prev => ({
      percentageOfGood: Math.floor((prev.good / prev.total + 0.001) * 100),
    }));
  };

  render() {
    return (
      <>
        <div>Please leave your feedback</div>
        <FeedbackOptions options={} onLeaveFeedback={}/>
        {/* <button type="button" onClick={this.hendleGoodbtn}>
          Good
        </button>
        <button type="button" onClick={this.hendleNeutralbtn}>
          Neutral
        </button>
        <button type="button" onClick={this.hendleBadbtn}>
          Bad
        </button> */}
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.percentageOfGood}
        />
        {/* <div>Statistics:</div>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.state.total}</p>
        <p>positive feedback:{this.state.percentageOfGood}%</p> */}
      </>
    );
  }
}

export default App;
