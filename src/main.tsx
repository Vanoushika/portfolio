import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ IMPORTANT: Tailwind must be imported here
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
