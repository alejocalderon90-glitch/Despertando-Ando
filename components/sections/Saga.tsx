
import React from 'react';
import { Button } from '../ui/Button';
import { Shield, Map, Compass } from 'lucide-react';
import { WORLDS } from '../../constants';

export const Saga: React.FC = () => {
  const handleIncursion = (worldName: string) => {
    alert(`Iniciando protocolo de transferencia a: ${worldName}...\n\nAcceso restringido. Nivel de conciencia insuficiente.`);
  };

  return (
    <section id="saga" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#0066cc] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="https://picsum.photos/seed/antarctica/800/1000" 
            alt="Alejandro y los Misterios de la Antártida" 
            className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-md">
            <h3 className="text-2xl font-mystery mb-2">21 Mundos. Un solo Muro.</h3>
            <p className="text-zinc-400 text-sm">Alejandro no buscaba la verdad, la verdad lo encontró a él en los confines del hielo.</p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-[#00f2ff] text-sm uppercase tracking-widest mb-4">La Saga Épica</h2>
            <h3 className="text-4xl md:text-5xl font-mystery mb-6">Alejandro y los Misterios de la Antártida</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Más allá del muro de hielo se extienden tierras que los mapas oficiales han borrado. 
              Sigue a Alejandro en una travesía disruptiva donde los mitos antiguos y la tecnología 
              futurista se entrelazan para revelar quiénes somos realmente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {WORLDS.map((world) => (
              <div key={world.id} className="group p-5 border border-zinc-800 rounded-xl hover:border-[#00f2ff]/50 transition-all duration-300 bg-zinc-900/40 hover:bg-zinc-900/80 reveal flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#00f2ff] font-mono text-xs tracking-widest">MUNDO {world.id.toString().padStart(2, '0')}</span>
                    <Compass size={14} className="text-zinc-600 group-hover:text-[#00f2ff] transition-colors" />
                  </div>
                  <h4 className="text-lg font-mystery text-zinc-100 mb-2 group-hover:text-[#00f2ff] transition-colors">{world.name}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 border-l-2 border-zinc-800 pl-3 group-hover:border-[#00f2ff]/30 transition-colors">
                    {world.description}
                  </p>
                </div>
                <button 
                  onClick={() => handleIncursion(world.name)}
                  className="w-full py-2 mt-2 border border-zinc-700 hover:border-[#00f2ff] text-zinc-400 hover:text-[#00f2ff] text-[10px] uppercase tracking-widest rounded transition-all hover:shadow-[0_0_10px_rgba(0,242,255,0.2)] flex items-center justify-center gap-2 group-hover:bg-[#00f2ff]/5"
                >
                  <span>Iniciar Incursión</span>
                  <Map size={12} />
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-[#00f2ff]/10 rounded-full text-[#00f2ff]">
                <Shield size={20} />
              </div>
              <p className="text-zinc-300 italic">"Los portales solo se abren para quienes dejan de temer al sistema."</p>
            </div>
            <Button variant="primary" className="w-full sm:w-auto">Descubrir la saga</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
