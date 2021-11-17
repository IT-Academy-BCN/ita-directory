import SelectUnit from "components/units/Select/SelectUnit";
import {Wrapper, SearchBarContainer} from "./SearchBarStyles";
import SearchButton from "components/units/SearchButton/SearchButton";
const SearchBar = () => {
	return (
		<Wrapper>
			<SearchBarContainer>
				<SelectUnit options={{className: "selectType"}} />
				<SelectUnit options={{className: "selectRegion"}} />
				<SearchButton />
			</SearchBarContainer>
		</Wrapper>
	);
};

export default SearchBar;
