import React, {useState} from "react";
import Header from "components/layout/Header/Header";
import SearchBar from "components/composed/SearchBar/SearchBar.js";
/* import Body from "components/layout/Body/Body.js"; */
import {SearchStyled} from "./Search.style.js";
/* import Map from "components/composed/Map/Map"; 
import CardSearch from 'components/composed/CardSearch/CardSearch.js'; */

// Add Map
import "./Search.css"
import ControlMarkerPopup from "368-issue/ControlMarkerPopup";


const Search = () => {

	// <<<<<<<< MAP >>>>>>>>>>>>>
	const [showPop, setShowPop] = useState(false);
	const togglePop = () => {setShowPop(!showPop)};
	const onPop = () => {setShowPop(true)};
	const offPop = () => {setShowPop(false)};
	// <<<<<<<< MAP >>>>>>>>>>>>>

	const [matchesId, setMatchesId] = useState(null);
	return (
		<div>
			<Header isTitleVisible={false} />
			<SearchBar setMatchesId={setMatchesId} matchesId={matchesId} />
			<SearchStyled>
				<div className="search-body">
					<div className="search-results">
						<div className="search-results-list">
							<div className="box" onClick={togglePop}>
								<h1>CLICK to TOGGLE Popup ON/OFF</h1>
							</div>
							<div className="box" onMouseOver={onPop}>
								<h1>Mouse OVER to SHOW Popup</h1>
							</div>
							<div className="box" onMouseOver={offPop}>
								<h1>Mouse OVER to HIDE Popup</h1>
							</div>
							<div className="box" onMouseOver={onPop} onMouseOut={offPop}>
								<h1>Mouse OVER to SHOW & Mouse OUT to HIDE Popup</h1>
							</div>
							<div className="box" onClick={togglePop}>
								<h1>CLICK to TOGGLE Popup ON/OFF</h1>
							</div>
							<div className="box" onMouseOver={onPop}>
								<h1>Mouse OVER to SHOW Popup</h1>
							</div>
							<div className="box" onMouseOver={offPop}>
								<h1>Mouse OVER to HIDE Popup</h1>
							</div>
							<div className="box" onMouseOver={onPop} onMouseOut={offPop}>
								<h1>Mouse OVER to SHOW & Mouse OUT to HIDE Popup</h1>
							</div>
							<div className="box" onClick={togglePop}>
								<h1>CLICK to TOGGLE Popup ON/OFF</h1>
							</div>
							<div className="box" onMouseOver={onPop}>
								<h1>Mouse OVER to SHOW Popup</h1>
							</div>
							<div className="box" onMouseOver={offPop}>
								<h1>Mouse OVER to HIDE Popup</h1>
							</div>
							<div className="box" onMouseOver={onPop} onMouseOut={offPop}>
								<h1>Mouse OVER to SHOW & Mouse OUT to HIDE Popup</h1>
							</div>							
						</div>
					</div>
					<div className="search-map">
						<div className="map">
							{/* Map */}
							<ControlMarkerPopup
								showPop={showPop}
								setShowPop={setShowPop}
							/>
						</div>
					</div>
					<div className="search-more-button">
						<button type="button">cargar mas</button>
					</div>
				</div>
			</SearchStyled>
		</div>
	);
};

export default Search;
