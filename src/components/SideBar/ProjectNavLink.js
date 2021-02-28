import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getByIdSelector } from "../../redux/projects/projectSelectors";
import { getProjectById } from "../../redux/projects/projectOperations";
import classNames from "classnames";
import styles from "./sideBar.module.css";
import transition from "./sideBarTransition.module.css";

export default function LinkRouter({ projId, visibleTab }) {
  const { name, id } = useSelector(getByIdSelector(projId));
  const [wobble, setWobble] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectById(projId));
  }, [projId]);
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
