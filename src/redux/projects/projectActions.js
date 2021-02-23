import { createAction } from "@reduxjs/toolkit";

export const addProjectRequest = createAction("project/addRequest");
export const addProjectSuccess = createAction("project/AddSuccess");
export const addProjectError = createAction("project/addError");

export const deleteProjectAction = createAction("project/delete");

export const byIdRequest = createAction("project/byIdRequest");
export const byIdSuccess = createAction("project/byIdSuccess");
export const byIdError = createAction("project/byIdError");

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
