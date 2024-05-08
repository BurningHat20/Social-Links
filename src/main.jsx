import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Analytics />
      <App />
    </Router>
  </React.StrictMode>
);
