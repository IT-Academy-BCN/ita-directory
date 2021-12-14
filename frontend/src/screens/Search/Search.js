import React, {useState} from "react";
import Header from "components/layout/Header/Header";
import SearchBar from "components/composed/SearchBar/SearchBar.js";
/* import Body from "components/layout/Body/Body.js"; */
import {SearchStyled} from "./Search.style.js";
/* import Map from "components/composed/Map/Map"; 
import CardSearch from 'components/composed/CardSearch/CardSearch.js'; */
import AdCardListLoadMore from "components/composed/AdCardList/AdCardListLoadMoreBtn.js";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
	// const [matchesId, setMatchesId] = useState(null);
	const [loading, setLoading] = useState(0);
	const [ads, setAds] = useState([]);
	const [adType, setAdType] = useState(null);
	const [adRegion, setAdRegion] = useState(null);
	const [firstSearch, setFirstSearch] = useState(false);

	const getAds = async () => {
		try {
			setLoading(1);
			let response = null;
			//if type and location have been selected by user, send an api request for filtered ads
			if (adType && adRegion) {
				response = await axios.get(
					`${process.env.REACT_APP_API_URL}/ads/v1/ads/${adRegion.label}/${adType.label}`
				);
				//if only type was selected, API request for type filtered ads
			} else if (adType && !adRegion) {
				response = await axios.get(
					`${process.env.REACT_APP_API_URL}/ads/v1/ads/types/${adType.label}`
				);

				// API request for all ads
			} else {
				response = await axios.get(`${process.env.REACT_APP_API_URL}/ads/v1/ads`);
			}
			let filteredAds = response.data.data || [];
			console.log(filteredAds);

			setAds(filteredAds);
			setLoading(0);
			setFirstSearch(true);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div>
			<Header isTitleVisible={false} />
			<SearchBar setAdType={setAdType} setAdRegion={setAdRegion} getAds={getAds} />
			<SearchStyled>
				<div className="search-body">
					<div className="search-results">
						{loading ? (
							<FontAwesomeIcon icon={faSpinner} className="spinner" />
						) : ads.length === 0 && firstSearch ? (
							`There are no results.`
						) : (
							<AdCardListLoadMore ads={ads} className="search-results-list" />
						)}
					</div>
					<div className="search-map">
						<div className="map">map here</div>
					</div>
				</div>
			</SearchStyled>
		</div>
	);
};

export default Search;
