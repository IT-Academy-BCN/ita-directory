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
import {
	adImage1,
	adImage2,
	adImage3,
	adThumbnail1,
	adThumbnail2,
	adThumbnail3,
} from "assets/images";
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

	const {title, city, monthlyRent, numBaths, numRooms, squareMeters, longDescription} = ad;

	const images = [
		{
			original: adImage1,
			thumbnail: adThumbnail1,
			originalAlt: "Bedroom",
			thumbnailAlt: "Bedroom",
		},
		{
			original: adImage2,
			thumbnail: adThumbnail2,
			originalAlt: "Bedroom2",
			thumbnailAlt: "Bedroom2",
		},
		{
			original: adImage3,
			thumbnail: adThumbnail3,
			originalAlt: "Casa piscina",
			thumbnailAlt: "Casa piscina",
		},
	];

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
					<Gallery images={images} />
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
							<p>{longDescription}</p>
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
