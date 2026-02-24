"use client";

import { useState } from "react";
import ChatFloatingButton from "./ChatFloatingButton";
import ChatWindow from "./ChatWindow";
import { askChatBot } from "@/actions/chat";

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const reply = await askChatBot(text);
      setMessages([
        ...newMessages,
        { role: "assistant", content: reply },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "I am tired… try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <ChatWindow
          onClose={() => setOpen(false)}
          messages={messages}
          loading={loading}
          onSend={sendMessage}
        />
      )}

      <ChatFloatingButton onClick={() => setOpen(true)} />
    </>
  );
}
