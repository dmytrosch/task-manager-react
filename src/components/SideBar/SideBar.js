import React from "react";
import { useDispatch } from "react-redux";
import GoBackBtn from "./goBackBtn";
import AddTaskBtn from "./addTaskBtn";
import styles from "../SideBar/sideBar.module.css";
import * as modalAction from "../../redux/modal/modalAction";
import { useRouteMatch } from "react-router-dom";
import ProjectsNavList from "./ProjectsList";
import SprintsNavList from "./SprintsList";

export default function SideBar() {
  const sprintsId = useRouteMatch().params.sprintId;
  const nameArrowBtn = sprintsId ? "спринт" : "проект";
  const dispatch = useDispatch();
  const add = () => dispatch(modalAction.setModalCreateProject(true));
  return (
    <aside className={styles.aside}>
      <GoBackBtn nameArrowBtn={nameArrowBtn} />
      <ProjectsNavList />
      <SprintsNavList />
      <AddTaskBtn nameArrowBtn={nameArrowBtn} addNewProject={add} />
    </aside>
  );
}
