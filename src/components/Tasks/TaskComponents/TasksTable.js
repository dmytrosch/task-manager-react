import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import TasksList from "./TasksList";
import SearchInput from "../../../common/SearchInput/SearchInput";

import searchActions from '../../../redux/search/searchActions';
import {search} from '../../../redux/currentSprint/currentSprintSelectors';

// import taskFilterActions from '...' --- handleSearchInput

import styles from "./TasksTable.module.css";

const tasksIds = ["id_1", "id_2", "id_3", "id_4", "id_5", "id_6", "id_7"];

export default function TasksTable({ currentDate }) {
  const dispatch = useDispatch();




  // TODO: Connect redux
  const handleSearchInput = (searchRequest) => {
    console.log("search request", searchRequest);

    dispatch(searchActions.setSearchValue(searchRequest))

  }
    

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
      <TasksList currentDate={currentDate} />
    </div>
  );
}
