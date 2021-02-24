import axios from "axios";

axios.defaults.baseURL = "https://task-manager-goit-api.herokuapp.com/api";

export const createUser = (credentials) => {
  return axios.post("/auth/register", credentials);
};
export const loginUser = (credentials) => {
  return axios.post("/auth/login", credentials);
};
export const logoutUser = () => {
  return axios.post("/auth/logout");
};

export const verifyEmail = (token) => axios.get(`/auth/verify/${token}`);
export const resetPassword = (credentials) => {
  return axios.patch("/auth/reset-password/:resetPasswordToken");
};

export const getCurrentUser = () => {
  return axios.get("/users/current");
};
export const addProject = (project) => axios.post("/projects/create", project);
export const deleteProject = (projectId) =>
  axios.delete(`/projects/${projectId}/remove`);
export const editProjectName = (projectId, name) =>
  axios.patch(`/projects/${projectId}/change-name`, { name });

export const addSprint = ({ projectId, sprint }) =>
  axios.post(`/sprints/${projectId}/create`, sprint);
export const deleteSprint = ({ projectId, sprintId }) =>
  axios.delete(`/sprints/${projectId}/${sprintId}`);

export const sprintById = (sprintId) => axios.get(`/sprints/${sprintId}`);

export const updateSprintName = ({ sprintId, name }) =>
  axios.patch(`/sprints/${sprintId}/change-name`, name);

export const addTask = (sprintId, task) =>
  axios.post(`/tasks/${sprintId}/create`, task);

export const deleteTask = (sprintId, taskId) =>
  axios.delete(`/tasks/${sprintId}/${taskId}/remove`);

export const updateTaskName = (taskId, name) =>
  axios.patch(`/tasks/${taskId}/change-name`, name);

export const updateTaskTime = (taskId, dateId, hours) =>
  axios.patch(`/tasks/${taskId}/${dateId}/update-time`, hours);

export const searchTasksByName = (sprintId, query) =>
  axios.get(`/tasks/${sprintId}/${query}`);
