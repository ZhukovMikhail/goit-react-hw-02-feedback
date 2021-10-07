import './App.css';
import React, { Component } from 'react';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  data = {
    total: 0,
    percentageOfGood: 0,
  };

  hendleFeedback = e => {
    const { name } = e.currentTarget;
    console.log(name);
    this.setState(prev => ({ [name]: prev[name] + 1 }));
    this.hendleTotalValue();
    this.onPercentageOfGood();
  };

  hendleTotalValue = e => (this.data.total += 1);

  onPercentageOfGood = e => {
    this.data.percentageOfGood = Math.floor(
      (this.state.good / this.data.total + 0.001) * 100,
    );
  };

  render() {
    return (
      <div className="section">
        <h2 className="title">Please leave your feedback</h2>
        <div className="btn">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.hendleFeedback}
          />
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          // total={this.state.total}
          total={this.data.total}
          // positivePercentage={this.state.percentageOfGood}
          positivePercentage={this.data.percentageOfGood}
        />
      </div>
    );
  }
}

export default App;

// hendleGoodbtn = e => {
//   this.setState(prev => ({ good: prev.good + 1 }));
//   this.hendleTotalValue();
//   this.onPercentageOfGood();
// };
// hendleNeutralbtn = e => {
//   this.setState(prev => ({ neutral: prev.neutral + 1 }));
//   this.hendleTotalValue();
//   this.onPercentageOfGood();
// };
// hendleBadbtn = e => {
//   this.setState(prev => ({ bad: prev.bad + 1 }));
//   this.hendleTotalValue();
//   this.onPercentageOfGood();
// };

/* <button type="button" onClick={this.hendleGoodbtn}>
  Good
</button>
<button type="button" onClick={this.hendleNeutralbtn}>
  Neutral
</button>
<button type="button" onClick={this.hendleBadbtn}>
  Bad
</button> */

/* <div>Statistics:</div>
<p>Good:{this.state.good}</p>
<p>Neutral:{this.state.neutral}</p>
<p>Bad:{this.state.bad}</p>
<p>Total:{this.state.total}</p>
<p>positive feedback:{this.state.percentageOfGood}%</p> */
