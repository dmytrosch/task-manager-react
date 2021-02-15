import React from 'react';
import styles from './styles.module.css';

export default function ProejctCard() {
    const deleteCard = (e) => {
        e.preventDefault();
        console.log('delete');
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    Project Name
                </h2>
                <p className={styles.description}>
                    Info about project
                </p>
                <button className={styles.button} onClick={deleteCard}>
                </button>
            </div>
        </div>
    )
}