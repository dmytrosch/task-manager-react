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

const chartTable = createReducer(null, {
  [modalAction.setModalChartTable]: (state, { payload }) => payload,
});

const approveDeleteProject = createReducer(null, {
  [modalAction.setModalApproveDeleteProject]: (state, { payload }) => payload,
});

const approveDeleteSprint = createReducer(null, {
  [modalAction.setModalApproveDeleteSprint]: (state, { payload }) => payload,
});

const approveDeleteTask = createReducer(null, {
  [modalAction.setModalApproveDeleteTask]: (state, { payload }) => payload,
});

const modal = combineReducers({
  createTask,
  createSprint,
  addParticipant,
  createProject,
  editProject,
  chartTable,
  approveDeleteProject,
  approveDeleteSprint,
  approveDeleteTask,
});
export default modal;
