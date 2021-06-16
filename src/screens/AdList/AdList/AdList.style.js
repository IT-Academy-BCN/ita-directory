import styled from "styled-components";
import Colors from "theme/Colors";

export const AdListDiv = styled.div`
	display: flex;

	@media only screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

export const FilterDiv = styled.div`
	width: ${(props) => props.width};
	display: inline-block;
	.WrapperFilter {
		padding-bottom: 1.5rem;
		padding-right: 1.5rem;
		@media only screen and (max-width: 1024px) {
			padding: 0;
		}

		.CardFilter {
			padding-bottom: 1rem;
		}
	}
`;

export const AdListStyled = styled.div`
	.TreeSearch {
		text-align: left;
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
