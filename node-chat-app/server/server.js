const path = require("path")
const http = require("http")
const express = require("express")
const socketIO = require("socket.io")

const publicPath = path.join(__dirname, "../public")
const PORT = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on("connection", socket => {
  console.log("New user connected")

  socket.emit("newEmail", {
    from: "mike@example.com",
    text: "Hey, what's up?",
    createdAt: 123
  })

  socket.emit("newMessage", {
    from: "Cameron",
    text: "Yo!",
    createdAt: 456
  })

  socket.on("createMessage", message => {
    console.log("createMessage", message)
  })

  socket.on("disconnect", () => {
    console.log("User was disconnected")
  })
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
