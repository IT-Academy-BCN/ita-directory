const logger = require('../../logger')
const { logSchema } = require('../utils/schemaValidation')
const { apiResponse } = require('../utils/utils')

async function createLog(req, res) {
  const { msg, level } = req.body
  try {
    await logSchema.validateAsync({msg, level})
  } catch (err) {
    if (err.isJoi && err.name === 'ValidationError') {
      return res.status(400).json(
        apiResponse({
          message: 'At least one of the required values is not well formed.',
          errors: [err.message],
          status: 400,
        })
      )
    }
    return res.status(500).json(
      apiResponse({
        message: 'Unknown error',
        errors: [err.message],
        status: 500,
      })
    )
  }
  switch (level) {
    case 'trace':
      logger.trace(msg)
      break;
    case 'debug':
      logger.debug(msg)
      break;
    case 'warn':
      logger.warn(msg)
      break;
    case 'error':
      logger.error(msg)
      break;
    case 'fatal':
      logger.fatal(msg)
      break;
    default:
      logger.info(msg)
      break;
  }
  return res.status(200).json(
    apiResponse({
      message: 'Log created successfully.',
      status: 200,
    })
  )

}

module.exports = {
  createLog
}