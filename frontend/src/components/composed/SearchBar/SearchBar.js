import React, {useState} from "react";
import SelectUnit from "components/units/Select/SelectUnit";
import {SearchBarContainer, customStyles} from "./SearchBarStyles";
import {StyledSubHeader} from "components/layout/Header/Header.styles";
import {retrieveSearchBarAds} from "./logic/retrieveSearchBarAds/retrieveSearchBarAds";
import {citiesOptions} from "./logic/data-json/citiesOptions";
import {roomsOptions} from "./logic/data-json/roomsOptions";
import Button from "../../units/Button/Button";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({setMatchesId}) => {
	const [adType, setAdType] = useState(null);
	const [adRegion, setAdRegion] = useState(null);
	const [loading, setLoading] = useState(0);

	const components = {DropdownIndicator: () => null, IndicatorSeparator: () => null};

	const handleChangeAdType = (e) => {
		if (e) {
			setAdType(e);
		} else if (e === null) {
			setAdType(null);
		}
	};

	const handleChangeAdLocation = (e) => {
		if (e) {
			setAdRegion(e);
		} else if (e === null) {
			setAdRegion(null);
		}
	};
	const handleOnClick = async () => {
		if (adType && adRegion !== null) {
			setLoading(1);
			const idArray = await retrieveSearchBarAds(adType.value, adRegion.value);
			setMatchesId(idArray);
			setLoading(0);
		} else if (adType && adRegion === null) {
			setLoading(1);
			const idArray = await retrieveSearchBarAds(adType.value, adRegion);
			setMatchesId(idArray);
			setLoading(0);
		} else if (adType === null && adRegion) {
			setLoading(1);
			const idArray = await retrieveSearchBarAds(adType, adRegion.value);
			setMatchesId(idArray);
			setLoading(0);
		}
		setAdRegion(null);
		setAdType(null);
	};
	return (
		<StyledSubHeader>
			<SearchBarContainer isLoading={loading}>
				{loading ? (
					<FontAwesomeIcon icon={faSpinner} className="spinner" />
				) : (
					<>
						<SelectUnit
							options={roomsOptions}
							handleOnChange={handleChangeAdType}
							components={components}
							placeholder="Número habitaciones"
							value={adType}
							className="type"
							customStyles={customStyles}
						/>
						<SelectUnit
							options={citiesOptions}
							handleOnChange={handleChangeAdLocation}
							components={components}
							placeholder="Barcelona, Berlín..."
							value={adRegion}
							className="location"
							customStyles={customStyles}
						/>
						<Button
							onClick={handleOnClick}
							icon={faSearch}
							iconPosition="left"
							className="header-button"
						/>
					</>
				)}
			</SearchBarContainer>
		</StyledSubHeader>
	);
};

export default SearchBar;
