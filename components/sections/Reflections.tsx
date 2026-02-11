
import React from 'react';
import { REFLECTIONS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

export const Reflections: React.FC = () => {
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
            <article key={item.id} className="group p-8 glass-card rounded-lg hover:bg-zinc-900/40 transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase">{item.category}</span>
                <span className="text-[10px] tracking-widest text-zinc-600 uppercase">{item.date}</span>
              </div>
              <h4 className="text-2xl font-mystery mb-4 group-hover:text-[#d4af37] transition-colors">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                {item.excerpt}
              </p>
              <div className="flex items-center text-[#d4af37] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Leer ensayo <ArrowUpRight size={16} className="ml-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-12 relative">
             <div className="absolute inset-0 border border-[#d4af37]/20 rounded-full scale-110"></div>
             <p className="text-2xl md:text-3xl font-mystery italic text-zinc-300">
               "Si no cuestionas el sistema, el sistema te cuestionará a ti."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
