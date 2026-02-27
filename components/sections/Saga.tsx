
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Shield, Map, Compass, X, ArrowLeft } from 'lucide-react';
import { WORLDS } from '../../constants';

export const Saga: React.FC = () => {
  const [selectedWorld, setSelectedWorld] = useState<number | null>(null);
  const [isCracking, setIsCracking] = useState<number | null>(null);

  const handleIncursion = (worldId: number) => {
    setIsCracking(worldId);
    setTimeout(() => {
      setSelectedWorld(worldId);
      setIsCracking(null);
    }, 800); // Wait for shatter animation
  };

  const currentWorld = WORLDS.find(w => w.id === selectedWorld);

  if (selectedWorld && currentWorld) {
    return (
      <div className="fixed inset-0 z-[100] bg-black text-white overflow-y-auto world-enter-active">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 bg-[url('https://picsum.photos/seed/ice-texture/1920/1080')] bg-cover bg-center"></div>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <button 
            onClick={() => setSelectedWorld(null)}
            className="flex items-center gap-2 text-[#00f2ff] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Volver a la Base</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 border border-[#00f2ff]/30 rounded-full text-[#00f2ff] text-xs tracking-widest bg-[#00f2ff]/5">
                MUNDO {currentWorld.id.toString().padStart(2, '0')}
              </div>
              <h1 className="text-5xl md:text-7xl font-mystery text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                {currentWorld.name}
              </h1>
              <p className="text-xl text-zinc-300 leading-relaxed border-l-4 border-[#00f2ff] pl-6">
                {currentWorld.description}
              </p>
              
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl mt-8">
                <h3 className="text-[#00f2ff] font-mono text-sm mb-4 flex items-center gap-2">
                  <Shield size={16} /> PROTOCOLO DE ACCESO
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  La inmersión completa en este sector requiere una frecuencia vibratoria específica. 
                  Los datos detallados están encriptados para proteger la integridad mental del viajero.
                </p>
                <Button variant="primary" className="w-full">
                  Desencriptar Archivos Completos
                </Button>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img 
                src={`https://picsum.photos/seed/world-${currentWorld.id}/800/1200`} 
                alt={currentWorld.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Coordenadas</p>
                <p className="text-white font-mono">{(currentWorld.id * 12.5).toFixed(4)}° S, {(currentWorld.id * 8.3).toFixed(4)}° E</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="saga" className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#0066cc] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          {/* 
            PARA USAR TU PROPIA IMAGEN:
            1. Guarda tu archivo de imagen (ej: portada.jpg) en la carpeta 'public' del proyecto.
            2. Cambia la propiedad src abajo a: "/portada.jpg"
          */}
          <img 
            src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=2668&auto=format&fit=crop" 
            alt="Alejandro y los Misterios de la Antártida" 
            className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover"
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
              <div 
                key={world.id} 
                className={`group p-5 border border-zinc-800 rounded-xl hover:border-[#00f2ff]/50 transition-all duration-300 bg-zinc-900/40 hover:bg-zinc-900/80 reveal flex flex-col justify-between ${isCracking === world.id ? 'shatter-anim' : ''}`}
              >
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
                  onClick={() => handleIncursion(world.id)}
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
