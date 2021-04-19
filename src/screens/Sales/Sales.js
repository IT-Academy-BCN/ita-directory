/* eslint-disable no-unused-vars */
import React from "react";
import Body from "components/layout/Body/Body";
import CardWrapper from "./CardWrapper";

function Sales() {
	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<CardWrapper />
		</Body>
	);
}

export default Sales;
