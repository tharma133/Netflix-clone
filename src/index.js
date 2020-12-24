import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { FirebaseProvider } from "./context/context";

ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,

  document.getElementById("root")
);
