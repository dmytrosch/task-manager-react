import React from "react";
import styles from "./Layout.module.css";

export default function MainLayout(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}></div>
        </div>
    );
}
