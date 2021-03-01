import { pathOr } from "ramda";
import action from "./sprintsActions";

import * as send from "../../utils/taskManagerAPI";

export const createSprint = (projectId, sprint) => (dispatch) => {
  dispatch(action.createRequest());
  send
    .addSprint(projectId, sprint)
    .then((response) => dispatch(action.createSuccess(response.data)))
    .catch((err) =>
      dispatch(action.createError(pathOr("", ["response", "status"], err)))
    );
};

export const deleteSprint = (projectId, sprintId) => (dispatch) => {
  dispatch(action.deleteRequest());
  send
    .deleteSprint(projectId, sprintId)
    .then(() => dispatch(action.deleteSuccess(sprintId)))
    .catch((err) =>
      dispatch(action.deleteError(pathOr("", ["response", "status"], err)))
    );
};

export const updateSprintName = (sprintId, name) => (dispatch) => {
  dispatch(action.sprintChangeNameRequest());
  send
    .updateSprintName({ sprintId, name })
    .then(() => dispatch(action.sprintChangeNameSuccess({ sprintId, name })))
    .catch((err) => {
      dispatch(
        action.sprintChangeNameError(pathOr("", ["response", "status"], err))
      );
    });
};

export const sprintById = (sprintId) => (dispatch) => {
  dispatch(action.byIdRequest());
  send
    .sprintById(sprintId)
    .then((response) => dispatch(action.byIdSuccess(response.data)))
    .catch((err) =>
      dispatch(action.byIdError(pathOr("", ["response", "status"], err)))
    );
};
