import React from "react";
import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";
import DownLoadButton from "components/units/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";
import {PDFDownloadLink} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
	body: {
		padding: "5rem 2rem 0 2rem",
		backgroundColor: "#ffffff",
		fontSize: "10pt",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		padding: "24px 50px 0 50px",
		marginTop: "3.8rem",
	},

	section: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		padding: "24px 50px 0 50px",
		marginTop: "10rem",
	},
	section2: {
		display: "flex",
		flexDirection: "column",
		padding: "24px 50px 0 50px",
		marginTop: "10rem",
	},
	totalsSection: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		width: "200%",
		padding: "24px 50px 0 50px",
		marginTop: "10rem",
	},
	table: {
		marginTop: 30,
		padding: "0 5rem 0 5rem",
		display: "table",
		width: "100%",
		borderTop: "solid",
		fontSize: "9pt",
	},
	tableRow: {
		flexDirection: "row",
		borderTop: "1px solid #efeeea",
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
	margin: {
		marginTop: 60,
	},
	marginTop: {
		marginTop: 10,
	},
	marginBottom: {
		marginBottom: 10,
	},
	text: {
		fontSize: 25,
		fontWeight: 700,
	},
	font: {
		fontSize: 15,
		fontWeight: 700,
		marginBottom: 10,
	},
	smallFont: {
		fontSize: 8,
	},
});

const PdfDocument = ({data}) => (
	<Document>
		<Page size="A4" orientation="portrait" style={styles.body}>
			<View>
				<View style={styles.header}>
					<Text style={styles.text}>{data.header.logoCompany}</Text>
					<Text style={styles.text}>{data.header.invoiceID}</Text>
				</View>
				<View style={styles.section}>
					<View>
						<Text>Invoice to: </Text>
						<Text style={styles.text}>{data.emisorReceiver.emisor.emName}</Text>
						<Text>{data.emisorReceiver.emisor.emPosition}</Text>
						<Text style={styles.margin}>Address:</Text>
						<Text>{data.emisorReceiver.emisor.emStreet}</Text>
						<Text>{data.emisorReceiver.emisor.emContact}</Text>
					</View>

					<View>
						<Text>Invoice from:</Text>
						<Text style={styles.text}>{data.emisorReceiver.receiver.reName}</Text>
						<Text>{data.emisorReceiver.receiver.rePosition}</Text>
						<Text style={styles.margin}>Address:</Text>
						<Text>{data.emisorReceiver.receiver.reStreet}</Text>
						<Text>{data.emisorReceiver.receiver.reContact}</Text>
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
					<View
						style={{
							flexDirection: "row",
							borderTop: "1px solid #efeeea",
							backgroundColor: "#efeeea",
						}}
					>
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
					<View
						style={{
							flexDirection: "row",
							borderTop: "1px solid #efeeea",
							backgroundColor: "#efeeea",
						}}
					>
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
					<View
						style={{
							flexDirection: "row",
							borderTop: "1px solid #efeeea",
							backgroundColor: "#efeeea",
						}}
					>
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
				<View
					style={{
						display: "flex",
						flexDirection: "row-reverse",
						alignItems: "center",
					}}
				>
					<View style={styles.totalsSection}>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-end",
								marginTop: 30,
								padding: "0 5rem 0 5rem",
								width: "100%",
								borderTop: "solid",
								fontSize: "9pt",
							}}
						>
							<View style={styles.tableCol}>
								<View style={styles.tableRow}>
									<Text
										style={{
											textAlign: "left",
											width: "auto",
											marginTop: 5,
											marginBottom: 5,
										}}
									>
										Sub total
									</Text>
								</View>
								<View style={styles.tableRow}>
									<Text
										style={{
											textAlign: "left",
											width: "auto",
											marginTop: 5,
											marginBottom: 5,
										}}
									>
										Tax(5%)
									</Text>
								</View>
								<View style={styles.tableRow}>
									<Text
										style={{
											textAlign: "left",
											width: "auto",
											marginTop: 5,
											marginBottom: 5,
										}}
									>
										Discount(10%)
									</Text>
								</View>
								<View
									style={{
										borderTop: "1px solid #efeeea",
										backgroundColor: "#efeeea",
									}}
								>
									<Text
										style={{
											textAlign: "left",
											width: "auto",
											marginTop: 5,
											marginBottom: 5,
										}}
									>
										GRAND TOTAL
									</Text>
								</View>
							</View>
							<View style={styles.tableCol}>
								<View style={styles.tableRow}>
									<Text
										style={{
											textAlign: "right",
											width: "auto",
											marginTop: 5,
											marginBottom: 5,
										}}
									>
										Subtotal
									</Text>
								</View>
								<View style={styles.tableRow}>
									<Text
										style={{
											textAlign: "right",
											width: "auto",
											marginTop: 5,
											marginBottom: 5,
										}}
									>
										tasa
									</Text>
								</View>
								<View style={styles.tableRow}>
									<Text
										style={{
											textAlign: "right",
											width: "auto",
											marginTop: 5,
											marginBottom: 5,
										}}
									>
										descuento
									</Text>
								</View>
								<View
									style={{
										borderTop: "1px solid #efeeea",
										backgroundColor: "#efeeea",
									}}
								>
									<Text
										style={{
											textAlign: "right",
											width: "auto",
											marginTop: 5,
											marginBottom: 5,
										}}
									>
										$total
									</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.section2}>
						<View style={styles.terms}>
							<View>
								<Text style={styles.font}>Terms & Conditions</Text>
								<Text style={{width: "70%"}}>{data.termsConditions.text}</Text>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.section}>
					<View>
						<Text style={styles.font}>Payment Method</Text>
						<Text style={styles.smallFont}>Bank</Text>
						<Text style={styles.marginTop}>
							Account ID: {data.payment.bank.accountID}
						</Text>
						<Text style={styles.marginBottom}>
							Account Name: {data.payment.bank.accountName}
						</Text>
						<Text style={styles.smallFont}>Paypal</Text>
						<Text style={styles.marginTop}>
							Paypal ID: {data.payment.paypal.paypalID}
						</Text>
						<Text>Account Name: {data.payment.paypal.account}</Text>
					</View>

					<View>
						<View>
							<Text style={styles.marginBottom}>{data.signature.image}</Text>
							<Text style={styles.font}>{data.emisorReceiver.receiver.reName}</Text>
							<Text style={styles.smallFont}>
								{data.emisorReceiver.receiver.rePosition}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</Page>
	</Document>
);

const DownloadPDF = ({data, type}) => {
	return (
		<PDFDownloadLink document={<PdfDocument data={data[0]} />} fileName="bill.pdf">
			{type === "button" ? (
				<DownLoadButton text="Descargar" className="blueGradient" type="button" />
			) : type === "icon" ? (
				<FontAwesomeIcon
					style={{marginLeft: "12px"}}
					icon={faDownload}
					color={Colors.grey}
					title="Descargar factura"
				/>
			) : null}
		</PDFDownloadLink>
	);
};

export default DownloadPDF;
