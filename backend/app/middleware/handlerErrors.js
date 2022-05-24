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
  logger.error({ code, header, message })
  res.status(statusCode)
  res.json({
    code,
    header,
    message,
  })
}

function wrapAsync(fn) {
  return (req, res, next) => {
    // Make sure to `.catch()` any errors and pass them along to the `next()`
    // middleware in the chain, in this case the error handler.
    fn(req, res, next).catch(next)
  }
}

module.exports = { routeFoundHandler, errorHandler, wrapAsync }
