import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getByIdSelector } from "../../redux/projects/projectSelectors";
import classNames from "classnames";
import styles from "./sideBar.module.css";
import transition from "./sideBarTransition.module.css";

export default function LinkRouter({ projId, visibleTab }) {
  const { name, id } = useSelector(getByIdSelector(projId));
  const [wobble, setWobble] = React.useState(0);
  return (
    <>
      <NavLink
        to={`/projects/${id}/sprints`}
        onClick={() => setWobble(1)}
        onAnimationEnd={() => setWobble(0)}
        className={styles.navLink}
      >
        <p
          wobble={wobble}
          className={
            visibleTab === id
              ? classNames(styles.square, styles.squareActive, transition.image)
              : styles.square
          }
        ></p>

        <p className={styles.taskTitle}>
          {name.length > 30 ? name.slice(0, 30) + "..." : name}
        </p>
      </NavLink>
    </>
  );
}
