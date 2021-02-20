import { createAction } from "@reduxjs/toolkit";

export const setModalCreateTask = createAction("modal/CreateTask");
export const setModalCreateSprint = createAction("modal/CreateSprint");
export const setModalAddParticipant = createAction("modal/AddParticipant");
export const setModalCreateProject = createAction("modal/CreateProject");
export const setModalEditProject = createAction("modal/EditProject");
