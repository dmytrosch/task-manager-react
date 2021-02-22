import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalCreateTask,
  setModalChartTable,
} from "../../redux/modal/modalAction";
import TasksList from "./TaskComponents/TasksList";
import ModalCreateTask from "../Modals/ModalComponents/ModalCreateTask";
import SideBar from "../SideBar/SideBar";
import IconButton from "../../common/IconButtons/IconButtons";
import Chart from "../Modals/ModalComponents/ModalChartTable";
import style from "./Tasks.module.css";
import viewStyles from "../../views/SprintsView/SprintsView.module.css";
import EditableInput from "../../common/EditableInput/EditableInput";

const getProjectDataById = (projectId) => () => ({
  name: "Project Ala Carta",
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

export default function Task({ sprintName }) {
  const { name, description } = useSelector(getProjectDataById("projectId"));
  const tasksIds = useSelector(getSprintIdsByProjectId("projectId"));
  const dispatch = useDispatch();
  const openModalTask = () => {
    dispatch(setModalCreateTask(true));
  };
  const openModalChartTable = () => {
    dispatch(setModalChartTable(true));
  };

  return (
    <div className={viewStyles.view}>
      <section>
        <SideBar />

        <ModalCreateTask />

        <Chart />
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
          <div className={style.wrapSearch}>
            <input className={style.searchSubmit} value="#" type="text" />
            <input className={style.search} name="search" type="text" />
          </div>
        </div>

        <p className={style.sprintNames}>
          <EditableInput onSave value={name} />
        </p>
        <div onClick={openModalTask} className={style.containerButton}>
          <IconButton
            iconButtonCustomClass={style.buttonAdd}
            iconName="plus"
            icon="plus"
          />
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
            <div className={style.wrap}>
              <input
                className={style.search}
                name="search"
                type="text"
                maxLength="11"
                placeholder="Пошук..."
              />
              <input className={style.searchSubmit} value="" type="text" />
            </div>
          </div>
        </div>
        <section className={style.containerWithTask}>
          <TasksList tasksIds={tasksIds} />
          <div className={style.button}>
            <IconButton
              buttonCustomClass={style.button}
              iconName="analytica"
              icon="analytica"
              onClick={openModalChartTable}
            ></IconButton>
          </div>
        </section>
      </main>
    </div>
  );
}