import { createAction } from "@reduxjs/toolkit";

const searchTaskByNameRequest = createAction("currentSprint/searchTaskByNameRequest");
const searchTaskByNameSucces = createAction("currentSprint/searchTaskByNameSucces");
const searchTaskByNameError = createAction("currentSprint/searchTaskByNameError");

const setSearchValue = createAction("currentSprint/setSearchValue");




const searchActions =  {
    searchTaskByNameRequest,
    searchTaskByNameSucces,
    searchTaskByNameError, 

    setSearchValue,
}

export default searchActions;