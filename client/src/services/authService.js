import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getProfile = () => API.get("/profile");

export const updateProfile = (data) =>
  API.put("/update-profile", data);

export const uploadProfileImage = (formData) =>
  API.post("/upload-profile-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });