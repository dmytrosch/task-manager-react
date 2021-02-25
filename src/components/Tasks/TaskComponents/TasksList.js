import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import animateItem from "../../../styles/animateItem.module.css";

import TaskItem from "./TaskItem";

import { currentSprintSelector } from "../../../redux/currentSprint/currentSprintSelectors";

export default function TasksList() {
  const currentSprint = useSelector(currentSprintSelector);
  console.log(currentSprint);

  return currentSprint.tasks.length === 0 ? (
    <p className={styles.noTasks}>There are not tasks</p>
  ) : (
    <TransitionGroup component="ul" className={styles.list}>
      {currentSprint.tasks.map((item) => (
        <CSSTransition
          timeout={250}
          key={item.id}
          classNames={animateItem}
          unmountOnExit
        >
          <TaskItem key={item.id} task={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
