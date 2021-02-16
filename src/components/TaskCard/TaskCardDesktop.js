import React from "react";
import styles from "./taskCardDesktop.module.css";

export default function TaskCard() {
    return (
      <div className={styles.container}>
        <h2 className={styles.task}>Project</h2>
          <p className={styles.planingHours}>0</p>
        <input className={styles.input}></input>
        <p className={styles.spendedHours}>0</p>
        <button className={styles.button}></button>
      </div>
    );
  }