import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";

const getSprintById = (id) => () => ({
  name: "KN-1 Configure project",
  ScheduledHours: "76",
  hoursSpent: "666",
});

export default function SprintItem({ id }) {
  const { name, ScheduledHours, hoursSpent } = useSelector(getSprintById(id));

  const deleteSprint = (id) => console.log("delete sprint");

  return (
    <>
          <li className={styles.container}>
            <h2 className={styles.taskName}>{name}</h2>
            <div className={styles.div}>
              <p className={styles.text}>Заплановано годин</p>
              <p className={styles.planingHours}>{ScheduledHours}</p>
            </div>
            <div className={styles.div}>
              <p className={styles.text}>Витрачено год/день</p>
              <input className={styles.input} placeholder="6"></input>
            </div>
            <div className={styles.div}>
              <p className={styles.text}>Витрачено годин</p>
              <p className={styles.spendedHours}>{hoursSpent}</p>
            </div>
            <button
              className={styles.button}
              onClick={() => deleteSprint(id)}
            ></button>
          </li>
    </>
  );
}
