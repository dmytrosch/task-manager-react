import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClientWidth } from "../../redux/clientWidth/clientWidthAction";
import { setModalCreateTask } from "../.././redux/modal/modalAction";
import style from "./TaskView.module.css";

import ModalCreateTask from "../../components/Modals/ModalComponents/ModalCreateTask";
import MainLayout from "../../components/Layouts/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import Task from "../../components/Task/Task";
import IconButton from "../../common/IconButtons/index";
// import Button from "../../common/Button/index";


import viewStyles from "../SprintsView/SprintsView.module.css";

export default function TaskViews({ sprintName }) {
  const dispatch = useDispatch();
  const openModalTask = () => {
    dispatch(setModalCreateTask(true));
  };

  return (
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
            {/* <IconButton className={style.searchSVG} iconName="search" /> */}
            <IconButton 
              // className={style.searchSVG} 
              iconName="search" 
              icon="search"/>
            <input className={style.input} />
          </div>

          <p className={style.sprintNames}>
            Sprint Burndown Chart 1 {sprintName}
            <IconButton iconName="pen" icon="pen" 
            iconButtonCustomClass={style.changeTextBtn}/>
            {/* <button className={style.changeTextBtn}></button> */}
          </p>
          <div className={style.containerButton}>
            {/* <Button
              buttonCustomClass={style.buttonAdd}
              shape="circle"
              onClick={openModalTask}
            ></Button> */}
            <IconButton           
            // iconButtonCustomClass={style.buttonAdd}           
            iconName="plus" icon="plus"          
            onClick={openModalTask} />
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
            <span className={style.span}>Витрачено<br/> годин</span>
            {/* <div className={style.containerInputDesctop}> */}
              <IconButton 
              // className={style.searchSVG} 
              iconName="search" 
              icon="search"/>
              {/* <input className={style.input} /> */}
            {/* </div> */}
          </div>
          <section className={style.containerWithTask}>
            <Task />
          </section>
        </main>
      </div>
    </MainLayout>
  );
}
