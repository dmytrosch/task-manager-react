import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { byIdSelector } from "../../../redux/sprints/sprintsSelectors";
import { deleteSprint } from "../../../redux/sprints/sprintsOperations";

import styles from "./sprintItem.module.css";
import IconButton from "../../../common/IconButtons/IconButtons.js";

// const getSprintById = (id) => () => ({
//   name: "Sprint Burndown Chart 1",
//   dateStart: "10 Лип",
//   dateEnd: "22 Лип",
//   duration: 226,
// });

export default function SprintItem({ id: sprintId, isOwner, projectId }) {
  const { name, dateStart, dateEnd, duration } = useSelector(
    byIdSelector(sprintId)
  );
  const dispatch = useDispatch();
  const handlerDeleteSprint = () => dispatch(deleteSprint(projectId, sprintId));

  return (
    <div className={styles.container}>
      <NavLink to={`/sprint/${sprintId}`} className={styles.navLink}>
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
      {isOwner && (
        <IconButton
          iconButtonCustomClass={styles.deleteBtn}
          iconName="greyBin"
          icon="greyBin"
          onClick={handlerDeleteSprint}
        />
      )}
    </div>
  );
}
