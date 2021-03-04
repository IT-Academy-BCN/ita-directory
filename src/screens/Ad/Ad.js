import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import Button from "components/units/Button/Button";
import Map from "components/composed/Map/Map";
import {Link} from "react-router-dom";
import {StyledAd, StyledUl, StyledTitle, StyledText, StyledBottomDiv} from "./Ad.styles";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";
import Gallery from "components/composed/Gallery/Gallery";
import {
	adImage1,
	adImage2,
	adImage3,
	adThumbnail1,
	adThumbnail2,
	adThumbnail3,
} from "assets/images";
import IconWithLabel from "components/units/IconWithLabel/IconWithLabel";

const LIST_ICONS = [
	{name: "Madrid", icon: faMapMarkerAlt},
	{name: "3 habitaciones", icon: faBed},
	{name: "1.390.000", icon: faEuroSign},
	{name: "55m2", icon: faHome},
	{name: "4 Baños", icon: faBath},
];

const Ad = ({icon}) => {
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsDisabled(true);
		setIsLoading(true);
		console.log("cargando");
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			console.log("finalizado");
		}, 3000);
	};
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
								return <IconWithLabel key={index} icon={el.icon} text={el.name} />;
							})}
						</StyledUl>
						<StyledText>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
								tincidunt urna. Aenean eu ullamcorper eros, blandit volutpat turpis.
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
						<Link to="/">
							{" "}
							{/* //contacto */}
							<Button
								buttonStyles={{width: "5rem", fontsize: "12px", height: "2rem"}}
								text="Contacto"
								className="blueGradient"
								loadingText="Cargando"
								type="submit"
								isLoading={isLoading}
								disabled={disabled}
								onClick={handleClick}
							/>
						</Link>
					</StyledBottomDiv>
				</StyledAd>
			</Body>
		</>
	);
};

export default Ad;
