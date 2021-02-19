import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css';

export default function ProejctCard({name, description, id}) {
    const deleteCard = (e) => {
        e.preventDefault();
        console.log('delete');
    }

    return (
        <div className={styles.container}>
                  <NavLink to={`/project/${id}`} className={styles.navLink}>
                <h2 className={styles.title}>
                    {name}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
                </NavLink>
                <button className={styles.button} onClick={deleteCard}>
                </button>
        </div>
    )
}