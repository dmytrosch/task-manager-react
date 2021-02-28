import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Sprint from "../../components/Sprints/Sprints";
import SideBar from "../../components/SideBar/SideBar";
import viewStyles from "./SprintsView.module.css";

export default function SprintView() {
  useEffect(() => {
    document.title = "Спринти";
  }, []);
  const projectId = useRouteMatch().params.projectId;
  return (
    <MainLayout>
      <div className={viewStyles.view}>
        <SideBar />
        <Sprint projectId={projectId} />
      </div>
    </MainLayout>
  );
}
