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

export const ColHeadStyled = styled.h4`
	font-weight: bold;
`;

export const BillStyled = styled.div`
	width: 100%;
	padding: 0;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	font-family: "Inter", sans-serif;

	.bold {
		font-weight: bold;
	}

	h3,
	h4,
	h5 {
		font-weight: bold;
	}

	h5 {
		font-size: small;
	}
	@media (min-width: 768px) {
		padding: 1.5rem 2rem 0 2rem;
		width: 75%;
	}

	header,
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding: 0 4rem 0 4rem;
		background-color: yellow;
		@media (min-width: 768px) {
			//flex-direction: column;
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 5rem;
		}
		.flex-end {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			background-color: pink;
		}
	}

	section {
		margin-top: 3.8rem;
	}

	.withoutMargin {
		p {
			margin: 0;
			font-size: small;
		}
	}

	.mr-m {
		//margin-right: 64px;
	}

	.m-0 {
		margin: 0;
	}

	.tableWrapper {
		margin-top: 3rem;
		border-top: 2px solid ${(props) => props.color};
		width: 100%;

		table {
			width: 100%;
			block-size: fit-content;
			display: flex;
			flex-direction: column;

			th {
				justify-content: center;
				font-weight: normal;
				font-size: 13px;
			}
			tr {
				display: grid;
				grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
				height: 47px;
				width: 100%;
				.white {
					background-color: white;
				}
				.grey {
					background-color: #efeeea;
				}

				td {
					display: flex;
					flex-grow: 1;
					font-size: 13px;
					min-width: 50px;
					justify-content: center;
				}
			}
		}
		@media (max-width: 768px) {
			transform: scale(0.8);
		}
	}

	.termsAndCalc {
		display: flex;
		align-items: center;
		flex-direction: column-reverse;
		@media (min-width: 768px) {
			display: grid;
			grid-template-columns: 50% 50%;
			background-color: green;
		}
		.terms {
			margin-top: 2.5rem;
			padding: 0 3.5rem;
			//width: 400px;
			width: auto;
			background-color: purple;
			height: 88px;
		}
	}

	.calcs {
		padding: 5px 0 0 auto;
		background-color: pink;
		width: 100%;

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
		.bg-grey {
			background-color: #efeeea;
		}
		.bold {
			font-weight: bold;
		}
		tr {
			display: grid;
			grid-template-columns: 1fr 1fr;
			background-color: yellow;
			td {
				background-color: red;
				padding: 0 20% 0 20%;
				//padding: 0 64px 0 186px;
				//display: grid;
				//grid-template-columns: 2fr 1fr;
				//flex-grow: 1;
				font-size: 13px;
				min-width: 50px;
				//padding-right: 5rem;
				display: flex;
				justify-content: flex-end;
				@media (min-width: 768px) {
					//transform: scale(0.8);
					//padding-right: 0;
					//padding-left: 1rem;
					background-color: orange;
					//justify-content: flex-end;
					padding: 0 40% 0 auto;
				}
			}
		}
		@media (min-width: 768px) {
			//transform: scale(0.8);
			//padding-right: 0;
			//padding-left: 1rem;
			//background-color: orange;
			//justify-content: center;
			//padding: 0 20% 0 60%;
		}
	}

	.rdt_TableHead {
		padding-right: 11px;
	}
`;

export const PaySignStyled = styled.section`
	margin: 2.5rem 0 4rem 0;
	padding: 0 0rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		margin: 2.5rem 0 4rem 0;
		padding: 0 0rem;
		//padding: 0 3.5rem;
	}

	h3 {
		margin: 10px 0;
		padding-bottom: 1rem;
	}

	.pay {
		display: flex;
		flex-direction: column;
		padding-bottom: 2rem;

		h4 {
			margin: 10px 0;
		}

		small {
			line-height: 1.5;
		}
	}
`;
export const PaymentMethodStyled = styled.div`
	@media (min-width: 768px) {
		padding-left: 5rem;
	}
`;

export const SignatureStyled = styled.div`
	margin-top: 1.8rem;
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	padding-bottom: 2rem;

	p {
		margin: 0;
		font-weight: bold;
	}

	h4 {
		font-size: small;
		font-weight: lighter !important;
	}

	.signature-image {
		height: 80%;
		margin-bottom: 3rem;

		@media (min-width: 768px) {
			margin-bottom: 3rem;
		}
	}

	@media (min-width: 768px) {
		justify-content: flex-end;
		width: 30%;
	}
`;

export const RowStyled = styled.div`
	height: "47px";
`;

export const FooterStyled = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	margin-top: -3rem;
	margin-bottom: 20px;

	h4 {
		margin: 0;
		font-weight: bold;
	}

	p {
		font-size: small;
	}
`;
