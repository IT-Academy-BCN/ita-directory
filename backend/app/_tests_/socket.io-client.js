/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
// eslint-disable-next-line import/no-extraneous-dependencies
const io = require('socket.io-client')

const socket = io('http://localhost:10910/', {
  extraHeaders: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpdGFjYWRlbXkiLCJzdWIiOnsidXNlcl9pZCI6IjlSQUtkMk9iSk0ifSwiaWF0IjoxNjUyNzAzNjk3LCJleHAiOjE2NTI3MDQ1OTd9.5d6Si1bK6Je9-npDuMVc1X2a5D6UWqF052zHEX3aIeU',
  },
})

function later(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

socket.on('connect', async () => {
  socket.emit('choose_conversation', 2)

  socket.on('is_typing_response', (data) => {
    console.log('client:', data)
  })
  socket.on('is_not_typing_response', (data) => {
    console.log('client:', data)
  })
  socket.on('online_users', (data) => {
    console.log('client:', data)
  })
  socket.on('new_message_response', (data) => {
    console.log('client: message created:', data)
  })

  for (let i = 0; i < 3; i += 1) {
    socket.emit('is_typing', 2)
    await later(1)
    socket.emit('is_not_typing', 2)
    await later(1)
  }
  socket.emit('new_message', { conversationId: 2, senderId: 1, text: 'Hola!' })
})
