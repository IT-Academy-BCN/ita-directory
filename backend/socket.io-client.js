const io = require('socket.io-client')

const socket = io('http://localhost:10910/', {
  extraHeaders: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpdGFjYWRlbXkiLCJzdWIiOnsidXNlcl9pZCI6IjlSQUtkMk9iSk0ifSwiaWF0IjoxNjUyMzU2MDU5LCJleHAiOjE2NTIzNTY5NTl9.812m1V5EXdzltUdjXA5l_jCVqTuhioQZj2UpgmjRook',
  },
})
socket.on('connect', () => {
  socket.emit('choose_conversation', 2)

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    ;(() => {
      setTimeout(() => {
        socket.emit('is_typing', 2)
      }, 2000 + 2000 * i)
      setTimeout(() => {
        socket.emit('is_not_typing', 2)
      }, 3000 + 2000 * i)
    })(i)
  }
  socket.on('is_typing_response', (data) => {
    console.log('client:', data)
  })
  socket.on('is_not_typing_response', (data) => {
    console.log('client:', data)
  })
})
