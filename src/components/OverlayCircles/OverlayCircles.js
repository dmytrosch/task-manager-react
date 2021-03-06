import React from "react";
import classNames from "classnames";
import styles from "./OverlayCircles.module.css";

const OverlayCircles = ({ className }) => (
  <div className={classNames(styles.container, className)}>
    <i className={styles.first} />
    <i className={styles.second} />
    <i className={styles.third} />
    <i className={styles.fourth} />
    <i className={styles.fifth} />
    <i className={styles.sixth} />
    <i className={styles.seventh} />
    <i className={styles.eighth} />
    <i className={styles.ninth} />
    <i className={styles.tenth} />
  </div>
);

export default OverlayCircles;
