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
    const project = {
      name: nameProject,
      description
    };
    dispatch(addProject(project));
    onClose();
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
    if (e.target.value.length > 50) {
      return setErrorLengthDescription("Максимальна кількість символів 50");
    }
    setErrorLengthDescription(null);
  };

  return (
    <section className={style.container}>
      <div className={style.form}>
      <h2 className={style.title}>Створення проєкту</h2>
      <form onSubmit={handlerSubmit}>
      <div className={style.inputSprintContainer}>
        <Input
          type="text"
          error={errorLengthName}
          errorMessage={errorLengthName}
          label="Назва проєкту"
          onChange={handlerNameProjest}
          value={nameProject}
          required
        />
       </div> 

        <Input
          type="text"
          error={errorLengthDescription}
          errorMessage={errorLengthDescription}
          label="Опис проєкту"
          onChange={handlerNameDescription}
          value={description}
          required
        />
        <div className={style.btnWrapper}>
          <Button type="submit" shape="oval">
            Готово
          </Button>
        </div>
      </form>
      <span onClick={onClose} className={style.subtitle}>
      Скасувати
      </span>
      </div>
    </section>
  );
}
