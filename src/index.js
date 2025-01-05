import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MyContext } from "./MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MyContext.Provider value="Hello World">
      <App />
    </MyContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
