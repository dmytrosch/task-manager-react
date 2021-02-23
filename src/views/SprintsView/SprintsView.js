import React, { useState } from "react";
// import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import Sprint from "../../components/Sprint/Sprint";
import SideBar from "../../components/SideBar/SideBar";
import viewStyles from "./SprintsView.module.css";

export default function SprintView() {
  return (
    <MainLayout>
      <div className={viewStyles.view}>
        <SideBar />
        <Sprint />
      </div>
    </MainLayout>
  );
}
