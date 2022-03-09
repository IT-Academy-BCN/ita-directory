import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import axios from "axios";
import "./index.css";
import {Provider} from "react-redux";
import store from "./store/store";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<div className="font-roboto">
				<Provider store={store}>
					<App />
				</Provider>
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
