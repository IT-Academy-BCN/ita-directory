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
import {map} from "leaflet";

/*
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
*/

const AdList = () => {
	const [filtro, setFiltro] = useState();
	//const [mapView, setMapView] = useState(true);
	const [filteredAdList, setFilteredAdlist] = useState([]);
	const [adList, setAdList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [maxPriceValue, setMaxPriceValue] = useState();
	const [minPriceValue, setMinPriceValue] = useState();
	const [maxM2, setMaxM2] = useState();
	const [minM2, setMinM2] = useState();

	useEffect(() => {
		const fetchAds = async () => {
			/*
            const result = await axios("https://api-casas.kevinmamaqi.com/api-casas", {
                params: {_limit: 10}, //parece no estar implemententado en el api de casas
            });*/

			const result = await axios("http://localhost:5000/ads/v1/ads");
			console.log(result.data.data);
			setAdList(result.data.data);
			setLoading(false);
		};
		fetchAds();
		console.log(adList);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		let _filteredAds = [];
		_filteredAds =
			filtro === undefined
				? adList
				: _.filter(adList, function (e) {
						if (
							filtro.maxPrice === "" &&
							filtro.minPrice === "" &&
							filtro.maxSize === "" &&
							filtro.maxSize === ""
						) {
							return filtro.gastosInc ? e.gastosIncluidos : e;
						} else if (filtro.maxPrice === "" && filtro.minPrice === "") {
							return (
								(filtro.gastosInc ? e.gastosIncluidos : e) &&
								e.m2 <= filtro.maxSize &&
								e.m2 >= filtro.minSize
							);
						} else if (filtro.maxSize === "" && filtro.maxSize === "") {
							return (
								(filtro.gastosInc ? e.gastosIncluidos : e) &&
								e.price <= filtro.maxPrice &&
								e.price >= filtro.minPrice
							);
						}
						return (
							(filtro.gastosInc ? e.gastosIncluidos : e) &&
							e.m2 <= filtro.maxSize &&
							e.m2 >= filtro.minSize &&
							e.price <= filtro.maxPrice &&
							e.price >= filtro.minPrice
						);
				  });
		setFilteredAdlist(_filteredAds);
	}, [filtro, adList]);

	//const renderList = filteredAdList.map((e, index) => <AdCard {...e} key={index}  />);

	const renderList = filteredAdList.map((e, index) => {
		return (
			<AdCard
				key={index}
				city={e.city}
				description={e.description}
				map_lat={e.map_lat}
				map_lon={e.map_lon}
				n_bathrooms={e.n_bathrooms}
				n_rooms={e.n_rooms}
				price={e.price}
				square_meters={e.square_meters}
				title={e.title}
				user_id={e.user_id}
			/>
		);
	});

	useEffect(() => {
		if (loading === false) {
			let priceValue = Array.from(renderList, (o) => o.props.price);
			let maxPV = Math.max(...priceValue);
			let minPV = Math.min(...priceValue);
			//let sizeValue = Array.from(renderList, (o) => o.props.m2);
			let sizeValue = Array.from(renderList, (o) => o.props.square_meters);
			let mxM2 = Math.max(...sizeValue);
			let mnM2 = Math.min(...sizeValue);

			setMaxPriceValue(maxPV);
			setMinPriceValue(minPV);
			setMaxM2(mxM2);
			setMinM2(mnM2);
		}
	}, [renderList, loading]);

	return (
		<Body title="Pisos en Alquiler en Madrid" isLoggedIn="true" justifyTitle="flex-end">
			<AdListStyled>
				<Container row>
					{!loading ? (
						<>
							<AdListFilter
								filtrar={(data) => setFiltro(data)}
								maxPriceValue={maxPriceValue}
								minPriceValue={minPriceValue}
								maxM2={maxM2}
								minM2={minM2}
							/>
							<div className="ads">
								<div className="tree-search">Madrid // Alquiler</div>
								<div className="h3">Listado de pisos</div>
								<div className="rowWrapper"></div>
								{/*here goes more map material*/}
								{/*here goes commented map material*/}
								<div>{renderList}</div>
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

/*
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
                                    </div>
*/

/*
    {mapView ? <MapView filteredAds={filteredAdList} /> : renderList}

*/
