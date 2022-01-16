const redis = require("redis");

const client = redis.createClient({
	url: `redis://default:${String(process.env.REDIS_PASS)}@localhost:${String(
		process.env.REDIS_PORT
	)}`,
});

module.exports = {client};
