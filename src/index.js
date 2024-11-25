import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Index/homePage/home";
import { AuthProvider } from "./Index/Auth/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Home />
    </AuthProvider>
  </BrowserRouter>
);
