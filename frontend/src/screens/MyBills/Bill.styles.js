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
		"bg-white flex flex-row justify-between items-end h-12 py-0 px-8 -mt-40 md:h-auto md:mt-0 md:p-0",
})`
	@media (min-width: 893px) {
		padding: 0 2rem;
	}
	@media (min-width: 1230px) {
		padding: 0 4rem;
	}
`;

export const AddressesWrapper = styled.div.attrs({
	className: "justify-between bg-white md:flex md:flex-row md:mt-0",
})``;

export const InvoiceRecipientStyled = styled.section.attrs({
	className: "flex flex-col items-end width-full pt-8 pb-0 px-8",
})`
	div {
		${tw`w-full p-0`}
	}
	h2 {
		font-weight: bold;
	}
	p {
		font-size: small;
	}

	@media (min-width: 768px) {
		${tw`flex-row items-start pt-20 pb-0 px-0`}

		div {
			${tw`flex-row flex-col w-auto`}
		}
	}

	@media (min-width: 893px) {
		${tw`px-8`}
	}

	@media (min-width: 1230px) {
		${tw`pr-24 pl-16`}
	}
`;

export const InvoiceSenderStyled = styled(InvoiceRecipientStyled)`
	@media (min-width: 768px) {
		h2 {
			margin: 0;
		}
		justify-content: flex-end;

		@media (min-width: 893px) {
			${tw`px-8`}
		}

		@media (min-width: 1230px) {
			${tw`pr-16 pl-24`}
		}
	}
`;

export const TableWrapperStyled = styled.div.attrs({
	className: "mt-12 w-full border-t-2 border-lightGrey",
})`
	table {
		${tw`w-full flex flex-col`}
		block-size: fit-content;
		th,
		tr {
			min-height: 47px;
		}

		th {
			${tw`justify-center font-bold items-center uppercase pt-3 text-tiny`}//
		}
		tr {
			display: grid;
			grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
			.white {
				background-color: ${Colors.white};
			}
			.grey {
				background-color: ${Colors.lightGrey};
			}

			td {
				${tw`flex justify-center flex-grow text-tiny`}
				min-width: 50px;
			}
		}
	}
`;

export const CalcTableStyled = styled.table`
	border-collapse: collapse;
	${tw`w-1/2 ml-auto pt-1 pb-0 pr-0 md:w-full md:ml-0`}

	td,
	th {
		${tw`items-center justify-center text-left font-normal pt-3 text-tiny`}
		padding-left: 27px;
		min-height: 47px;
	}

	tr {
		display: grid;
		grid-template-columns: 1fr 1fr;
		td {
			padding: 0 20% 0 20%;
			min-width: 50px;
			${tw` flex justify-end`}
			@media (min-width: 768px) {
				padding: 0 40% 0 auto;
			}
		}
	}
`;
export const TermsAndCalcStyled = styled.div.attrs({
	className: "flex items-start flex-col-reverse",
})`
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 50% 50%;
	}
`;

export const TermsStyled = styled.section.attrs({
	className: "mt-10 py-0 px-8 max-w-sm h-24",
})`
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
		"flex flex-col items-start p-0 mx-0 mt-10 mb-16 xsm:flex-row xsm:justify-between xsm:items-end xsm:mr-8",
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
	h3 {
		${tw`my-2 mx-0 pb-4`}
		white-space: nowrap;
	}

	div {
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

	p {
		${tw`font-bold m-0`}
		white-space: nowrap;
	}

	h4 {
		${tw`text-sm`}
		font-weight: lighter !important;
	}

	.signature-image {
		${tw`h-4/5 pb-12`}
	}
`;

export const FooterStyled = styled.footer.attrs({
	className: "flex flex-col justify-center text-center -mt-12 mb-5 px-8 pb-8",
})`
	h4 {
		${tw`m-0 font-bold`}
	}

	p {
		${tw`text-sm`}
	}
`;

export const RowStyled = styled.div`
	min-height: "47px";
	align-items: center;
`;
