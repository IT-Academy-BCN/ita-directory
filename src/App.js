import React from "react";
import {Route, Switch} from "react-router-dom";
//import ProtectedRoute from "components/composed/ProtectedRoute";

import Home from "screens/Home/Home";
import Ad from "screens/Ad/Ad";
import CreateNewAd from "screens/CreateNewAd/CreateNewAd";
import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
import RecoverPassword from "screens/UserFlow/RecoverPassword/RecoverPassword";
import Profile from "screens/UserFlow/Profile/Profile";
import AdList from "screens/AdList/AdList/AdList";

import MapView from "components/composed/Map/MapView";
import AdMap from "screens/AdMap/AdMap";

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/ad" component={Ad} />
				<Route exact path="/new-ad" component={CreateNewAd} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/recover-password/:hash" component={RecoverPassword} />
				<Route exact path="/ads" component={AdList} />
				<Route exact path="/ad-map" component={AdMap} />
				<Route exact path="/map" component={MapView} />
			</Switch>
		</>
	);
};

export default App;
