import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import animateItem from "../../../styles/animateItem.module.css";

import TaskItem from "./TaskItem";

import {
  currentSprintSelector,
  currentTasksSelector,
  resultTaskArray,
} from "../../../redux/currentSprint/currentSprintSelectors";

export default function TasksList({ currentDate }) {
  const currentTasks = useSelector(resultTaskArray);

  // const data = searchRes ? searchRes : currentTasks

  console.log(resultTaskArray);

  return !currentTasks || currentTasks.length === 0 ? (
    <p className={styles.noTasks}>There are not tasks</p>
  ) : (
    <TransitionGroup component="ul" className={styles.list}>
      {currentTasks.map((item) => (
        <CSSTransition
          timeout={250}
          key={item.id}
          classNames={animateItem}
          unmountOnExit
        >
          <TaskItem key={item.id} task={item} currentDate={currentDate} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
