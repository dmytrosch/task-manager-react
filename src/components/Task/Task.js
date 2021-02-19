import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalCreateTask } from "../../redux/modal/modalAction";
import TasksList from "./TasksList";

import ModalCreateTask from "../../components/Modals/ModalComponents/ModalCreateTask";
import MainLayout from "../../components/Layouts/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import IconButton from "../../common/IconButtons";
import Button from "../../common/Button/index";

import style from "./Task.module.css";
import viewStyles from "../../views/SprintsView/SprintsView.module.css";

const getProjectDataById = (projectId) => () => ({
  name: "Project 1",
});

const getSprintIdsByProjectId = (projectId) => () => [
  "id_1",
  "id_2",
  "id_3",
  "id_4",
  "id_5",
  "id_6",
  "id_7",
];

export default function Task({sprintName}) {
  const { name, description } = useSelector(getProjectDataById("projectId"));
  const tasksIds = useSelector(getSprintIdsByProjectId("projectId"));
  const dispatch = useDispatch();
  const openModalTask = () => {
    dispatch(setModalCreateTask(true));
  };

  return (
    <>
      <MainLayout>
        <div className={viewStyles.view}>
          <section>
            <SideBar />

            <ModalCreateTask />
          </section>

          <main className={style.container}>
            <div className={style.ContainerPaginate}>
              <div className={style.paginate}>
                <button className={style.puginateBth}></button>
                <span className={style.paginateSpan}>2</span>
                <span className={style.paginateSpan}>/</span>
                <span className={style.paginateSpan}>12</span>
                <button className={style.puginateBth}></button>
              </div>
              <p className={style.dateCreation}>2020.02.16</p>
            </div>

            <div className={style.containerInput}>
              <IconButton className={style.searchSVG} iconName="search" />
              <input className={style.input} />
            </div>

            <p className={style.sprintNames}>
              Sprint Burndown Chart 1 {sprintName}
              <button className={style.changeTextBtn}></button>
            </p>
            <div className={style.containerButton}>
              <Button
                buttonCustomClass={style.buttonAdd}
                shape="circle"
                onClick={openModalTask}
              ></Button>
              <p className={style.titleButton}>Створити задачу</p>
            </div>

            <div className={style.tableDesctopDescrip}>
              <span className={style.span}>Задача</span>
              <span className={style.span}>
                Заплановано <br /> годин
              </span>
              <span className={style.span}>
                Витрачено
                <br /> год / день
              </span>
              <span className={style.span}>
                Витрачено
                <br /> годин
              </span>
              <div className={style.containerInputDesctop}>
                <IconButton className={style.searchSVG} iconName="search" />
                <input className={style.input} />
              </div>
            </div>
            <section className={style.containerWithTask}>
              <TasksList tasksIds={tasksIds} />
            </section>
          </main>
        </div>
      </MainLayout>{" "}
    </>
  );
}
