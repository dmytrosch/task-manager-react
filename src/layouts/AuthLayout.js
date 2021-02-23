import React from "react";
import Header from "../components/Header/Header";
import OverlayCircles from "../components/OverlayCircles/OverlayCircles";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";
import { isMobileSelector } from "../redux/clientWidth/clientWidthSelectors";

const AuthLayout = ({ children }) => {
  const isMobileMode = false;

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <div className={styles.container}>
        {!isMobileMode && <OverlayCircles className={styles.circleContainer} />}

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
