import React from "react";
import { useSelector } from "react-redux";

import TasksList from "./TasksList";

// import styles from "./Sprint.module.css";

const getProjectDataById = (projectId) => () => ({
  name: "Project 1",
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

export default function Task() {
  const { name, description } = useSelector(getProjectDataById("projectId"));
  const tasksIds = useSelector(getSprintIdsByProjectId("projectId"));

  return <TasksList tasksIds={tasksIds} />;
}
