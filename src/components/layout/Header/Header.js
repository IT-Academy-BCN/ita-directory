import React from "react";
import {Logo, Routes, StyledHeader} from "./styles";
import {withRouter, Link} from "react-router-dom";

const Header = (props) => {
	const path = props.location.pathname.slice(1);
	// const path = props.location.name;
	return (
		<>
			<StyledHeader>
				<Logo/>
				<Routes>
				<Link to="/login">Login</Link>
				<Link to="/registration">Registration</Link>
				<h1>{path}</h1>
				</Routes>
			</StyledHeader>
		</>
	);
};

export default withRouter(Header);
