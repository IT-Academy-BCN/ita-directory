import styled from "styled-components";
import Colors from "theme/Colors";

export const BillComponentStyled = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-content: center;
	align-items: center;
	background-color: #eeeeee;
	padding-bottom: 3rem;

	.logo {
		display: flex;
		align-items: center;
		color: ${(props) => (props.color_logo ? props.color_logo : Colors.darkRed)};
		font: normal normal normal 15px/15px Korb-Bold;
		letter-spacing: 0px;
		text-transform: uppercase;
		opacity: 1;
		margin-top: 1.5rem;
	}

	.blueGradient {
		width: 7.6rem;
		margin-bottom: 1.5rem;
	}
`;

export const BillStyled = styled.div`
	padding: 1.5rem 2rem 0 2rem;
	background-color: #ffffff;
	border: 1px solid black;
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		padding: 0;
	}

	header,
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding: 0 4rem 0 4rem;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}

	section {
		margin-top: 3.8rem;
	}

	.withoutMargin p {
		margin: 0;
		font-size: small;
	}

	.marg {
		margin: 0;
	}

	.tableWrapper {
		margin-top: 3rem;
		border-top: 2px solid ${(props) => props.color};
		@media (max-width: 768px) {
			transform: scale(0.8);
		}
	}

	.termsAndCalc {
		display: flex;
		flex-direction: column-reverse;
		align-items: flex-start;
		margin-top: 3.5rem;
		@media (max-width: 768px) {
		}
	}

	.terms {
		margin-top: 3.5rem;
		padding: 0 3.5rem;
	}

	.calcs {
		padding: 0 3.5rem;
		@media (max-width: 768px) {
			transform: scale(0.8);
			padding-right: 0;
			padding-left: 1rem;
		}
	}

	.payAndSign {
		margin: 3.5rem 0;
		padding: 0 3.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.pay {
			display: flex;
			flex-direction: column;
		}
	}

	.signWrapper {
		margin-top: 1.8rem;
		margin-right: 3.5rem;
		width: 30%;
		display: flex;
		flex-direction: column;

		p {
			text-align: center;
			font-weight: bold;
		}

		.signature {
			height: 80%;
		}
	}

	.position {
		text-align: center;
		font-size: small;
		font-weight: lighter;
	}
`;
