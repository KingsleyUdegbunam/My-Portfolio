import ResizeObserver from "resize-observer-polyfill";
window.ResizeObserver = window.ResizeObserver || ResizeObserver;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
