import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as modalAction from "./modalAction";

const createTask = createReducer(null, {
  [modalAction.setModalCreateTask]: (state, { payload }) => payload,
});

const createSprint = createReducer(null, {
  [modalAction.setModalCreateSprint]: (state, { payload }) => payload,
});

const addParticipant = createReducer(null, {
  [modalAction.setModalAddParticipant]: (state, { payload }) => payload,
});

const createProject = createReducer(null, {
  [modalAction.setModalCreateProject]: (state, { payload }) => payload,
});

const editProject = createReducer(null, {
  [modalAction.setModalEditProject]: (state, { payload }) => payload,
});

const modal = combineReducers({
  createTask,
  createSprint,
  addParticipant,
  createProject,
  editProject,
});
export default modal;
