
import React from 'react';
import { Button } from '../ui/Button';
import { Users, Mail, ShieldCheck } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section id="comunidad" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
             <Users className="text-[#0066cc]" size={48} />
          </div>
          <h3 className="text-4xl md:text-6xl font-mystery glitch" data-text="No estás solo en esto.">No estás solo en esto.</h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Forma parte de una red privada de buscadores. Recibe información que no pasaría los filtros del algoritmo convencional.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl border-zinc-800">
          <h4 className="text-xl font-mystery mb-6">Únete a la Lista Privada</h4>
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-6 py-4 focus:outline-none focus:border-[#00f2ff] text-zinc-300"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Tu frecuencia digital (Email)" 
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-sm px-6 py-4 focus:outline-none focus:border-[#00f2ff] text-zinc-300"
              />
              <Button variant="primary">Unirme al Movimiento</Button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-2 mt-6 text-zinc-500 text-xs">
            <ShieldCheck size={14} />
            <span>Tus datos están encriptados y protegidos por la verdad.</span>
          </div>
        </div>

        <div className="pt-20 border-t border-zinc-900">
           <h3 className="text-5xl md:text-7xl font-mystery mb-12">¿Estás listo para <br/> <span className="text-[#00f2ff]">despertar</span>?</h3>
           <Button variant="primary" size="lg" className="px-16 py-6 text-xl">
             Despertar Ahora
           </Button>
        </div>
      </div>
    </section>
  );
};
