import React, { useState } from "react";
import classNames from "classnames";

import styles from "./addTask.module.css";

import Input from "../../common/Input/index";
import Button from "../../common/Button/index";

export default function AddTask({ onClose }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      name,
      duration,
    };
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
        <Button buttonCustomClass={styles.submitBtn} type="submit">
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
