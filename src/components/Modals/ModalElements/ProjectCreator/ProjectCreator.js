import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../../../redux/projects/projectOperations";
import style from "./ProjectCreator.module.css";
import Button from "../../../../common/Button/Button";

import Input from "../../../../common/Input/Input";

export default function ProjectCreator({ onClose }) {
  const [nameProject, setNameProject] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject({ name: nameProject, description }));
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
          value={nameProject}
        />

        <Input
          type="text"
          error={false}
          inputClassNames={style.descr}
          label="Опис проекту"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
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
