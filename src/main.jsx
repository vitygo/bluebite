import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // 👈 додали
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>   {/* 👈 тепер App всередині Router */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
