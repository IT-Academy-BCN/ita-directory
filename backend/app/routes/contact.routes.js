const router = require("express").Router();
const {contactController} = require("../controllers/contact.controller");
const {schema} = require("../utils/schemaValidation");
const validation = require("../middleware/validation");

router.post("/v1/contact", validation(schema), contactController);

/**
 * Contact data
 * @typedef {object} contactData
 * @property {string} name.required - Name of the user
 * @property {string} email.required - Email of the user
 * @property {string} text.required - Text
 */

/**
 * POST /contact/v1/contact
 * @summary Send data to contact
 * @tags Contact
 * @param {contactData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * {
    "name": "name",
    "email": "email@email.com",
    "text": "message"
}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "Message received"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"Error"}
 */

module.exports = router;
