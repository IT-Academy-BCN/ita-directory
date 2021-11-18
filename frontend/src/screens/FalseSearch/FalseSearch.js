import React from "react";
import ViewList from "./NewView/ViewList";

const FalseSearch = () => {
	return (
		<div style={{display: "flex"}}>
			<div style={{flex: 1}}>
				<ViewList />
			</div>
			<div style={{flex: "1"}}>Aqui estara el mapa</div>
		</div>
	);
};
export default FalseSearch;
