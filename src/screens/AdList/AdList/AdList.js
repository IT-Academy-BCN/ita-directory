import React, {useState, useEffect} from "react";
import AdCard from "screens/AdList/AdCard/AdCard";
import Body from "components/layout/Body/Body";
import {adCardImage} from "assets/images";
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
const AdList = () => {
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

	const noFilters = {
		priceMin: "",
		priceMax: "",
		sizeMin: "",
		sizeMax: "",
		billsIncluded: false,
	};

	const [filters, setFilters] = useState(noFilters);

	const handleChange = (changedFilters) => {
		setFilters(changedFilters);
	};
	useEffect(() => {
		console.log(filters);
	}, [filters]);

	return (
		<Body title="Pisos en Alquiler en Madrid">
			<Container row>
				<FilterList filters={filters} onChange={handleChange} />
				<StyledAdList>
					<StyledTreeSearch>
						<label>Madrid</label> <label>Alquiler</label>
					</StyledTreeSearch>
					<RowWrapper>
						<StyledTitle>Listado de pisos</StyledTitle>
						<IconWithLabel text="Vista de mapa" icon={faMapMarkerAlt} />
					</RowWrapper>
					<StyledWrapper>
						<StyledCard>
							{" "}
							<AdCard {...ad} />
						</StyledCard>
						<StyledCard>
							{" "}
							<AdCard {...ad} />
						</StyledCard>
						<StyledCard>
							{" "}
							<AdCard {...ad} />
						</StyledCard>
					</StyledWrapper>
				</StyledAdList>
			</Container>
		</Body>
	);
};
export default AdList;
