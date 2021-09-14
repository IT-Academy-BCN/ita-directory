const redis = require("redis");
const util = require("util");

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
});

const set = util.promisify(client.set).bind(client);
const get = util.promisify(client.get).bind(client);
const incr = util.promisify(client.incr).bind(client);
const hgetall = util.promisify(client.hgetall).bind(client);
const hget = util.promisify(client.hget).bind(client);
const hset = util.promisify(client.hset).bind(client);
const hdel = util.promisify(client.hdel).bind(client);
const rpush = util.promisify(client.rpush).bind(client);
const lrem = util.promisify(client.lrem).bind(client);
const lrange = util.promisify(client.lrange).bind(client);

client.on("connect", () => {
	console.log("Client connected to redis...");
});

client.on("ready", () => {
	console.log("Client connected to redis and ready to use...");
});

client.on("error", (err) => {
	console.log(err.message);
});

client.on("end", () => {
	console.log("Client disconnected from redis");
});

process.on("SIGINT", () => {
	client.quit();
	process.exit(1);
});

module.exports = {
	getRedisClient: () => ({hget, hgetall, hset, hdel, rpush, lrem, lrange, set, get, incr}),
};
