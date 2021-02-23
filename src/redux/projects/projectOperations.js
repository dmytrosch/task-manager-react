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
} from "./projectActions";

import { addProject as addProjectAPI, deleteProject as deleteProjectAPI } from "../../utils/taskManagerAPI";

export const addProject = (project) => (dispatch) => {
  dispatch(addProjectRequest());

  addProjectAPI(project)
    .then((resp) => dispatch(addProjectSuccess(resp.data)))
    .catch((error) => dispatch(addProjectError(error)));
};

export const deleteProject = (projectId) => (dispatch) => {
  dispatch(deleteProjectRequest());

  deleteProjectAPI(projectId)
    .then((resp) => dispatch(deleteProjectSuccess(resp.data)))
    .catch((error) => dispatch(deleteProjectError(error)));
};
