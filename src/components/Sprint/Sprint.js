import React from "react";
import { useSelector } from "react-redux";

import SprintList from "./SprintList";

import styles from "./Sprint.module.css";
import IconButton from "../../common/IconButtons/index.js"


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

export default function Sprint({ addSprint, editProject, addParticipant }) {
  const { name, description } = useSelector(getProjectDataById("projectId"));
  const sprintIds = useSelector(getSprintIdsByProjectId("projectId"));

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2
          className={
            description
              ? styles.projectNameWithDesc
              : styles.projectNameWithOutDesc
          }
        >
          {name}
        </h2>

        {/* <button className={styles.editBtn} onClick={editProject}></button> */}
        <IconButton           
        iconButtonCustomClass={styles.editBtn}           
        iconName="pen" icon="pen"           
        onClick={editProject} />
        {description && <p className={styles.description}>{description}</p>}

        <p className={styles.addParticipant} onClick={addParticipant}>
          Додати людей
        </p>

        <SprintList sprintIds={sprintIds} />

        <div className={styles.addSprint}>
          {/* <button className={styles.addSprintBtn} onClick={addSprint}></button> */}
          <IconButton           
          iconButtonCustomClass={styles.button}           
          iconName="plus" icon="plus"           
          onClick={addSprint}/>
          <span className={styles.addSprintText}>Створити спринт</span>
        </div>
      </div>
    </section>
  );
}
