import React, { useState } from "react";
import {useRouteMatch} from "react-router-dom";
import { useSelector } from "react-redux";
import {getAllProjectsSelector} from "../../redux/projects/projectSelectors"

// import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import Sprint from "../../components/Sprint/Sprint";
import SideBar from "../../components/SideBar/SideBar";
import viewStyles from "./SprintsView.module.css";

export default function SprintView() {
  const projectId = useRouteMatch().params.projectId;
  const projects = useSelector(getAllProjectsSelector);
  const isOwner = projects.map((proj) => proj.isOwner);

  return (
    <MainLayout>
      <div className={viewStyles.view}>
        <SideBar />
        <Sprint projectId={projectId} isOwner={isOwner} />
      </div>
    </MainLayout>
  );
}
