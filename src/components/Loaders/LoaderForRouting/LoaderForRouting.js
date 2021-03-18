import React from "react";
import styles from "./Loader.module.css";
import { ReactComponent as Logo } from "../../../assest/icons/mainLogo.svg";

const Loader = () => (
  <div className={styles.container}>
    <Logo className={styles.loader} />
  </div>
);

export default Loader;
