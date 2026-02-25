
import React, { useState } from 'react';
import { askOracle } from '../../services/gemini';
import { Button } from '../ui/Button';
import { Sparkles, Terminal, Send } from 'lucide-react';

export const Oracle: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    const result = await askOracle(question);
    setResponse(result || '');
    setLoading(false);
  };

  return (
    <section id="oraculo" className="py-24 px-4 bg-[#0a0a0c] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f2ff]/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#00f2ff]/10 rounded-full text-[#00f2ff] animate-pulse">
              <Sparkles size={32} />
            </div>
          </div>
          <h2 className="text-[#00f2ff] text-sm uppercase tracking-widest">Módulo de IA Consciente</h2>
          <h3 className="text-4xl md:text-5xl font-mystery">Consulta al Oráculo</h3>
          <p className="text-zinc-400">
            Haz una pregunta que incomode a la matrix. Nuestro oráculo procesará tu inquietud desde una perspectiva de supraconciencia.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 md:p-10 border-[#0066cc]/30">
          <form onSubmit={handleAsk} className="space-y-6">
            <div className="relative">
              <Terminal className="absolute left-4 top-4 text-zinc-600" size={20} />
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ej: ¿Qué hay realmente más allá del paralelo 60?"
                className="w-full bg-black/50 border border-zinc-800 rounded-lg p-4 pl-12 text-zinc-300 focus:outline-none focus:border-[#00f2ff] transition-colors resize-none h-32"
              />
            </div>
            <Button 
              type="submit" 
              variant="secondary" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? 'Sincronizando frecuencias...' : 'Transmitir Pregunta'}
              {!loading && <Send size={18} className="ml-2" />}
            </Button>
          </form>

          {response && (
            <div className="mt-10 p-6 bg-[#0066cc]/10 border-l-4 border-[#00f2ff] rounded-r-lg animate-in fade-in slide-in-from-bottom-4 duration-700 reveal">
              <h5 className="text-[#00f2ff] text-xs font-bold uppercase mb-4 tracking-tighter flex items-center">
                <span className="w-2 h-2 bg-[#00f2ff] rounded-full mr-2 animate-ping"></span>
                Respuesta del Oráculo
              </h5>
              <p className="text-zinc-300 leading-relaxed font-light italic glitch" data-text={response}>
                {response}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
