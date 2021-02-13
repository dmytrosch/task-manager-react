import { createAction } from "@reduxjs/toolkit";

export const addProjectRequest = createAction("project/addRequest");
export const addProjectSuccess = createAction("project/AddSuccess");
export const addProjectError = createAction("project/addError");

export const deleteProjectRequest = createAction("project/deleteRequest");
export const deleteProjectSuccess = createAction("project/deleteSuccess");
export const deleteProjectError = createAction("project/deleteError");