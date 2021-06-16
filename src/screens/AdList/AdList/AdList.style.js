import styled from "styled-components";
import Colors from "theme/Colors";

export const FilterDiv = styled.div`
	width: ${(props) => props.width};

	.WrapperFilter {
		display: flex;
		flex-direction: column;
		padding-bottom: 1.5rem;
		padding-right: 1.5rem;
	}

	.CardFilter {
		padding-bottom: 1rem;
		flex-direction: column;
	}
`;

export const AdListStyled = styled.div`
	display: flex;
	flex-direction: column;

	.TreeSearch {
		text-align: left;
		font: italic normal normal 14px/20px Arial;
		letter-spacing: 0px;
		color: ${Colors.ligthGray};
		opacity: 1;
	}

	.h3 {
		color: ${Colors.redColor};
		text-align: left;
		letter-spacing: 0px;
		margin-bottom: 0;
	}

	.RowWrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
`;

export const WrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	padding-bottom: 1.5rem;

	.CardWrapper {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
`;
