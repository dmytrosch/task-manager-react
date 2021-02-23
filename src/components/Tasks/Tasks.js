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
import SearchInput from "../../common/SearchInput/SearchInput";
import Slider from "../../common/Slider/Slider";

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

  const handleSearchInput = (searchRequest) => {
    // TODO: Connect dispatch
    console.log("dispatch", searchRequest);
  };

  const handleSlider = (current) => {
    // TODO: Connect dispatch
    console.log("dispatch", current);
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
          <div>
          <Slider initialCurrent={2} total={11} callback={handleSlider} />
          <span className={style.dateCreation}>2020.02.16</span>
          </div>
          <SearchInput
            customContainerStyles={style.mobileSearchInp}
            callback={handleSearchInput}
          />
        </div>

        <div className={style.sprintNames}>
          <EditableInput
            onSave
            value={name}
            validation={(val) => val.length <= 50}
          />
        </div>
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
          <SearchInput
            customContainerStyles={style.desktopSearchInp}
            callback={handleSearchInput}
          />
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
