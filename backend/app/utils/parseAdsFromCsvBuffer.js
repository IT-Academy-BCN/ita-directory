const csv = require("csvtojson");

async function parseAdsFromCsvBuffer(req) {
	const requiredHeaders = [
		"title",
		"description",
		"city",
		"n_rooms",
		"price",
		"square_meters",
		"n_bathrooms",
		"map_lat",
		"map_lon",
		"ad_type_id",
	];

	let parsedHeaders = [];

	const adsArray = await csv()
		.fromString(req.file.buffer.toString())
		.on("header", (header) => {
			parsedHeaders = header;
		});

	//Validate headers
	if (JSON.stringify(parsedHeaders) !== JSON.stringify(requiredHeaders)) {
		throw new Error("Invalid CSV Headers");
	}
	return adsArray;
}

module.exports = {parseAdsFromCsvBuffer};
