import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "components/composed/ProtectedRoute";

// import {faEye} from "@fortawesome/free-solid-svg-icons";
// COMENTARIOS
// 1. FOOTER NO DEBE SER WIDTH 100%
// 2. DAR PADDING AL INPUT
// 3. PONER VALIDACIONES DEBAJO DE LOS INPUTS CONFORME SE ESCRIBE CON INDICACIONES
// 4. EL LOGIN DEBE GESTIONARSE EN LA PÁGINA DE LOGIN
// 5. METER LÓGICA HANDLECLICK a HANDLESUBMIT...
// 6. PONER TOKEN EN LOCALSTORAGE CON KEY itacademy.

// Content
import Home from "screens/Home/Home";

// Userflow
import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
import RecoverPassword from "screens/UserFlow/RecoverPassword/RecoverPassword";

const App = () => {
	const [view, setView] = useState("");
	const [token, setToken] = useState();

	const handleLogin = (token) => {
		setToken(token);
		setView("home");
	};

	return (
		<>
			<Switch>
				<ProtectedRoute exact path="/" component={Home} />
				<Route exact path="/login" component={Login}>
					<Login onLogin={handleLogin} />
				</Route>
				<Route exact path="/register" component={Registration} />
				<Route exact path="/recover-password/:hash" component={RecoverPassword} />
				{/* <ProtectedRoute component={Page404} /> */}
			</Switch>
		</>
	);
};

export default App;
