const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.end('VOTE APP')
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('new-vote', (selectedEngine) => {
    console.log('New Vote:', selectedEngine)
    io.emit('new-vote', selectedEngine)
  })

  socket.on('disconnect', () => console.log('a user disconnected'))
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
