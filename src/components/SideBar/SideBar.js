import React from "react";
import { useDispatch } from "react-redux";
// import GoBackBtn from "./goBackBtn";
// import AddTaskBtn from "./addTaskBtn";
import styles from "./sideBar.module.css";
import { useRouteMatch } from "react-router-dom";
import SidebarProjects from './SideBarComponents/SidebarProjects.js';
import SidebarSprints from "./SideBarComponents/SidebarSprints";

export default function SideBar() {
  const taskDay = useRouteMatch().params.day;
  const listToRender = taskDay ? "sprints" : "projects";
  return (
    <aside className={styles.aside}>
      {listToRender === "projects" && <SidebarProjects/>}
      {listToRender === "sprints" && <SidebarSprints/>}
      {/* <GoBackBtn nameArrowBtn={nameArrowBtn} />
      <ProjectsNavList />
      <SprintsNavList />
      <AddTaskBtn nameArrowBtn={nameArrowBtn} addNewProject={add} /> */}
    </aside>
  );
}
