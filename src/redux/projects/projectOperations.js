import {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  changeProjectNameRequest,
  changeProjectNameSuccess,
  changeProjectNameError,
  changeProjectDescRequest,
  changeProjectDescSuccess,
  changeProjectDescError,
  deleteProjectSuccess,
  deleteProjectError,
  deleteProjectRequest,
  byIdError,
  byIdSuccess,
  byIdRequest,
  addParticipantError,
  addParticipantSuccess,
  addParticipantRequest,
} from "./projectActions";

import {
  addProject as addProjectAPI,
  deleteProject as deleteProjectAPI,
  editProjectName as editProjectNameAPI,
  getCurrentProject as getCurrentProjectAPI,
  addParticipantToProject as addParticipantToProjectAPI,
} from "../../utils/taskManagerAPI";
import {
  makeAlertNotification,
  makeSuccessNotification,
} from "../notifications/notificationOperations";
import { editProjectDescription } from "../../utils/taskManagerAPI";
export const getProjectById = (projectId) => (dispatch) => {
  dispatch(byIdRequest());
  getCurrentProjectAPI(projectId)
    .then((response) => dispatch(byIdSuccess(response.data)))
    .catch(() => dispatch(byIdError));
};

export const addProject = (project) => (dispatch) => {
  dispatch(addProjectRequest());
  addProjectAPI(project)
    .then((resp) => dispatch(addProjectSuccess(resp.data)))
    .catch((error) => dispatch(addProjectError()));
};

export const deleteProject = (projectId) => (dispatch) => {
  dispatch(deleteProjectRequest());
  deleteProjectAPI(projectId)
    .then(() => dispatch(deleteProjectSuccess(projectId)))
    .catch(() => dispatch(deleteProjectError()));
};

export const editProjectName = (projectId, newName) => (dispatch) => {
  dispatch(changeProjectNameRequest());
  editProjectNameAPI(projectId, newName)
    .then((response) => dispatch(changeProjectNameSuccess(response.data)))
    .catch(() => dispatch(changeProjectNameError()));
};
export const addParticipant = (projectId, participant) => (dispatch) => {
  dispatch(addParticipantRequest());
  addParticipantToProjectAPI(projectId, participant)
    .then(() => dispatch(addParticipantSuccess()))
    .catch((error) => {
      dispatch(() => {
        addParticipantError();
        dispatch(makeSuccessNotification("Користувач доданий до проєкту"));
      });
      dispatch(
        makeAlertNotification(
          error.status(404) ? "Користувача не існує" : "Щось пішло не так..."
        )
      );
    });
};
export const editProjectDespription = (projectId, newDescription) => (
  dispatch
) => {
  dispatch(changeProjectDescRequest());
  editProjectDescription(projectId, newDescription).then((response) =>
    dispatch(changeProjectDescSuccess(response.data)).catch(() =>
      dispatch(changeProjectDescError())
    )
  );
};
