const Joi = require("joi");
const JWT = require("jsonwebtoken");
const Hashids = require("hashids");
const {getRedisClient} = require("../utils/initRedis");
const argon2 = require("argon2");

const hashids = new Hashids(process.env.HASH_ID_SECRET, 10);

/*
/ message - A user friendly message of what happened, string, defaults to ''
/ data - The main data, defaults to an object, it can be any type
/ errors - An array of errors generated in processing, defaults to []
**/
const apiResponse = ({message = "", data = {}, errors = []}) => {
	return {message, data, errors};
};

const AdByIdParamSchema = Joi.number().integer().required();

const registerSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(2).required(),
	privacy: Joi.boolean().valid(true).required(),
});

const adsSchema = Joi.object({
	user_id: Joi.number().required(),
	title: Joi.string().required(),
	description: Joi.string().required(),
	city: Joi.string().required(),
	n_rooms: Joi.number().required(),
	price: Joi.number().required(),
	square_meters: Joi.number().required(),
	n_bathrooms: Joi.number().required(),
	map_lat: Joi.number().required(),
	map_lon: Joi.number().required(),
	// ad_type_id: Joi.number().required()
});

const signToken = (userid, maxAge = "15m") => {
	const hashedId = hashids.encode(userid);
	const payload = {iss: "itacademy", sub: {user_id: hashedId}};
	const secret = process.env.JWT_SECRET;
	const options = {expiresIn: maxAge};
	return JWT.sign(payload, secret, options);
};

// maxAge = "1d" => 86400 must be a number for Redis expiration time
const signRefreshToken = (userid, maxAge = 86400) => {
	console.log("### REFRESH TOKEN")
	const hashedId = hashids.encode(userid);
	const payload = {iss: "itacademy", sub: {user_id: hashedId}};
	const secret = process.env.JWT_REFRESH_TOKEN_SECRET;
	const options = {expiresIn: maxAge};
	const token = JWT.sign(payload, secret, options);
	getRedisClient().set(userid, token, "EX", maxAge);
	return token;
};

const hashPassword = async (password) => {
	return await argon2.hash(password, {
		type: argon2.argon2id,
		memoryCost: 15360,
		timeCost: 2,
		parallelism: 1,
	});
};

const getRegionByLocationSchema = Joi.string().required()

const getAdsByTypeSchema = Joi.string().required()

module.exports = {
	// generateBlob,
	apiResponse,
	registerSchema,
	adsSchema,
	AdByIdParamSchema,
	signToken,
	signRefreshToken,
	hashPassword,
	getRegionByLocationSchema,
	getAdsByTypeSchema
};
