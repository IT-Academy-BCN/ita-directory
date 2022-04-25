import React, {useState, useEffect} from "react";
import {AdCardListStyled} from "./AdCardList.styles";
import axios from "axios";
import AdCardItem from "./AdCardItem";
import Pagination from "../Pagination/Pagination";

const AdCardListPagination = () => {
	const [ads, setAds] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 9;

	const adsToShow = [...ads].slice(0, currentPage * itemsPerPage);

	const getAds = async () => {
		try {
			const response = await axios.get(`${import.meta.env.REACT_APP_API_URL}/ads/v1/ads`);
			const newAds = response.data.data;
			setAds(newAds);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getAds();
	}, []);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<AdCardListStyled>
			<div className="list-scroll">
				{ads && adsToShow.map((ad) => <AdCardItem key={ad.id} ad={ad}></AdCardItem>)}
			</div>

			<Pagination
				itemsPerPage={itemsPerPage}
				totalItems={ads.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</AdCardListStyled>
	);
};
export default AdCardListPagination;
