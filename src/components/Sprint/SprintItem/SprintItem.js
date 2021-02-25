import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setModalApproveDeleteSprint } from "../../../redux/modal/modalAction";

import { byIdSelector } from "../../../redux/sprints/sprintsSelectors";
import { deleteSprint } from "../../../redux/sprints/sprintsOperations";

import styles from "./sprintItem.module.css";
import IconButton from "../../../common/IconButtons/IconButtons.js";

export default function SprintItem({ id: sprintId, isOwner, projectId }) {
  const dispatch = useDispatch();
  const { id, name, startAt, finishedAt } = useSelector(byIdSelector(sprintId));

  const handlerDeleteSprint = () =>
    dispatch(setModalApproveDeleteSprint({ projectId, sprintId }));

  const duration =
    (new Date(finishedAt) - new Date(startAt)) / (1000 * 60 * 60);

  return (
    <div className={styles.container}>
      <NavLink
        to={`/projects/${projectId}/sprint/${sprintId}/tasks/1`}
        className={styles.navLink}
      >
        <h2 className={styles.title}>{name}</h2>
        <ul>
          <li className={styles.item}>
            <span className={styles.itemText}>Дата початку:</span>
            <span>{startAt}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemText}>Дата закінченя:</span>
            <span>{finishedAt}</span>
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
