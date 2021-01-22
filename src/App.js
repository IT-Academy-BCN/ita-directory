import React, {useState} from "react";
import AsyncButton from "components/units/AsyncButton";
// import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "components/composed/ProtectedRoute";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// Userflow
// import Login from "screens/UserFlow/Login";
// import Registration from "screens/UserFlow/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

//Input
import Input from "components/units/Input/Input";
/* import axios from "axios"; */

const App = () => {
	//Handle disabled
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = () => {
		setAnimatedState(true);
		setIsDisabled(true);
		setIsLoading(true);
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 5000);
	};

	return (
		<>
			<AsyncButton
				text="Acceder"
				loadingText="Accediendo"
				iconPosition="left"
				type="submit"
				className="blueGradient"
				textStyles={{marginLeft: 10}}
				onClick={handleClick}
				isLoading={isLoading}
				animated={animatedState}
				disabled={disabled}
			/>
		</>
		// <Switch>
		// {/* Userflow */}

		// {/* <Route exact path="/login" component={Login} /> */}
		// {/* <Route exact path="/registration" component={Registration} /> */}
		// {/* <Route exact path="/recover-password/:hash" component={RecoverPassword} /> */}

		// {/* Caregiver */}
		// {/* <ProtectedRoute exact path="/" component={Home} /> */}
		// {/* <ProtectedRoute component={Page404} /> */}
		// </Switch>
	);
};

export default App;
