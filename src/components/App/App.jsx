import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback ';
import Notification from '../Notification/Notification';

import css from './App.module.css';

export default function App() {
  const [values, setValues] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setValues(values => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem('feedback');
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <div className={css.appContainer}>
      <Description />

      <Options
        totalFeedback={totalFeedback}
        onUpdate={updateFeedback}
        onReset={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback feedbackType={values} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
