const prisma = require("../../prisma/indexPrisma");
const {type_sw} = require("../utils/CONSTANTS");
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
						id: parseInt(req.body.ad_type_id),
					},
				},
			},
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
		console.log("type", type);
		let type_id;
		await getAdsByTypeSchema.validateAsync(type);
		type_id = type_sw(type);

		if (type_id == 0) {
			return res.status(404).json(
				apiResponse({
					message: "Type not in the database",
				})
			);
		}
		const {id} = await prisma.ad_type.findUnique({
			where: {
				id: type_id,
			},
		});

		const ads = await prisma.ads.findMany({
			where: {
				ad_type_id: id,
			},
		});

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
		const typeNames = await prisma.ad_type.findMany();
		let data = [];
		typeNames.forEach((type) => {
			data.push(type.name);
		});
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
		let formattedLocation = formatLocation(location);
		let type_id;
		await getAdsByTypeSchema.validateAsync(type);
		type_id = type_sw(type);

		if (type_id == 0) {
			return res.status(404).json(
				apiResponse({
					message: "Type not in the database",
				})
			);
		}
		const {id} = await prisma.ad_type.findUnique({
			where: {
				id: type_id,
			},
		});

		const ads = await prisma.ads.findMany({
			where: {
				city: formattedLocation,
				ad_type_id: id,
			},
		});

		if (ads.length === 0) {
			return res.status(200).json({
				message: "There are no ads for the city and type selected",
			});
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

async function getAdsByLocation(req, res) {
	try {
		const {location} = req.params;
		const formattedLocation = formatLocation(location);
		const data = await prisma.ads.findMany({where: {city: formattedLocation}});
		console.log("ads", data);
		res.status(200).json({data});
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

async function updateAd(req,res){

	//! El id del ad es obtenido con parametro en la url.
	//! Deberia definir cuales son los campos modificables por el usuario.
	//! en ningun lugar se esta validando el tipo de datos! (string, int, etc)
	//! validateAsync necesita que lleguen todos los argumentos del schema. O no lo uso, o recibo todos.
	//!Si vamos a recibir solo la informacion modificada, usar (email: req.email || undefined,), el validador no va a servir!
	//! Manejar mejor el error de que el ad no existe


	try {
		// fields -> user_id, title, description, city, n_rooms, price, square_meters, n_bathrooms, map_lat, map_lon
		const {...fields} = req.body;
		
		const validationResult =await adsSchema.validateAsync(fields, {warnings: true});

			const updatedAd = await prisma.ads.update({

			where: {
				id: parseInt(req.params.adId),
			},
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
						id: parseInt(req.body.ad_type_id),
					},
				},
			},
		})
		
		if (updatedAd === null || undefined) {
			return res.status(204).json({massage: `Ad not found`});
		} else {
	
		res.status(200).json( 
			apiResponse({
				message: "Ad updated successfully.",
				 data: updatedAd,
			})
		);
		}
	} catch (err) {
		if (err.isJoi && err.name === "ValidationError") {
			res.status(400).json(
				apiResponse({
					message: "At least one of the required values is not defined.",
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

module.exports = {
	createAd,
	getAllAds,
	getAdById,
	getAdsByType,
	getAdTypes,
	getAdsByLocation,
	getAdsByTypeAndLocation,
	deleteById,
	updateAd
};
