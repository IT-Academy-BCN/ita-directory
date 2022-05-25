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

// Validation error handler
// const validationErrorHandler = (err, req, res, next) => {
//   if (err.name === 'ValidationError') {
//     const { statusCode = 400, code, header, message } = err
//     logger.error({ code, header, message })
//     res.status(statusCode).json({
//       code,
//       header,
//       message,
//     })
//   }
//   next(err)
// }

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

function wrapAsync(fn) {
  return (req, res, next) => {
    // Make sure to `.catch()` any errors and pass them along to the `next()`
    // middleware in the chain, in this case the error handler.
    fn(req, res, next).catch(next)
  }
}

module.exports = {
  routeFoundHandler,
  errorHandler,
  wrapAsync,
}
