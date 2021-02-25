import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setModalApproveDeleteSprint } from "../../../redux/modal/modalAction";

import styles from "./sprintItem.module.css";
import IconButton from "../../../common/IconButtons/IconButtons.js";

const getSprintById = (id) => () => ({
  name: "Sprint Burndown Chart 1",
  dateStart: "10 Лип",
  dateEnd: "22 Лип",
  duration: 226,
});

export default function SprintItem({ id }) {
  const dispatch = useDispatch();
  const { name, dateStart, dateEnd, duration } = useSelector(getSprintById(id));

  const deleteSprint = () => dispatch(setModalApproveDeleteSprint(id));

  return (
    <div className={styles.container}>
      <NavLink to={`/sprint/${id}`} className={styles.navLink}>
        <h2 className={styles.title}>{name}</h2>
        <ul>
          <li className={styles.item}>
            <span className={styles.itemText}>Дата початку:</span>
            <span>{dateStart}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemText}>Дата закінченя:</span>
            <span>{dateEnd}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemText}>Тривалість:</span>
            <span>{duration}</span>
          </li>
        </ul>
      </NavLink>
      <IconButton
        iconButtonCustomClass={styles.deleteBtn}
        iconName="greyBin"
        icon="greyBin"
        onClick={deleteSprint}
      />
    </div>
  );
}
