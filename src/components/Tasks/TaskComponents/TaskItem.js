import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import IconButton from "../../../common/IconButtons/IconButtons.js";
import EditableInput from "../../../common/EditableInput/EditableInput";
import {
  deleteTask,
  updateTaskName,
  updateTaskTime,
} from "../../../redux/currentSprint/currentSprintOperations";

import styles from "./styles.module.css";

export default function SprintItem({ task, currentDate }) {
  const params = useParams();
  const currentDay = currentDate - 1;
  const sprintId = params.sprintId;
  const dispatch = useDispatch();

  const deleteSprint = (id) => dispatch(deleteTask(sprintId, id));

  const changeName = (value) => {
    const newTaskName = {
      name: value,
    };
    dispatch(updateTaskName(task.id, newTaskName));
  };
  const changeTaskTime = (value) => {
    const newHours = {
      hours: Number(value),
    };
    dispatch(updateTaskTime(task.id, currentDay, newHours));
  };

  return (
    <>
      <li className={styles.container}>
        <EditableInput
          viewClassName="taskName"
          inputClassName="taskNameInput"
          rows={2}
          value={task.name}
          button="hide"
          validation={(val) => val.length <= 50}
          onSave={changeName}
        />

        <div className={styles.div}>
          <p className={styles.text}>Заплановано годин</p>
          <p className={styles.planingHours}>{task.plannedTime}</p>
        </div>
        <div className={styles.div}>
          <p className={styles.text}>Витрачено год/день</p>
          <EditableInput
            type="number"
            button="hide"
            viewClassName="searchName"
            inputClassName="searchInput"
            value={task.spendedTime[currentDay].wastedTime.toString()}
            validationMessage="Будь ласка, введіть число до 3 цифр."
            validation={(val) => val.length <= 3}
            onSave={changeTaskTime}
          />
        </div>
        <div className={styles.div}>
          <p className={styles.text}>Витрачено годин</p>
          <p className={styles.spendedHours}>{task.totalWastedTime}</p>
        </div>

        <IconButton
          iconButtonCustomClass={styles.button}
          iconName="greyBin"
          icon="greyBin"
          onClick={() => deleteSprint(task.id)}
        />
      </li>
    </>
  );
}
