import React from "react";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "components/composed/ProtectedRoute";

import Home from "screens/Home/Home";

import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
import RecoverPassword from "screens/UserFlow/RecoverPassword/RecoverPassword";
import Profile from "screens/UserFlow/Profile/Profile";
//reminder enable protected route for home
const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/recover-password/:hash" component={RecoverPassword} />
			</Switch>
		</>
	);
};

export default App;
