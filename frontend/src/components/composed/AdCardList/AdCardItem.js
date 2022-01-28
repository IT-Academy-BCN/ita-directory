import React from "react";
import Colors from "theme/Colors";
import casaPiscinaAd from "../../../assets/images/casaPiscinaAd2.jpg";
import Button from "components/units/Button/Button";
import {AdCardItemStyled} from "./AdCardItem.styles";
import {AdCardContainer} from "./AdCardContainer";

const AdCardItem = ({ad, openSelectedAdPopup}) => {
	return (
		<AdCardContainer>
			<AdCardItemStyled>
				<img src={casaPiscinaAd} alt="" />
				<p className="description">{ad.description}</p>
				<div className="itemsInLine">
					<span className="price">{`${ad.price}€`}</span>{" "}
					<Button
						buttonStyles={{backgroundColor: Colors.violet}}
						type="button"
						text="Localizar"
						onClick={openSelectedAdPopup}
					></Button>
				</div>
			</AdCardItemStyled>
		</AdCardContainer>
	);
};

export default AdCardItem;
