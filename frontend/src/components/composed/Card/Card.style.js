import styled from "styled-components";
import Colors from "theme/Colors";
import {Device, responsiveSizes} from "../../../theme/mediaQueries";

export const CardStyled = styled.div`
	display: flex;
	background: ${Colors.white} 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid ${Colors.extraLightGrey};
	border-radius: 6px;
	opacity: 1;
	align-items: center;

	@media only ${Device.maxTablet} {
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 100%;
		max-width: 300px;
		height: auto;
		object-fit: cover;
		border-radius: 6px;
		margin-left: 0.5rem;
		@media only ${Device.maxTablet} {
			margin-left: 0;
			margin-top: 0.5rem;
		}
		@media only screen and (min-width: ${responsiveSizes.tablet}) and (max-width: ${responsiveSizes.laptop}) {
			width: auto;
			height: 100%;
		}
	}

	.info {
		margin-left: 3rem;
		padding: 1rem;
		@media only ${Device.maxTablet} {
			margin-left: 0.5rem;
		}
	}

	h3 {
		color: ${Colors.grey};
		font-size: 16px;
		text-align: left;
		padding-bottom: 1rem;
		letter-spacing: 0px;
		opacity: 1;
	}

	.description {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-right: 0.2rem;
		max-width: 60%;

		@media only ${Device.maxDesktop} {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	p {
		margin-top: 1rem;
		text-align: left;
		display: flex;
		letter-spacing: 0px;
		line-height: normal;
		opacity: 1;
		padding-bottom: 0;
	}

	.footer {
		display: flex;
	}
`;
