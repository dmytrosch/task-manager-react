import React from "react";
import layoutStyles from "./layout.module.css";
import circlesStyles from "./circles.module.css";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { isMobileSelector } from "../../redux/clientWidth/clientWidthSelectors";

export default function AuthLayout(props) {
  const isMobileMode = false
  return (
    <div className={layoutStyles.wrapper}>
      <div className={layoutStyles.containerHeader}>
        <Header />
      </div>
      {isMobileMode ? (
        <div className={layoutStyles.containerMobile}>{props.children}</div>
      ) : (
        <div className={layoutStyles.container}>
          <div className={layoutStyles.circleContainer}>
            <div className={circlesStyles.first}></div>
            <div className={circlesStyles.second}></div>
            <div className={circlesStyles.third}></div>
          </div>
          {props.children}
        </div>
      )}
    </div>
  );
}
