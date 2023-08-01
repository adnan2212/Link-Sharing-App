import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import App from "./App.tsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/*" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
