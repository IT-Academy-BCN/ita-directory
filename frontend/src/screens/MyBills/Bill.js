import {useState, useMemo, useCallback, useEffect} from "react";
import ReactTable from "../../components/composed/Table/ReactTable";
import Colors from "../../theme/Colors";
import {useParams} from "react-router-dom";
import modelBill from "./modelBillData.json";
import {
	BillComponentStyled,
	BillStyled,
	Error,
	FooterStyled,
	SignatureStyled,
	PaymentMethodStyled,
	PaySignStyled,
	InvoiceRecipientStyled,
	InvoiceSenderStyled,
	TermsAndCalcStyled,
	CalcTableStyled,
	TableWrapperStyled,
} from "./Bill.styles";
import DownloadPDF from "./DocumentComponent";

const Bill = (color_logo) => {
	const {id} = useParams(); // The dynamic id
	const [billData] = useState(modelBill);

	const indexOfId = billData.findIndex((i) => id === String(i.id));
	console.log("indexOfId" + indexOfId);

	const [chosenBill, setChosenBill] = useState(modelBill[indexOfId]["tradeData"]["items"]);

	const data = useMemo(() => [...chosenBill], [chosenBill]);

	// Selecting the right bill... 
	const selectedBill = billData.filter((selected) => {
		let res = selected.id === parseInt(id, 10);
		return res;
	});

	//Custom styles for rows needs implementation - at the moment not working
	const customRowStyle = (row) => {
		if (Number(row.original.itemID) % 2 === 0) {
			return {backgroundColor: "white", alignItems: "center"};
		}
		return {backgroundColor: `${Colors.lightGrey}`, alignItems: "center"};
	};

	// Columns for datatables
	const columns = useMemo(
		() => [
			{
				Header: "#",
				accessor: "itemID",
				Cell: ({row}) => <div>{row.original.itemID}</div>,
			},
			{
				Header: "Item",
				accessor: "itemTitle",
				Cell: ({row}) => <div>{row.original.itemTitle}</div>,
			},
			{
				Header: "Price",
				accessor: "itemPrice",
				Cell: ({row}) => (
					<div>
						<span>€ </span>
						{row.original.itemPrice}
					</div>
				),
			},
			{
				Header: "Quantity",
				accessor: "itemQuant",
				Cell: ({row}) => <div className={customRowStyle}>{row.original.itemQuant}</div>,
			},
			{
				Header: "Amount",
				accessor: "amount",
				Cell: ({row}) => (
					<div className={customRowStyle}>
						<span>€ </span>
						{row.original.itemPrice * row.original.itemQuant}
					</div>
				),
			},
		],
		[]
	);

	const generatedBill = selectedBill.map((bill) => {
		return (
			<BillStyled 
			className="flex flex-col w-full p-0 md:w-9/12 md:pt-6 md:pr-8 md:pb-0 md:pl-8 bg-lightGrey1"
			key={bill.id} color={Colors.lightGray}>
				<header className="bg-white flex flex-row justify-between items-end h-12 py-0 px-8 -mt-40 md:h-auto md:mt-0 md:p-0">
					<h2>{bill.header.logoCompany}</h2>
					<h2>{bill.header.invoiceID}</h2>
				</header>
				<div className="justify-between bg-white md:flex md:flex-row md:mt-0">
					<InvoiceRecipientStyled>
						<div>
							<p>Invoice to:</p>
							<h2 className="bold">{bill.emisorReceiver.emisor.emName}</h2>
							<p>{bill.emisorReceiver.emisor.emPosition}</p>
							<br></br>
							<p>Address:</p>
							<p>{bill.emisorReceiver.emisor.emStreet}</p>
							<p>{bill.emisorReceiver.emisor.emContact}</p>
						</div>
					</InvoiceRecipientStyled>
					<InvoiceSenderStyled>
						<div>
							<p>Invoice from:</p>
							<h2 className="m-0 bold">{bill.emisorReceiver.receiver.reName}</h2>
							<p>{bill.emisorReceiver.receiver.rePosition}</p>
							<br></br>
							<p>Address:</p>
							<p>{bill.emisorReceiver.emisor.emStreet}</p>
							<p>{bill.emisorReceiver.emisor.emContact}</p>
						</div>
					</InvoiceSenderStyled>
				</div>
				<TableWrapperStyled  className="mt-12 w-full border-t-2 border-lightGrey">
					<ReactTable columns={columns} data={data} customRowStyle={customRowStyle} />
				</TableWrapperStyled>
				<TermsAndCalcStyled className="flex items-start flex-col-reverse">
					<section className="terms">
						<h3>Terms & Conditions</h3>
						<small>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore
						</small>
					</section>

					<CalcTableStyled>
						<tbody>
							<tr>
								<th>Sub Total</th>
								<td>
									€{" "}
									{selectedBill.map((amount) => {
										let itemsArr = amount.tradeData.items;
										const itemsAmount = itemsArr.map((it) => {
											return it.itemPrice * it.itemQuant;
										});
										let sum = 0;
										itemsAmount.map((i) => (sum += i));
										return sum;
									})}
								</td>
							</tr>
							<tr>
								<th>Tax(5%)</th>
								<td>
									€{" "}
									{selectedBill.map((amount) => {
										let itemsArr = amount.tradeData.items;
										const itemsAmount = itemsArr.map((it) => {
											return it.itemPrice * it.itemQuant;
										});
										let sum = 0;
										itemsAmount.map((i) => (sum += i));
										let tax = amount.calculation.calcs;
										let taxItem = tax.map((t) => t.tax);
										let taxCalc = (taxItem / 100) * sum;
										return taxCalc.toFixed();
									})}
								</td>
							</tr>
							<tr>
								<th>Discount(10%)</th>
								<td>
									€{" "}
									{selectedBill.map((amount) => {
										let itemsArr = amount.tradeData.items;
										const itemsAmount = itemsArr.map((it) => {
											return it.itemPrice * it.itemQuant;
										});
										let sum = 0;
										itemsAmount.map((i) => (sum += i));
										let tax = amount.calculation.calcs;
										let taxItem = tax.map((t) => t.tax);
										let taxCalc = sum + (taxItem / 100) * sum;
										let disc = tax.map((t) => t.discount);
										let discCalc = (disc / 100) * taxCalc;
										return discCalc.toFixed();
									})}
								</td>
							</tr>
							<tr>
								<th className="bg-lightGrey bold">GRAND TOTAL</th>
								<td className="bg-lightGrey">
									<div className="font-bold">
										€{" "}
										{selectedBill.map((amount) => {
											let itemsArr = amount.tradeData.items;
											const itemsAmount = itemsArr.map((it) => {
												return it.itemPrice * it.itemQuant;
											});
											let sum = 0;
											itemsAmount.map((i) => (sum += i));
											let tax = amount.calculation.calcs;
											let taxItem = tax.map((t) => t.tax);
											let taxCalc = (taxItem / 100) * sum;
											let disc = tax.map((t) => t.discount);
											let discCalc = (disc / 100) * taxCalc;
											const grandTotal = sum + taxCalc + discCalc;
											return grandTotal.toFixed();
										})}
									</div>
								</td>
							</tr>
						</tbody>
					</CalcTableStyled>
				</TermsAndCalcStyled>
				<PaySignStyled className="flex flex-col items-start p-0 mx-0 mt-10 mb-16 xsm:flex-row xsm:justify-between xsm:items-end xsm:mr-8">
					<PaymentMethodStyled className="flex flex-col justify-end pl-8">
						<h3 className= "whitespace-nowrap pb-4 my-2 mx-0">Payment Method</h3> 
						<div className="pay">
							<h5>Bank</h5>
							<small>Account ID: {bill.payment.bank.accountID}</small>
							<small>Account Name: {bill.payment.bank.accountName}</small>
						</div>
						<div className="pay">
							<h5>Paypal</h5>
							<small>Paypal ID: {bill.payment.paypal.accountName}</small>
							<small>Account Name: {bill.payment.paypal.account}</small>
						</div>
					</PaymentMethodStyled>
					<SignatureStyled className="flex flex-col w-full pb-8 pl-8 xsm:justify-end xsm:text-center xsm:w-4/12">
						<div className="signature-image" role="image">
							{bill.signature.image}
						</div>
						<p className="font-bold m-0 text-nowrap">{bill.emisorReceiver.receiver.reName}</p>
						<h4 className="text-sm">{bill.emisorReceiver.receiver.rePosition}</h4>
					</SignatureStyled>
				</PaySignStyled>
				<footer className="flex flex-col justify-center text-center -mt-12 mb-5 px-8 pb-8">
					<h4 className="m-0 font-bold">Thank You For Doing Business With Us.</h4>
					<p className="text-sm">We aim to provide simple solutions for your business problems.</p>
				</footer>
			</BillStyled>
		);
	});

	let error, downloadBtn;

	if (indexOfId !== -1) {
		error = generatedBill;
		downloadBtn = <DownloadPDF data={selectedBill} type={"button"} />;
	} else {
		error = <Error>There are no bills available</Error>;
	}

	return (
		<BillComponentStyled className="bg-lightGrey2 flex flex-col flex-nowrap justify-center content-center items-center pb-12 -mb-12">
			<h2 className="logo flex items-center uppercase tracking-normal opacity-100 mt-6" color_logo={color_logo}>
				LOGO EMPRESA
			</h2>
			{downloadBtn}
			{error}
		</BillComponentStyled>
	);
};

export default Bill;
