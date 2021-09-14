import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	label {
		flex-basis: 150px;
		color: #707070;
	}
	@media screen and (max-width: 600px) {
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
	width: 210%;
	justify-content: center;
`;
