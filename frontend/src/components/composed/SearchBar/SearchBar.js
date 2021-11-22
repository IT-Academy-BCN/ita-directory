import React, {useState} from "react";
import SelectUnit from "components/units/Select/SelectUnit";
import {SearchBarContainer, customStyles} from "./SearchBarStyles";
import {StyledSubHeader} from "components/layout/Header/Header.styles";
import SearchButton from "components/units/SearchButton/SearchButton";
import {retrieveSearchBarAds} from "./logic/retrieveSearchBarAds/retrieveSearchBarAds";
import {citiesOptions} from "./logic/data-json/citiesOptions";
import {roomsOptions} from "./logic/data-json/roomsOptions";

const SearchBar = ({setMatchesId}) => {
	const [adType, setAdType] = useState(null);
	const [adRegion, setAdRegion] = useState(null);

	const components = {DropdownIndicator: () => null, IndicatorSeparator: () => null};

	const handleChange = (e) => {
		const {value} = e;
		isNaN(value) ? setAdRegion(value) : setAdType(value);
	};

	const handleOnClick = async () => {
		const idArray = await retrieveSearchBarAds(adType, adRegion);
		setMatchesId(idArray);
		setAdRegion(null);
		setAdType(null);
	};
	return (
		<>
			<StyledSubHeader>
				<SearchBarContainer>
					<SelectUnit
						options={roomsOptions}
						handleOnChange={handleChange}
						customStyles={customStyles}
						components={components}
						placeholder="Número habitaciones"
						value={adType}
						valueContainer={adType}
					/>
					<SelectUnit
						options={citiesOptions}
						handleOnChange={handleChange}
						customStyles={customStyles}
						components={components}
						placeholder="Barcelona, Berlín..."
						value={adRegion}
						valueContainer={adRegion}
					/>
					<SearchButton handleOnClick={handleOnClick} />
				</SearchBarContainer>
			</StyledSubHeader>
		</>
	);
};

export default SearchBar;
