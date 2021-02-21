import action from "./sprintsActions";

// Need
// import * as send from "../../utils/API/fetchAPI"

// Example
const send = {
  createSprint: () => {},
  deleteSprint: () => {},
  changeSprintName: () => {},
  getSprint: () => {},
};

export const createSprint = (newSprint) => (dispatch) => {
  dispatch(action.createRequest());
  send
    .createSprint(newSprint)
    .then((response) => dispatch(action.createSuccess(response.data)))
    .catch((err) => dispatch(action.createError(err.message)))
    .finally(() => {});
};

export const deleteSprint = (sprintId) => (dispatch) => {
  dispatch(action.deleteRequest());
  send
    .deleteSprint(sprintId)
    .then(() => dispatch(action.deleteSuccess(sprintId)))
    .catch((err) => dispatch(action.deleteError(err.message)))
    .finally(() => {});
};

export const changeSprintName = (sprintId, newName) => (dispatch) => {
  dispatch(action.changeNameRequest());
  send
    .changeSprintName(sprintId, newName)
    .then((response) => dispatch(action.changeNameSuccess(response.data)))
    .catch((err) => dispatch(action.changeNameError(err.message)))
    .finally(() => {});
};

export const getSprint = (sprintId) => (dispatch) => {
  dispatch(action.byIdRequest());
  send
    .getSprint(sprintId)
    .then((response) => dispatch(action.byIdSuccess(response.data)))
    .catch((err) => dispatch(action.byIdError(err.message)))
    .finally(() => {});
};
