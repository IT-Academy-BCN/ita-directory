import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";

import {PDFDownloadLink} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
	page: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "nowrap",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		backgroundColor: "#eeeeee",
		paddingBottom: "3rem",
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

const PdfDocument = ({data}) => (
	<Document>
		<Page size="A4" orientation="portrait" style={styles.page}>
			<View style={styles.section} data={data.prueba}>
				<Text>Sección #1</Text>
				<Text>{data.prueba.prueba1}</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
			</View>
		</Page>
	</Document>
);

const DownloadPDF = ({data}) => {
	return (
		<PDFDownloadLink fileName="bill.pdf">
			<PdfDocument data={data} />;
		</PDFDownloadLink>
	);
};

export default DownloadPDF;
