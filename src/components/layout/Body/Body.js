import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import {Childrens, StyledBody} from "./Body.styles";

console.log("body");

const Body = ({
	children,
	title,
	color_logo,
	color_header,
	color_letra,
	isLoggedIn,
	centerTitle,
	hideHeader,
	hideFooter,
	dashboard,
}) => {
	return (
		<StyledBody>
			{hideHeader && dashboard ? (
				""
			) : (
				<Header
					title={title}
					color_logo={color_logo}
					color_header={color_header}
					color_letra={color_letra}
					isLoggedIn={isLoggedIn}
					centerTitle={centerTitle}
				/>
			)}

			<Childrens>{children}</Childrens>
			{hideFooter ? "" : <Footer />}
		</StyledBody>
	);
};

export default Body;
