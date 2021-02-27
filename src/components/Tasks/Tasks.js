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

import styles from "./Tasks.module.css";

export default function Task({ sprintId }) {
  const dispatch = useDispatch();
  const params = useParams();
  const currentSprint = useSelector(currentSprintSelector);
  const task = useSelector(currentTasksSelector);
  let sprintDuration;
  // let day;
  console.log("task", task);

  if (task) {
    task.map((item) => {
      const taskLength = item.spendedTime.length;
      sprintDuration = taskLength;
    });
  }

  useEffect(() => {
    dispatch(currentSprintOperations.getCurrentSprint(params.sprintId));
  }, []);
  const handleSearchInput = (searchRequest) => {
    // TODO: Connect dispatch

    console.log("dispatch", searchRequest);
  };

  const handleSlider = (current) => {
    // if (task) {
    //   task.map((item) => {
    //     const taskDay = item.spendedTime;
    //     taskDay.map((item) => {
    //       if (item.id + 1 === current) {
    //         day = item.id;
    //       }
    //     });
    //   });
    // }
    // console.log(day + 1);
    params.day = current.toString();
    console.log(params);

    console.log("dispatch", current);
  };

  const changeSprintName = (value) => {
    const newSprintName = {
      name: value,
    };

    dispatch(updateSprintName(params.sprintId, newSprintName));
  };

  const openModalTask = () => dispatch(modalAction.setModalCreateTask(true));
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
          <span className={styles.date}>2020.02.16</span>
        </div>
        <SearchInput
          customContainerStyles={styles.mobileSearchInp}
          callback={handleSearchInput}
        />
      </div>
      <div className={styles.sprint}>
        <p className={styles.sprintTitle}>
          <EditableInput onSave={changeSprintName} value={currentSprint.name} />
        </p>
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

      <TasksTable />
    </div>
  );
}
