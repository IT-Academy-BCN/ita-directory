const apiResponse = require("../utils/utils").apiResponse;
const {getConstants, loadConstants} = require("../utils/CONSTANTS");

async function getConstantsRoute(req, res) {
	if (getConstants() === undefined) {
		await loadConstants();
	}
	try {
		res.status(200).json(
			apiResponse({
				message: "Constants fetched correctly.",
				data: getConstants(),
			})
		);
	} catch (error) {
		console.error(error);
	}
}

module.exports = {
	getConstantsRoute,
};
