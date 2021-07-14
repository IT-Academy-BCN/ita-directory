/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import AdCard from "screens/AdList/AdCard/AdCard";
import Body from "components/layout/Body/Body";
import {faMapMarkerAlt, faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import Colors from "theme/Colors";
import MapView from "components/composed/Map/MapView.js";
import axios from "axios";
import _ from "lodash";
import AdListFilter from "screens/AdList/AdListFilter/AdListFilter";

// Styles
import {AdListStyled} from "./AdList.style.js";
import {Container} from "theme/GlobalStyles.js";

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

const AdList = () => {
	const [filtro, setFiltro] = useState();
	const [mapView, setMapView] = useState(true);
	const [filteredAdList, setFilteredAdlist] = useState([]);
	const [adList, setAdList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAds = async () => {
			const result = await axios("https://api-casas.kevinmamaqi.com/api-casas", {
				params: {_limit: 10}, //parece no estar implemententado en el api de casas
			});
			setAdList(result.data.slice(0, 50));
			setLoading(false);
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

	const renderList = filteredAdList.map((e, index) => <AdCard {...e} key={index} />);

	return (
		<Body title="Pisos en Alquiler en Madrid" isLoggedIn="true" justifyTitle="flex-start">
			<Container row className="probando" />
			<AdListStyled>
				<Container row className="probando">
					{!loading ? (
						<>
							<AdListFilter filtrar={(data) => setFiltro(data)} />
							<div className="ads">
								<div className="tree-search">Madrid - Alquiler</div>
								<div className="h3">Mapa de pisos</div>
								<div className="rowWrapper">
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
								{mapView ? <MapView filteredAds={filteredAdList} /> : renderList}
							</div>
						</>
					) : (
						<p>Loading...</p>
					)}
				</Container>
			</AdListStyled>
		</Body>
	);
};
export default AdList;
