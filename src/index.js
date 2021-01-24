import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "assets/css/normalize.css";
import App from "./App";
// import axios from "axios";

// if (localStorage.getItem("itacademy")) {
// 	setAuthorizationToken(localStorage.getItem("itacademy"));
// }

export const refresh = () => {
	window.location.reload();
	return;		
};	

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// const login = (data) => {
// 	try {
// 		const response;
// 	} catch (err) {
// 		console.log(err); 
// 	}
// };

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
