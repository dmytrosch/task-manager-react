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

export const addProjectAPI = (project) => axios.post("/", project);

export const deleteProjectAPI = (project) => axios.delete("/", project);
