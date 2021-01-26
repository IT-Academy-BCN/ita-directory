import React from "react";
import StyledHeader from "./styles";
import {withRouter, Link} from "react-router-dom";

const Header = (props) => {
	const path = props.location.pathname.slice(1);
	// const path = props.location.name;
	return (
		<>
			<StyledHeader>
				<h1>{path}</h1>
			</StyledHeader>
			<div>
				<Link to="/login">Login</Link>
				<Link to="/registration">Registration</Link>
			</div>
		</>
	);
};

export default withRouter(Header);
