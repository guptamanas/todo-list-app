import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Find the root element in your HTML file
const rootElement = document.getElementById("root");

// Create a root for the app
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
