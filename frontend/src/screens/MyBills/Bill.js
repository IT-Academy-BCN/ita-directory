import {useState, useMemo, useCallback, useEffect} from "react";
import ReactTable from "../../components/composed/Table/ReactTable";
//import DataTable from "react-data-table-component";
import {useParams} from "react-router-dom";
import modelBill from "./modelBillData.json";
import {BillComponentStyled, BillStyled, Error} from "./Bill.styles";
import Colors from "theme/Colors";
import DownloadPDF from "./DocumentComponent";

const Bill = (color_logo) => {
	const {id} = useParams(); // The dynamic id
	//const [data] = useState(modelBill); // Fake data from JSON modelBillData
	const [billData] = useState(modelBill);

	const indexOfId = billData.findIndex((i) => id === String(i.id));
	console.log("indexOfId" + indexOfId);

	const [chosenBill, setChosenBill] = useState(modelBill[indexOfId]["tradeData"]["items"]);

	const data = useMemo(() => [...chosenBill], [chosenBill]);

	// Selecting the right bill... <- Maria says this doesn't seem to have any relevance any longer
	const selectedBill = billData.filter((selected) => {
		let res = selected.id === parseInt(id, 10);
		return res;
	});

	//Custom styles for rows needs implementation - at the moment not working
	const customRowStyle = (row) => {
		if (Number(row.original.itemID) % 2 === 0) {
			return {backgroundColor: "white"};
		}
		return {backgroundColor: "#efeeea"};
	};

	// Columns for datatables

	const columns = useMemo(
		() => [
			{
				Header: <div>#</div>,
				accessor: "itemID",
				Cell: ({row}) => <div>{row.original.itemID}</div>,
			},
			{
				Header: <div>ITEM</div>,
				accessor: "itemTitle",
				Cell: ({row}) => <div>{row.original.itemTitle}</div>,
			},
			{
				Header: <div>PRICE</div>,
				accessor: "itemPrice",
				Cell: ({row}) => (
					<div>
						<span>€ </span>
						{row.original.itemPrice}
					</div>
				),
			},
			{
				Header: <div>QUANTITY</div>,
				accessor: "itemQuant",
				Cell: ({row}) => <div className={customRowStyle}>{row.original.itemQuant}</div>,
			},
			{
				Header: <div>AMOUNT</div>,
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
				<header>
					<h2>{bill.header.logoCompany}</h2>
					<h2>{bill.header.invoiceID}</h2>
				</header>
				<section className="withoutMargin">
					<div>
						<p>Invoice to:</p>
						<h2 className="marg">{bill.emisorReceiver.emisor.emName}</h2>
						<small>{bill.emisorReceiver.emisor.emPosition}</small>
					</div>
					<div className="separation">
						<p>Invoice from:</p>
						<h2 className="marg">{bill.emisorReceiver.receiver.reName}</h2>
						<small>{bill.emisorReceiver.receiver.rePosition}</small>
					</div>
				</section>
				<section className="withoutMargin">
					<div>
						<p>Address:</p>
						<p>{bill.emisorReceiver.emisor.emStreet}</p>
						<p>{bill.emisorReceiver.emisor.emContact}</p>
					</div>
					<div>
						<p>Address:</p>
						<p>{bill.emisorReceiver.receiver.reStreet}</p>
						<p>{bill.emisorReceiver.receiver.reContact}</p>
					</div>
				</section>
				<div className="tableWrapper">
					<ReactTable columns={columns} data={data} customRowStyle={customRowStyle} />
				</div>
				<div className="termsAndCalc">
					<div className="terms">
						<h3>Terms & Conditions</h3>
						<small>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore
						</small>
					</div>
					<div className="calcs">
						<table className="columns">
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
									<th className="bold">Grand Total</th>
									<td className="bold">
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
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="payAndSign">
					<div>
						<h3>Payment Method</h3>
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
					</div>
					<div className="signWrapper">
						<div>
							<div className="signature">{bill.signature.image}</div>

							<p>{bill.emisorReceiver.receiver.reName}</p>

							<p className="position">{bill.emisorReceiver.receiver.rePosition}</p>
						</div>
					</div>
				</div>
				<div className="footer">
					<div>
						<h4>Thank You For Doing Business With Us.</h4>
						<p>We aim to provide easy solutions for your problems.</p>
					</div>
				</div>
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
			<h2 className="logo" color_logo={color_logo}>
				LOGO EMPRESA
			</h2>
			{downloadBtn}
			{error}
		</BillComponentStyled>
	);
};

export default Bill;
