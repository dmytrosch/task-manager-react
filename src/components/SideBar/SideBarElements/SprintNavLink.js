import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from "../sideBar.module.css";
import transition from "../sideBarTransition.module.css";
import { byIdSelector } from "../../../redux/sprints/sprintsSelectors";
export default function LinkRouter({ sprintId, projectId, visibleTab }) {
  const { name, id } = useSelector(byIdSelector(sprintId));
  const [wobble, setWobble] = useState(0);

  return (
    <>
      <NavLink
        to={`/projects/${projectId}/sprints/${id}/tasks/1`}
        onClick={() => setWobble(1)}
        onAnimationEnd={() => setWobble(0)}
        className={styles.navLink}
      >
        <p
          style={{ backgroundColor: "white" }}
          wobble={wobble}
          className={
            visibleTab === id
              ? classNames(styles.square, styles.squareActive, transition.image)
              : styles.square
          }
        ></p>

        <p className={styles.taskTitle}>
          {name && name.length > 30 ? name.slice(0, 30) + "..." : name}
        </p>
      </NavLink>
    </>
  );
}
