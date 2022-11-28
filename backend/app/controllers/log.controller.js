const logger = require('../../logger')
const { apiResponse } = require('../utils/utils')

async function createLog(req, res) {
  const { msg, level } = req.body

  switch (level) {
    case 'trace':
      logger.trace(msg)
      break
    case 'debug':
      logger.debug(msg)
      break
    case 'warn':
      logger.warn(msg)
      break
    case 'error':
      logger.error(msg)
      break
    case 'fatal':
      logger.fatal(msg)
      break
    default:
      logger.info(msg)
      break
  }
  res.status(200).json(
    apiResponse({
      message: 'Log created successfully.',
      status: 200,
    })
  )
}

module.exports = {
  createLog,
}
