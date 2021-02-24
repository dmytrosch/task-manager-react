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
} from "./projectActions";

import {
  addProject as addProjectAPI,
  deleteProject as deleteProjectAPI,
  editProjectName as editProjectNameAPI,
} from "../../utils/taskManagerAPI";

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
