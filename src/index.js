import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { FetchProvider } from "./providers/fetch.provider";
import { LockProvider } from "./providers/lock.provider";

ReactDOM.render(
  <React.StrictMode>
    <LockProvider>
      <FetchProvider>
        <App />
      </FetchProvider>
    </LockProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
