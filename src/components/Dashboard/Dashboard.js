import React, { useState } from "react";
import styles from "./styles.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";

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
  const [modal, setModal] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    console.log("click");
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>Проекти</h2>
          <div className={styles.box}>
            <button
              className={styles.button}
              onClick={(e) => setModal(true)}
            ></button>
            <p className={styles.text}>Створити проект</p>
          </div>
        </div>
        <ul className={styles.projectList}>
          {projects.map((proj) => (
            <projectItem key={proj.id} />
          ))}
          {modal && (
            <li className={styles.projectItem}>
              <ProjectCard />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
