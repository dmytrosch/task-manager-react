import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Dashboard.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import IconButton from "../../common/IconButtons/IconButtons.js";

import * as modalAction from "../../redux/modal/modalAction";

const projects = [
  {
    id: "60291cee0822bb3f486738ce",
    name: "Time test",
    description: "some description",
  },
  {
    id: "60291cee0822bb3f486738c6",
    name: "Time test",
    description: "some description",
  },
  {
    id: "60291cee0822bb3f486738c3",
    name: "Time test",
    description: "some description",
  },
  {
    id: "60291cee0822bb3f4867htht",
    name: "Time test",
    description: "some description",
  },
  {
    id: "60291cee0fdffb3f486738ce",
    name: "Time test",
    description: "some description",
  },
];

export default function Dashboard() {
  const dispatch = useDispatch();
  const addProject = () => dispatch(modalAction.setModalCreateProject(true));
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <>
          <div className={styles.infoBox}>
            <h2 className={styles.title}>Проекти</h2>
            <div className={styles.box}>
              {/* <button
                className={styles.button}
                onClick={(e) => setModal(true)}
              ></button> */}
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
              <li style={{ width: "135px" }}>
                <ProjectCard
                  key={proj.id}
                  name={proj.name}
                  description={proj.description}
                />
              </li>
            ))}
          </ul>
        </>
      </div>
    </div>
  );
}
