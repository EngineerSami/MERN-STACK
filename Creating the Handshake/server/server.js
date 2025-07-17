const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Nice to meet you. (shake hand)");
  socket.emit("welcome", "Welcome to the server! 👋");
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});