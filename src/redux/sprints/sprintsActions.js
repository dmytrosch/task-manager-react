import { createAction } from "@reduxjs/toolkit";

const createRequest = createAction("sprint/createRequest");
const createSuccess = createAction("sprint/createSuccess");
const createError = createAction("sprint/createError");

const deleteRequest = createAction("sprint/deleteRequest");
const deleteSuccess = createAction("sprint/deleteSuccess");
const deleteError = createAction("sprint/deleteError");

const sprintChangeNameRequest = createAction("sprint/changeNameRequest");
const sprintChangeNameSuccess = createAction("sprint/changeNameSuccess");
const sprintChangeNameError = createAction("sprint/changeNameError");

const sprintByIdRequest = createAction("sprint/byIdRequest");
const sprinByIdSuccess = createAction("sprint/byIdSuccess");
const sprinByIdError = createAction("sprint/byIdError");

const sprintActionsObj = {
  createRequest,
  createSuccess,
  createError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  sprintChangeNameRequest,
  sprintChangeNameSuccess,
  sprintChangeNameError,
  sprintByIdRequest,
  sprinByIdSuccess,
  sprinByIdError,
};

export default sprintActionsObj;
