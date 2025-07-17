import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with your IP for remote access

const Chat = () => {
  useEffect(() => {
    socket.on("welcome", (message) => {
      console.log("Server says:", message);
    });
  }, []);

  return (
    <div>
      <h2>Socket.IO Chat</h2>
    </div>
  );
};

export default Chat;