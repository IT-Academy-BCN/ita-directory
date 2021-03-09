import React, {useState} from "react";
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

const LIST_ICONS = [
	{name: "Madrid", icon: faMapMarkerAlt},
	{name: "3 habitaciones", icon: faBed},
	{name: "1.390.000", icon: faEuroSign},
	{name: "55m2", icon: faHome},
	{name: "4 Baños", icon: faBath},
];

const Ad = ({icon}) => {
	const [active, setActive] = useState(false);

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

	return (
		<>
			<Body title="Anuncio">
				<StyledAd>
					<StyledTitle>Título de mi anuncio</StyledTitle>
					<Gallery images={images} />
					<StyledBottomDiv>
						<StyledUl>
							{LIST_ICONS.map((el, index) => {
								return (
									<StyledItems>
										<IconWithLabel key={index} icon={el.icon} text={el.name} />
									</StyledItems>
								);
							})}
						</StyledUl>

						<StyledText>
							<p>
								Lorem ipsum dolor sit amet, consectetur gadipiscing elit. Praesent
								at tincidunt urna. Aenean eu ullamcorper eros, blandit volutpat
								turpis.
							</p>
							<p>
								Quisque feugiat tincidunt lectus, vel congue eros sollicitudin ut.
								Maecenas nec dictum nisl, a maximus elit. Praesent dolor erat,
								condimentum nec luctus vel, tincidunt a tellus. Sed fringilla
								blandit cursus. Mauris cursus viverra congue. Nullam ultricies metus
								eget condimentum congue.
							</p>
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
								marginLeft: "6%",
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
