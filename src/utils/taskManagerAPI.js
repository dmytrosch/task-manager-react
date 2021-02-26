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
export const sendEmail = (email) =>
  axios.post(`/auth/reset-password/request`, email);

export const resetPassword = (token, credentials) => {
  return axios.patch(`/auth/reset-password/${token}`, credentials);
};

export const getCurrentUser = () => {
  return axios.get("/users/current");
};
export const getCurrentProject = (projectId) =>
  axios.get(`/projects/${projectId}`);
export const addProject = (project) => axios.post("/projects/create", project);
export const deleteProject = (projectId) =>
  axios.delete(`/projects/${projectId}/remove`);
export const editProjectName = (projectId, name) =>
  axios.patch(`/projects/${projectId}/change-name`, { name });
export const addParticipantToProject = (projectId, participant) =>
  axios.patch(`/projects/${projectId}/add-participant`, participant);

export const addSprint = (projectId, sprint) => {
  console.log("projectid:", projectId, sprint);
  return axios.post(`/sprints/${projectId}/create`, sprint);
};
export const deleteSprint = (projectId, sprintId) =>
  axios.delete(`/sprints/${projectId}/${sprintId}/remove`);

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
