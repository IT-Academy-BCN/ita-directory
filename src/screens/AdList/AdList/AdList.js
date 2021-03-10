import React, {useState} from "react";
import AdCard from "screens/AdList/AdCard/AdCard";
import Body from "components/layout/Body/Body";

import {
	StyledTitle,
	StyledWrapper,
	RowWrapper,
	StyledTreeSearch,
	StyledCard,
	StyledAdList,
} from "./AdList.style.js";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import IconWithLabel from "components/units/IconWithLabel/IconWithLabel";
import {Container} from "theme/GlobalStyles.js";
import FilterList from "components/composed/FilterList/FilterList.js";
import dataList from "assets/data.json";

const AdList = () => {
	const [filtersToApply, setFiltersToApply] = useState({});

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
		const allData = dataList.apartments;
		let dataToDisplay;
		dataToDisplay =
			Object.keys(filters).length === 0
				? allData
				: allData.filter((apartment) => isComplyingWithFilters(apartment));
		return dataToDisplay;
	};

	console.log(filteredData(filtersToApply));

	return (
		<Body title="Pisos en Alquiler en Madrid">
			<Container row>
				<FilterList onSubmit={handleSubmit} />
				<StyledAdList>
					<StyledTreeSearch>
						<label>Madrid</label> <label>Alquiler</label>
					</StyledTreeSearch>
					<RowWrapper>
						<StyledTitle>Listado de pisos</StyledTitle>
						<IconWithLabel text="Vista de mapa" icon={faMapMarkerAlt} />
					</RowWrapper>
					<StyledWrapper>
						{filteredData(filtersToApply).map((ad, i) => (
							<StyledCard key={i}>
								{" "}
								<AdCard
									key={ad.key}
									image={{src: ad.imgName, alt: ad.imgDesc}}
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
