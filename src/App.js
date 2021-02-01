import React from "react";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "components/composed/ProtectedRoute";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
// 1. FOOTER DEJAR HUECO ENTRE LINEA Y FOOTER
// 2. FOOTER ALIENAR ELEMENTOS AL COMIENZO Y AL FINAL

import Home from "screens/Home/Home";

import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
import Profile from "screens/UserFlow/Profile/Profile";

const App = () => {
	return (
		<>
			<Switch>
				<ProtectedRoute exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
				<Route exact path="/profile" component={Profile} />

				{/* <ProtectedRoute component={Page404} /> */}
			</Switch>
		</>
	);
};

export default App;
