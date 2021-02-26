import React, { useState } from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";

import styles from "./addTask.module.css";
import { createTask } from "../../../../redux/currentSprint/currentSprintOperations";

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { useDispatch } from "react-redux";

export default function AddTask({ onClose }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  // const params = useParams();

  // const dispatch = useDispatch();

  // const sprintId = params.sprintId;

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      name,
      duration,
    };
    // dispatch(createTask(sprintId, task));

    // TODO: Connect to Redax
    console.log(task);
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Створення задачі</h2>
      <div className={styles.inputsContainer}>
        <Input
          type="text"
          placeholder="Назва задачі"
          value={name}
          onChange={(e) => setName(e.target.value)}
          inputClassNames={classNames(styles.input, styles.inputName)}
        />

        <Input
          type="number"
          placeholder="Заплановано годин"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          inputClassNames={styles.input}
        />
      </div>

      <div className={styles.control}>
        <Button
          buttonCustomClass={styles.submitBtn}
          type="submit"
          onClick={handleSubmit}
        >
          Готово
        </Button>
        <Button
          buttonCustomClass={styles.cancelBtn}
          type="button"
          onClick={onClose}
        >
          Відміна
        </Button>
      </div>
    </form>
  );
}
