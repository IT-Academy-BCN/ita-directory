import React, {useState} from "react";
import SelectUnit from "components/units/Select/SelectUnit";
import {Wrapper, SearchBarContainer, customStyles} from "./SearchBarStyles";
import SearchButton from "components/units/SearchButton/SearchButton";
const SearchBar = () => {
	const [adType, setAdType] = useState("");
	const [adRegion, setAdRegion] = useState("");

	const options = [
		{value: "chocolate", label: "Chocolate"},
		{value: "strawberry", label: "Strawberry"},
		{value: "vanilla", label: "Vanilla"},
	];

	const components = {DropdownIndicator: () => null, IndicatorSeparator: () => null};
	let nameArray = [];
	// const citiesArray = ["Barcelona", "Berlin", "Glasgow", "Rotterdam", "Mallorca", "Lyon", "Braga", "Napoli", "Paris", "London"]

	const loadOptions = () => {
		return fetch(`http://localhost:10091/ads/v1/ads`)
			.then((res) => res.json())
			.then((data) => {
				data.data.map((ad) => {
					return nameArray.includes(ad.city) === false
						? nameArray.push(ad.city)
						: nameArray;
				});
				// nameArray.filter((value) => value.city.includes(adRegion))
				console.log(adType, adRegion);
			});
	};

	return (
		<Wrapper>
			<SearchBarContainer>
				<SelectUnit
					options={options}
					handleOnChange={(value) => setAdType(value.value)}
					customStyles={customStyles}
					components={components}
					loadOptions={loadOptions}
				/>
				<SelectUnit
					options={options}
					handleOnChange={(value) => setAdRegion(value.value)}
					customStyles={customStyles}
					components={components}
				/>
				<SearchButton />
			</SearchBarContainer>
		</Wrapper>
	);
};

export default SearchBar;
