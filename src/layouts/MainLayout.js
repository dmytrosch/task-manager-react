import React from "react";
import Header from "../components/Header/Header";
// import AddParticipant from '../components/Modals/ModalElements/AddParticipant/AddParticipant';

import styles from "./Layout.module.css";

const MainLayout = ({ children }) => (
  <div className={styles.wrapper}>
    <Header className={styles.header} />
    <div className={styles.container}>{children}</div>
  </div>
);

export default MainLayout;
