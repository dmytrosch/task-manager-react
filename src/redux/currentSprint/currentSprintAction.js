import { createAction } from "@reduxjs/toolkit";

const getCurrentSprintRequest = createAction(
  "currentSprint/getCurrentSprintRequest"
);
const getCurrentSprintSuccess = createAction(
  "currentSprint/getCurrentSprintSuccess"
);
const getCurrentSprintError = createAction(
  "currentSprint/getCurrentSprintError"
);

const createTaskRequest = createAction("currentSprint/createTaskRequest");
const createTaskSuccess = createAction("currentSprint/createTaskSuccess");
const createTaskError = createAction("currentSprint/createTaskError");

const deleteTaskRequest = createAction("currentSprint/deleteTaskRequest");
const deleteTaskSuccess = createAction("currentSprint/deleteTaskSuccess");
const deleteTaskError = createAction("currentSprint/deleteTaskError");

const changeTaskNameRequest = createAction(
  "currentSprint/changeTaskNameRequest"
);
const changeTaskNameSuccess = createAction(
  "currentSprint/changeTaskNameSuccess"
);
const changeTaskNameError = createAction("currentSprint/changeTaskNameError");

const updateTaskTimeRequest = createAction(
  "currentSprint/updateTaskTimeRequest"
);
const updateTaskTimeSuccess = createAction(
  "currentSprint/updateTaskTimeSuccess"
);
const updateTaskTimeError = createAction("currentSprint/updateTaskTimeError");

const searchTaskByNameRequest = createAction(
  "currentSprint/searchTaskByNameRequest"
);
const searchTaskByNameSucces = createAction(
  "currentSprint/searchTaskByNameSucces"
);
const searchTaskByNameError = createAction(
  "currentSprint/searchTaskByNameError"
);

const getTaskbyIdRequest = createAction("currentSprint/getTaskByIdRequest");
const getTaskbyIdSuccess = createAction("currentSprint/getTaskByIdSuccess");
const getTaskbyIdError = createAction("currentSprint/getTaskByIdError");

const currentSprintActions = {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  changeTaskNameRequest,
  changeTaskNameSuccess,
  changeTaskNameError,
  getTaskbyIdRequest,
  getTaskbyIdSuccess,
  getTaskbyIdError,
  updateTaskTimeRequest,
  updateTaskTimeSuccess,
  updateTaskTimeError,
  searchTaskByNameRequest,
  searchTaskByNameSucces,
  searchTaskByNameError,
  getCurrentSprintRequest,
  getCurrentSprintSuccess,
  getCurrentSprintError,
};

export default currentSprintActions;
