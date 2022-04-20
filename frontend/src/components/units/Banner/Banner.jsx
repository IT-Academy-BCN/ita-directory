import BarcelonaBanner from "../../../assets/logos/barcelona-banner.jpg";
import styled from "styled-components";
import Colors from "../../../theme/Colors.js";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: static;

	p {
		font-size: 1.5rem; /* 24px */
		line-height: 2rem; /* 32px */
		font-weight: bold;
		color: ${Colors.redPink};
		margin: 25rem auto 2rem auto;
	}
`;

const BannerImage = styled.img`
	height: 23rem;
	width: 100%;
	object-fit: cover;
	position: absolute;
	left: 0;
	right: 0;
`;

const Banner = () => {
	return (
		<Section className="banner">
			<BannerImage src={BarcelonaBanner} alt="body-banner" className="banner__image" />
			<p className="banner__title">
				Un directorio abierto desarrollado por los alumnos de Barcelona Activa
			</p>
		</Section>
	);
};

export default Banner;
