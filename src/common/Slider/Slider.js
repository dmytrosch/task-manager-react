import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Slider.module.css";

export default function Slider({
  initialCurrent = 1,
  total,
  customContainerStyles,
  callback,
}) {
  const [current, setCurrent] = useState(initialCurrent);
  const increment = () => {
    if (current + 1 > total) return setCurrent(total);
    setCurrent((prev) => prev + 1);
  };
  const decrement = () => {
    if (current - 1 < 1) return setCurrent(1);
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    callback(current);
  }, [callback, current]);

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

Slider.proprTypes = {
  customContainerStyles: PropTypes.string,
  callback: PropTypes.func,
  initialCurrent: PropTypes.number,
  total: PropTypes.number,
};
