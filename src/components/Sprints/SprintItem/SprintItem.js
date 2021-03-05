import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setModalApproveDeleteSprint } from "../../../redux/modal/modalAction";

import { byIdSelector } from "../../../redux/sprints/sprintsSelectors";
import { deleteSprint } from "../../../redux/sprints/sprintsOperations";
import { formatDate } from "../../../utils/formatFunction";

import styles from "./sprintItem.module.css";
import IconButton from "../../../common/IconButtons/IconButtons.js";

export default function SprintItem({ id: sprintId, isOwner, projectId }) {
  const dispatch = useDispatch();
  const { name, startAt, finishedAt, timeDifference } = useSelector(
    byIdSelector(sprintId)
  );
  const startAtFormat = formatDate(startAt);
  const finishedAtFormat = formatDate(finishedAt);
  const handlerDeleteSprint = () =>
    dispatch(setModalApproveDeleteSprint({ projectId, sprintId }));

  return (
    <div className={styles.container}>
      <NavLink
        to={`/projects/${projectId}/sprints/${sprintId}/tasks/1`}
        className={styles.navLink}
      >
        <h2 className={styles.title}>{name}</h2>
        <ul>
          <li className={styles.item}>
            <span className={styles.itemText}>Дата початку:</span>
            <span>{startAtFormat}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemText}>Дата закінчення:</span>
            <span>{finishedAtFormat}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemText}>Тривалість:</span>
            <span>{timeDifference}</span>
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
SprintItem.proprTypes = {
  sprintId: PropTypes.number,
  projectId: PropTypes.number,
  isOwner: PropTypes.bool,
};
