import {useState, useMemo, useCallback, useEffect} from "react";
import ReactTable from "../../components/composed/Table/ReactTable";
import Colors from "../../theme/Colors";
import {useParams} from "react-router-dom";
import modelBill from "./modelBillData.json";
import {
	BillComponentStyled,
	BillStyled,
	Error,
	HeaderStyled,
	FooterStyled,
	SignatureStyled,
	PaymentMethodStyled,
	PaySignStyled,
	InvoiceRecipientStyled,
	InvoiceSenderStyled,
	TermsAndCalcStyled,
	CalcTableStyled,
	TableWrapperStyled,
	AddressesWrapper,
	TermsStyled,
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
			<BillStyled key={bill.id} color={Colors.lightGray}>
				<HeaderStyled>
					<h2>{bill.header.logoCompany}</h2>
					<h2>{bill.header.invoiceID}</h2>
				</HeaderStyled>
				<AddressesWrapper>
					<InvoiceRecipientStyled>
						<div>
							<p>Invoice to:</p>
							<h2>{bill.emisorReceiver.emisor.emName}</h2>
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
							<h2>{bill.emisorReceiver.receiver.reName}</h2>
							<p>{bill.emisorReceiver.receiver.rePosition}</p>
							<br></br>
							<p>Address:</p>
							<p>{bill.emisorReceiver.emisor.emStreet}</p>
							<p>{bill.emisorReceiver.emisor.emContact}</p>
						</div>
					</InvoiceSenderStyled>
				</AddressesWrapper>
				<TableWrapperStyled>
					<ReactTable columns={columns} data={data} customRowStyle={customRowStyle} />
				</TableWrapperStyled>
				<TermsAndCalcStyled>
					<TermsStyled>
						<h3>Terms & Conditions</h3>
						<small>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore
						</small>
					</TermsStyled>

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
				<PaySignStyled>
					<PaymentMethodStyled>
						<h3>Payment Method</h3>
						<div>
							<h5>Bank</h5>
							<small>Account ID: {bill.payment.bank.accountID}</small>
							<small>Account Name: {bill.payment.bank.accountName}</small>
						</div>
						<div>
							<h5>Paypal</h5>
							<small>Paypal ID: {bill.payment.paypal.accountName}</small>
							<small>Account Name: {bill.payment.paypal.account}</small>
						</div>
					</PaymentMethodStyled>
					<SignatureStyled>
						<div className="signature-image" role="image">
							{bill.signature.image}
						</div>
						<p>{bill.emisorReceiver.receiver.reName}</p>
						<h4>{bill.emisorReceiver.receiver.rePosition}</h4>
					</SignatureStyled>
				</PaySignStyled>
				<FooterStyled>
					<h4>Thank You For Doing Business With Us.</h4>
					<p>We aim to provide simple solutions for your business problems.</p>
				</FooterStyled>
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
		<BillComponentStyled>
			<h2 className="logo " color_logo={color_logo}>
				LOGO EMPRESA
			</h2>
			{downloadBtn}
			{error}
		</BillComponentStyled>
	);
};

export default Bill;
