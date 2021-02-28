import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Dashboard.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import IconButton from "../../common/IconButtons/IconButtons.js";
import { getAllIdsSelector } from "../../redux/projects/projectSelectors";
import Loader from "../Loaders/LoaderForComponents/LoaderForComponents";

import * as modalAction from "../../redux/modal/modalAction";
import {
  isUserLoading,
  isProjectsLoading,
} from "../../redux/loading/loadingSelector";

export default function Dashboard() {
  const dispatch = useDispatch();
  const addProject = () => dispatch(modalAction.setModalCreateProject(true));
  const userLoading = useSelector(isUserLoading);
  const projectLoading = useSelector(isProjectsLoading);
  const loading = userLoading || projectLoading;
  const projects = useSelector(getAllIdsSelector);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>Проєкти</h2>
          <div className={styles.box} onClick={addProject}>
            <IconButton
              iconButtonCustomClass={styles.button}
              iconName="plus"
              icon="plus"
            />
            <p className={styles.text}>Створити проект</p>
          </div>
        </div>
        <Loader loading={loading}>
          {projects.length > 0 ? (
            <ul className={styles.projectList}>
              {projects.map((id) => (
                <li key={id}>
                  <ProjectCard id={id} />
                </li>
              ))}
            </ul>
          ) : (
            !loading && (
              <p>
                Ви ще не додали, або не є учасником жодного проекту.{" "}
                <span className={styles.addProjectText} onClick={addProject}>
                  Створити проект
                </span>
              </p>
            )
          )}
        </Loader>
      </div>
    </div>
  );
}
