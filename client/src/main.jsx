import React from "react";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" />
  </React.StrictMode>
);