import React, {useState, useEffect} from "react";
import Body from "components/layout/Body/Body";
import Button from "components/units/Button/Button";
import {useParams} from "react-router";
import {AdStyled, StyledUl, StyledText, BottomDiv, StyledStreet, StyledItems} from "./Ad.styles";
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

const Ad = () => {
	const [active, setActive] = useState(false);
	const [adData, setAdData] = useState({});

	let {id} = useParams();

	useEffect(() => {
		tryFetch();
		// eslint-disable-next-line
	}, []);
	const tryFetch = () => {
		fetch(`http://localhost:10091/ads/v1/ads/${id}`, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => setAdData(data.data));
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
			<Body
				title="Anuncio"
				justifyTitle="flex-start"
				paddingTitle="0px"
				paddingTitle2="15vw"
				isLoggedIn="true"
			>
				<>
					<AdStyled>
						<div className="Title">Título de mi anuncio</div>
						<Gallery images={images} />

						<BottomDiv>
							<StyledUl>
								<StyledItems>
									<IconWithLabel icon={faMapMarkerAlt} text={adData.city} />
								</StyledItems>
								<StyledItems>
									<IconWithLabel
										icon={faBed}
										text={`${adData.n_rooms} habitaciones`}
									/>
								</StyledItems>
								<StyledItems>
									<IconWithLabel
										icon={faEuroSign}
										text={`${new Intl.NumberFormat("es-ES").format(
											adData.price * 1000
										)}`}
									/>
								</StyledItems>
								<StyledItems>
									<IconWithLabel
										icon={faHome}
										text={`${adData.square_meters} m^2`}
									/>
								</StyledItems>
								<StyledItems>
									<IconWithLabel
										icon={faBath}
										text={`${adData.n_bathrooms} baños`}
									/>
								</StyledItems>
							</StyledUl>

							<StyledText>
								<p>
									Lorem ipsum dolor sit amet, consectetur gadipiscing elit.
									Praesent at tincidunt urna. Aenean eu ullamcorper eros, blandit
									volutpat turpis.
								</p>
								<p>
									Quisque feugiat tincidunt lectus, vel congue eros sollicitudin
									ut. Maecenas nec dictum nisl, a maximus elit. Praesent dolor
									erat, condimentum nec luctus vel, tincidunt a tellus. Sed
									fringilla blandit cursus. Mauris cursus viverra congue. Nullam
									ultricies metus eget condimentum congue.
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
								}}
								text="Contacto"
								className="blue-gradient"
								type="button"
								onClick={() => setActive(true)}
							/>
							<ContactModal active={active} hideModal={() => setActive(false)} />
						</BottomDiv>
					</AdStyled>
				</>
			</Body>
		</>
	);
};

export default Ad;
