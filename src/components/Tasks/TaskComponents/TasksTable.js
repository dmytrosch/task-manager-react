import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import TasksList from "./TasksList";
import SearchInput from "../../../common/SearchInput/SearchInput";

import searchActions from "../../../redux/search/searchActions";
import { search } from "../../../redux/currentSprint/currentSprintSelectors";

import styles from "./TasksTable.module.css";

export default function TasksTable({ currentDate, loading, addTask }) {
  const dispatch = useDispatch();

  const handleSearchInput = (searchRequest) => {
    dispatch(searchActions.setSearchValue(searchRequest));
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableDesctopDescrip}>
        <span className={styles.onlyDesktop}>Задача</span>
        <span className={styles.span}>
          Заплановано <br /> годин
        </span>
        <span className={styles.span}>
          Витрачено
          <br /> год / день
        </span>
        <span className={styles.span}>
          Витрачено
          <br /> годин
        </span>
        <SearchInput
          customContainerStyles={styles.desktopSearchInp}
          callback={handleSearchInput}
          searchValue={search}
        />
      </div>
      <TasksList
        currentDate={currentDate}
        loading={loading}
        addTask={addTask}
      />
    </div>
  );
}

TasksTable.proprTypes = {
  currentDate: PropTypes.number,
  loading: PropTypes.bool,
  addTask: PropTypes.func,
};
