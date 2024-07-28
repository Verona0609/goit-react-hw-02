import styles from "./Options.module.css";
const Options = ({ onLeaveFeedback, onResetClick, totalFeedback }) => {
  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" className={styles.button} onClick={onResetClick}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
