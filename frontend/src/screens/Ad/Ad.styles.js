import styled from "styled-components";
import Colors from "theme/Colors";
import {Device} from "../../theme/mediaQueries";

export const AdStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	align-items: right;

	@media only ${Device.min1020} {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media only ${Device.max1019} {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media only ${Device.max468} {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 1rem;
		margin-right: 1.5rem;
	}

	.Title {
		@media only ${Device.min1020} {
			color: ${Colors.darkRed};
			padding-top: 0.5rem;
			padding-bottom: 1.5rem;
			font-weight: bold;
			font-size: 36px;
			text-align: center;
		}
		@media only ${Device.max1019} {
			color: ${Colors.darkRed};
			padding-top: 0.5rem;
			padding-bottom: 1.5rem;
			font-weight: bold;
			font-size: 36px;
			text-align: center;
		}
		@media only ${Device.max468} {
			color: ${Colors.darkRed};
			padding-top: 0.5rem;
			padding-bottom: 1.5rem;
			font-weight: bold;
			font-size: 36px;
			text-align: center;
		}

		.Bottom {
			display: flex;
			flex-direction: row;
			align-items: space-between;
			justify-content: space-between;
			flex-wrap: wrap;
			font-size: 16px;
			padding-right: 1.5rem;
			margin-top: 1rem;

			@media only ${Device.min1020} {
				display: flex;
				flex-direction: column;
				width: 60%;
				padding-bottom: 3rem;
				padding-top: 2rem;
			}
			@media only ${Device.max1019} {
				display: flex;
				flex-direction: column;
				width: 60%;
				padding-bottom: 3rem;
				padding-top: 2rem;
			}
			@media only ${Device.max468} {
				display: flex;
				flex-direction: column;
				width: 90%;
				padding-bottom: 3rem;
				padding-top: 2rem;
				padding-left: 2rem;
				padding-right: 2rem;
			}
		}
	}
`;

// export const StyledTitle = styled.div`
// 	@media only screen and (min-width: 1020px) {
// 		color: ${Colors.darkRed};
// 		padding-top: 0.5rem;
// 		padding-bottom: 1.5rem;
// 		font-weight: bold;
// 		font-size: 36px;
// 		text-align: center;
// 	}
// 	@media only screen and (max-width: 1019px) {
// 		color: ${Colors.darkRed};
// 		padding-top: 0.5rem;
// 		padding-bottom: 1.5rem;
// 		font-weight: bold;
// 		font-size: 36px;
// 		text-align: center;
// 	}
// 	@media only screen and (max-width: 468px) {
// 		color: ${Colors.darkRed};
// 		padding-top: 0.5rem;
// 		padding-bottom: 1.5rem;
// 		font-weight: bold;
// 		font-size: 36px;
// 		text-align: center;
// 	}
// `;

export const StyledUl = styled.ul`
	@media only ${Device.min1020} {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		flex-wrap: wrap;
		font-size: 16px;
		margin-top: 1rem;
	}
	@media only ${Device.max1019} {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		flex-wrap: wrap;
		font-size: 16px;

		margin-top: 1rem;
	}
	@media only ${Device.max468} {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		flex-wrap: wrap;
		font-size: 16px;
		margin-top: 1rem;
	}
`;

export const StyledText = styled.div`
	@media only ${Device.min1020} {
		font-size: 16px;
		text-align: left;
		line-height: 1.5;
		padding-bottom: 1rem;
	}
	@media only ${Device.max1019} {
		font-size: 16px;
		text-align: left;
		line-height: 1.5;
		padding-bottom: 1rem;
	}
	@media only ${Device.max468} {
		font-size: 14px;
		text-align: left;
		line-height: 1.5;
		padding-bottom: 1rem;
	}
`;

export const BottomDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;
	justify-content: right;
	flex-wrap: wrap;
	font-size: 16px;
	padding-right: 1.5rem;
	margin-top: 1rem;

	@media only ${Device.min1020} {
		display: flex;
		flex-direction: column;
		width: 60%;
		padding-bottom: 3rem;
		padding-top: 2rem;
	}
	@media only ${Device.max1019} {
		display: flex;
		flex-direction: column;
		width: 60%;
		padding-bottom: 3rem;
		padding-top: 2rem;
	}
	@media only ${Device.max468} {
		display: flex;
		flex-direction: column;
		width: 90%;
		padding-bottom: 3rem;
		padding-top: 2rem;
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

export const StyledButton = styled.button`
	margin: 0;
	padding: 0;
`;

export const StyledStreet = styled.p`
	font-style: italic;
	text-decoration: underline;
`;

export const StyledItems = styled.li`
	list-style: none;
	margin-left: 0.5rem;
`;
