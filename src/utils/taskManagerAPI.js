import axios from "axios";

axios.defaults.baseURL = "";

export const createUser = (credentials) => {
  return axios.post("/api/auth/register", credentials);
};
export const loginUser = (credentials) => {
  return axios.post("/api/auth/login", credentials);
};
export const logoutUser = () => {
  return axios.post("/api/auth/logout");
};

export const addProjectAPI = (project) =>
  axios.post("/projects/create", project);

export const deleteProjectAPI = (projectId) =>
  axios.delete(`/projects/${projectId}/remove`);

export const addSprint = ({ projectId, sprint }) =>
  axios.post(`/sprints/${projectId}/create`, sprint);

export const deleteSprint = ({ projectId, sprintId }) =>
  axios.delete(`/sprints/${projectId}/${sprintId}`);

export const sprintById = (sprintId) => axios.get(`/sprints/${sprintId}`);

export const updateSprintName = ({ sprintId, name }) =>
  axios.patch(`/sprints/${sprintId}/change-name`, name);
