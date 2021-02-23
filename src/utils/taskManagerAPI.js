import axios from "axios";

axios.defaults.baseURL = "https://task-manager-goit-api.herokuapp.com/api";

export const createUser = (credentials) => {
  console.log(credentials);
  return axios.post("/auth/register", credentials);
};
export const loginUser = (credentials) => {
  return axios.post("/auth/login", credentials);
};
export const logoutUser = () => {
  return axios.post("/auth/logout");
};

export const getCurrentUser = () => {
  return axios.get("/users/current");
};

export const addProject = (project) => axios.post("/projects/create", project);

export const deleteProject = (projectId) =>
  axios.delete(`/projects/${projectId}/remove`);

export const addSprint = ({ projectId, sprint }) =>
  axios.post(`/sprints/${projectId}/create`, sprint);

export const deleteSprint = ({ projectId, sprintId }) =>
  axios.delete(`/sprints/${projectId}/${sprintId}`);

export const sprintById = (sprintId) => axios.get(`/sprints/${sprintId}`);

export const updateSprintName = ({ sprintId, name }) =>
  axios.patch(`/sprints/${sprintId}/change-name`, name);
