import styled from "styled-components";
import Colors from "theme/Colors";

export const SearchBarContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-right: 30px;
	padding-left: 0.5rem;

	@media only screen and (min-width: 768px) {
		margin: 0;
		flex-direction: row;
		justify-content: ${(props) => (props.isLoading === 1 ? "center" : "flex-start")};
		align-items: center;
	}

	.header-select {
		width: 100%;
		margin-bottom: 0.5rem;

		@media only screen and (min-width: 768px) {
			margin-bottom: 0;
			margin-right: 0.5rem;
			width: 35%;
		}
	}

	.header-button {
		width: 100%;
		margin: 0;

		@media only screen and (min-width: 768px) {
			width: 2.4rem;
			height: 2.4rem;
			padding: 0;
		}
	}

	.spinner {
		width: 2.5rem;
		height: 2.5rem;
		color: ${Colors.frenchBlue};

		animation-name: fullRotation;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		@keyframes fullRotation {
			from {
				transform: rotate(0deg);
				width: 0.5rem;
			}
			to {
				width: 1;
				transform: rotate(360deg);
			}
		}
		@media only screen and (min-width: 768px) {
			width: 2.5rem;
			height: 2.5rem;
		}
	}
`;

export const customStyles = {
	option: (provided) => ({
		...provided,
		":hover": {
			cursor: "pointer",
		},
	}),
	control: (provided) => ({
		...provided,
		":hover": {
			cursor: "text",
		},
	}),
};
