import React from "react";
import Colors from "theme/Colors";
import casaPiscinaAd from "../../../assets/images/casaPiscinaAd2.jpg";
import Button from "components/units/Button/Button";
import {StyledViewCard} from "./ViewCard.styles";

const ViewCardItem = ({ad}) => {
	return (
		<div style={{padding: "16px", width: "33.3%"}}>
			<StyledViewCard>
				<img src={casaPiscinaAd} alt="" />
				<p className="description">{ad.description}</p>
				<div className="itemsInLine">
					<span className="price">{`${ad.price}€`}</span>{" "}
					<Button
						buttonStyles={{backgroundColor: Colors.violet}}
						type="button"
						text="Localizar"
					></Button>
				</div>
			</StyledViewCard>
		</div>
	);
};

export default ViewCardItem;
