const router = require("express").Router();
const MediaControllers = require("../controllers/media.js");
const uploadFile = require("./../middleware/uploadFile");


/**
 * Registration data
 * @typedef {object} mediaUploadData
 * @property {string} password.required - Pwd of the user
 * @property {boolean} privacy.required - Accept privacy from user
 */

/**
 * POST /media/v1/uploadMedia
 * @summary Allows upload media file
 * @tags Media
 * @param {mediaUploadData} request.body.required - The payload looks like this:
 * { DATA NEEDED }
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example 
 * {DATA NEEDED} 
 * @example response - 200 - Example success response
 * { "status":"200", "message": "File uploaded correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"Failed uploading media"}
 */

router.post("/v1/upload", uploadFile, MediaControllers.uploadMedia);

/**
 * DELETE /media/v1/deleteMedia
 * @summary Allows delete media file
 * @tags Media
 * @param {mediaUploadData} request.body.required - The payload looks like this:
 * { DATA NEEDED }
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * {DATA NEEDED} 
 * @example response - 200 - Example success response
 * { "status":"200", "message": "File deleted correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"Failed deleting file"}
 */
router.delete("/v1/delete", MediaControllers.deleteMedia);




module.exports = router;