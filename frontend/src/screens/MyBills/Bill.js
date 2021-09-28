import {useState} from "react";
import DataTable from "react-data-table-component";
import {useParams} from "react-router-dom";
import modelBill from "./modelBillData.json";
import {BillComponentStyled, BillStyled, Error} from "./Bill.styles";
import Colors from "theme/Colors";
import DownloadPDF from "./DocumentComponent";

// import {useTable} from "react-table";

const Bill = (color_logo) => {
	const {id} = useParams(); // The dynamic id
	const [data] = useState(modelBill); // Fake data from JSON modelBillData

	const indexOfId = data.findIndex((i) => id === String(i.id));

	// Selecting the right bill...
	const selectedBill = data.filter((selected) => {
		return selected.id === parseInt(id, 10);
	});

	//Custom styles

	const customStyles = {
		rows: {
			style: {
				height: "47px",
			},
		},
		cells: {
			style: {
				paddingLeft: "0",
				paddingRight: "0",
			},
		},
	};

	const conditionalRowStyles = [
		{
			when: (row) => row.itemID === "01" || row.itemID === "03" || row.itemID === "05",
			style: {
				backgroundColor: "#efeeea",
			},
		},
	];

	// Columns for datatables
	const tradeColumns = [
		{
			name: <div>#</div>,
			selector: (row) => row.itemID,
			cell: (row) => <div>{row.itemID}</div>,
			center: true,
			hide: 600,
			grow: 1.15,
		},
		{
			name: <div>ITEM</div>,
			selector: "itemTitle",
			cell: (row) => <div className="cell-item">{row.itemTitle}</div>,
			left: true,
			grow: 2.4,
		},
		{
			name: <div>PRICE</div>,
			selector: "itemPrice",
			cell: (row) => (
				<div className="cell-price">
					<span>€ </span>
					{row.itemPrice}
				</div>
			),
			left: true,
			grow: 0,
		},
		{
			name: <div>QUANTITY</div>,
			selector: "itemQuant",
			cell: (row) => <div className="cell-quantity">{row.itemQuant}</div>,
			center: true,
			grow: 0,
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
			grow: 1.2,
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
					<DataTable
						columns={tradeColumns}
						noHeader={true}
						data={bill.tradeData.items}
						customStyles={customStyles}
						conditionalRowStyles={conditionalRowStyles}
					/>
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
						<h4>Thank You For Our Business</h4>
						<p>We make it easy for your problems.</p>
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
