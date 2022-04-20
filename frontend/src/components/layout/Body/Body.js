import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import {Childrens, StyledBody} from "./Body.styles";

const Body = ({
	children,
	title,
	logoColor,
	headerColor,
	fontColor,
	isLoggedIn,
	justifyTitle,
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
					logoColor={logoColor}
					headerColor={headerColor}
					fontColor={fontColor}
					isLoggedIn={isLoggedIn}
					justifyTitle={justifyTitle}
					isTitleVisible={false}
				/>
			)}
			<Childrens>{children}</Childrens>
			{hideFooter ? "" : <Footer />}
		</StyledBody>
	);
};

export default Body;
