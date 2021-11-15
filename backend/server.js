const path = require("path");
require("dotenv").config({path: path.join(__dirname, ".env")});
const app = require("./app/app.js");
const socketio = require("socket.io");
const http = require("http");
const handlerError = require("./app/middleware/handler-errors")
// Create IO server
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: process.env.CORS,
        methods: ["GET", "POST"],
    },
});
require("./app/config/sockets")(io);

//No route found handler
app.use(handlerError.routeFoundHandler);

//Error handler
app.use(handlerError.errorHandler);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port and working ${process.env.PORT}.`);
    console.log(`Visit: http://localhost:${process.env.PORT}/`);
});
