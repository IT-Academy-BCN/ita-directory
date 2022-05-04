/* eslint-disable no-unused-vars */
import React from "react";
import Body from "components/layout/Body/Body";
import CardWrapper from "./CardWrapper";

function SalesByType(hideFooter, dashboard) {
	return (
		<Body
			hideFooter={hideFooter}
			dashboard={dashboard}
			title="Ventas por categoría"
			isLoggedIn={true}
		>
			<CardWrapper />
		</Body>
	);
}

export default SalesByType;
