import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "components/layout/Header/Header";
/* import Body from "components/layout/Body/Body.js"; */
import {SearchStyled} from "./Search.style.js";
/* import Map from "components/composed/Map/Map"; 
import CardSearch from 'components/composed/CardSearch/CardSearch.js'; */
import AdCardList from "components/composed/AdCardList/AdCardList.js";

const Search = () => {
	const [ads, setAds] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const adsToShow = [...ads].slice(0, currentPage * 9);

	const getAds = async () => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_URL}/ads/v1/ads`);
			const newAds = response.data.data;

			setAds((prevAds) => [...prevAds, ...newAds]);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getAds();
	}, []);

	const showMoreItems = () => {
		getAds();
		setCurrentPage((prevValue) => prevValue + 1);
	};

	return (
		<div>
			<Header />
			<SearchStyled>
				<div className="search-body">
					<div className="search-results">
						<AdCardList
							className="search-results-list"
							ads={ads}
							adsToShow={adsToShow}
							showMoreItems={showMoreItems}
						></AdCardList>
					</div>
					<div className="search-map">
						<div className="map">xxxS</div>
					</div>
				</div>
			</SearchStyled>
		</div>
	);
};

export default Search;
