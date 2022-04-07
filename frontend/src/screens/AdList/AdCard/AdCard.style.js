import styled from "styled-components";
import Colors from "theme/Colors";
import {Device} from "../../../theme/mediaQueries";

export const AdCardStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 6px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	margin-bottom: 1.5rem;
	height: 175px;
	overflow: hidden;

	img {
		height: 175px;
		object-fit: cover;
		border-radius: 6px;
		:hover {
			cursor: pointer;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		padding: 1rem 1.5rem;
		.content-text {
			p.address {
				font-size: 14px;
				color: #666;
			}

			.property-data {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;

				span {
					font-size: 14px;
				}

				span.price {
					color: ${Colors.darkOrange};
					font-weight: bold;
					font-size: 18px;
				}
			}

			.description {
				font-size: 14px;
			}
		}
	}
	@media ${Device.Tablet} {
		display: grid;
		grid-template-columns: 30% 70%;

		img {
			width: 100%;
			height: 240px;
			object-fit: cover;
			border-radius: 6px;
		}

		.content {
			display: flex;
			flex-direction: column;
			padding: 1.5rem;
			height: 100%;
		}

		.address,
		.property-data {
			padding-bottom: 1rem;
		}
	}
`;
