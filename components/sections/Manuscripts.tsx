
import React from 'react';
import { BOOKS } from '../../constants';
import { Button } from '../ui/Button';
import { FileText, Download, ShieldCheck, User } from 'lucide-react';

export const Manuscripts: React.FC = () => {
  const handleDownload = (title: string) => {
    // Simulación de descarga funcional
    alert(`Preparando archivo: "${title}.pdf"\n\nDescifrando metadatos de Alejandro Rincón Calderón...`);
  };

  return (
    <section id="manuscritos" className="py-24 px-4 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#00f2ff]/5 border border-[#00f2ff]/20 rounded-full text-[#00f2ff]">
              <FileText size={32} />
            </div>
          </div>
          <h2 className="text-[#00f2ff] text-sm uppercase tracking-[0.4em]">Gran Biblioteca</h2>
          <h3 className="text-4xl md:text-6xl font-mystery">Archivo de Manuscritos</h3>
          <p className="text-zinc-500 max-w-2xl mx-auto font-light">
            Textos fundamentales recuperados para el despertar de la conciencia. 
            Investigaciones exclusivas de Alejandro Rincón Calderón disponibles para descarga en formato PDF.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {BOOKS.map((book) => (
            <div key={book.id} className="group relative flex flex-col bg-zinc-900/30 border border-zinc-800 p-8 rounded-sm hover:border-[#00f2ff]/30 transition-all duration-500">
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-zinc-950 border border-[#00f2ff]/40 text-[#00f2ff] text-[10px] uppercase font-bold tracking-widest z-10">
                {book.tag}
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-48 aspect-[2/3] relative flex-shrink-0 shadow-2xl overflow-hidden border border-zinc-700">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="flex-1 space-y-4">
                  <h4 className="text-3xl font-mystery text-white group-hover:text-[#00f2ff] transition-colors">{book.title}</h4>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs italic">
                    <User size={14} /> {book.subtitle}
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {book.description}
                  </p>
                  
                  <div className="pt-6">
                    <Button 
                      variant="outline" 
                      className="w-full md:w-auto"
                      onClick={() => handleDownload(book.title)}
                    >
                      <Download size={16} className="mr-2" /> Descargar PDF
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Verificado</span>
                <span>Alejandro R.C.</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 relative overflow-hidden text-center bg-gradient-to-b from-zinc-900/50 to-transparent border-t border-zinc-800">
           <div className="max-w-3xl mx-auto space-y-8">
             <h4 className="text-2xl font-mystery italic text-zinc-300">
               "La verdadera sabiduría no se encuentra solo en el dato frío, sino en la unión de la razón y la espiritualidad."
             </h4>
             <p className="text-zinc-500 text-sm">
               Cada manuscrito es una pieza del rompecabezas. No aceptes nada por sentado, léelos con una mirada crítica y un corazón abierto.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};
