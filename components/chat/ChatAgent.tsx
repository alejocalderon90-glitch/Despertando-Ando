
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Minus, Sparkles, Bot, PhoneCall } from 'lucide-react';
import { createChatSession } from '../../services/gemini';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bienvenido, buscador. Soy tu guía en esta frecuencia. ¿Qué verdad deseas descifrar hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) {
        chatRef.current = createChatSession();
      }

      const response = await chatRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'La señal se ha desvanecido...' }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Interferencia en la Matrix. Reintenta la transmisión.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] font-sans">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="relative group p-4 bg-black border border-[#00f2ff]/40 rounded-full shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-500 animate-pulse"
        >
          <div className="absolute inset-0 bg-[#00f2ff]/10 rounded-full animate-ping"></div>
          <Sparkles className="text-[#00f2ff] relative z-10" size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] glass-card rounded-2xl border-[#00f2ff]/30 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="p-4 bg-black/80 border-b border-[#00f2ff]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00f2ff]/20 flex items-center justify-center border border-[#00f2ff]/40">
                <Bot size={18} className="text-[#00f2ff]" />
              </div>
              <div>
                <h4 className="text-sm font-mystery text-white tracking-widest uppercase">Guía de Conciencia</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[8px] text-zinc-500 uppercase font-mono">Frecuencia Activa</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href="#llamada-alejandro" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.getElementById('llamada-alejandro')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-1.5 bg-[#00f2ff]/10 hover:bg-[#00f2ff]/20 text-[#00f2ff] rounded transition-colors mr-1"
                title="Iniciar Llamada"
              >
                <PhoneCall size={16} />
              </a>
              <button onClick={handleToggle} className="p-1 hover:bg-white/5 rounded text-zinc-500 transition-colors">
                <Minus size={18} />
              </button>
              <button onClick={handleToggle} className="p-1 hover:bg-white/5 rounded text-zinc-500 transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40 custom-scrollbar"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#0066cc]/40 border border-[#0066cc]/60 text-white rounded-br-none' 
                      : 'bg-zinc-900/80 border border-zinc-800 text-zinc-300 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-lg flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-black border-t border-zinc-900 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu inquietud..."
              className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-[#00f2ff] transition-colors"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="p-2 bg-[#00f2ff] text-black rounded-lg hover:bg-white transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 242, 255, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};
