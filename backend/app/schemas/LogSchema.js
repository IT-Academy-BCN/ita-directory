const { z } = require('zod')

const logSchema = z.object({
  msg: z.string(),
  level: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal']),
})

module.exports = logSchema
