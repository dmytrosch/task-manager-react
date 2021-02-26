import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import IconButton from "../../../common/IconButtons/IconButtons.js";
import EditableInput from "../../../common/EditableInput/EditableInput";
import {
  deleteTask,
  updateTaskName,
  updateTaskTime,
} from "../../../redux/currentSprint/currentSprintOperations";

import { setModalApproveDeleteTask } from "../../../redux/modal/modalAction";

import styles from "./styles.module.css";

export default function SprintItem({ task }) {
  // const { name, ScheduledHours, hoursSpent } = useSelector(getSprintById(id));
  const params = useParams();
  const currentDay = params.day - 1;
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
          viewStyle="taskName"
          inputStyle="taskNameInput"
          rows={2}
          value={task.name}
          button="hide"
          validation={(val) => val.length <= 50}
          onSave={changeName}
        />
        {/* <h2 className={styles.taskName}>{name}</h2> */}
        <div className={styles.div}>
          <p className={styles.text}>Заплановано годин</p>
          <p className={styles.planingHours}>{task.plannedTime}</p>
        </div>
        <div className={styles.div}>
          <p className={styles.text}>Витрачено год/день</p>
          <EditableInput
            type="number"
            button="hide"
            viewStyle="searchName"
            inputStyle="searchInput"
            value={task.spendedTime[currentDay].wastedTime.toString()}
            validationMessage="Будь ласка, введіть число до 3 цифр."
            validation={(val) => val.length <= 3}
            onSave={changeTaskTime}
          />
          {/* <input className={styles.input} placeholder="6"></input> */}
        </div>
        <div className={styles.div}>
          <p className={styles.text}>Витрачено годин</p>
          <p className={styles.spendedHours}>{task.totalWastedTime}</p>
        </div>
        {/* <button
              className={styles.button}
              onClick={() => deleteSprint(id)}
            ></button> */}
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
