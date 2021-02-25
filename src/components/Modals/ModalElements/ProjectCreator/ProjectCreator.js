import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../../../redux/projects/projectOperations";
import style from "./ProjectCreator.module.css";
import Button from "../../../../common/Button/Button";

import Input from "../../../../common/Input/Input";

export default function ProjectCreator({ onClose }) {
  const [nameProject, setNameProject] = useState("");
  const [description, setDescription] = useState("");
  const [errorLengthName, setErrorLengthName] = useState("");
  const [errorLengthDescription, setErrorLengthDescription] = useState("");
  const dispatch = useDispatch();
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (errorLengthName || errorLengthDescription) return;
    dispatch(addProject({ name: nameProject, description }));
    setNameProject("");
    setDescription("");
  };
  const handlerNameProjest = (e) => {
    setNameProject(e.target.value);
    if (e.target.value.length > 30) {
      return setErrorLengthName("Максимальна кількість символів 30");
    }
    setErrorLengthName(null);
  };
  const handlerNameDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length > 60) {
      return setErrorLengthDescription("Максимальна кількість символів 60");
    }
    setErrorLengthDescription(null);
  };

  return (
    <section className={style.container}>
      <h2 className={style.title}>Створення проекту</h2>
      <form onSubmit={handlerSubmit}>
        <Input
          type="text"
          error={errorLengthName}
          inputClassNames={style.input}
          label="Назва проекту"
          onChange={handlerNameProjest}
          value={nameProject}
        />

        <Input
          type="text"
          error={errorLengthDescription}
          inputClassNames={style.descr}
          label="Опис проекту"
          onChange={handlerNameDescription}
          value={description}
        />
        <label
          className={
            errorLengthName || errorLengthDescription
              ? style.label
              : style.visuallyHidden
          }
          htmlFor="confirmedPassword"
        >
          {errorLengthName}
        </label>

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
