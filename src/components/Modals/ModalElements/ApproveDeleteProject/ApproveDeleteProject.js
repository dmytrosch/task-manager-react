import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../common/Button/Button";

import { deleteProject } from "../../../../redux/projects/projectOperations";
import { isModalApproveDeleteProjectSelector } from "../../../../redux/modal/modalSelectors";
import { getByIdSelector } from "../../../../redux/projects/projectSelectors";

import styles from "./ApproveDeleteProject.module.css";

export default function ApproveDeleteProject({ onClose }) {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(30);
  const projectId = useSelector(isModalApproveDeleteProjectSelector);

  const project = useSelector(getByIdSelector(projectId));

  useEffect(() => {
    const id = setTimeout(() => {
      if (timer < 2) {
        return onClose();
      }
      setTimer(timer - 1);
    }, 1000);
    return () => clearTimeout(id);
  }, [timer]);

  const handleDelete = () => {
    dispatch(deleteProject(projectId));
    onClose();
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Увага!!!</h2>
        <p className={styles.action}>Ви збираєтесь видалити проєкт</p>
        <p className={styles.itemName}>{project.name}</p>
        <p className={styles.itemDecs}>{project.description}</p>
        <div className={styles.controlContainer}>
          <Button color = "white" buttonCustomClass={styles.btn} onClick={handleDelete}>
            Видалити
          </Button>
          <Button buttonCustomClass={styles.btn} onClick={onClose}>
            Скасувати
          </Button>
        </div>
        <p className={styles.autoCancelText}>
          До автоматичного скасування залишилось {timer} секунд
        </p>
      </div>
    </div>
  );
}
