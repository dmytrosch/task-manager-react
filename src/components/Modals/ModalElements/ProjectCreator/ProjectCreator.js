import React, { useState, useDispatch } from "react";
import style from "./ProjectCreator.module.css";
import Button from "../../../../common/Button/Button";

import Input from '../../../../common/Input/Input';

export default function ProjectCreator({ onClose }) {
  const [nameProject, setNameProject] = useState("");
  const [description, setDescription] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    setNameProject("");
    setDescription("");
  };

  return (
    <section className={style.container}>
      <h2 className={style.title}>Створення проекту</h2>
      <form onSubmit={handlerSubmit}>

        <Input
          type="text"
          error={false}
          inputClassNames={style.input}
          label="Назва проекту"
          onChange={(e) => setNameProject(e.target.value)}
        />

        <Input
          type="text"
          error={false}
          inputClassNames={style.descr}
          label="Опис проекту"
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className={style.btnWrapper}>
          <Button type="submit" shape="oval">
            Готово
        </Button>
        </div>

      </form>
      <span onClick={onClose} className={style.subtitle}>
        Відміна
      </span>
    </section>
  );
}
