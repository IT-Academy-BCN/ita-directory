import React, {useState} from "react";
import AdCard from "screens/AdList/AdCard/AdCard";
import Body from "components/layout/Body/Body";
import {adCardImage} from "assets/images";
import AdListFilter from "components/composed/AdListFilter/AdListFilter";
import {AdListDiv, FilterDiv, AdListStyled, WrapperStyled} from "./AdList.style.js";
import {faMapMarkerAlt, faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import {Container} from "theme/GlobalStyles.js";
import Colors from "theme/Colors";
import MapView from "components/composed/Map/MapView.js";

const AdList = () => {
	const [mapView, setMapView] = useState(false);
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
	const buttonStyle = {
		display: "flex",
		alignItems: "center",
		width: "auto",
		height: "auto",
		fontSize: "0.95rem",
		fontFamily: "Arial",
		color: Colors.lightGray,
		background: "transparent",
		boxShadow: "none",
		outline: "none",
		paddingRight: 0,
	};
	return (
		<Body
			title="Pisos en Alquiler en Madrid"
			isLoggedIn="true"
			justifyTitle="flex-start"
			paddingTitle="0px"
			paddingTitle2="15vw"
		>
			<Container row>
				<FilterDiv>
					<div className="WrapperFilter">
						<div className="CardFilter">
							<AdListFilter />
						</div>
					</FilterDiv>

					<AdListStyled>
						<div className="TreeSearch">
							<label>Madrid - </label>
							<label>Alquiler</label>
						</div>

						<div className="RowWrapper">
							<div className="h3">Listado de pisos</div>
							{mapView ? (
								<Button
									text="Vista de detalles"
									icon={faBars}
									iconPosition="left"
									iconStyles={{
										marginRight: 5,
										paddingLeft: 0,
									}}
									onClick={() => setMapView(!mapView)}
									buttonStyles={buttonStyle}
								/>
							) : (
								<Button
									text="Vista de mapa"
									icon={faMapMarkerAlt}
									iconPosition="left"
									iconStyles={{
										marginRight: 5,
										paddingLeft: 0,
									}}
									onClick={() => setMapView(!mapView)}
									buttonStyles={buttonStyle}
								/>
							)}
						</div>

						{mapView ? (
							<div>
								<MapView />
							</div>
						) : (
							<WrapperStyled>
								<div className="CardWrapper">
									<AdCard {...ad} />
								</div>
								<div className="CardWrapper">
									<AdCard {...ad} />
								</div>
								<div className="CardWrapper">
									<AdCard {...ad} />
								</div>
							</WrapperStyled>
						)}
					</AdListStyled>
				</AdListDiv>
			</Container>
		</Body>
	);
};
export default AdList;
