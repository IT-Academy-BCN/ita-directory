import React from "react";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "components/composed/ProtectedRoute";

import Home from "screens/Home/Home";
import Ad from "screens/Ad/Ad";
import CreateNewAd from "screens/CreateNewAd/CreateNewAd";
import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
import RecoverPassword from "screens/UserFlow/RecoverPassword/RecoverPassword";
import Profile from "screens/UserFlow/Profile/Profile";
import AdList from "screens/AdList/AdList/AdList";

import GoTo from "components/composed/Map/GoTo";
import GoToMap from "components/composed/Map/GoToMap";
import MapView from "components/composed/Map/MapView";

const App = () => {
	return (
		<>
			<Switch>
				<ProtectedRoute exact path="/" component={Home} />
				<Route exact path="/ad" component={Ad} />
				<Route exact path="/new-ad" component={CreateNewAd} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/recover-password/:hash" component={RecoverPassword} />
				<Route exact path="/ads" component={AdList} />
				<Route exact path="/go-to-map" component={GoToMap} />
				<Route exact path="/map" component={MapView} />
				<Route exact path="/goTo" component={GoTo} />
			</Switch>
		</>
	);
};

export default App;
