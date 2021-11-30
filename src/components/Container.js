import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";
import useDebouncedEffect from "../hooks/useDebouncedEffect";

import styles from "./Counter.scss";

const getUrl =
  "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json";
const putUrl =
  "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json";

const Container = () => {
  const [value, setValue] = useState();
  const [maxValue, setMaxValue] = useState(1000);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // set initial value using api
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(getUrl, options)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        d ? setValue(d) : setValue(1);
      });

    if (process.env) {
      setMaxValue(process.env.MAX_VALUE);
    }
  }, []);

  useDebouncedEffect(
    () => {
      setLoading(true);
      const data = {
        ricky: value
      };

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      fetch(putUrl, options)
        .then((res) => {
          return res.json();
        })
        .then((d) => {
          console.log(d);
          setLoading(false);
        });
    },
    1000,
    [value]
  );

  return (
    <div className={styles.artBoard}>
      <Counter
        value={value}
        maxValue={maxValue}
        loading={loading}
        handleValueChange={setValue}
      />
      <CounterDisplay value={value} />
    </div>
  );
};

export default Container;
