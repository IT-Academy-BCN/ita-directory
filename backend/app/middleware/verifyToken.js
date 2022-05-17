/* eslint-disable consistent-return */
const { apiResponse } = require('../utils/utils')
const { tokenUser } = require('../utils/utils')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers?.authorization
  if (typeof authHeader !== 'undefined') {
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    const userId = tokenUser(token)
    if (!userId) {
      return res
        .status(401)
        .json(apiResponse({ message: 'Error with token or token has expired!' }))
    }
    req.userId = userId
    next()
  } else res.sendStatus(403)
}

module.exports = authenticateToken
