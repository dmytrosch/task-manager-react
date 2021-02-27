import { createAction } from "@reduxjs/toolkit";

const searchTaskByNameRequest = createAction("currentSprint/searchTaskByNameRequest");
const searchTaskByNameSucces = createAction("currentSprint/searchTaskByNameSucces");
const searchTaskByNameError = createAction("currentSprint/searchTaskByNameError");

export default {
    searchTaskByNameRequest,
    searchTaskByNameSucces,
    searchTaskByNameError, 
}