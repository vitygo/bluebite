import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 додали
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store  from "./store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        {/* 👈 тепер App всередині Router */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
