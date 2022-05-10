const controller = require('../controllers/chat.controller')

// Socket functions
module.exports = function (io) {
  io.sockets.on('connection', controller.chatSocket)
  /* 	io.sockets.on("connection", (socket) => {
		console.log("New connection");
	}); */
}
