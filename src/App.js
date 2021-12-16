import { Component } from 'react';
import './App.css';
import Feedback from 'components/feedback';
import FeedbackOptions from 'components/feedbackOptions';
import Statistics from 'components/statistics';
import Section from 'components/section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = el =>
    this.setState(prevState => {
      return { [el]: prevState[el] + 1 };
    });

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <Feedback>
          <Section>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Feedback>
      </div>
    );
  }
}

export default App;
