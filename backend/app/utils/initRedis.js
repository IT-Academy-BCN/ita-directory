// const redis = require("redis");

// const client = (async () => {
// 	const create = redis.createClient({
// 		url: `redis://default:${String(process.env.REDIS_PASS)}@localhost:${String(
// 			process.env.REDIS_PORT
// 		)}`,
// 		//legacyMode: true,
// 	});

// 	await create.connect("error", (err) => {
// 		console.log("Error " + err);
// 	});

// })();
// //await client.connect()
// module.exports = {client};

//format to connent client to a host and port  diferent: redis[s]://[[username][:password]@][host][:port][/db-number]:

const redis = require("redis");

//(async () => {
const client = redis.createClient({
	url: `redis://default:${String(process.env.REDIS_PASS)}@localhost:${String(
		process.env.REDIS_PORT
	)}`,
});
//redis://default:fzG*aSD3@dsa5ssd@localhost:10912/ita_directory_redis`

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect();

module.exports = {client};
//})();
