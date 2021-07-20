import React, {useState} from "react";
import {Link} from "react-router-dom";
import {StyledCity, StyledP} from "./AdCard.style.js";
import Button from "components/units/Button/Button";
import Card from "components/composed/Card/Card";
import EditAd from "screens/EditAd/EditAd";

const AdCard = ({ad, containerClassName}) => {
	const {name, m2, desc, habitaciones, image, id, userId} = ad;
	const [active, setActive] = useState(false);
	return (
		<Card
			titleClassName="titleClassName"
			containerClassName={containerClassName}
			descriptionClassName="descriptionContainer"
			image={image}
			title={name}
			description={
				<>
					<StyledCity>Barcelona</StyledCity>
					<StyledP>{`${m2} m\u00B2`}</StyledP>
					<StyledP>{`${habitaciones} habitaciones`}</StyledP>
				</>
			}
			text={desc}
			footer={
				<>
					<Link
						style={{textDecoration: "none"}}
						to={{pathname: `ad/${id}`, state: {ad: ad}}}
					>
						<Button
							className="blueGradient"
							text="Ver Anuncio"
							type="button"
							buttonStyles={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								marginRight: "1.5rem",
								width: "116px",
								height: "34px",
								letterSpacing: "0px",
								fontSize: "0.95rem",
								fontFamily: "Arial",
							}}
						/>
					</Link>
					<Link
						style={{textDecoration: "none"}}
						to={{pathname: `/${userId}/edit-ad/${id}`, state: {ad: ad}}}
					>
						<Button
							buttonStyles={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								width: "116px",
								height: "34px",
								letterSpacing: "0px",
								fontSize: "0.95rem",
								fontFamily: "Arial",
							}}
							text="Editar"
							className="orangeGradient"
							type="button"
							onClick={() => setActive(true)}
						/>
					</Link>
					<EditAd active={active} hideModal={() => setActive(false)} />
				</>
			}
		/>
	);
};
export default AdCard;
