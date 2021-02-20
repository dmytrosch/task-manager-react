import React from "react";
import styles from "./styles.module.css";
import IconButton from "../../common/IconButtons/index.js"

export default function TaskCard() {
  return (
    <ul>
      <li className={styles.container}>
        <h2 className={styles.task}>Project</h2>
        <div className={styles.div}>
          <p className={styles.text}>Заплановано годин</p>
          <p className={styles.planingHours}>0</p>
        </div>
        <div className={styles.div}>
          <p className={styles.text}>Витрачено год/день</p>
          <input className={styles.input}></input>
        </div>
        <div className={styles.div}>
          <p className={styles.text}>Витрачено годин</p>
          <p className={styles.spendedHours}>0</p>
        </div>
        {/* <button className={styles.button}></button> */}
        <IconButton
        iconButtonCustomClass={styles.button}           
        iconName="greyBin" icon="greyBin"           
        />
      </li>
    </ul>
  );
}
