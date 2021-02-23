import { createAction } from "@reduxjs/toolkit";

const createTaskRequest = createAction("tasks/createRequest");
const createTaskSuccess = createAction("tasks/createSuccess");
const createTaskError = createAction("tasks/createError");

const deleteTaskRequest = createAction("tasks/deleteRequest");
const deleteTaskSuccess = createAction("tasks/deleteSuccess");
const deleteTaskError = createAction("tasks/deleteError");

const changeTaskNameRequest = createAction("tasks/changeNameRequest");
const changeTaskNameSuccess = createAction("tasks/changeNameSuccess");
const changeTaskNameError = createAction("tasks/changeNameError");

const updateTaskTimeRequest = createAction("tasks/updateTimeRequest");
const updateTaskTimeSuccess = createAction("tasks/updateTimeSuccess");
const updateTaskTimeError = createAction("tasks/updateTimeError");

const searchTaskByNameRequest = createAction("tasks/searchTaskByNameRequest");
const searchTaskByNameSucces = createAction("tasks/searchTaskByNameSucces");
const searchTaskByNameError = createAction("tasks/searchTaskByNameError");

const getTaskbyIdRequest = createAction("tasks/getTaskByIdRequest");
const getTaskbyIdSuccess = createAction("tasks/getTaskByIdSuccess");
const getTaskbyIdError = createAction("tasks/getTaskByIdError");

export default {
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
}