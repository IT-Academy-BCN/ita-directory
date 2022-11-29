const router = require('express').Router()
const logController = require('../controllers/log.controller')
const validate = require('../middleware/zodValidation')
const LogSchema = require('../schemas/LogSchema')

router.use(validate(LogSchema))
/**
 * Log data
 * @typedef {object} log
 * @property {string} msg.required - The message to log
 * @property {string} level - The level of serverity ('trace', 'debug', 'info', 'warn', 'error', 'fatal')
 */

/**
 * POST /log - Allow Frontend to save logs on server
 * @summary Create new log
 * @tags Log
 * @param {log} request.body.required
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.post('/log', logController.createLog)

module.exports = { router }
