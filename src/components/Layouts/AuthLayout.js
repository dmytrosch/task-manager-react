import React from "react";
import layoutStyles from "./Layout.module.css";
import circlesStyles from "./circles.module.css";
import Header from "../Header/Header";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { isMobileSelector } from "../../redux/clientWidth/clientWidthSelectors";

export default function AuthLayout(props) {
  const isMobileMode = false;
  return (
    <div className={layoutStyles.wrapper}>
      <div className={layoutStyles.containerHeader}>
        <Header />
      </div>
      {isMobileMode ? (
        <div className={layoutStyles.containerMobile}>{props.children}</div>
      ) : (
        <div className={layoutStyles.container}>
          <div className={circlesStyles.thirdLay}></div>
          <div className={layoutStyles.circleContainer}>
            <div className={circlesStyles.first}></div>
            <div className={circlesStyles.second}></div>
            <div className={circlesStyles.third}></div>
            <div className={circlesStyles.fourth}></div>
            <div className={circlesStyles.fifth}></div>
            <div className={circlesStyles.sixth}></div>
            <div className={circlesStyles.seventh}></div>
            <div className={circlesStyles.eighth}></div>
            <div className={circlesStyles.ninth}></div>
            <div className={circlesStyles.tenth}></div>
            <div className={circlesStyles.eleventh}></div>
          </div>
          {props.children}
        </div>
      )}
    </div>
  );
}
