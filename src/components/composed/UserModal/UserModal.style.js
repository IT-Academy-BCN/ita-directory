import styled from "styled-components";
import Colors from "theme/Colors";

export const UserModalStyled = styled.div`
	p {
		color: ${Colors.grey};
		width: auto;
		letter-spacing: 0px;
		opacity: 1;
		width: auto;
	}

	label {
		display: none;
	}

	select {
		text-transform: uppercase;
		padding: 0.5em;
		font-size: 20px;
		border-radius: 5px;
		font-weight: bold;
		width: 100%;

		color: ${(props) =>
			props.currentUserState === "pending"
				? Colors.grey
				: props.currentUserState === "active"
				? Colors.darkGreen
				: Colors.darkRed};

		border-color: ${(props) =>
			props.currentUserState === "pending"
				? Colors.grey
				: props.currentUserState === "active"
				? Colors.darkGreen
				: Colors.darkRed};

		option {
			text-transform: uppercase;
		}
	}
`;

// export const StyledOption = styled.option``;

// export const StyledSelect = styled.select`
// 	font-size: 20px;
// 	color: ${(props) => (props.value = 1 ? Colors.darkGreen : Colors.darkRed)};
// 	border-color: ${(props) => (props.value = 1 ? Colors.darkGreen : Colors.darkRed)};
// 	padding: 10px;
// 	border-radius: 5px;
// 	font-weight: bold;
// 	width: 100%;
// `;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
