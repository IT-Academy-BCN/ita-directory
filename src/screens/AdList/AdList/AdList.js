import React, {useEffect, useState} from "react";
import AdCard from "screens/AdList/AdCard/AdCard";
import Body from "components/layout/Body/Body";
import AdListFilter from "components/composed/AdListFilter/AdListFilter";
import {FilterDiv, AdListStyled, WrapperStyled} from "./AdList.style.js";
import {faMapMarkerAlt, faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import {Container} from "theme/GlobalStyles.js";
import Colors from "theme/Colors";
import MapView from "components/composed/Map/MapView.js";
import axios from "axios";
import _ from "lodash";

const AdList = () => {
	const [mapView, setMapView] = useState(false);
	const [filteredAdList, setFilteredAdlist] = useState([]);
	const [adList, setAdList] = useState([]);
	const [filtro, setFiltro] = useState();

	useEffect(() => {
		const fetchAds = async () => {
			const result = await axios("https://api-casas.kevinmamaqi.com/api-casas", {
				params: {_limit: 10}, //parece no estar implemententado en el api de casas
			});
			setAdList(result.data.slice(0, 10));
		};
		fetchAds();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		let _filteredAds = [];
		_filteredAds =
			filtro === undefined
				? adList
				: _.filter(adList, function (e) {
						return (
							(filtro.gastosInc ? e.gastosIncluidos : e) &&
							e.price <= filtro.maxPrice &&
							e.price >= filtro.minPrice &&
							e.m2 <= filtro.maxSize &&
							e.m2 >= filtro.minSize
						);
				  });
		setFilteredAdlist(_filteredAds);
	}, [filtro, adList]);

	const renderList = filteredAdList.map((e, index) => (
		<div className="CardWrapper" key={index}>
			<AdCard {...e} />
		</div>
	));

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
			paddingTitle2="5vw"
		>
			<Container>
				<FilterDiv>
					<div className="WrapperFilter">
						<div className="CardFilter">
							<AdListFilter filtrar={(data) => setFiltro(data)} />
						</div>
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
						<div className="RowWrapper">
							<MapView filteredAds={filteredAdList} />
						</div>
					) : (
						<WrapperStyled>{renderList}</WrapperStyled>
					)}
				</AdListStyled>
			</Container>
		</Body>
	);
};
export default AdList;
