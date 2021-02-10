import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";

export default function MainLayout(props) {
    return (
        <div className={styles.wrapperHeader}>
            <div className={styles.container}>
                <Header />
            </div>
        </div>
    );
}
