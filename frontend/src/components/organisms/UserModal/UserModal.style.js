import styled from "styled-components";
import Colors from "../../../theme/Colors";

export const UserModalStyled = styled.div`
	margin-bottom: 25px;
	p {
		color: ${Colors.grey};
		width: auto;
		letter-spacing: 0px;
		opacity: 1;
		font-size: 16px;
		width: 90%;
		margin-bottom: 2px;
	}

	label {
		display: none;
	}

	select {
		text-transform: uppercase;
		padding: 0.2em;
		font-size: 20px;
		border-radius: 5px;
		font-weight: bold;
		width: 100%;

		color: ${(props) =>
		props.currentUserState === ("rejected" || 3)
			? Colors.redColor
			: props.currentUserState === ("aprobado" || 1)
				? Colors.darkGreen
				: Colors.grey};

		border-color: ${(props) =>
		props.currentUserState === ("rejected" || 3)
			? Colors.redColor
			: props.currentUserState === ("aprobado" || 1)
				? Colors.darkGreen
				: Colors.grey};

		option {
			text-transform: uppercase;
		}
		option.aprobado {
			color: ${Colors.darkGreen};
		}
		option.pending {
			color: ${Colors.grey};
		}
		option.rejected {
			color: ${Colors.redColor};
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
