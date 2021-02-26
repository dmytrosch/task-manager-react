import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import IconButton from "../../../common/IconButtons/IconButtons.js";
import EditableInput from "../../../common/EditableInput/EditableInput";
import {
  deleteTask,
  updateTaskName,
} from "../../../redux/currentSprint/currentSprintOperations";

import styles from "./styles.module.css";

export default function SprintItem({ task }) {
  // const { name, ScheduledHours, hoursSpent } = useSelector(getSprintById(id));
  const params = useParams();
  const currentDay = params.day;
  const sprintId = params.sprintId;
  const [taskName, setTaskName] = useState(task.name);
  const dispatch = useDispatch();

  const deleteSprint = (id) => dispatch(deleteTask(sprintId, id));

  const changeName = (e) => {
    e.preventDefault();
    const newTaskName = {
      name: taskName,
    };
    dispatch(updateTaskName(task.id, newTaskName));
  };

  return (
    <>
      <li className={styles.container}>
        <EditableInput
          viewStyle="taskName"
          inputStyle="taskNameInput"
          rows={2}
          value={taskName}
          button="hide"
          validation={(val) => val.length <= 50}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
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
            value="6"
            validationMessage="Будь ласка, введіть число до 3 цифр."
            validation={(val) => val.length <= 3}
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
