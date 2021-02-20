import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import IconButton from "../../common/IconButtons/index";

export default function ProejctCard({ name, description, id }) {
  const deleteCard = (e) => {
    e.preventDefault();
    console.log("delete");
  };

  return (
    <div className={styles.container}>
      <NavLink to={`/project/${id}`} className={styles.navLink}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        {/* <button className={styles.button} onClick={deleteCard}>
                </button> */}
        <IconButton
          iconButtonCustomClass={styles.button}
          iconName="coloredBin"
          icon="coloredBin"
          onClick={deleteCard}
        />
      </NavLink>
    </div>
  );
}
