// export const getModalType = (state) => state.modal;
export const isModalCreateTask = (state) => Boolean(state.ui.modal.createTask);
export const isModalCreateSprint = (state) =>
  Boolean(state.ui.modal.createSprint);
export const isModalAddParticipant = (state) =>
  Boolean(state.ui.modal.addParticipant);
export const isModalCreateProject = (state) =>
  Boolean(state.ui.modal.createProject);
export const isModalEditProject = (state) =>
  Boolean(state.ui.modal.editProject);
export const isModalChartTable = (state) => Boolean(state.ui.modal.chartTable);
export const currentProjectId = (state) =>
  state.ui.modal.createSprint || state.ui.modal.addParticipant;
