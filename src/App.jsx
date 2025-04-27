import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import Section from './components/Section/Section';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  
};



export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : initialState;
    
  });

 

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Section title="Sip Happens Café">
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>

        <Options
          options={Object.keys(feedback)}
          onLeaveFeedback={updateFeedback}
          onReset={resetFeedback}
          totalFeedback={totalFeedback}
        />

        {totalFeedback ? (
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positive={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback yet !" />
        )}
      </Section>
    </div>
  );
}



