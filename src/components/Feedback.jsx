import styles from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, total, positiv }) => {
  return (
    <>
      <ul className={styles.feedlist}>
        <li className={styles.feeditem}>Good:{good}</li>
        <li className={styles.feeditem}>Neutral:{neutral}</li>
        <li className={styles.feeditem}>Bad:{bad}</li>
        <li className={styles.feeditem}>Total:{total}</li>
        <li className={styles.feeditem}>Positiv:{positiv}%</li>
      </ul>
    </>
  );
};

export default Feedback;
