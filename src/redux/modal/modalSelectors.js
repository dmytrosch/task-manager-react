// export const getModalType = (state) => state.modal;
export const isModalCreateTaskSelector = (state) => state.ui.modal.createTask;
export const isModalCreateSprintSelector = (state) => state.ui.modal.createSprint;
export const isModalAddParticipantSelector = (state) =>
  Boolean(state.ui.modal.addParticipant);
export const isModalCreateProjectSelector = (state) =>
  Boolean(state.ui.modal.createProject);
export const isModalEditProjectSelector = (state) =>
  Boolean(state.ui.modal.editProject);
export const isModalChartTableSelector = (state) => Boolean(state.ui.modal.chartTable);
export const currentProjectIdSelector = (state) =>
  state.ui.modal.createSprint || state.ui.modal.addParticipant;
export const isModalApproveDeleteProjectSelector = (state) =>
  state.ui.modal.approveDeleteProject;
export const isModalApproveDeleteSprintSelector = (state) =>
  state.ui.modal.approveDeleteSprint;
export const isModalApproveDeleteTaskSelector = (state) =>
  state.ui.modal.approveDeleteTask;
export const isAnyModalOpenSelector = (state) => {
  const values = Object.values(state.ui.modal);
  const isOpen = values.some((value) => !!value);
  return isOpen;
};
