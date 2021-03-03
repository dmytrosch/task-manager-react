import React from "react";
import styles from "./sideBar.module.css";
import { useParams } from "react-router-dom";
import SidebarProjects from './SideBarComponents/SidebarProjects.js';
import SidebarSprints from "./SideBarComponents/SidebarSprints";

export default function SideBar() {
  const {day: taskDay} = useParams();
  const listToRender = taskDay ? "sprints" : "projects";
  return (
    <aside className={styles.aside}>
      {listToRender === "projects" && <SidebarProjects/>}
      {listToRender === "sprints" && <SidebarSprints/>}
    </aside>
  );
}
