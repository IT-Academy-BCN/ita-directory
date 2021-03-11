import React, {useState, useEffect} from "react";
import AdCard from "screens/AdList/AdCard/AdCard";
import Body from "components/layout/Body/Body";
import {getAds} from "api/ads";
import {
	StyledTitle,
	StyledWrapper,
	RowWrapper,
	StyledTreeSearch,
	StyledCard,
	StyledAdList,
} from "./AdList.style.js";
import {faMapMarkerAlt, faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import {Container} from "theme/GlobalStyles.js";
import FilterList from "components/composed/FilterList/FilterList.js";
import Colors from "theme/Colors";

const AdList = () => {
	const [ads, setAds] = useState([]);
	const [filtersToApply, setFiltersToApply] = useState({});
	const [mapView, setMapView] = useState(false);

	useEffect(() => {
		try {
			getAds(filtersToApply).then((ads) => ads && setAds(ads));
		} catch (e) {
			console.log(e);
		}
	}, [filtersToApply]);

	const handleSubmit = (submittedFilters) => {
		console.log(submittedFilters);
		setFiltersToApply(submittedFilters);
	};

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
		<Body title="Pisos en Alquiler en Madrid" isLoggedIn={true}>
			<Container row>
				<FilterList onSubmit={handleSubmit} className="styleFilter" />
				<StyledAdList>
					<StyledTreeSearch>
						<label>Madrid</label>
						{">"}
						<label>Alquiler</label>
					</StyledTreeSearch>
					<RowWrapper>
						<StyledTitle>Listado de pisos</StyledTitle>
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
								type="normal"
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
								type="normal"
							/>
						)}
					</RowWrapper>
					<StyledWrapper>
						{ads.map((ad, i) => (
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
				</StyledAdList>
			</Container>
		</Body>
	);
};
export default AdList;
