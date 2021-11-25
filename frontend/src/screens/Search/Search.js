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
			//if type has been selected by user, send an api request for ads filtered by type
			if (adType) {
				response = await axios.get(
					`${process.env.REACT_APP_API_URL}/ads/v1/ads/type/${adType.label}`
				);
				//if type hasn´t been selected by user, send an api request for all ads
			} else {
				response = await axios.get(`${process.env.REACT_APP_API_URL}/ads/v1/ads/`);
			}
			let filteredAds = response.data.data;

			//if region has been selected, filter ads by region
			if (adRegion) {
				filteredAds = filteredAds.filter((ad) => ad.city === adRegion.label);
			}
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
			<SearchBar
				// setMatchesId={setMatchesId}
				// matchesId={matchesId}
				setAdType={setAdType}
				setAdRegion={setAdRegion}
				getAds={getAds}
			/>
			<SearchStyled>
				<div className="search-body">
					<div className="search-results">
						{loading ? (
							<FontAwesomeIcon icon={faSpinner} className="spinner" />
						) : ads.length === 0 && firstSearch ? (
							`There are no ${adType?.label} in ${adRegion?.label}.`
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
