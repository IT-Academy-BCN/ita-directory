import React from "react";
import {Route, Switch} from "react-router-dom";
// import ProtectedRoute from "components/composed/ProtectedRoute";

import Home from "screens/Home/Home";
import Ad from "screens/Ad/Ad";
import CreateNewAd from "screens/CreateNewAd/CreateNewAd";
import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
import RecoverPassword from "screens/UserFlow/RecoverPassword/RecoverPassword";
import Profile from "screens/UserFlow/Profile/Profile";
import AdList from "screens/AdList/AdList";
import ListaUsuariosAdmins from "screens/ListaUsuariosAdmins/ListaUsuariosAdmins";
import Dashboard from "screens/Dashboard/Dashboard";
import MyBills from "screens/MyBills/MyBills";
import Bill from "screens/MyBills/Bill";
import UserAds from "screens/UserAds/UserAds";
import ProtectedRoute from "components/composed/ProtectedRoute";
import Search from "screens/Search/Search";
import ChangePassword from "screens/UserFlow/ChangePassword/ChangePassword";
import PageNotFound from "screens/PageNotFound/PageNotFound";
import Notifications from "components/units/Notifications/Notifications";

// import SalesLineChart from "screens/Sales/SalesLineChart";
// import SalesByMonth from "screens/Sales/SalesByMonth";
// import SalesByType from "screens/Sales/SalesByType";
const noExiste = () => {
	console.log("Branch 34-mapa-con-marcador-personalizado");
};

const App = () => {
	return (
		<>
			<Notifications />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/ad/:id" component={Ad} />
				<Route exact path="/new-ad" component={CreateNewAd} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
				<ProtectedRoute>
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/recover-password" component={RecoverPassword} />
					<Route exact path="/ads" component={AdList} />
					<Route exact path="/lista-usuarios-admins" component={ListaUsuariosAdmins} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/user-ads" component={UserAds} />
					<Route exact path="/my-bills" component={MyBills} />
					<Route path="/my-bills/:id" children={<Bill />} />
				</ProtectedRoute>
				<Route path="mi-ruta" children={noExiste} />
				<Route path="/search" component={Search} />
				<Route path="/change-password/:token" component={ChangePassword} />
				<Route path="*" component={PageNotFound} />

				{/* <Route exact path="/sales-line-chart" component={SalesLineChart} dashboard={false}/>
				<Route exact path="/sales-by-month" component={SalesByMonth} />
				<Route exact path="/sales-by-type" component={SalesByType} dashboard={false} /> */}
			</Switch>
		</>
	);
};

export default App;
