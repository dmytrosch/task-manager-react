// export const getModalType = (state) => state.modal;
export const isModalCreateTask = (state) => state.ui.modal.createTask;
export const isModalCreateSprint = (state) => state.ui.modal.createSprint;
export const isModalAddParticipant = (state) =>
  Boolean(state.ui.modal.addParticipant);
export const isModalCreateProject = (state) =>
  Boolean(state.ui.modal.createProject);
export const isModalEditProject = (state) =>
  Boolean(state.ui.modal.editProject);
export const isModalChartTable = (state) => Boolean(state.ui.modal.chartTable);
export const currentProjectId = (state) =>
  state.ui.modal.createSprint || state.ui.modal.addParticipant;
export const isModalApproveDeleteProject = (state) =>
  state.ui.modal.approveDeleteProject;
export const isModalApproveDeleteSprint = (state) =>
  state.ui.modal.approveDeleteSprint;
export const isModalApproveDeleteTask = (state) =>
  state.ui.modal.approveDeleteTask;
export const isAnyModalOpenSelector = (state) => {
  const values = Object.values(state.ui.modal);
  const isOpen = values.some((value) => !!value);
  return isOpen;
};
