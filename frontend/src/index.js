import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<div className="font-roboto">
				<App />
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
