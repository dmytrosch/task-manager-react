import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getByIdSelector } from "../../../redux/projects/projectSelectors";
import classNames from "classnames";
import styles from "../sideBar.module.css";
import transition from "../sideBarTransition.module.css";

export default function LinkRouter({ projId, visibleTab }) {
  const project = useSelector(getByIdSelector(projId));
  const { name, id, color } = project;
  const [wobble, setWobble] = useState(0);
  const isActiveSquare = visibleTab === id;
  return (
    <NavLink
      to={`/projects/${id}/sprints`}
      onClick={() => setWobble(1)}
      onAnimationEnd={() => setWobble(0)}
      className={styles.navLink}
    >
      <p
        wobble={wobble}
        className={classNames(styles.square, {
          [styles.squareActive]: isActiveSquare,
          [transition.image]: isActiveSquare,
        })}
        style={{ backgroundColor: color }}
      ></p>

      <p className={styles.taskTitle}>
        {name.length > 30 ? name.slice(0, 30) + "..." : name}
      </p>
    </NavLink>
  );
}
