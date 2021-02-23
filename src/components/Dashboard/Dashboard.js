import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Dashboard.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import IconButton from "../../common/IconButtons/IconButtons.js";
import { getAllProjectsSelector } from "../../redux/projects/projectSelectors";

import * as modalAction from "../../redux/modal/modalAction";

export default function Dashboard() {
  const dispatch = useDispatch();
  const addProject = () => dispatch(modalAction.setModalCreateProject(true));
  const projects = useSelector(getAllProjectsSelector);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <>
          <div className={styles.infoBox}>
            <h2 className={styles.title}>Проекти</h2>
            <div className={styles.box}>
              <IconButton
                iconButtonCustomClass={styles.button}
                iconName="plus"
                icon="plus"
                onClick={addProject}
              />
              <p className={styles.text}>Створити проект</p>
            </div>
          </div>
          <ul className={styles.projectList}>
            {projects.map((proj) => (
              <li key={proj.id}>
                <ProjectCard
                  id={proj.id}
                  name={proj.name}
                  description={proj.description}
                  isOwner={proj.isOwner}
                />
              </li>
            ))}
          </ul>
        </>
      </div>
    </div>
  );
}
