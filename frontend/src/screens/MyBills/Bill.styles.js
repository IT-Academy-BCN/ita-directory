import styled from "styled-components";
import Colors from "theme/Colors";

export const Error = styled.div`
	border: 1px solid;
	margin: auto;
	text-align: center;
	padding: 15px 10px 15px 15px;
	background-position: 10px center;
	max-width: 460px;
	color: #d8000c;
	background-color: #ffbaba;
	font-size: 24px;
`;

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
	width: 75%;
	padding: 1.5rem 2rem 0 2rem;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	font-family: "Inter", sans-serif;

	@media (max-width: 768px) {
		padding: 0;
		width: 100%;
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

	.separation {
		margin-right: 64px;
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
		align-items: center;
		@media (max-width: 768px) {
			flex-direction: column-reverse;
		}
	}

	.terms {
		margin-top: 2.5rem;
		padding: 0 3.5rem;
		width: 400px;
		height: 88px;
	}

	.calcs {
		padding: 5px 0 0 5.3rem;
		table {
			border-collapse: collapse;
		}
		td,
		th {
			height: 47px;
			font-size: 13px;
		}
		th {
			text-align: left;
			font-weight: normal;
			padding-left: 27px;
		}
		.bold {
			font-weight: bold;
			background-color: #efeeea;
		}
		td {
			padding: 0 64px 0 186px;
		}
		@media (max-width: 768px) {
			transform: scale(0.8);
			padding-right: 0;
			padding-left: 1rem;
		}
	}

	.rdt_TableHead {
		padding-right: 11px;
	}

	.payAndSign {
		margin: 2.5rem 0 4rem 0;
		padding: 0 3.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		@media (max-width: 768px) {
			flex-direction: column;
		}

		h3 {
			margin: 10px 0;
		}

		.pay {
			display: flex;
			flex-direction: column;

			h4 {
				margin: 10px 0;
			}

			small {
				line-height: 1.5;
			}
		}
	}

	.signWrapper {
		margin-top: 1.8rem;
		margin-right: 3.5rem;
		width: 30%;
		text-align: center;
		display: flex;
		flex-direction: column;

		p {
			margin: 0;
			font-weight: bold;
		}

		.signature {
			height: 80%;
			@media (max-width: 768px) {
				margin-bottom: 3rem;
			}
		}
	}

	.footer {
		display: flex;
		justify-content: center;
		text-align: center;
		margin-bottom: 5px;

		h4 {
			margin: 0;
		}

		p {
			font-size: small;
		}
	}

	.position {
		font-size: small;
		font-weight: lighter !important;
	}
`;
