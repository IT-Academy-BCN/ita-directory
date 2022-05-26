const { hashPassword } = require('../../app/utils/utils')

const checkAndHashPassword = async (params, next) => {
  // console.log('Prisma middleware!!')

  const checkAndHashPass = async (pass) => {
    let regexStr = process.env.PASSWORD_REGEX
    regexStr = regexStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // escape regex string
    const regex = new RegExp(regexStr)
    return regex.test(pass) ? hashPassword(pass) : null
  }

  const newParams = params
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
  // console.log(newParams.args)
  return next(newParams)
}

module.exports = checkAndHashPassword
