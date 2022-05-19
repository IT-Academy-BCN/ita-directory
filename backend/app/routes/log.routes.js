const router = require('express').Router()
const logController = require('../controllers/log.controller')

/**
 * POST /log - Allow Frontend to save logs on server
 * @summary Create new log
 * @tags Log
 * @param {string} request.body.msg.required - The message to log
 * @param {string} request.body.level - The level of serverity ('trace', 'debug', 'info', 'warn', 'error', 'fatal')
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.post('/', logController.createLog)


module.exports = router
