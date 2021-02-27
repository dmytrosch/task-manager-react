import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../common/Button/Button";

import { deleteTask } from "../../../../redux/tasks/tasksOperations";
import { isModalApproveDeleteTask } from "../../../../redux/modal/modalSelectors";
// import { getTaskById } from "../../../../redux/sprints/sprintsSelectors";

import styles from "./ApproveDeleteTask.module.css";

export default function ApproveDeleteProject({ onClose }) {
  const dispatch = useDispatch();
  const taskId = useSelector(isModalApproveDeleteTask);

  // const task = useSelector(getTaskById(taskId));

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
    onClose();
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.wrapper}>
        <p className={styles.action}>Видалити задачу?</p>
        <p className={styles.itemName}>Task Name</p>
        {/* TODO: подключить нижнюю строчку */}
        {/* <p className={styles.itemName}>{task.name}</p> */}
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
