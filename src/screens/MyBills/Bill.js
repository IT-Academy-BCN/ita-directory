import {useState} from "react";
import DataTable from "react-data-table-component";
import {useParams} from "react-router-dom";
import modelBill from "./modelBillData.json";
import {BillComponentStyled, BillStyled} from "./Bill.styles";
import Colors from "theme/Colors";
import DownloadPDF from "./DocumentComponent";

const Bill = (color_logo) => {
	const {id} = useParams(); // The dynamic id
	const [data] = useState(modelBill); // Fake data from JSON modelBillData

	// Selecting the right bill...
	const selectedBill = data.filter((selected) => {
		return selected.id === parseInt(id, 10);
	});

	// Columns for datatables

	const tradeColumns = [
		{
			name: <div>#</div>,
			selector: "itemID",
			cell: (row) => <div>{row.itemID}</div>,
			center: true,
			hide: 600,
		},
		{
			name: <div>ITEM</div>,
			selector: "itemTitle",
			cell: (row) => <div>{row.itemTitle}</div>,
			left: true,
		},
		{
			name: <div>PRICE</div>,
			selector: "itemPrice",
			cell: (row) => (
				<div>
					<span>€ </span>
					{row.itemPrice}
				</div>
			),
			center: true,
		},
		{
			name: <div>QUANTITY</div>,
			selector: "itemQuant",
			cell: (row) => <div>{row.itemQuant}</div>,
			center: true,
		},
		{
			name: <div>AMOUNT</div>,
			selector: "amount",
			cell: (row) => (
				<div>
					<span>€ </span>
					{row.itemPrice * row.itemQuant}
				</div>
			),
			center: true,
		},
	];

	const calcColumns = [
		{
			name: <div>Sub Total</div>,
			selector: "subTotal",
			cell: (row) => (
				<div>
					<div>
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
					</div>
				</div>
			),
			compact: true,
			width: "100px",
			left: true,
		},
		{
			name: <div>Tax(5%)</div>,
			selector: "tax",
			cell: (row) => (
				<div>
					<div>
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
					</div>
				</div>
			),
			compact: true,
			width: "100px",
			left: true,
		},
		{
			name: <div>Discount(10%)</div>,
			selector: "discount",
			cell: (row) => (
				<div>
					<div>
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
					</div>
				</div>
			),
			compact: true,
			width: "100px",
			left: true,
		},
		{
			name: <div>GRAND TOTAL</div>,
			selector: "grandTotal",
			cell: (row) => (
				<div>
					<div>
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
				</div>
			),
			compact: true,
			width: "100px",
			left: true,
		},
	];

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
					<div>
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
						<small>Address:</small>
						<p>{bill.emisorReceiver.receiver.reStreet}</p>
						<p>{bill.emisorReceiver.receiver.reContact}</p>
					</div>
				</section>
				<div className="tableWrapper">
					<DataTable columns={tradeColumns} noHeader={true} data={bill.tradeData.items} />
				</div>
				<div className="termsAndCalc">
					<div className="terms">
						<h3>Terms & Conditions</h3>
						<small>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore
						</small>
					</div>
					<div>
						<DataTable
							columns={calcColumns}
							noHeader={true}
							data={bill.calculation.calcs}
							striped={true}
						/>
					</div>
				</div>
				<div className="payAndSign">
					<div>
						<h3>Payment Method</h3>
						<div className="pay">
							<h4>Bank</h4>
							<small>Account ID: {bill.payment.bank.accountID}</small>
							<small>Account Name: {bill.payment.bank.accountName}</small>
						</div>
						<div className="pay">
							<h4>Paypal</h4>
							<small>Paypal ID: {bill.payment.paypal.accountName}</small>
							<small>Account Name: {bill.payment.paypal.account}</small>
						</div>
					</div>
					<div className="signWrapper">
						<div className="signature">{bill.signature.image}</div>
						<div>
							<p>{bill.emisorReceiver.receiver.reName}</p>
							<p className="position">{bill.emisorReceiver.receiver.rePosition}</p>
						</div>
					</div>
				</div>
			</BillStyled>
		);
	});

	// PDF
	const [isClicked] = useState(true);

	return (
		<BillComponentStyled>
			<h2 className="logo" color_logo={color_logo}>
				LOGO EMPRESA
			</h2>
			{isClicked && <DownloadPDF data={selectedBill} />}
			{generatedBill}
		</BillComponentStyled>
	);
};

export default Bill;
