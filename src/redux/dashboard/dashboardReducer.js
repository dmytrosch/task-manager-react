import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { addProjectSuccess, deleteProjectSuccess } from "./dashboardAction";

const addProject = (state, action) => {
  return [action.payload, ...state.action];
};
const project = createReducer([], {
  [addProjectSuccess]: addProject,
});

const deleteProject = createReducer([], {
  [deleteProjectSuccess]: null,
});

const projectReducer = combineReducers({
  project,
  deleteProject,
});

export default projectReducer;
