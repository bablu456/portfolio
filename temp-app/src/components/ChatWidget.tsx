"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Loader2, User } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Bablu's Digital Twin. You can ask me anything about his experience, tech stack, or projects."
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    const newMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.content || "Sorry, I'm having trouble connecting." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform z-50 border border-purple-400/30"
      >
        <Bot className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window UI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Bablu&apos;s AI Clone</h3>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-80 overflow-y-auto flex flex-col gap-4 bg-[#020617]/50 scroll-smooth">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${
                    msg.role === "assistant" 
                      ? "bg-gradient-to-tr from-blue-500 to-purple-500" 
                      : "bg-slate-700"
                  }`}>
                    {msg.role === "assistant" ? <Bot className="w-3 h-3 text-white" /> : <User className="w-3 h-3 text-white" />}
                  </div>
                  <div className={`p-3 text-sm max-w-[85%] whitespace-pre-wrap ${
                    msg.role === "assistant"
                      ? "bg-slate-800 text-slate-200 rounded-2xl rounded-tl-none"
                      : "bg-blue-600 text-white rounded-2xl rounded-tr-none"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%] flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..." 
                className="flex-grow bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
