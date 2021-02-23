import action from "./tasksActions";

import * as send from "../../utils/taskManagerAPI";

export const createTask = (sprintId, task) => (dispatch) => {
  dispatch(action.createTaskRequest());
  send
    .addTask(sprintId, task)
    .then((response) => dispatch(action.createTaskSuccess(response.data)))
    .catch((err) => dispatch(action.createTaskError(err.message)));
};

export const deleteTask = (sprintId, taskId) => (dispatch) => {
  dispatch(action.deleteTaskRequest());
  send
    .deleteTask(sprintId, taskId)
    .then(() => dispatch(action.deleteTaskSuccess(taskId)))
    .catch((err) => dispatch(action.deleteTaskError(err)));
};

export const updateTaskName = (taskId, name) => (dispatch) => {
  dispatch(action.changeTaskNameRequest());
  send
    .updateTaskName(taskId, name)
    .then((response) => dispatch(action.changeTaskNameSuccess(response.data)))
    .catch((err) => dispatch(action.changeTaskNameError(err)));
};

export const updateTaskTime = (taskId, dateId, hours) => (dispatch) => {
  dispatch(action.updateTaskTimeRequest());
  send
    .updateTaskTime(taskId, dateId, hours)
    .then((response) => dispatch(action.updateTaskTimeSuccess(response.data)))
    .catch((err) => dispatch(action.updateTaskTimeError(err)));
};

export const searchTaskByName = (sprintId, query) => (dispatch) => {
  dispatch(action.searchTaskByNameRequest());
  send
    .searchTasksByName(sprintId, query)
    .then((response) => dispatch(action.searchTaskByNameSucces(response.data)))
    .catch((err) => dispatch(action.updateTaskTimeError(err)));
};
