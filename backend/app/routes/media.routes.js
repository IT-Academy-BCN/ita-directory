const router = require('express').Router()
const MediaControllers = require('../controllers/media.controller')
const uploadFile = require('../middleware/uploadFile')

/**
 * Registration data
 * @typedef {object} mediaUploadData
 * @property {string} password.required - Pwd of the user
 * @property {boolean} privacy.required - Accept privacy from user
 */

/**
 * POST /media
 * @summary Allows upload media file
 * @tags Media
 * @param {mediaUploadData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * {"image": "file", "userId": "1"}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "File uploaded correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "msg": "File/userId error"}
 */

router.post('/media', uploadFile, MediaControllers.uploadMedia)

/**
 * DELETE /media
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
router.delete('/media', MediaControllers.deleteMedia)

module.exports = router
