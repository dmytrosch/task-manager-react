import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import IconButton from "../../common/IconButtons/IconButtons";
import Slider from "../../common/Slider/Slider";
import SearchInput from "../../common/SearchInput/SearchInput";
import EditableInput from "../../common/EditableInput/EditableInput";
import TasksTable from "./TaskComponents/TasksTable";
import Loader from "../Loaders/LoaderForComponents/LoaderForComponents";
import * as modalAction from "../../redux/modal/modalAction";
import * as currentSprintOperations from "../../redux/currentSprint/currentSprintOperations";
import { currentSprintSelector } from "../../redux/currentSprint/currentSprintSelectors";
import { updateSprintName } from "../../redux/sprints/sprintsOperations";
import { currentTasksSelector } from "../../redux/currentSprint/currentSprintSelectors";

import styles from "./Tasks.module.css";
import {
  isTasksLoadingSelector,
  isSprintsLoadingSelector,
} from "../../redux/loading/loadingSelector";
import { searchSelector } from "../../redux/currentSprint/currentSprintSelectors";

import searchActions from "../../redux/search/searchActions";
import useTitle from "../../hooks/useTitle";

export default function Tasks({ sprintId }) {
  const dispatch = useDispatch();
  const params = useParams();
  const currentSprint = useSelector(currentSprintSelector);
  const tasks = useSelector(currentTasksSelector);
  const tasksLoading = useSelector(isTasksLoadingSelector);
  const sprintsLoading = useSelector(isSprintsLoadingSelector);
  const isLoading = tasksLoading || sprintsLoading;
  const [currentDate, setCurrentDate] = useState(1);
  const currentDay = currentDate - 1;
  
  useTitle(`${currentSprint.name}. Задачі`);

  useEffect(() => {
    dispatch(currentSprintOperations.getCurrentSprint(sprintId));
  }, [sprintId]);

  const handleSearchInput = (searchRequest) => {
    dispatch(searchActions.setSearchValue(searchRequest));
  };

  const handleSlider = (current) => {
    setCurrentDate(current);
  };

  const changeSprintName = (value) => {
    if (value === currentSprint.name) return;
    const newSprintName = {
      name: value,
    };

    dispatch(updateSprintName(params.sprintId, newSprintName));
  };

  const openModalTask = () =>
    dispatch(modalAction.setModalCreateTask(currentSprint.id));
  const openModalChartTable = () =>
    dispatch(modalAction.setModalChartTable(true));
  return (
    <Loader loading={isLoading}>
      <div className={styles.container}>
        <div className={styles.taskControl}>
          {tasks.length > 0 && (
            <>
              <div className={styles.sliderContainer}>
                <Slider
                  initialCurrent={1}
                  total={currentSprint.timeDifference}
                  callback={handleSlider}
                />
                {tasks && tasks[0]?.spendedTime && (
                  <span className={styles.date}>
                    {tasks[0].spendedTime[currentDay].date.toString()}
                  </span>
                )}
              </div>
              <SearchInput
                customContainerStyles={styles.mobileSearchInp}
                callback={handleSearchInput}
                searchValue={searchSelector}
              />
            </>
          )}
        </div>
        <div className={styles.sprint}>
          <div className={styles.sprintTitle}>
            <EditableInput
              onSave={changeSprintName}
              value={currentSprint.name}
              disable={!currentSprint.isOwner}
            />
          </div>
          <div onClick={openModalTask} className={styles.addSprintContainer}>
            <IconButton iconName="plus" icon="plus" />
            <p className={styles.titleButton}>Створити задачу</p>
          </div>
        </div>
        {tasks.length > 0 && (
          <IconButton
            iconButtonCustomClass={styles.analyticaBtn}
            iconName="analytica"
            icon="analytica"
            onClick={openModalChartTable}
          />
        )}

        <TasksTable
          currentDate={currentDate}
          loading={isLoading}
          addTask={openModalTask}
        />
      </div>
    </Loader>
  );
}

Tasks.proprTypes = {
  sprintId: PropTypes.string,
};
