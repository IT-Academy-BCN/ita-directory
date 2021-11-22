import React, {useState} from "react";
import SelectUnit from "components/units/Select/SelectUnit";
import {SearchBarContainer} from "./SearchBarStyles";
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
		isNaN(value) ? setAdRegion(e) : setAdType(e);
		console.log(e);
	};
	const handleOnClick = async () => {
		const idArray = await retrieveSearchBarAds(adType, adRegion);
		setMatchesId(idArray);
		setAdRegion(null);
		setAdType(null);
	};
	return (
		<StyledSubHeader>
			<SearchBarContainer>
				<SelectUnit
					options={roomsOptions}
					handleOnChange={handleChange}
					components={components}
					placeholder="Número habitaciones"
					value={adType}
					className="type"
				/>
				<SelectUnit
					options={citiesOptions}
					handleOnChange={handleChange}
					components={components}
					placeholder="Barcelona, Berlín..."
					value={adRegion}
					className="location"
				/>
				<SearchButton handleOnClick={handleOnClick} className="header-button" />
			</SearchBarContainer>
		</StyledSubHeader>
	);
};

export default SearchBar;
