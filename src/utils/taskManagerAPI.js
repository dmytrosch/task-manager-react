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

export const resetPassword = (credentials) => {
  return axios.patch("/auth/reset-password/:resetPasswordToken");
};

export const addProjectAPI = (project) => axios.post("/", project);

export const deleteProjectAPI = (project) => axios.delete("/", project);
