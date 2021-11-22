import styled from "styled-components";
import Colors from "../../../theme/Colors";

const blueColor = Colors.transparentBlue;
export const Wrapper = styled.div`
	width: 100vw;
	height: 45px;
	background-color: ${blueColor};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 10%;
`;
export const SearchBarContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: row;
	margin-left: 5px;
	margin-top: 0;
	margin-bottom: 0;
	justify-content: flex-start;
	align-items: center;

	@media only screen and (max-width: 768px) {
		margin: 0;
		flex-direction: column;
		justify-content: center;
	}

	@media only screen and (min-width: 1024px) {
	}
`;

export const customStyles = {
	control: (provided) => ({
		...provided,
		backgroundColor: "white",
		height: "80%",
		marginRight: "5px",
	}),
	container: (provided) => ({
		...provided,
		flexBasis: "35%",
		// "@media only screen and (max-width: 1200px)": {
		// 	...provided["@media only screen and (max-width: 1200px)"],
		// 	width: "50%",
		// 	placeholder: "none"
		// },
		maxHeight: "80%",
		minHeight: "80%",
		"@media only screen and (max-width: 768px)": {
			...provided,
			width: "50%",
		},
	}),
	option: (provided) => ({
		...provided,
		":hover": {
			cursor: "pointer",
		},
	}),
	valueContainer: (provided) => ({
		...provided,
		":hover": {
			cursor: "text",
		},
	}),
};
