const { apiResponse } = require('../utils/utils')
const { getConstants, loadConstants } = require('../utils/CONSTANTS')

async function getConstantsRoute(req, res) {
  if (getConstants() === undefined) {
    await loadConstants()
  }
  res.status(200).json(
    apiResponse({
      message: 'Constants fetched correctly.',
      data: getConstants(),
    })
  )
}

module.exports = {
  getConstantsRoute,
}
