const path = require("path");

const envFile = process.env.NODE === "development" ? ".env.development" : ".env";
require("dotenv").config({path: path.join(__dirname, `/./../${envFile}`)});
const socketio = require("socket.io");
const http = require("http");
const app = require("./app/app");
const handlerError = require("./app/middleware/handlerErrors");
const handlerLogger = require("./app/middleware/handlerLogger");
const client = require("./app/utils/initRedis");
const logger = require("./logger");

// Create IO server
const server = http.createServer(app);
const io = socketio(server, {
	cors: {
		origin: process.env.CORS,
		methods: ["GET", "POST"],
	},
});
require("./app/config/sockets")(io);

// Back-end logger
app.use(handlerLogger);

// No route found handler
app.use(handlerError.routeFoundHandler);

// Error handler
app.use(handlerError.errorHandler);

// Redis connect
(async () => {
	await client.connect();
})();

server.listen(process.env.PORT, () => {
	logger.info(`Server is running on port and working ${process.env.PORT}.`);
	logger.info(`Visit: http://localhost:${process.env.PORT}/`);
});
