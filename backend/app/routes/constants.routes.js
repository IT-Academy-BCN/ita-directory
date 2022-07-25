const router = require('express').Router()
const constantsController = require('../controllers/constants.controller')

/**
 * GET /constants
 * @summary Load constants
 * @tags Constants
 * @return {object} 200 - Success response - application/json
 */
router.get('/constants', constantsController.getConstantsRoute)

module.exports = router
