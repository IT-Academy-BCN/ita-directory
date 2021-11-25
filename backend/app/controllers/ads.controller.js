const prisma = require("../../prisma/indexPrisma");
const {formatLocation} = require("../utils/formatLocation");
const {apiResponse, adsSchema, AdByIdParamSchema, getAdsByTypeSchema} = require("../utils/utils");

async function createAd(req, res) {
	try {
		// fields -> user_id, title, description, city, n_rooms, price, square_meters, n_bathrooms, map_lat, map_lon
		const {...fields} = req.body;
		await adsSchema.validateAsync(fields);

		const ad = await prisma.ads.create({
			data: {
				user: {
					connect: {
						id: parseInt(req.body.user_id),
					},
				},
				title: req.body.title,
				description: req.body.description,
				city: req.body.city,
				n_rooms: parseInt(req.body.n_rooms),
				price: parseInt(req.body.price),
				square_meters: parseInt(req.body.square_meters),
				n_bathrooms: parseInt(req.body.n_bathrooms),
				map_lat: parseFloat(req.body.map_lat),
				map_lon: parseFloat(req.body.map_lon),
				ad_type: {
					connect: {
						id: parseInt(req.body.ad_type_id)
					}
				}
			}
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


async function getAdsByType(req, res) {
	try {
		const {type} = req.params;
		let type_id
		await getAdsByTypeSchema.validateAsync(type);

		switch (type) {
			case "house": type_id = 1; break;
			case "room": type_id = 2; break;
			case "garage": type_id = 3; break;
			case "storage": type_id = 4; break;
			case "office": type_id = 5; break;
			case "warehouse": type_id = 6; break;
			case "building": type_id = 7; break;
			case "new_building": type_id = 8; break;
			default: type_id = 0;
		};


		if (type_id == 0) {
			return res.status(404).json(
				apiResponse({
					message: "Type not in the database",
				})
			);
		}
		const {id} = await prisma.ad_type.findUnique({
			where: {
				id: type_id
			},
		});

		const ads = await prisma.ads.findMany({
			where: {
				ad_type_id: id
			},
		})


		return res.status(200).json({
			message: "Ad fetched correctly.",
			data: ads,
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			return res.status(400).json(
				apiResponse({
					message: "adId param must be an integer.",
					err: err.message,
				})
			);
		} else {
			return res.status(500).json(
				apiResponse({
					message: "Something wrong occurred with your query.",
					err: err.message,
				})
			);
		}
	}
}


async function getAdTypes(req, res) {
	try {
		const typeNames = await prisma.ad_type.findMany()
		let data = []
		typeNames.forEach(type => {data.push(type.name)})
		return res.status(200).json({
			message: "Types fetched correctly.",
			data,
		});
	} catch (err) {
		return res.status(500).json(
			apiResponse({
				message: "Something wrong occurred with your query.",
				err: err.message,
			})
		);
	}

}


async function getAdsByTypeAndLocation(req, res) {
	try {
		const {location, type} = req.params;
		let formattedLocation = formatLocation(location)
		let type_id
		await getAdsByTypeSchema.validateAsync(type);

		switch (type) {
			case "house": type_id = 1; break;
			case "room": type_id = 2; break;
			case "garage": type_id = 3; break;
			case "storage": type_id = 4; break;
			case "office": type_id = 5; break;
			case "warehouse": type_id = 6; break;
			case "building": type_id = 7; break;
			case "new_building": type_id = 8; break;
			default: type_id = 0;
		};


		if (type_id == 0) {
			return res.status(404).json(
				apiResponse({
					message: "Type not in the database",
				})
			);
		}
		const {id} = await prisma.ad_type.findUnique({
			where: {
				id: type_id
			},
		});

		const ads = await prisma.ads.findMany({
			where: {
				city: formattedLocation,
				ad_type_id: id
			},
		})

		if (ads.length === 0) {
			res.status(200).json({
				message: "There are no ads for the city and type selected"
			})
		}

		return res.status(200).json({
			message: "Ad fetched correctly.",
			data: ads,
		});
	} catch (err) {
		return res.status(500).json(
			apiResponse({
				message: "Something wrong occurred with your query.",
				err: err.message,
			})
		);
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
	getAdsByType,
	getAdTypes,
	getAdsByTypeAndLocation,
	deleteById
};
