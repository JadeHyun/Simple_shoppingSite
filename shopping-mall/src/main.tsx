import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./scss/index.scss";
import { worker } from "./mocks/browser";
import { RecoilRoot } from "recoil";

import App from "./app";

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </RecoilRoot> */}
  </React.StrictMode>
);
