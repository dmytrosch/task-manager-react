import React, { useState } from "react";
import classNames from "classnames";

import styles from "./addTask.module.css";
import { createTask } from "../../../../redux/currentSprint/currentSprintOperations";
import { isModalCreateTask } from "../../../../redux/modal/modalSelectors";

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";

export default function AddTask({ onClose }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const sprintId = useSelector(isModalCreateTask);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      name,
      plannedTime: duration,
    };
    dispatch(createTask(sprintId, task));

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
          required
        />

        <Input
          type="number"
          placeholder="Заплановано годин"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          inputClassNames={styles.input}
          required
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
