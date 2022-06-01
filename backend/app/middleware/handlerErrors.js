/* eslint-disable no-unused-vars */
// Reason: http://expressjs.com/en/guide/using-middleware.html#middleware.error-handling

const logger = require('../../logger')

// No route found handler
const routeFoundHandler = (req, res, next) => {
  logger.error('Route not found')
  res.status(404)
  res.json({
    message: 'Error. Route not found',
  })
}

// Error handler
const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, code, header, message } = err
  const resp = {
    code,
    header,
    message,
  }
  if (err.name === 'ValidationError') {
    resp.code = 400
  }
  logger.error({ code, header, message })
  res.status(statusCode).json(resp)
}

module.exports = {
  routeFoundHandler,
  errorHandler,
}
