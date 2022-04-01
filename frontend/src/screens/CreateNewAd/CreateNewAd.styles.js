import styled from "styled-components";
import {Device} from "../../theme/mediaQueries";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;

	form > div {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 1rem;

		> div {
			width: 10rem;

			&:last-of-type {
				// mapa
				width: 100%;
			}

			&:not(.form-label) > label {
				display: none;
			}

			&.form-label svg {
				margin-right: 0.5rem;
			}

			&:not(:first-of-type) {
				width: 20rem;

				input,
				textarea {
					border-color: #707070;
				}
			}

			&.form-label label {
				flex-basis: 150px;
				color: #707070;
				width: 10rem;
				font-weight: bold;
			}
		}

		.input-container {
			margin-top: 0;
		}
	}

	@media ${Device.max600} {
		padding-left: 5vw;
		padding-right: 5vw;
		label {
			flex-basis: 50px;
			padding: 5px;
		}
	}
`;

export const MapText = styled.p`
	margin-top: 3%;
	font-style: italic;
	color: grey;
	font-size: 12px;
`;

export const MapBox = styled.div`
	width: 295%;
	justify-content: flex-start;
`;

export const CsvNotificationError = styled.div`
	background-color: #d47982;
	text-align: center;
	font-style: italic;
	color: white;
`;

export const CsvNotificationSuccess = styled.div`
	background-color: #91d479;
	text-align: center;
	font-style: italic;
	color: white;
`;
