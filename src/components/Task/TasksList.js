import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./styles.module.css";
import animateItem from "../../utils/animateItem.module.css";

import TaskItem from "./TaskItem";

export default function TasksList({ tasksIds }) {
  return tasksIds.length === 0 ? (
    <p className={styles.noTasks}>There are not tasks</p>
  ) : (
    <TransitionGroup component="ul" className={styles.list}>
      {tasksIds.map((id) => (
        <CSSTransition
          timeout={250}
          key={id}
          classNames={animateItem}
          unmountOnExit
        >
          <TaskItem key={id} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
