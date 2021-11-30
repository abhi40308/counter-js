import React from "react";
import styles from "./Counter.scss";

const Counter = (props) => {
  const { value, loading, maxValue, handleValueChange } = props;

  const onIncrement = () => {
    if (value < maxValue) {
      handleValueChange(value + 1);
    }
  };

  const onDecrement = () => {
    handleValueChange(value - 1);
  };

  const onChange = (e) => {
    const val = Number(e.target.value);
    if (val > maxValue) handleValueChange(maxValue);
    else handleValueChange(val);
  };

  return (
    <div className={`${styles.rectangle} ${styles.outer_pad}`}>
      {loading ? <p>Saving counter value....</p> : null}
      <button
        className={`${styles.negative_sign_pad} ${styles.negative_sign}`}
        onClick={onDecrement}
      >
        -
      </button>
      <input type="number" value={value} onChange={onChange} />
      <button
        className={`${styles.positive_sign_pad} ${styles.positive_sign}`}
        onClick={onIncrement}
      >
        +
      </button>{" "}
    </div>
  );
};

export default Counter;
