import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ModeState from "./Context/Mode/ModeState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModeState>
      <App />
    </ModeState>
  </React.StrictMode>
);

reportWebVitals();
