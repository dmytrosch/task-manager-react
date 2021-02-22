import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Slider.module.css";

export default function Slider({
  initialCurrent,
  total,
  customContainerStyles,
  callback,
}) {
  const [current, setCurrent] = useState(initialCurrent);
  const increment = () => {
    if (current + 1 > total) return setCurrent(total);
    setCurrent((prev) => {
      const current = prev + 1;
      callback(current);
      return current;
    });
  };
  const decrement = () => {
    if (current - 1 < 1) return setCurrent(1);
    setCurrent((prev) => {
      const current = prev - 1;
      callback(current);
      return current;
    });
  };
  return (
    <div className={classNames(styles.container, customContainerStyles)}>
      <button className={styles.decBth} onClick={decrement}></button>
      <p className={styles.values}>
        <span className={styles.current}>{current}</span> / {total}
      </p>
      <button className={styles.incBth} onClick={increment}></button>
    </div>
  );
}
