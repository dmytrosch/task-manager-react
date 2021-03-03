import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderComp = () => (
  <Loader
    className={styles.loader}
    type="TailSpin"
    color="#ff6b08"
    height={100}
    width={100}
  />
);

export default LoaderComp;
