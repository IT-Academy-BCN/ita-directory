import React from "react";
import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";
import DownLoadButton from "components/units/Button/Button";
import {PDFDownloadLink} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
	body: {
		padding: "1.5rem 2rem 0 2rem",
		backgroundColor: "#ffffff",
		fontSize: "10pt",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		padding: "0 4rem 0 4rem",
		marginTop: "3.8rem",
	},

	section: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		padding: "0 4rem 0 4rem",
		marginTop: "10rem",
	},
	table: {
		marginTop: "10rem",
		padding: "0 5rem 0 5rem",
		display: "table",
		width: "100%",
		borderTop: "solid",
		fontSize: "9pt",
	},
	tableRow: {
		flexDirection: "row",
		borderTop: "1px solid #d3d3d3",
	},
	tableCol: {
		width: "20%",
	},
	tableCell: {
		margin: "auto",
		width: "auto",
		marginTop: 5,
		marginBottom: 5,
	},
	terms: {
		width: "65%",
	},
});

const PdfDocument = ({data}) => {
	if (!data) {
		return <p>Doesn't exist</p>;
	} else {
		console.log("Exist");
	}
	return (
		<Document>
			<Page size="A4" orientation="portrait" style={styles.body}>
				<View>
					<View style={styles.header}>
						<Text>{data.header.logoCompany}</Text>
						<Text>{data.header.invoiceID}</Text>
					</View>
					<View style={styles.section}>
						<View>
							<Text>Invoice to: </Text>
							<Text>{data.emisorReceiver.emisor.emName}</Text>
							<Text>{data.emisorReceiver.emisor.emPosition}</Text>
							<Text>Address:</Text>
							<Text>{data.emisorReceiver.emisor.emStreet}</Text>
							<Text>{data.emisorReceiver.emisor.emContact}</Text>
						</View>

						<View>
							<Text>Invoice from:</Text>
							<Text>{data.emisorReceiver.receiver.reName}</Text>
							<Text>{data.emisorReceiver.receiver.rePosition}</Text>
							<Text>Address:</Text>
							<Text>{data.emisorReceiver.receiver.reStreet}</Text>
							<Text>{data.emisorReceiver.receiver.reContact}</Text>
						</View>
					</View>
				</View>

				<View style={styles.table}>
					<View style={styles.tableRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>#</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>ITEM</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>PRICE</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>QUANTITY</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>AMOUNT</Text>
						</View>
					</View>

					<View style={styles.tableRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>{data.tradeData.items[0].itemID}</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[0].itemTitle}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[0].itemPrice}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[0].itemQuant}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[0].itemPrice *
									data.tradeData.items[0].itemQuant}
							</Text>
						</View>
					</View>

					<View style={styles.tableRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>{data.tradeData.items[1].itemID}</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[1].itemTitle}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[1].itemPrice}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[1].itemQuant}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[1].itemPrice *
									data.tradeData.items[1].itemQuant}
							</Text>
						</View>
					</View>

					<View style={styles.tableRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>{data.tradeData.items[2].itemID}</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[2].itemTitle}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[2].itemPrice}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[2].itemQuant}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[2].itemPrice *
									data.tradeData.items[2].itemQuant}
							</Text>
						</View>
					</View>

					<View style={styles.tableRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>{data.tradeData.items[3].itemID}</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[3].itemTitle}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[3].itemPrice}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[3].itemQuant}
							</Text>
						</View>

						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[3].itemPrice *
									data.tradeData.items[3].itemQuant}
							</Text>
						</View>
					</View>

					<View style={styles.tableRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>{data.tradeData.items[4].itemID}</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[4].itemTitle}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[4].itemPrice}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[4].itemQuant}
							</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>
								{data.tradeData.items[4].itemPrice *
									data.tradeData.items[4].itemQuant}
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.section}>
					<View style={styles.terms}>
						<View>
							<Text>Terms & Conditions</Text>
							<Text>{data.termsConditions.text}</Text>
						</View>
					</View>

					<View style={styles.calcTable}>
						<View style={styles.table}>
							<View style={styles.tableRow}>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Sub total</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Tax(5%)</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Discount(10%)</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>GRAND TOTAL</Text>
								</View>
							</View>
							<View style={styles.tableRow}>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Subtotal</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>tasa</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>descuento</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>total</Text>
								</View>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.section}>
					<View>
						<Text>Payment Method</Text>
						<Text>Bank</Text>
						<Text>Account ID: {data.payment.bank.accountID}</Text>
						<Text>Account Name: {data.payment.bank.accountName}</Text>
						<Text>Paypal</Text>
						<Text>Paypal ID: {data.payment.paypal.paypalID}</Text>
						<Text>Account Name: {data.payment.paypal.account}</Text>
					</View>

					<View>
						<View>
							<Text>{data.signature.image}</Text>
							<Text>{data.emisorReceiver.receiver.reName}</Text>
							<Text>{data.emisorReceiver.receiver.rePosition}</Text>
						</View>
					</View>
				</View>
			</Page>
		</Document>
	);
};

const DownloadPDF = ({data}) => {
	return (
		<PDFDownloadLink document={<PdfDocument data={data[0]} />} fileName="bill.pdf">
			<DownLoadButton text="Descargar" className="blueGradient" type="button" />
		</PDFDownloadLink>
	);
};

export default DownloadPDF;
