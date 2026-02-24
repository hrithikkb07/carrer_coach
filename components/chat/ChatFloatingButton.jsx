"use client";

import { MessageSquare } from "lucide-react";

export default function ChatFloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open AI Assistant"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
        text-white
        shadow-[0_8px_30px_rgba(124,58,237,0.6)]
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:shadow-[0_10px_40px_rgba(236,72,153,0.7)]
        active:scale-95
        animate-pulse
      "
    >
      <MessageSquare className="w-6 h-6 drop-shadow" />
    </button>
  );
}
