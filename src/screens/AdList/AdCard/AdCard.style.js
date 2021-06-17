import styled from "styled-components";
import Colors from "theme/Colors";

export const AdCardStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 6px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	margin-bottom: 1.5rem;

	img {
		width: 40%;
		height: 240px;
		object-fit: cover;
		border-radius: 6px;
	}

	.content {
		display: flex;
		flex-direction: column;
		padding: 1rem 1.5rem;

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
			margin-top: 1.25rem;
			margin-bottom: 1.25rem;
		}
	}
`;
