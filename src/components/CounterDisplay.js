import React from "react";
import styles from "./Counter.scss";

const CounterDisplay = ({ value }) => {
  return (
    <div className={`${styles.counter_text} ${styles.counter_text_pad}`}>
      <p>Counter value : {value}</p>
    </div>
  );
};

export default CounterDisplay;
