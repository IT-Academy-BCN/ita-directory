import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "components/composed/ProtectedRoute";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
// COMENTARIOS
// 5. METER LÓGICA HANDLECLICK a HANDLESUBMIT...
// 6. PONER TOKEN EN LOCALSTORAGE CON KEY itacademy.

import Home from "screens/Home/Home";

import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

const App = () => {
	return (
		<>
			<Switch>
				<ProtectedRoute exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
				{/* <Route exact path="/recover-password/:hash" component={RecoverPassword} /> */}

				{/* <ProtectedRoute component={Page404} /> */}
			</Switch>
		</>
	);
};

export default App;
