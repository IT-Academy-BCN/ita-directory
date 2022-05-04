import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";
import App from "./App";
import axios from "axios";
import "./index.css";
import * as ReactRedux from "react-redux";
import store from "./store/store";

const {BrowserRouter} = ReactRouterDOM;
const {Provider} = ReactRedux;

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
