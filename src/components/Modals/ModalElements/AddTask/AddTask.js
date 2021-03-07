import React, { useState } from "react";
import classNames from "classnames";

import styles from "./addTask.module.css";
import { createTask } from "../../../../redux/currentSprint/currentSprintOperations";
import { isModalCreateTask } from "../../../../redux/modal/modalSelectors";

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

export default function AddTask({ onClose }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [nameError, setNameError] = useState(null);
  const [durationError, setDurationError] = useState(null);
  const sprintId = useSelector(isModalCreateTask);
  const dispatch = useDispatch();
  const inputNameHandler = (e) => {
    const value = e.target.value;
    setName(e.target.value);
    if (value.length > 30) {
      setNameError("Максимальна кількість символів 30");
      return;
    }
    setNameError(null);
  };
  const inputDurationHandler = (e) => {
    const value = e.target.value;
    setDuration(e.target.value);
    if (!validator.isInt(value)) {
      setDurationError("Введіть число");
      return;
    }
    if (Number(value) > 500) {
      setDurationError("Занад-то велика кількість годин");
      return;
    }
    setDurationError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (durationError || nameError) return;
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
        <div className={styles.inputSprintContainer}>
          <Input
            type="text"
            label="Назва задач"
            value={name}
            error={nameError}
            errorMessage={nameError}
            onChange={inputNameHandler}
            inputClassNames={styles.inputSprint}
            required
          />
        </div>

        <Input
          type="text"
          label="Заплановано годин"
          value={duration}
          error={durationError}
          errorMessage={durationError}
          onChange={inputDurationHandler}
          inputClassNames={styles.inputSprint}
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
          Скасувати
        </Button>
      </div>
    </form>
  );
}
