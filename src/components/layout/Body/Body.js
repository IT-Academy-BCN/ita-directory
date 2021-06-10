import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import {Childrens, StyledBody} from "./styles";

const Body = ({
	children,
	title,
	color_logo,
	color_header,
	color_letra,
	isLoggedIn,
	justifyTitle,
	paddingTitle,
	paddingTitle2,
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
					justifyTitle={justifyTitle}
					paddingTitle={paddingTitle}
					paddingTitle2={paddingTitle2}
				/>
			)}

			<Childrens>{children}</Childrens>
			{hideFooter ? "" : <Footer />}
		</StyledBody>
	);
};

export default Body;
