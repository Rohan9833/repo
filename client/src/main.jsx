import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ScanProvider } from "./context/ScanContext";
import "./components/PDF/pdf.css";
import "./components/Report/report.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScanProvider>
        <App />
      </ScanProvider>
    </BrowserRouter>
  </React.StrictMode>
);