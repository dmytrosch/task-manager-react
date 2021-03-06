import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import animateItem from "../../../styles/animateItem.module.css";

import TaskItem from "./TaskItem";

import { resultTaskArray } from "../../../redux/currentSprint/currentSprintSelectors";
import { searchValue } from "../../../redux/search/searchSelectors";

export default function TasksList({ currentDate, loading, addTask }) {
  const currentTasks = useSelector(resultTaskArray);
  const search = useSelector(searchValue);

  return (!currentTasks && !loading) ||
    (currentTasks.length === 0 && search.length === 0 && !loading) ? (
    <p className={styles.noTasks}>
      У спринта відсутні задачі.{" "}
      <span className={styles.addTaskText} onClick={addTask}>
        Створити задачу
      </span>
    </p>
  ) : currentTasks.length === 0 && search.length !== 0 ? (
    <p>Нічого не знайдено :(</p>
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

TasksList.propTypes = {
  currentDate: PropTypes.number,
  loading: PropTypes.bool,
  addTask: PropTypes.func,
};
