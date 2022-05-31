const { checkAndHashPass } = require('../../app/utils/utils')

const checkAndHashPassword = async (params, next) => {
  const newParams = { ...params }
  // Check incoming query type
  if (params.model === 'user') {
    if (params.action === 'create' || params.action === 'update' || params.action === 'upsert') {
      // Here we have to do something
      if (params.action === 'create' || params.action === 'update') {
        // create and update use data field
        if (params.args.data.password) {
          newParams.args.data.password = await checkAndHashPass(params.args.data.password)
        }
      } else if (params.action === 'upsert') {
        // upsert use create and/or update fields
        if (params.args.create.password) {
          newParams.args.create.password = await checkAndHashPass(params.args.create.password)
        }
        if (params.args.update.password) {
          newParams.args.update.password = await checkAndHashPass(params.args.update.password)
        }
      }
    }
  }
  return next(newParams)
}

module.exports = checkAndHashPassword
