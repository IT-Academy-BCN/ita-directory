import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import {Childrens, StyledBody} from "./Body.styles";

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
					title={"penguin"}
					color_logo={"#005593"}
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

/*
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

*/
