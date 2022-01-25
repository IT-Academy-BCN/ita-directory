const Joi = require("joi");

const schema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().lowercase().required(),
	text: Joi.string().required(),
});

module.exports = {
	schema,
};
