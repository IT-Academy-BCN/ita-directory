const redis = require('redis')
const logger = require('../../logger')

const client = redis.createClient({
  url: `redis://default:${String(process.env.REDIS_PASS)}@localhost:${String(
    process.env.REDIS_PORT
  )}`,
})

client.on('error', (err) => {
  logger.warn('redis is not running')
  logger.warn(err)
})
client.on('ready', () => {
  logger.info('redis is running')
})

module.exports = client
