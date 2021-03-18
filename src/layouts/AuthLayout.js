import React from "react";
import Header from "../components/Header/Header";
import OverlayCircles from "../components/OverlayCircles/OverlayCircles";
import styles from "./Layout.module.css";
import useIsMobile from '../hooks/useIsMobile';
import classNames from "classnames";

const AuthLayout = ({ children }) => {
  const isMobile = useIsMobile()

  return (
    <div
      className={classNames([
        isMobile ? styles.wrapperMobileAuth : styles.wrapper,
        styles.paddingBottom,
      ])}
    >
      <Header className={styles.header} />

      <div className={styles.container}>
        {!isMobile && <OverlayCircles className={styles.circleContainer} />}

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
