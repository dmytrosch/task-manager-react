import React from "react";
import PropTypes from "prop-types";
import styles from "./sideBar.module.css";
import { useParams } from "react-router-dom";
import SidebarProjects from "./SideBarComponents/SidebarProjects.js";
import SidebarSprints from "./SideBarComponents/SidebarSprints";

export default function SideBar() {
  const { sprintId } = useParams();
  const listToRender = sprintId ? "sprints" : "projects";
  return (
    <aside className={styles.aside}>
      {listToRender === "projects" && <SidebarProjects />}
      {listToRender === "sprints" && <SidebarSprints />}
    </aside>
  );
}

SideBar.propTypes = {
  sprintId: PropTypes.string,
};
