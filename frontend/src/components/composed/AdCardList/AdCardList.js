import React from "react";
import {AdCardListStyled} from "./AdCardListStyled.styles";
import Button from "components/units/Button/Button";
import AdCardItem from "./AdCardItem";

const AdCardList = ({showMoreItems, ads, adsToShow}) => {
	return (
		<AdCardListStyled>
			<div className="list-scroll">
				{ads && adsToShow.map((ad) => <AdCardItem key={ad.key} ad={ad}></AdCardItem>)}
			</div>
			<Button type="button" text="Load more" onClick={() => showMoreItems()}></Button>
		</AdCardListStyled>
	);
};
export default AdCardList;
