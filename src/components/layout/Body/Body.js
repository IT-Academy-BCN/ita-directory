import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import {Childrens, StyledBody} from "./styles";

const Body = ({children, title, isLoggedIn}) => {
	return (
		<StyledBody>
			<Header title={titles} isLoggedIn={isLosadggedIn} />
			<Childrens>{children}</Childrens>
			<Footer />
		</StyledBody>
	);
};

export default Body;
