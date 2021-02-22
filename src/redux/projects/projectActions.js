import { createAction } from "@reduxjs/toolkit";

export const addProjectRequest = createAction("project/addRequest");
export const addProjectSuccess = createAction("project/AddSuccess");
export const addProjectError = createAction("project/addError");

export const deleteProjectRequest = createAction("project/deleteRequest");
export const deleteProjectSuccess = createAction("project/deleteSuccess");
export const deleteProjectError = createAction("project/deleteError");

export const changeProjectNameRequest = createAction(
  "project/changeNameRequest"
);
export const changeProjectNameSuccess = createAction(
  "project/changeNameSuccess"
);
export const changeProjectNameError = createAction("project/changeNameError");

export const changeProjectDescRequest = createAction(
  "project/changeDescRequest"
);
export const changeProjectDescSuccess = createAction(
  "project/changeDescSuccess"
);
export const changeProjectDescError = createAction("project/changeDescError");