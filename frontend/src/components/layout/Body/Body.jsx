import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
		<StyledBody className="styledBody">
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
