import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Sprint from "../../components/Sprints/Sprints";
import SideBar from "../../components/SideBar/SideBar";
import viewStyles from "./SprintsView.module.css";
import { isProjectErrorSelector } from "../../redux/errors/errorsSelectors";
import { makeAlertNotification } from "../../redux/notifications/notificationOperations";
import { resetProjectError } from "../../redux/errors/errorsActions";

export default function SprintView() {
  const dispatch = useDispatch();

  const isProjectError = useSelector(isProjectErrorSelector);
  useEffect(() => {
    return () => {
      if (isProjectError) {
        dispatch(resetProjectError());
        dispatch(makeAlertNotification("Такого проєкту не існує"));
      }
    };
  });

  const { projectId } = useParams();

  return (
    <MainLayout>
      <div className={viewStyles.view}>
        <SideBar />
        <Sprint projectId={projectId} />
      </div>
      {isProjectError && <Redirect to="/" />}
    </MainLayout>
  );
}
