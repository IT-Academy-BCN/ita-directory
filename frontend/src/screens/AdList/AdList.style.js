import styled from "styled-components";
import Colors from "theme/Colors";
import {Device} from "../../theme/mediaQueries";

export const AdListDiv = styled.div`
	display: flex;
	flex-direction: column;

	@media only ${Device.Laptop} {
		flex-direction: row;
	}
`;

export const FilterDiv = styled.div`
	width: ${(props) => props.width};
	display: inline-block;

	.WrapperFilter {
		padding-bottom: 1.5rem;
		padding-right: 1.5rem;
	}

	.CardFilter {
		padding-bottom: 1rem;
		flex-direction: column;
	}
`;

export const AdListStyled = styled.div`
	width: 100%;

	.tree-search {
		text-align: left;
		letter-spacing: 0px;
		color: ${Colors.lightGrey};
		font-style: italic;
	}

	.h3 {
		color: ${Colors.redColor};
		font-size: 1.5rem;
		text-align: left;
		letter-spacing: 0px;
		margin-bottom: 0;
	}

	.rowWrapper {
		display: flex;
		justify-content: right;
		align-items: stretch;
	}

	.ads {
		width: 100%;
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
