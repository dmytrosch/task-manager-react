import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import Task from "../../components/Tasks/Tasks";
import viewStyles from "./TaskView.module.css";

export default function TaskViews(props) {
  useEffect(() => {
    document.title = "Задачі";
  }, []);
  const sprintId = props.match.params.sprintId;
  return (
    <MainLayout>
      <div className={viewStyles.view}>
        <SideBar />
        <Task sprintId={sprintId} />
      </div>
    </MainLayout>
  );
}
