import React from "react";
import {Link} from "react-router-dom";
import {StyledCity, StyledP} from "./AdCard.style.js";
import Button from "components/units/Button/Button";
import Card from "components/composed/Card/Card";

const AdCard = ({ad, containerClassName}) => {
	const {id, url, alt, title, city, squareMeters, description, numRooms, userId} = ad;
	console.log("id" + id);
	return (
		<Card
			titleClassName="titleClassName"
			containerClassName={containerClassName}
			descriptionClassName="descriptionContainer"
			image={{src: url, alt: alt}}
			title={title}
			description={
				<>
					<StyledCity>{city}</StyledCity>
					<StyledP>{`${squareMeters} m\u00B2`}</StyledP>
					<StyledP>{`${numRooms} habitaciones`}</StyledP>
				</>
			}
			text={description}
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
							className="orangeGradient"
							text="Editar"
							type="button"
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
						/>
					</Link>
				</>
			}
		/>
	);
};
export default AdCard;
