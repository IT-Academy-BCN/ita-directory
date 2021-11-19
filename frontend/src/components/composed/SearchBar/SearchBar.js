import React, {useState} from "react";
import SelectUnit from "components/units/Select/SelectUnit";
import {Wrapper, SearchBarContainer, customStyles} from "./SearchBarStyles";
import SearchButton from "components/units/SearchButton/SearchButton";
import {retrieveSearchBarAds} from "./logic/retrieveSearchBarAds/retrieveSearchBarAds";
import {citiesOptions} from "./logic/data-json/citiesOptions";
import {roomsOptions} from "./logic/data-json/roomsOptions";

const SearchBar = () => {
	const [adType, setAdType] = useState("");
	const [adRegion, setAdRegion] = useState("");
	const [idMatches, setIdMatches] = useState(null);

	const components = {DropdownIndicator: () => null, IndicatorSeparator: () => null};

	const handleChange = (e) => {
		const {value} = e;
		isNaN(value) ? setAdRegion(value) : setAdType(value);
	};

	const handleOnClick = async () => {
		const idArray = await retrieveSearchBarAds(adType, adRegion);
		setIdMatches(idArray);
	};
	return (
		<>
			<Wrapper>
				<SearchBarContainer>
					<SelectUnit
						options={roomsOptions}
						handleOnChange={handleChange}
						customStyles={customStyles}
						components={components}
						placeholder="Casa con piscina, chalet..."
						value={adType}
					/>
					<SelectUnit
						options={citiesOptions}
						handleOnChange={handleChange}
						customStyles={customStyles}
						components={components}
						placeholder="Barcelona, Berlín..."
						value={adRegion}
					/>
					<SearchButton handleOnClick={handleOnClick} />
				</SearchBarContainer>
			</Wrapper>
			<p>Els ads que coincideixen amb la búsqueda són els següents: {idMatches}</p>
		</>
	);
};

export default SearchBar;
