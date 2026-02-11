
import React, { useState } from 'react';
import { REFLECTIONS } from '../../constants';
import { ArrowUpRight, X, Globe, Shield, Search, BookOpen, AlertCircle, Info } from 'lucide-react';

interface EssayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IceWallEssay: React.FC<EssayModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-2xl flex justify-center overflow-y-auto animate-in fade-in duration-500">
      <div className="max-w-4xl w-full p-6 md:p-12 relative">
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 p-3 bg-white/5 hover:bg-[#d4af37]/20 rounded-full border border-white/10 text-[#d4af37] transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <div className="w-20 h-20 border border-[#d4af37]/30 rounded-full flex items-center justify-center mb-6 relative">
            <Globe className="text-[#d4af37] animate-pulse" size={40} />
            <div className="absolute inset-0 border border-[#d4af37]/10 rounded-full scale-150 animate-ping"></div>
          </div>
          <span className="text-[#d4af37] text-xs uppercase tracking-[0.5em] font-bold">Archivo Clasificado: Ref_02</span>
          <h1 className="text-4xl md:text-6xl font-mystery text-white leading-tight italic">
            El Muro de Hielo: <br /><span className="text-[#d4af37]">Realidad o Metáfora</span>
          </h1>
          <p className="text-zinc-500 font-mono text-[10px] uppercase">Hash de Integridad: 88x92-ANT-SECRET-VERIFIED</p>
        </div>

        <div className="space-y-16 text-zinc-300 leading-relaxed pb-24">
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#d4af37]/20 pb-4">
              <AlertCircle className="text-[#d4af37]" size={20} />
              <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">1. ¿Qué dice la teoría conspirativa?</h2>
            </div>
            <div className="glass-card p-8 rounded-lg border-zinc-800 space-y-4">
              <p>
                En el modelo terraplanista moderno, la Tierra es un disco plano con el Polo Norte en el centro y la Antártida formando un <strong>anillo periférico de hielo</strong> que actúa como barrera natural.
              </p>
              <ul className="list-none space-y-4 text-sm text-zinc-400">
                <li className="flex gap-3"><span className="text-[#d4af37] mt-1">•</span> Este "muro" supuestamente mide cientos de metros de altura, impidiendo que los océanos se derramen al vacío y ocultando tierras desconocidas.</li>
                <li className="flex gap-3"><span className="text-[#d4af37] mt-1">•</span> Se argumenta que el <strong>Tratado Antártico de 1959</strong> es una conspiración global para prohibir la exploración libre bajo vigilancia militar permanente.</li>
                <li className="flex gap-3"><span className="text-[#d4af37] mt-1">•</span> Se mencionan anomalías magnéticas, pirámides ocultas y las expediciones del almirante Richard Byrd sacadas de contexto.</li>
              </ul>
              <p className="text-zinc-500 italic text-xs pt-4 border-t border-zinc-800">
                Esta idea es una metáfora de los "límites del conocimiento humano", pero presentada como realidad literal por sus defensores.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#d4af37]/20 pb-4">
              <Globe className="text-[#d4af37]" size={20} />
              <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">2. La Realidad Científica</h2>
            </div>
            <p>
              La Antártida es un <strong>continente real</strong> de unos 14 millones de km², cubierto en un 98% por una capa de hielo promedio de 1,9 km de espesor. 
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded">
                <h4 className="text-[#d4af37] text-xs font-bold uppercase mb-2">Plataformas de Hielo</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Lo que la teoría llama "muro" son las <strong>ice shelves</strong> (como la de Ross) que tienen frentes verticales de hasta 60 metros sobre el nivel del mar.</p>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded">
                <h4 className="text-[#d4af37] text-xs font-bold uppercase mb-2">Imágenes Satelitales</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">NASA, ESA y otras agencias muestran claramente un continente irregular, no un anillo infinito ni una pared perfecta.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#d4af37]/20 pb-4">
              <Search className="text-[#d4af37]" size={20} />
              <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">3. Evidencia que desmiente el muro</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="p-1 bg-[#d4af37]/10 rounded h-fit mt-1"><BookOpen size={14} className="text-[#d4af37]" /></div>
                  <p><span className="text-white font-bold">Circunnavegación:</span> Barcos rodean la Antártida entera en carreras como la Vendée Globe. La distancia coincide con un globo, no con un disco plano.</p>
                </div>
                <div className="flex gap-3">
                  <div className="p-1 bg-[#d4af37]/10 rounded h-fit mt-1"><BookOpen size={14} className="text-[#d4af37]" /></div>
                  <p><span className="text-white font-bold">Vuelos y GPS:</span> Vuelos comerciales y sistemas GPS operan allí sin anomalías que sugieran una geometría plana.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="p-1 bg-[#d4af37]/10 rounded h-fit mt-1"><BookOpen size={14} className="text-[#d4af37]" /></div>
                  <p><span className="text-white font-bold">Sol de 24 Horas:</span> En verano, el sol no se pone en el Polo Sur, fenómeno imposible en un modelo de mapa plano.</p>
                </div>
                <div className="flex gap-3">
                  <div className="p-1 bg-[#d4af37]/10 rounded h-fit mt-1"><BookOpen size={14} className="text-[#d4af37]" /></div>
                  <p><span className="text-white font-bold">Presencia Humana:</span> Más de 70 bases de 30 países operan allí. Unos 70,000 turistas visitan el continente anualmente.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#d4af37]/20 pb-4">
              <Shield className="text-[#d4af37]" size={20} />
              <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">4. ¿Por qué parece el mayor secreto?</h2>
            </div>
            <div className="grid gap-6">
              <p>El misterio se alimenta de las <strong>Condiciones Extremas</strong> (-89°C récord) y el <strong>Tratado Antártico (1959)</strong>.</p>
              <div className="p-6 border-l-2 border-[#d4af37] bg-[#d4af37]/5 italic text-zinc-400 text-sm">
                "El tratado declara la zona como área de paz, prohíbe actividades militares y minería comercial. No prohíbe visitas civiles, solo las regula para proteger el ecosistema y evitar contaminación ecológica."
              </div>
            </div>
          </section>

          <section className="pt-12 border-t border-zinc-900 text-center space-y-6">
             <div className="inline-block px-4 py-1 bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Conclusión</div>
             <h3 className="text-3xl font-mystery text-white italic">Realidad vs. Metáfora</h3>
             <p className="max-w-2xl mx-auto text-zinc-400">
               El "Muro de Hielo" como barrera física que oculta un mundo secreto es <strong>ficción conspirativa</strong>. Sin embargo, como metáfora de lo desconocido, la Antártida guarda secretos reales bajo su hielo: historia geológica, ecosistemas subglaciales y las claves de nuestro futuro climático.
             </p>
          </section>
        </div>

        <div className="mt-12 text-center text-zinc-600 text-[10px] font-mono uppercase tracking-[0.5em] border-t border-zinc-900 pt-12 pb-12">
          Fin de la Transmisión | Despertando Ando © 2024
        </div>
      </div>
    </div>
  );
};

