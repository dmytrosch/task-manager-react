import {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  changeProjectNameRequest,
  changeProjectNameSuccess,
  changeProjectNameError,
  changeProjectDescRequest,
  changeProjectDescSuccess,
  changeProjectDescError,
} from "./projectActions";

import { addProjectAPI, deleteProjectAPI } from "../../utils/taskManagerAPI";

export const addProject = (project) => (dispatch) => {
  dispatch(addProjectRequest());

  addProjectAPI(project)
    .then((resp) => dispatch(addProjectSuccess(resp.data)))
    .catch((error) => dispatch(addProjectError(error)));
};

export const deleteProject = (project) => (dispatch) => {
  dispatch(deleteProjectRequest());

  deleteProjectAPI(project)
    .then((resp) => dispatch(deleteProjectSuccess(resp.data)))
    .catch((error) => dispatch(deleteProjectError(error)));
};
