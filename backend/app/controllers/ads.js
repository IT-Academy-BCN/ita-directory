const prisma = require("../../prisma/indexPrisma");
const {apiResponse, adsSchema, AdByIdParamSchema} = require("../utils/utils");

async function createAd(req, res) {
	try {
		// fields -> user_id, title, description, city, n_rooms, price, square_meters, n_bathrooms, map_lat, map_lon
		const {...fields} = req.body;
		await adsSchema.validateAsync(fields);

		const ad = await prisma.ads.create({
			data: fields,
		});

		res.status(200).json(
			apiResponse({
				message: "Ad created successfully.",
				data: ad,
			})
		);
	} catch (err) {
		if (err.isJoi && err.name === "ValidationError") {
			res.status(400).json(
				apiResponse({
					message: "At least one of the required values is not defined.",
					errors: err.message,
				})
			);
		} else if (err && err.code === "P2003") {
			res.status(422).json(
				apiResponse({
					message: "This value for user_id does not exist in users table.",
					errors: err.message,
				})
			);
		}

		res.status(500).json(
			apiResponse({
				message: "An error occurred while posting your ad.",
				errors: err.message,
			})
		);
	}
}

async function getAllAds(req, res) {
	try {
		const ads = await prisma.ads.findMany();

		res.status(200).json(
			apiResponse({
				message: "Data fetched correctly.",
				data: ads,
			})
		);
	} catch (err) {
		res.status(500).json(
			apiResponse({
				message: "An error occurred with your query.",
				err: err.message,
			})
		);
	}
}

async function getAdById(req, res) {
	try {
		const adId = parseInt(req.params.adId);

		// Validates if integer.
		await AdByIdParamSchema.validateAsync(adId);

		const ad = await prisma.ads.findUnique({
			where: {
				id: adId,
			},
		});

		if (!ad) {
			res.status(404).json(
				apiResponse({
					message: "This adId does not exist.",
				})
			);
		}

		res.status(200).json({
			message: "Ad fetched correctly.",
			data: ad,
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			res.status(400).json(
				apiResponse({
					message: "adId param must be an integer.",
					err: err.message,
				})
			);
		} else {
			res.status(500).json(
				apiResponse({
					message: "Something wrong occurred with your query.",
					err: err.message,
				})
			);
		}
	}
}

async function deleteById(req, res) {
	try {
		const adId = parseInt(req.params.adId);

		// Validates if integer.
		await AdByIdParamSchema.validateAsync(adId);

		const deletedAd = await prisma.ads.delete({
			where: {
				id: adId,
			},
		});

		res.status(200).json(
			apiResponse({
				message: "Ad successfully deleted.",
				data: deletedAd,
			})
		);
	} catch (err) {
		if (err.code === "P2025") {
			res.status(404).json(
				apiResponse({
					message: "This adId does not exist.",
					errors: err.message,
				})
			);
		}

		res.status(500).json(
			apiResponse({
				message: "An error occurred with your query.",
				errors: err,
			})
		);
	}
}

module.exports = {
	createAd,
	getAllAds,
	getAdById,
	deleteById,
};
