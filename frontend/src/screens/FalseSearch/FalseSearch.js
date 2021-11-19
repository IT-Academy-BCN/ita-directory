import React from "react";
import AdCardList from "./NewView/AdCardList";

const FalseSearch = () => {
	return (
		<div style={{display: "flex"}}>
			<div style={{flex: 1}}>
				<AdCardList />
			</div>
			<div style={{flex: "1"}}>Aqui estara el mapa</div>
		</div>
	);
};
export default FalseSearch;
