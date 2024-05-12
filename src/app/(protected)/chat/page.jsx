"use client";
import { Button, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

function ChatPage() {
  const idUser = socket.id;
  const [data, setData] = useState([]);
  const [isConected, setIsConected] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("connect", (socket) => setIsConected(true));

    socket.on("chat-message", (msg) => {
      setData((data) => [...data, msg]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat-message");
    };
  }, []);

  const sendMessage = (text) => {
    socket.emit("chat-message", text);
    setMessage("");
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-[70%] w-[70%] flex flex-col justify-between items-center border-2 border-inherit gap-3">
        <div className="bg-slate-200 flex-grow flex flex-col h-64 w-full overflow-y-auto p-6 gap-3">
          {data.map((item, index) => (
            <h1
              className={`py-1 px-4 text-start max-w-[75%] rounded-md ${
                item.user == idUser
                  ? "self-end bg-sky-500 text-white"
                  : "self-start bg-gray-500 text-white"
              }`}
              key={index}
            >
              {item.message}
            </h1>
          ))}
        </div>
        <div className="flex justify-end items-center w-[100%] gap-5">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            size="sm"
            className="flex-1"
            placeholder="Escribe Un Mensaje"
          />
          <Button onClick={() => sendMessage(message)}>Enviar</Button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
