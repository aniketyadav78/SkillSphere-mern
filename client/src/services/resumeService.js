import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/resume",
});

// ================= Attach JWT Token =================

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= UPLOAD RESUME =================

export const uploadResume = async (formData) => {
  return await API.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// ================= GET RESUME =================

export const getResume = async () => {
  return await API.get("/");
};

// ================= DELETE RESUME =================

export const deleteResume = async () => {
  return await API.delete("/");
};