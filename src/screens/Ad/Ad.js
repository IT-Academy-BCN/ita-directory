import React, {useState, useEffect} from "react";
import Body from "components/layout/Body/Body";
import Button from "components/units/Button/Button";

import {
	StyledAd,
	StyledUl,
	StyledTitle,
	StyledText,
	StyledBottomDiv,
	StyledStreet,
	StyledItems,
} from "./Ad.styles";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";
import Gallery from "components/composed/Gallery/Gallery";
import ContactModal from "components/composed/ContactModal/ContactModal.js";

import IconWithLabel from "components/units/IconWithLabel/IconWithLabel";
import "components/composed/Map/Map.css";
import Map from "components/composed/Map/Map";
import {getAd} from "api/ads.js";

const Ad = ({match}) => {
	const {
		params: {id},
	} = match;
	const [active, setActive] = useState(false);
	const [ad, setAd] = useState([]);

	useEffect(() => {
		try {
			getAd(id).then((ad) => ad && setAd(ad));
		} catch (e) {
			console.log(e);
		}
	}, [id]);

	const {
		title,
		gallery,
		city,
		monthlyRent,
		numBaths,
		numRooms,
		squareMeters,
		longDescription,
	} = ad;

	const getImagesFrom = (gallery) => {
		if (!gallery) return [];
		return gallery.map((image) => {
			return {
				original: image.url,
				thumbnail: image.urlThumbnail,
				originalAlt: image.alt,
				thumbnailAlt: image.altThumbnail,
			};
		});
	};

	const adMonthlyPrice = new Intl.NumberFormat("es-ES", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 3,
	});

	const LIST_ICONS = [
		{name: city, icon: faMapMarkerAlt},
		{name: `${numRooms} Habitacion${numRooms > 1 ? "es" : ""}`, icon: faBed},
		{name: `${adMonthlyPrice.format(monthlyRent)}`, icon: faEuroSign},
		{name: `${squareMeters}m2`, icon: faHome},
		{name: `${numBaths} Baño${numBaths > 1 ? "s" : ""}`, icon: faBath},
	];

	return (
		<>
			<Body title="Anuncio">
				<StyledAd>
					<StyledTitle>{title}</StyledTitle>
					<Gallery images={getImagesFrom(gallery)} />
					<StyledBottomDiv>
						<StyledUl>
							{LIST_ICONS.map((el, index) => {
								return (
									<StyledItems>
										<IconWithLabel id={index} icon={el.icon} text={el.name} />
									</StyledItems>
								);
							})}
						</StyledUl>

						<StyledText>
							<pre>{longDescription}</pre>
						</StyledText>
						<Map />
						<StyledStreet>
							<a href="https://cibernarium.barcelonactiva.cat/">
								Dirección: Carrer de Roc Boronat, 117, 08018 Barcelona{" "}
							</a>
						</StyledStreet>
						<Button
							buttonStyles={{
								width: "7.5rem",
								fontsize: "12px",
								height: "2.2rem",
								marginTop: "0rem",
							}}
							text="Contacto"
							className="blueGradient"
							type="button"
							onClick={() => setActive(true)}
						/>
						<ContactModal active={active} hideModal={() => setActive(false)} />
					</StyledBottomDiv>
				</StyledAd>
			</Body>
		</>
	);
};

export default Ad;
