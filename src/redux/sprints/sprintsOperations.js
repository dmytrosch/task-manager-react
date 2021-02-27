import action from "./sprintsActions";

import * as send from "../../utils/taskManagerAPI";

export const createSprint = (projectId, sprint) => (dispatch) => {
  dispatch(action.createRequest());
  send
    .addSprint(projectId, sprint)
    .then((response) => dispatch(action.createSuccess(response.data)))
    .catch((err) => dispatch(action.createError(err.message)));
};

export const deleteSprint = (projectId, sprintId) => (dispatch) => {
  dispatch(action.deleteRequest());
  send
    .deleteSprint(projectId, sprintId)
    .then(() => dispatch(action.deleteSuccess(sprintId)))
    .catch((err) => dispatch(action.deleteError(err.message)));
};

export const updateSprintName = (sprintId, name) => (dispatch) => {
  dispatch(action.sprintChangeNameRequest());
  send
    .updateSprintName({ sprintId, name })
    .then(() => dispatch(action.sprintChangeNameSuccess({ sprintId, name })))
    .catch((err) => {
      console.log(err);
      dispatch(action.sprintChangeNameError(err.message));
    });
};

export const sprintById = (sprintId) => (dispatch) => {
  dispatch(action.byIdRequest());
  send
    .sprintById(sprintId)
    .then((response) => dispatch(action.byIdSuccess(response.data)))
    .catch((err) => dispatch(action.byIdError(err.message)));
};
