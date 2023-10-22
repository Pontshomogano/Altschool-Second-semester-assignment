import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import App from "./App.js";
// import ErrorBoundry from './ErrorBoundry'
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundry.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback="There was an error">
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
