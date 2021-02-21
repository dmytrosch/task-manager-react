import axios from "axios";

axios.defaults.baseURL = "";

export const addProjectAPI = (project) => axios.post("/", project);

export const deleteProjectAPI = (project) => axios.delete("/", project);
