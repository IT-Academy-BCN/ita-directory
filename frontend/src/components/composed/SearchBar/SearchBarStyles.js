import styled from "styled-components";

export const SearchBarContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	@media only screen and (min-width: 768px) {
		margin: 0;
		flex-direction: row;
		justify-content: center;
	}

	.header-select {
		width: 100%;
		margin-bottom: 0.5rem;

		@media only screen and (min-width: 768px) {
			margin-bottom: 0;
			margin-right: 0.5rem;
		}
	}

	.header-button {
		width: 100%;
	}
`;

// export const customStyles = {
//     control: (provided) => ({
//         ...provided,
//         backgroundColor: "white",
//         height: "80%",
//         marginRight: "5px",
//     }),
//     container: (provided) => ({
//         ...provided,
//         flexBasis: "35%",
//         // "@media only screen and (max-width: 1200px)": {
//         // 	...provided["@media only screen and (max-width: 1200px)"],
//         // 	width: "50%",
//         // 	placeholder: "none"
//         // },
//         maxHeight: "80%",
//         minHeight: "80%",
//         "@media only screen and (max-width: 768px)": {
//             ...provided,
//             width: "50%",
//         },
//     }),
//     option: (provided) => ({
//         ...provided,
//         ":hover": {
//             cursor: "pointer",
//         },
//     }),
//     valueContainer: (provided) => ({
//         ...provided,
//         ":hover": {
//             cursor: "text",
//         },
//     }),
// };
