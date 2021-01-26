import React from "react";
import Header from "components/layout/Header/Header";
// import AsyncButton from "components/units/AsyncButton";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
import {Route, Switch} from "react-router-dom";
// import ProtectedRoute from "components/composed/ProtectedRoute";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// Userflow
import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

//Input
// import Input from "components/units/Input/Input";
/* import axios from "axios"; */

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				Userflow
				<Route exact path="/login" component={Login} />
				<Route exact path="/registration" component={Registration} />
				{/* <Route exact path="/recover-password/:hash" component={RecoverPassword} /> */}
				{/* Caregiver */}
				{/* <ProtectedRoute exact path="/" component={Home} /> */}
				{/* <ProtectedRoute component={Page404} /> */}
			</Switch>
		</>
	);
};

export default App;
