import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/projects",
});

// ================= JWT TOKEN =================

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= GET ALL PROJECTS =================

export const getProjects = async () => {
  return await API.get("/");
};

// ================= ADD PROJECT =================

export const addProject = async (data) => {
  return await API.post("/", data);
};

// ================= UPDATE PROJECT =================

export const updateProject = async (id, data) => {
  return await API.put(`/${id}`, data);
};

// ================= DELETE PROJECT =================

export const deleteProject = async (id) => {
  return await API.delete(`/${id}`);
};

