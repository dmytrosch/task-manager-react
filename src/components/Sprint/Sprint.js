import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SprintList from "./SprintList/SprintList";
import EditableInput from "../../common/EditableInput/EditableInput";

import styles from "./Sprints.module.css";
import IconButton from "../../common/IconButtons/IconButtons.js";

import * as modalAction from "../../redux/modal/modalAction";

const getProjectDataById = (projectId) => () => ({
  name: "Project 1",
  description:
    "Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина тектового блоку",
});

const getSprintIdsByProjectId = (projectId) => () => [
  "id_1",
  "id_2",
  "id_3",
  "id_4",
  "id_5",
  "id_6",
  "id_7",
];

export default function Sprint() {
  const { name, description } = useSelector(getProjectDataById("projectId"));
  const sprintIds = useSelector(getSprintIdsByProjectId("projectId"));

  const dispatch = useDispatch();

  const editProject = () => dispatch(modalAction.setModalEditProject(true));
  const addParticipant = () =>
    dispatch(modalAction.setModalAddParticipant(true));
  const addSprint = () => dispatch(modalAction.setModalCreateSprint(true));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>
            <EditableInput value={name} onSave />
          </h2>
          <div className={styles.box}>
            <IconButton
              iconButtonCustomClass={styles.button}
              iconName="plus"
              icon="plus"
              onClick={addSprint}
            />
            <p className={styles.text}>Створити спринт</p>
          </div>
        </div>
        <p className={styles.addParticipant} onClick={addParticipant}>
          Додати людей
        </p>
        <SprintList sprintIds={sprintIds} />
      </div>
    </div>
  );
}
