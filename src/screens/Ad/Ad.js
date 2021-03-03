import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import Button from "components/units/Button/Button";
import {Link} from "react-router-dom";
import {StyledAd, StyledUl, StyledLi, StyledTitle, StyledText} from "./Ad.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";
import Gallery from "components/composed/Gallery/Gallery";
import {
	adImage1,
	adImage2,
	adImage3,
	adThumbnail1,
	adThumbnail2,
	adThumbnail3,
} from "assets/images";

const Ad = () => {
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsDisabled(true);
		setIsLoading(true);
		console.log("cargando");
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			console.log("finalizado");
		}, 2000);
	};
	const images = [
		{
			original: adImage1,
			thumbnail: adThumbnail1,
			originalAlt: "Bedroom",
			thumbnailAlt: "Bedroom",
		},
		{
			original: adImage2,
			thumbnail: adThumbnail2,
			originalAlt: "Bedroom2",
			thumbnailAlt: "Bedroom2",
		},
		{
			original: adImage3,
			thumbnail: adThumbnail3,
			originalAlt: "Casa piscina",
			thumbnailAlt: "Casa piscina",
		},
	];

	return (
		<>
			<Body title="Anuncio">
				<StyledAd>
					<Gallery images={images} />
					<div>
						<div>
							<StyledUl>
								<StyledLi>
									<div>
										<FontAwesomeIcon icon={faMapMarkerAlt} />
									</div>
									<StyledTitle>Madrid</StyledTitle>
								</StyledLi>
								<StyledLi>
									<div>
										<FontAwesomeIcon icon={faBed} />
									</div>
									<StyledTitle>3 habitaciones</StyledTitle>
								</StyledLi>
								<StyledLi>
									<div>
										<FontAwesomeIcon icon={faEuroSign} />
									</div>
									<StyledTitle>1.390.000</StyledTitle>
								</StyledLi>
								<StyledLi>
									<div>
										<FontAwesomeIcon icon={faHome} />
									</div>
									<StyledTitle>55m2</StyledTitle>
								</StyledLi>
								<StyledLi>
									<div>
										<FontAwesomeIcon icon={faBath} />
									</div>
									<StyledTitle>4 baños</StyledTitle>
								</StyledLi>
							</StyledUl>
						</div>

						<StyledText>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
								tincidunt urna. Aenean eu ullamcorper eros, blandit volutpat turpis.
							</p>
							<p>
								Quisque feugiat tincidunt lectus, vel congue eros sollicitudin ut.
								Maecenas nec dictum nisl, a maximus elit. Praesent dolor erat,
								condimentum nec luctus vel, tincidunt a tellus. Sed fringilla
								blandit cursus. Mauris cursus viverra congue. Nullam ultricies metus
								eget condimentum congue.
							</p>
						</StyledText>
					</div>
					<Link to="/">
						{" "}
						{/* //contacto */}
						<Button
							buttonStyles={{width: "5rem", fontsize: "12px", height: "2rem"}}
							text="Contacto"
							className="blueGradient"
							loadingText="Cargando"
							type="submit"
							isLoading={isLoading}
							disabled={disabled}
							onClick={handleClick}
						/>
					</Link>
				</StyledAd>
			</Body>
		</>
	);
};

export default Ad;
