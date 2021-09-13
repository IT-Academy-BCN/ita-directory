import React from "react";
import {Page, Text, View, Document, StyleSheet, Font} from "@react-pdf/renderer";
import DownLoadButton from "components/units/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";
import {PDFDownloadLink} from "@react-pdf/renderer";
import interRegular from "../../assets/fonts/Inter/Inter-Regular.ttf";
import interSemiBold from "../../assets/fonts/Inter/Inter-SemiBold.ttf";

// Create styles
Font.register({
	family: "Inter",
	fonts: [{src: interRegular}, {src: interSemiBold}],
});

const styles = StyleSheet.create({
	body: {
		padding: "28px 42px 4px 42px",
		backgroundColor: "#ffffff",
		fontFamily: "Inter",
		fontSize: "10pt",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		marginBottom: 60,
	},

	section: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
	},
	termsConditionsSection: {
		display: "flex",
		flexDirection: "column",
		marginLeft: 20,
		width: "50%",
	},
	termsAndTotalsContainer: {
		display: "flex",
		flexDirection: "row-reverse",
		alignItems: "center",
	},
	totalsSection: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		marginTop: "10rem",
		width: "50%",
	},
	table: {
		marginTop: 30,
		display: "table",
		width: "100%",
		borderTop: "solid",
		fontSize: "9pt",
	},
	tableRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		height: "35px",
	},
	tableStripedRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#efeeea",
		height: "35px",
	},
	tableCol: {
		width: "15%",
		paddingLeft: 20,
	},
	tableColTotals: {
		width: "15%",
	},
	tableColItem: {
		width: "40%",
	},

	tableCell: {
		margin: "auto",
		width: "100%",
		marginTop: 5,
		marginBottom: 5,
		fontSize: 10,
		textAlign: "left",
	},
	tableCellTotals: {
		textAlign: "left",
		width: "auto",
		marginTop: 5,
		marginBottom: 5,
		paddingLeft: "40px",
	},

	margin: {
		marginTop: 20,
	},
	marginTop: {
		marginTop: 10,
	},
	marginBottom: {
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
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
					<View style={[styles.tableRow, {borderTop: "1px solid #efeeea"}]}>
						<View style={styles.tableCol}>
							<Text style={[styles.tableCell, {fontWeight: "bold"}]}>#</Text>
						</View>
						<View style={styles.tableColItem}>
							<Text style={[styles.tableCell, {fontWeight: "bold"}]}>ITEM</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={[styles.tableCell, {fontWeight: "bold"}]}>PRICE</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={[styles.tableCell, {fontWeight: "bold"}]}>QUANTITY</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={[styles.tableCell, {fontWeight: "bold"}]}>AMOUNT</Text>
						</View>
					</View>
					<View style={styles.tableStripedRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>{data.tradeData.items[0].itemID}</Text>
						</View>
						<View style={styles.tableColItem}>
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
						<View style={styles.tableColItem}>
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
					<View style={styles.tableStripedRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>{data.tradeData.items[2].itemID}</Text>
						</View>
						<View style={styles.tableColItem}>
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
						<View style={styles.tableColItem}>
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
					<View style={styles.tableStripedRow}>
						<View style={styles.tableCol}>
							<Text style={styles.tableCell}>{data.tradeData.items[4].itemID}</Text>
						</View>
						<View style={styles.tableColItem}>
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
				<View style={styles.termsAndTotalsContainer}>
					<View style={styles.totalsSection}>
						<View style={[styles.tableColTotals, {width: "100%"}]}>
							<View style={styles.tableRow}>
								<Text style={styles.tableCellTotals}>Sub total</Text>
							</View>
							<View style={styles.tableRow}>
								<Text style={styles.tableCellTotals}>Tax(5%)</Text>
							</View>
							<View style={styles.tableRow}>
								<Text style={styles.tableCellTotals}>Discount(10%)</Text>
							</View>
							<View style={styles.tableStripedRow}>
								<Text style={styles.tableCellTotals}>GRAND TOTAL</Text>
							</View>
						</View>
						<View style={[styles.tableColTotals, {width: "100%"}]}>
							<View style={styles.tableRow}>
								<Text style={styles.tableCellTotals}>Subtotal</Text>
							</View>
							<View style={styles.tableRow}>
								<Text style={styles.tableCellTotals}>tasa</Text>
							</View>
							<View style={styles.tableRow}>
								<Text style={styles.tableCellTotals}>descuento</Text>
							</View>
							<View style={styles.tableStripedRow}>
								<Text style={styles.tableCellTotals}>$total</Text>
							</View>
						</View>
					</View>

					<View style={styles.termsConditionsSection}>
						<Text style={{fontSize: 12, fontWeight: "bold"}}>Terms & Conditions</Text>
						<Text style={{width: "70%", fontSize: 8, marginTop: 15}}>
							{data.termsConditions.text}
						</Text>
					</View>
				</View>

				<View style={[styles.section, {marginTop: 50}]}>
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
						<View style={{marginRight: 70}}>
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
