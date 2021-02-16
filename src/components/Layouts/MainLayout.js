import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Sprint from "../Sprint/SprintCreator";

export default function MainLayout(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerHeader}>
        <Header />
      </div>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}
