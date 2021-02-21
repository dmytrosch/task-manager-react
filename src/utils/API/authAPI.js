import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
export const createUser = (credentials) => {
  return axios.post("/api/auth/register", credentials);
};
export const loginUser = (credentials) => {
  return axios.post("/api/auth/login", credentials);
};
export const logoutUser = () => {
  return axios.post("/api/auth/logout");
};
