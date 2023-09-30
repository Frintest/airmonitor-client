import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import "./scss/main.scss";
import "focus-visible";

const root = ReactDOM.createRoot(document.getElementById("wrapper"));
root.render(
   <Provider store={store}>
      <App />
   </Provider>
);
