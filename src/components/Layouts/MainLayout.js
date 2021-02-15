import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

import styles from "./layout.module.css";

export default function MainLayout({ children, addNewProject }) {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.sideBarContainer}>
          <SideBar addNewProject={addNewProject} />
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </>
  );
}