export const Reflections: React.FC = () => {
  const [activeEssay, setActiveEssay] = useState<string | null>(null);

  const handleOpenEssay = (id: string) => {
    if (id === 'r2') {
      setActiveEssay('ice-wall');
    } else {
      alert("Este fragmento de realidad aún está siendo descifrado por Alejandro...");
    }
  };

  return (
    <section id="reflexiones" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-[#d4af37] text-sm uppercase tracking-widest">Contenido & Reflexiones</h2>
            <h3 className="text-4xl md:text-5xl font-mystery">Fragmentos de Realidad</h3>
          </div>
          <p className="text-zinc-400 max-w-md font-light">
            Micro-ensayos que desafían la narrativa oficial y expanden los límites de lo posible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REFLECTIONS.map((item) => (
            <article 
              key={item.id} 
              onClick={() => handleOpenEssay(item.id)}
              className="group p-8 glass-card rounded-lg hover:bg-zinc-900/40 transition-all duration-300 cursor-pointer border-transparent hover:border-[#d4af37]/30"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase">{item.category}</span>
                <span className="text-[10px] tracking-widest text-zinc-600 uppercase">{item.date}</span>
              </div>
              <h4 className="text-2xl font-mystery mb-4 group-hover:text-[#d4af37] transition-colors">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                {item.excerpt}
              </p>
              <div className="flex items-center text-[#d4af37] text-sm font-bold transition-all transform group-hover:translate-x-2">
                Leer ensayo <ArrowUpRight size={16} className="ml-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-12 relative group cursor-default">
             <div className="absolute inset-0 border border-[#d4af37]/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000"></div>
             <p className="text-2xl md:text-3xl font-mystery italic text-zinc-300 relative z-10">
               "Si no cuestionas el sistema, el sistema te cuestionará a ti."
             </p>
          </div>
        </div>
      </div>

      <IceWallEssay 
        isOpen={activeEssay === 'ice-wall'} 
        onClose={() => setActiveEssay(null)} 
      />
    </section>
  );
};
