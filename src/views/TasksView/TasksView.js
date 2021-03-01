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

export default function TaskViews(props) {
  const dispatch = useDispatch();

  const isProjectError = useSelector(isProjectErrorSelector);
  const isSprintError = useSelector(isSprintErrorSelector);

  useEffect(() => {
    document.title = "Задачі";
  }, []);

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
