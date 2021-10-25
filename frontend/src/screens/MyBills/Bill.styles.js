import styled from "styled-components";
import tw from "twin.macro";
import Colors from "theme/Colors";

export const Error = styled.div`
	border: 1px solid;
	margin: auto;
	padding: 15px 10px 15px 15px;
	background-position: 10px center;
	max-width: 460px;
	${tw`bg-paleRed text-center text-2xl text-bloodRed`}
`;

export const BillComponentStyled = styled.div.attrs({
	className:
		"bg-lightGrey2 flex flex-col flex-nowrap justify-center content-center items-center pb-12 -mb-12",
})`
	.logo {
		color: ${(props) => (props.color_logo ? props.color_logo : Colors.darkRed)};
		font: normal normal normal 15px/15px Korb-Bold;
		${tw`flex items-center uppercase tracking-normal opacity-100 mt-6`};
	}

	.blueGradient {
		width: 7.6rem;
		margin-bottom: 1.5rem;
	}
`;

export const BillStyled = styled.div.attrs({
	className: "flex flex-col w-full p-0 md:w-9/12 md:pt-6 md:pr-8 md:pb-0 md:pl-8 bg-lightGrey1",
})`
	transform: scale(0.8);
	font-family: "Inter", sans-serif;
	@media (min-width: 768px) {
		transform: scale(1);
	}

	.bold,
	h3,
	h4,
	h5 {
		font-weight: bold;
	}

	h5 {
		font-size: small;
	}
`;

export const HeaderStyled = styled.header.attrs({
	className:
		"bg-white flex flex-row justify-between items-baseline h-12 py-0 px-8 -mt-40 md:h-auto md:mt-0 md:p-0",
})`
	@media (min-width: 893px) {
		padding: 0 2rem;
	}
	@media (min-width: 1230px) {
		padding: 0 4rem;
	}
	h2 {
		font-size: 18px;
		font-weight: 600;
		font-style: italic;
	}
	.invoice {
		letter-spacing: 1.68px;
	}
`;

export const AddressesWrapper = styled.div.attrs({
	className: "justify-between bg-white md:flex justify-between md:flex-row md:mt-16",
})``;

export const InvoiceRecipientStyled = styled.section.attrs({
	className: "flex flex-col items-end width-full pt-8 pb-0 px-8",
})`
	div {
		${tw`w-full p-0`}
	}

	.invoice-recipient > p {
		font-size: 10px;
	}

	.invoice-recipient > h2 {
		font-size: 16px;
		margin-top: -8px;
	}

	.address-recipient > p {
		font-size: 10px;
	}

	h2 {
		font-weight: bold;
	}
	p {
		font-size: small;
	}
`;

export const InvoiceSenderStyled = styled(InvoiceRecipientStyled)`
	@media (min-width: 768px) {
		h2 {
			margin: 0;
		}
		justify-content: flex-end;

		@media (min-width: 1230px) {
			${tw`pr-16 pl-24`}
		}
	}
`;

export const TableWrapperStyled = styled.div.attrs({
	className: "mt-12 w-full border-t border-lightGrey",
})`
	table {
		font-size: 10px;
		width: 100%;
	}

	tr {
		height: 47px;
	}

	th {
		text-align: left;
		padding-left: 1.5rem;
	}

	td {
		min-width: 25px;
		text-align: left;
		padding-left: 1.5rem;
	}

	th:nth-child(4) {
		text-align: center;
		width: 200px;
		padding-left: 0;
	}

	td:nth-child(4) {
		text-align: center;
		width: 200px;
		padding-left: 0;
	}
`;

export const CalcTableStyled = styled.table`
	font-size: 10px;
	width: 100%;
	text-align: left;
	margin-left: 2rem;

	tr {
		height: 47px;
	}

	td {
		max-width: 30px;
		text-align: left;
		padding-left: 2.7rem;
	}

	th {
		max-width: 30px;
		padding-left: 3rem;
	}

	.grand-total {
		background-color: ${Colors.lightBeige};
	}
`;

export const TermsAndCalcStyled = styled.div.attrs({
	className: "flex items-start flex-col-reverse",
})`
	overflow: hidden;
	padding-left: 2rem;

	h3 {
		font-size: 12px;
		font-weight: 600;
		text-align: left;
	}

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 50% 50%;
	}
`;

export const TermsStyled = styled.section.attrs({
	className: "mt-10 mr-8 pr-4 py-0 px-8 max-w-sm h-24",
})`
	p {
		font-size: 8px;
		line-height: normal;
		margin-top: 2rem;
	}

	@media (min-width: 768px) {
		margin-top: 4rem;
		padding: 0rem;
		max-width: 350px;
	}
	@media (min-width: 893px) {
		padding: 0 2rem;
	}
	@media (min-width: 1229px) {
		padding-left: 4rem;
	}
`;

export const PaySignStyled = styled.section.attrs({
	className:
		"flex flex-col items-start p-0 mx-0 mt-10 mb-16 xsm:flex-row xsm:justify-between xsm:items-end ",
})`
	div {
		${tw`flex flex-col pb-8`}

		h4 {
			margin: 0.5rem 0;
		}
		small {
			line-height: 1.5;
		}
	}
`;

export const PaymentMethodStyled = styled.div.attrs({
	className: "flex flex-col justify-end pl-8",
})`
	font-size: 12px;

	h3 {
		${tw`my-2 mx-0 pb-4`}
		white-space: nowrap;
	}

	h5 {
		font-size: 10px;
	}

	div {
		font-size: 10px;
		${tw`pt-4 pb-0`}
	}
	@media (min-width: 480px) {
		padding-left: 2rem;
	}

	@media (min-width: 730px) {
		padding-left: 0;
	}

	@media (min-width: 893px) {
		padding-left: 2rem;
	}
	@media (min-width: 1230px) {
		padding-left: 4rem;
	}
`;

export const SignatureStyled = styled.div.attrs({
	className: "flex flex-col w-full pb-8 pl-8 xsm:justify-end xsm:text-center xsm:w-4/12",
})`
	margin-top: 1.8rem;
	width: fit-content;
	font-size: 12px;

	@media (min-width: 893px) {
		padding-right: 2rem;
	}
	@media (min-width: 1230px) {
		padding-right: 4rem;
	}
	p {
		${tw`font-bold m-0`}
		white-space: nowrap;
	}

	h4 {
		${tw`text-sm`}
		font-weight: lighter !important;
		font-size: 10px;
	}

	.signature-image {
		${tw`h-4/5 pb-12`}
	}
`;

export const FooterStyled = styled.footer.attrs({
	className: "flex flex-col justify-center text-center mb-5",
})`
	h4 {
		${tw`m-0 font-bold`}
		font-size: 12px;
	}

	p {
		${tw`text-sm`}
		font-size: 10px;
	}
`;

export const RowStyled = styled.div`
	min-height: "47px";
	align-items: center;
`;
