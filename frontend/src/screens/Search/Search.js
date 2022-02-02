import React, {useState} from "react";
import axios from "axios";

//styles
import {SearchStyled} from "./Search.style.js";
import {Container} from "theme/GlobalStyles.js";

//fontawesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

//components
import Body from "components/layout/Body/Body.js";
import SearchBar from "components/composed/SearchBar/SearchBar.js";
import AdCardListLoadMore from "components/composed/AdCardList/AdCardListLoadMoreBtn";
import MapView from "components/composed/Map/MapView/MapView";

const Search = () => {
	const [loading, setLoading] = useState(0);
	const [ads, setAds] = useState([]);
	const [adType, setAdType] = useState(null);
	const [adRegion, setAdRegion] = useState(null);
	const [firstSearch, setFirstSearch] = useState(false);
	const [localizedAdId, setLocalizedAdId] = useState(null);

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
					`${process.env.REACT_APP_API_URL}/ads/v1/ads/type/${adType.label}`
				);

				// API request for all ads
			} else {
				response = await axios.get(`${process.env.REACT_APP_API_URL}/ads/v1/ads`);
			}
			let filteredAds = response.data.data || [];
			setAds(filteredAds);
			setLoading(0);
			setFirstSearch(true);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Body
			title={<SearchBar setAdType={setAdType} setAdRegion={setAdRegion} getAds={getAds} />}
			isLoggedIn="true"
		>
			<Container>
				<SearchStyled>
					<div className="search-body">
						{loading ? (
							<FontAwesomeIcon icon={faSpinner} className="spinner" />
						) : ads.length === 0 && firstSearch ? (
							`There are no results.`
						) : (
							ads.length > 0 && (
								<AdCardListLoadMore ads={ads} setLocalizedAdId={setLocalizedAdId} />
							)
						)}
					</div>
					<div className="search-map">
						{ads.length > 0 && (
							<MapView filteredAds={ads} localizedAdId={localizedAdId} />
						)}
					</div>
				</SearchStyled>
			</Container>
		</Body>
	);
};

export default Search;
