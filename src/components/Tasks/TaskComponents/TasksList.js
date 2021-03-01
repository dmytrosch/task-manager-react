import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import animateItem from "../../../styles/animateItem.module.css";

import TaskItem from "./TaskItem";

import {
  resultTaskArray,
} from "../../../redux/currentSprint/currentSprintSelectors";

export default function TasksList({ currentDate, loading, addTask }) {
  const currentTasks = useSelector(resultTaskArray);

  return !currentTasks || currentTasks.length === 0 ? (
    !loading && (
      <p className={styles.noTasks}>
        У спринта відсутні задачі.{" "}
        <span className={styles.addTaskText} onClick={addTask}>
          Створити задачу
        </span>
      </p>
    )
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
