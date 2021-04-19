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
import UserAds from "screens/UserAds/UserAds";
import EditAd from "screens/EditAd/EditAd";

import MapView from "components/composed/Map/MapView";
import Sales from "screens/Sales/Sales";

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/ad/:id" component={Ad} />
				<Route exact path="/new-ad" component={CreateNewAd} />
				<Route exact path="/user-ads" component={UserAds} />
				<Route exact path="/:user_id/edit-ad/:id" component={EditAd} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/recover-password/:hash" component={RecoverPassword} />
				<Route exact path="/ads" component={AdList} />
				<Route exact path="/map" component={MapView} />
				<Route exact path="/sales" component={Sales} />
			</Switch>
		</>
	);
};

export default App;
