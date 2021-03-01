import { pathOr } from "ramda";
import action from "./currentSprintAction";

import * as send from "../../utils/taskManagerAPI";

export const createTask = (sprintId, task) => (dispatch) => {
  dispatch(action.createTaskRequest());
  send
    .addTask(sprintId, task)
    .then((response) => dispatch(action.createTaskSuccess(response.data)))
    .catch((err) =>
      dispatch(action.createTaskError(pathOr("", ["response", "status"], err)))
    );
};

export const deleteTask = (sprintId, taskId) => (dispatch) => {
  dispatch(action.deleteTaskRequest());
  send
    .deleteTask(sprintId, taskId)
    .then(() => dispatch(action.deleteTaskSuccess(taskId)))
    .catch((err) =>
      dispatch(action.deleteTaskError(pathOr("", ["response", "status"], err)))
    );
};

export const updateTaskName = (taskId, name) => (dispatch) => {
  dispatch(action.changeTaskNameRequest());
  send
    .updateTaskName(taskId, name)
    .then((response) => dispatch(action.changeTaskNameSuccess(response.data)))
    .catch((err) =>
      dispatch(
        action.changeTaskNameError(pathOr("", ["response", "status"], err))
      )
    );
};

export const updateTaskTime = (taskId, dateId, hours) => (dispatch) => {
  dispatch(action.updateTaskTimeRequest());
  send
    .updateTaskTime(taskId, dateId, hours)
    .then((response) => dispatch(action.updateTaskTimeSuccess(response.data)))
    .catch((err) =>
      dispatch(
        action.updateTaskTimeError(pathOr("", ["response", "status"], err))
      )
    );
};

export const searchTaskByName = (sprintId, query) => (dispatch) => {
  dispatch(action.searchTaskByNameRequest());
  send
    .searchTasksByName(sprintId, query)
    .then((response) => dispatch(action.searchTaskByNameSucces(response.data)))
    .catch((err) =>
      dispatch(
        action.updateTaskTimeError(pathOr("", ["response", "status"], err))
      )
    );
};

export const getCurrentSprint = (sprintId) => (dispatch) => {
  dispatch(action.getCurrentSprintRequest());
  send
    .getCurrentSprint(sprintId)
    .then((response) => dispatch(action.getCurrentSprintSuccess(response.data)))
    .catch((err) => {
      dispatch(
        action.getCurrentSprintError(pathOr("", ["response", "status"], err))
      );
    });
};
