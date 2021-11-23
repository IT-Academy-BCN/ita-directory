import React, {useState, useEffect} from "react";
import {AdCardListStyled} from "./AdCardList.styles";
import Button from "components/units/Button/Button";
import axios from "axios";
import AdCardItem from "./AdCardItem";

const AdCardListLoadMore = () => {
	const [ads, setAds] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 9;

	const adsToShow = [...ads].slice(0, currentPage * itemsPerPage);

	const getAds = async () => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_URL}/ads/v1/ads`);
			const newAds = response.data.data;
			setAds(newAds);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getAds();
	}, []);

	const showMoreItems = () => {
		setCurrentPage((prevValue) => prevValue + 1);
	};

	return (
		<AdCardListStyled>
			<div className="list-scroll">
				{ads && adsToShow.map((ad) => <AdCardItem key={ad.id} ad={ad}></AdCardItem>)}
			</div>
			<Button type="button" text="Load more" onClick={showMoreItems}></Button>
		</AdCardListStyled>
	);
};
export default AdCardListLoadMore;
