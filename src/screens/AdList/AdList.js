import React from "react";
import AdCard from "screens/AdList/AdCard/AdCard";
import Body from "components/layout/Body/Body";
import {adCardImage} from "assets/images";

const AdList = () => {
	const adList = [
		{
			image: {src: {adCardImage}, alt: "Casa Piscina"},
			title: "Piso en calle Ángel Puech, Valdeacederas, Madrid ",
			price: "990 €/mes",
			rooms: "3 habitaciones",
			surface: "95m2",
			includedExpenses: true,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	];
	const [ad] = adList;
	return (
		<Body title="Pisos en Alquiler en Madrid">
			<AdCard {...ad} />
		</Body>
	);
};
export default AdList;
