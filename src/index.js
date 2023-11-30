import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AppContainer from "./AppContainer.js";
import "./scss/main.scss";
import "focus-visible";

const root = ReactDOM.createRoot(document.getElementById("wrapper"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppContainer />
		</BrowserRouter>
	</Provider>
);
