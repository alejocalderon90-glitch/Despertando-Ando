
import React from 'react';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,102,204,0.15)_0%,_rgba(5,5,5,1)_70%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f2ff]/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="inline-block px-4 py-1 border border-[#00f2ff]/30 rounded-full bg-black/50 text-[#00f2ff] text-xs uppercase tracking-[0.3em] mb-4">
          La verdad ha sido fragmentada
        </div>
        
        <h1 className="text-5xl md:text-8xl font-mystery leading-tight">
          La realidad es el velo. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-white italic">
            Es hora de mirar detrás.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Despertando Ando es el portal donde la tecnología converge con el misterio. 
          Cuestiona la matrix, explora los mundos ocultos y reclama tu verdadera conciencia.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button variant="primary" size="lg" onClick={() => document.getElementById('saga')?.scrollIntoView({ behavior: 'smooth' })}>
            Explorar la verdad
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('libros')?.scrollIntoView({ behavior: 'smooth' })}>
            Leer los mini-libros
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce cursor-pointer text-[#00f2ff]/50" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
