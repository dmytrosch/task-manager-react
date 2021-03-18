import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../common/Button/Button";

import { deleteSprint } from "../../../../redux/sprints/sprintsOperations";
import { isModalApproveDeleteSprintSelector } from "../../../../redux/modal/modalSelectors";
import { byIdSelector } from "../../../../redux/sprints/sprintsSelectors";

import styles from "./ApproveDeleteSprint.module.css";

export default function ApproveDeleteProject({ onClose }) {
  const dispatch = useDispatch();
  const { projectId, sprintId } = useSelector(isModalApproveDeleteSprintSelector);

  const sprint = useSelector(byIdSelector(sprintId));

  const handleDelete = () => {
    dispatch(deleteSprint(projectId, sprintId));
    onClose();
  };


  return (
    <div className={styles.conatiner}>
      <div className={styles.wrapper}>
        <p className={styles.action}>Видалити спринт?</p>
        <p className={styles.itemName}>{sprint.name}</p>
        <div className={styles.controlContainer}>
          <Button color = "white" buttonCustomClass={styles.btn} onClick={handleDelete}>
            Видалити
          </Button>
          <Button buttonCustomClass={styles.btn} onClick={onClose}>
            Скасувати
          </Button>
        </div>
      </div>
    </div>
  );
}
