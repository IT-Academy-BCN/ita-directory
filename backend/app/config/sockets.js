const controller = require('../controllers/chat.controller')

// Socket functions
module.exports = (io) => {
  io.sockets.on('connection', (socket) => controller.chatSocket(io, socket))
  /* 	io.sockets.on("connection", (socket) => {
		console.log("New connection");
	}); */
}
