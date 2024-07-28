import "./App.css";
import { useEffect, useState } from "react";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const newFeedback = {
        ...prevFeedback /* шоб зберегти попередні дані  */,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
      localStorage.setItem("feedback", JSON.stringify(newFeedback));
      return newFeedback;
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiv = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  /*   useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []); */

  const resetClick = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onResetClick={resetClick}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positiv={positiv}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};

export default App;
