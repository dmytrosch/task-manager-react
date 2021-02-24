import { createAction } from "@reduxjs/toolkit";

const createRequest = createAction("sprint/createRequest");
const createSuccess = createAction("sprint/createSuccess");
const createError = createAction("sprint/createError");

const deleteRequest = createAction("sprint/deleteRequest");
const deleteSuccess = createAction("sprint/deleteSuccess");
const deleteError = createAction("sprint/deleteError");

const changeNameRequest = createAction("sprint/changeNameRequest");
const changeNameSuccess = createAction("sprint/changeNameSuccess");
const changeNameError = createAction("sprint/changeNameError");

const sprintByIdRequest = createAction("sprint/byIdRequest");
const sprinByIdSuccess = createAction("sprint/byIdSuccess");
const sprinByIdError = createAction("sprint/byIdError");

export default {
  createRequest,
  createSuccess,
  createError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  changeNameRequest,
  changeNameSuccess,
  changeNameError,
  sprintByIdRequest,
  sprinByIdSuccess,
  sprinByIdError,
};
