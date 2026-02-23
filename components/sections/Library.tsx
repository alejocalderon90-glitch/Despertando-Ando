
import React from 'react';
import { BOOKS } from '../../constants';
import { Button } from '../ui/Button';
import { Download, Lock } from 'lucide-react';

export const Library: React.FC = () => {
  return (
    <section id="libros" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#00f2ff] text-sm uppercase tracking-widest">Biblioteca Digital</h2>
          <h3 className="text-4xl md:text-5xl font-mystery">Herramientas de Despertar</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Mini-libros diseñados para ser catalizadores. No son solo lectura, son transmisiones de conciencia para el buscador moderno.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {BOOKS.map((book) => (
            <div key={book.id} className="group relative flex flex-col items-center">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-2xl mb-6">
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <span className="bg-[#00f2ff] text-black text-[10px] font-bold px-3 py-1 rounded-full mb-4">
                    {book.tag}
                  </span>
                  <p className="text-sm text-zinc-200 mb-6">{book.description}</p>
                  <Button variant="primary" size="sm" className="w-full">
                    <Download size={16} className="mr-2" /> Descargar
                  </Button>
                </div>
                <div className="absolute top-4 right-4 text-[#00f2ff]">
                  <Lock size={20} className="drop-shadow-lg" />
                </div>
              </div>
              <h4 className="text-2xl font-mystery text-[#00f2ff] mb-1">{book.title}</h4>
              <p className="text-zinc-500 text-sm">{book.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 glass-card rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-[#00f2ff]/20">
          <div className="space-y-2">
            <h4 className="text-2xl font-mystery">¿Listo para el siguiente nivel?</h4>
            <p className="text-zinc-400">Accede a la colección completa y recibe actualizaciones exclusivas.</p>
          </div>
          <Button variant="outline" size="lg">Acceder a los mini-libros</Button>
        </div>
      </div>
    </section>
  );
};
