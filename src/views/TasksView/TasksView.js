import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import Task from "../../components/Tasks/Tasks";
import viewStyles from "./TaskView.module.css";

import {
  isProjectErrorSelector,
  isSprintErrorSelector,
} from "../../redux/errors/errorsSelectors";
import { makeAlertNotification } from "../../redux/notifications/notificationOperations";
import {
  resetProjectError,
  resetSprintError,
} from "../../redux/errors/errorsActions";
import useTitle from "../../hooks/useTitle";

export default function TaskViews() {
  const dispatch = useDispatch();

  const isProjectError = useSelector(isProjectErrorSelector);
  const isSprintError = useSelector(isSprintErrorSelector);

  useTitle("Задачі")

  useEffect(() => {
    return () => {
      if (isProjectError) {
        dispatch(resetProjectError());
        dispatch(makeAlertNotification("Такого проєкту не існує"));
      }
      if (isSprintError) {
        dispatch(resetSprintError());
        dispatch(makeAlertNotification("Такого спринта не існує"));
      }
    };
  });

  const { projectId, sprintId } = useParams();

  return (
    <MainLayout>
      <div className={viewStyles.view}>
        <SideBar />
        <Task sprintId={sprintId} />
      </div>
      {isProjectError && <Redirect to="/" />}
      {isSprintError && <Redirect to={`/projects/${projectId}/sprints`} />}
    </MainLayout>
  );
}
