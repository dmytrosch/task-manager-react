import { createAction } from "@reduxjs/toolkit";

export const setModalCreateTask = createAction("modal/CreateTask");
export const setModalCreateSprint = createAction("modal/CreateSprint");
export const setModalAddParticipant = createAction("modal/AddParticipant");
export const setModalCreateProject = createAction("modal/CreateProject");
export const setModalEditProject = createAction("modal/EditProject");
export const setModalChartTable = createAction("modal/ChartTable");
export const setModalApproveDeleteProject = createAction(
  "modal/ApproveDeleteProject"
);
export const setModalApproveDeleteSprint = createAction(
  "modal/ApproveDeleteSprint"
);
export const setModalApproveDeleteTask = createAction(
  "modal/ApproveDeleteTask"
);
