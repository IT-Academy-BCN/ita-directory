import React from "react";
import {Wrapper} from "./SearchButtonStyles";

const SearchButton = ({handleOnClick}) => {
	return (
		<Wrapper onClick={handleOnClick}>
			<span style={{color: "white"}}> &#x1F50E;&#xFE0E;</span>
		</Wrapper>
	);
};

export default SearchButton;
