const path = require("path");
require("dotenv").config({path: path.join(__dirname, ".env")});
const app = require("./app/app.js");
const socketio = require("socket.io");
const http = require("http");

// Create IO server
const server = http.createServer(app);
const io = socketio(server, {
	cors: {
		origin: process.env.CORS,
		methods: ["GET", "POST"],
	},
});
require("./app/config/sockets")(io);

server.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}.`);
	console.log(`Visit: http://localhost:${process.env.PORT}/`);
});
