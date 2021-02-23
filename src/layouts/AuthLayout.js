import React from "react";
import Header from "../components/Header/Header";
import OverlayCircles from "../components/OverlayCircles/OverlayCircles";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";
import { isMobileSelector } from "../redux/clientWidth/clientWidthSelectors";
import classNames from "classnames";

const AuthLayout = ({ children }) => {
  const isMobileMode = false;

  return (
    <div className={classNames([styles.wrapper, styles.wrapperWithBottom])}>
      <Header className={styles.header} />

      <div className={styles.container}>
        {!isMobileMode && <OverlayCircles className={styles.circleContainer} />}

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
