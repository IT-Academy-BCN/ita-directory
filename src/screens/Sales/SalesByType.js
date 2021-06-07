/* eslint-disable no-unused-vars */
import React from "react";
import Body from "components/layout/Body/Body";
import CardWrapper from "./CardWrapper";

function SalesByType(ocultarFooter, dashboard) {
	return (
		<Body
			ocultarFooter={ocultarFooter}
			dashboard={dashboard}
			title="Ventas por categoría"
			isLoggedIn={true}
		>
			<CardWrapper />
		</Body>
	);
}

export default SalesByType;
