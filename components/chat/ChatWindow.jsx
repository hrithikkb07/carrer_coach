"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BarLoader } from "react-spinners";

export default function ChatWindow({ onClose, messages, loading, onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div
      className="
        fixed bottom-24 right-6 z-50
        w-[380px] max-h-[540px]
        rounded-2xl
        bg-background/80 backdrop-blur-xl
        border border-border/40
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        flex flex-col
        overflow-hidden
        animate-in slide-in-from-bottom-5 fade-in duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            AI
          </div>
          <h3 className="font-semibold text-sm tracking-wide">
            PrepBot
          </h3>
        </div>

        <button onClick={onClose} className="hover:rotate-90 transition">
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && !loading && (
          <div className="text-center text-xs text-muted-foreground mt-8">
            Ask anything about DSA, roadmaps, system design, interviews…
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`
              max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm
              ${m.role === "user"
                ? "ml-auto bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                : "bg-muted/70 backdrop-blur text-foreground"}
            `}
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="flex justify-center pt-3">
            <BarLoader width={120} color="#7c3aed" />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-border/40 p-3 flex gap-2 bg-background/70 backdrop-blur">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask PrepBot anything…"
          className="
            flex-1 rounded-xl px-4 py-2.5 text-sm
            bg-muted/50
            border border-border/40
            focus:outline-none focus:ring-2 focus:ring-purple-500/40
            transition
          "
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          onClick={handleSend}
          size="sm"
          className="
            rounded-xl px-4
            bg-gradient-to-br from-indigo-500 to-purple-500
            text-white
            hover:opacity-90
          "
        >
          Send
        </Button>
      </div>
    </div>
  );
}
