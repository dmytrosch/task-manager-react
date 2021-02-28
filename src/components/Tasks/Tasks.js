import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../../common/IconButtons/IconButtons";
import Slider from "../../common/Slider/Slider";
import SearchInput from "../../common/SearchInput/SearchInput";
import EditableInput from "../../common/EditableInput/EditableInput";
import TasksTable from "./TaskComponents/TasksTable";

import * as modalAction from "../../redux/modal/modalAction";
import * as sprintSelector from "../../redux/sprints/sprintsSelectors";
import * as currentSprintOperations from "../../redux/currentSprint/currentSprintOperations";
import { currentSprintSelector } from "../../redux/currentSprint/currentSprintSelectors";
import { updateSprintName } from "../../redux/sprints/sprintsOperations";
import { currentTasksSelector } from "../../redux/currentSprint/currentSprintSelectors";
import { getCurrentTaskDay } from "../../redux/currentSprint/currentSprintOperations";

import styles from "./Tasks.module.css";
import {search} from "../../redux/currentSprint/currentSprintSelectors";

import searchActions from "../../redux/search/searchActions";
import resultTaskArray from '../../redux/currentSprint/currentSprintSelectors';

export default function Tasks({ sprintId }) {
  const dispatch = useDispatch();
  const params = useParams();
  const currentSprint = useSelector(currentSprintSelector);
  const task = useSelector(currentTasksSelector);
  let sprintDuration;
  const [currentDate, setCurrentDate] = useState(1);
  const currentDay = currentDate - 1;

  if (task) {
    task.map((item) => {
      sprintDuration = item.spendedTime.length;
    });
  }


  useEffect(() => {
    dispatch(currentSprintOperations.getCurrentSprint(params.sprintId));
  }, []);

  
  const handleSearchInput = (searchRequest) => {
    
      const searchResult = task.filter(item => {
      const variable = item.name.includes(searchRequest)
      return variable
    })

    dispatch(searchActions.setSearchValue(searchRequest));
  
    // console.log(searchResult);
    // return searchResult;
  };


  const handleSlider = (current) => {
    setCurrentDate(current);
  };

  const changeSprintName = (value) => {
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
    <div className={styles.container}>
      <div className={styles.taskControl}>
        <div className={styles.sliderContainer}>
          <Slider
            initialCurrent={1}
            total={sprintDuration}
            callback={handleSlider}
          />
          {task && task[0]?.spendedTime && <span className={styles.date}>{task[0].spendedTime[currentDay].date.toString()}</span>}
        </div>
        <SearchInput
          customContainerStyles={styles.mobileSearchInp}
       
           callback={handleSearchInput} 
           searchValue={search}
        />
      </div>
      <div className={styles.sprint}>
        <div className={styles.sprintTitle}>
          <EditableInput onSave={changeSprintName} value={currentSprint.name} />
        </div>
        <div onClick={openModalTask} className={styles.addSprintContainer}>
          <IconButton iconName="plus" icon="plus" />
          <p className={styles.titleButton}>Створити задачу</p>
        </div>
      </div>

      <IconButton
        iconButtonCustomClass={styles.analyticaBtn}
        iconName="analytica"
        icon="analytica"
        onClick={openModalChartTable}
      ></IconButton>

      <TasksTable currentDate={currentDate}/>
    </div>
  );
}
