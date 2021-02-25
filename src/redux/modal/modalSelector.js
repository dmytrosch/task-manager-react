// export const getModalType = (state) => state.modal;
export const isModalCreateTask = (state) => state.ui.modal.createTask;
export const isModalCreateSprint = (state) => state.ui.modal.createSprint;
export const isModalAddParticipant = (state) => state.ui.modal.addParticipant;
export const isModalCreateProject = (state) => state.ui.modal.createProject;
export const isModalEditProject = (state) => state.ui.modal.editProject;
export const isModalChartTable = (state) => state.ui.modal.chartTable;
export const isModalApproveDeleteProject = (state) =>
  state.ui.modal.approveDeleteProject;
export const isModalApproveDeleteSprint = (state) =>
  state.ui.modal.approveDeleteSprint;
export const isModalApproveDeleteTask = (state) =>
  state.ui.modal.approveDeleteTask;
