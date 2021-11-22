import React from "react";
import {Wrapper} from "./SearchButtonStyles";

const SearchButton = ({handleOnClick, className}) => {
	return (
		<Wrapper onClick={handleOnClick} className={className}>
			<span style={{color: "white"}}> &#x1F50E;&#xFE0E;</span>
		</Wrapper>
	);
};

export default SearchButton;
