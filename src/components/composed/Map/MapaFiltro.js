import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import data from "assets/data.json";
import {getAds} from "api/ads";
import MapMarkers from "./MapMarkers";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import FilterList from "components/composed/FilterList/FilterList.js";
import {StyledWrapper, StyledCard} from "./Filter.styles";
import AdCard from "screens/AdList/AdCard/AdCard";

const FilterMap = () => {
	const [ads, setAds] = useState([]);
	const [filtersToApply, setFiltersToApply] = useState({});

	useEffect(() => {
		try {
			getAds().then((ads) => ads && setAds(ads));
		} catch (e) {
			console.log(e);
		}
	}, []);
	const handleSubmit = (submittedFilters) => {
		console.log(submittedFilters);
		setFiltersToApply(submittedFilters);
	};

	const isComplyingWithFilters = (ad) => {
		return (
			(!filtersToApply.priceMin || ad.monthlyRent >= parseInt(filtersToApply.priceMin)) &&
			(!filtersToApply.priceMax || ad.monthlyRent <= parseInt(filtersToApply.priceMax)) &&
			(!filtersToApply.sizeMin || ad.squareMeters >= parseInt(filtersToApply.sizeMin)) &&
			(!filtersToApply.sizeMax || ad.squareMeters >= parseInt(filtersToApply.sizeMax)) &&
			(!filtersToApply.billsIncluded || ad.expenses === "incluido")
		);
	};

	const filteredData = (filters) => {
		let dataToDisplay;
		dataToDisplay =
			Object.keys(filters).length === 0
				? ads
				: ads.filter((ad) => isComplyingWithFilters(ad));
		return dataToDisplay;
	};

	const bounds = data.apartments.map((el) => el.latlng);

	return (
		<div className="Mapa">
			<div style={{float: "left", marginLeft: "2%"}}>
				<FilterList onSubmit={handleSubmit} className="styleFilter" />
			</div>
			<MapContainer
				className="Container"
				center={{lat: 41.3879, lng: 2.16992}}
				zoom={18}
				scrollWheelZoom={true}
				bounds={bounds}
				boundsOptions={{padding: [50, 50]}}
				style={{height: "130%"}}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{/* <MapMarkers apartments={data.apartments} /> */}
				<MapMarkers apartments={data.apartments} />
			</MapContainer>
			<StyledWrapper>
				{filteredData(filtersToApply).map((ad, i) => (
					<StyledCard key={i}>
						<AdCard
							key={ad.key}
							id={ad.key}
							image={{src: ad.url, alt: ad.imgDesc}}
							title={`Casa n. ${ad.key}`}
							description={ad.description}
							price={ad.monthlyRent}
							rooms={ad.numRooms}
							includedExpenses={ad.expenses === "incluido"}
							surface={ad.squareMeters}
						/>
					</StyledCard>
				))}
			</StyledWrapper>
		</div>
	);
};

export default FilterMap;
