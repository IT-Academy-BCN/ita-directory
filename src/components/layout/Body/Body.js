import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import {Childrens, StyledBody} from "./styles";

const Body = ({children, title, color_logo, color_header, color_letra, isLoggedIn}) => {
	return (
		<StyledBody>
			<Header
				title={title}
				color_logo={color_logo}
				color_header={color_header}
				color_letra={color_letra}
				isLoggedIn={isLoggedIn}
			/>
			<Childrens>{children}</Childrens>
			<Footer />
		</StyledBody>
	);
};

export default Body;
