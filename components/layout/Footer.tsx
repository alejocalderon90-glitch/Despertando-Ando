
import React from 'react';
import { Eye, Twitter, Instagram, Github, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <Cpu className="text-[#00f2ff]/30 absolute" size={28} />
              <Eye className="text-[#00f2ff] z-10" size={18} />
            </div>
            <span className="text-xl font-mystery tracking-tighter">DESPERTANDO <span className="text-[#00f2ff]">ANDO</span></span>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm font-light">
            Un proyecto dedicado a la exploración de la conciencia humana, los misterios de la historia oculta y el futuro de nuestra especie en un world tecnológico.
          </p>
          <div className="flex gap-4">
            <Twitter className="text-zinc-500 hover:text-[#00f2ff] cursor-pointer" size={20} />
            <Instagram className="text-zinc-500 hover:text-[#00f2ff] cursor-pointer" size={20} />
            <Github className="text-zinc-500 hover:text-[#00f2ff] cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h5 className="text-[#00f2ff] text-xs font-bold uppercase mb-6 tracking-widest">Contenido</h5>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li className="hover:text-white cursor-pointer transition-colors">La Saga</li>
            <li className="hover:text-white cursor-pointer transition-colors">Biblioteca</li>
            <li className="hover:text-white cursor-pointer transition-colors">Micro-ensayos</li>
            <li className="hover:text-white cursor-pointer transition-colors">Oráculo AI</li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#00f2ff] text-xs font-bold uppercase mb-6 tracking-widest">Portal</h5>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li className="hover:text-white cursor-pointer transition-colors">Sobre Nosotros</li>
            <li className="hover:text-white cursor-pointer transition-colors">Privacidad de Conciencia</li>
            <li className="hover:text-white cursor-pointer transition-colors">Términos del Sistema</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contacto</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} Despertando Ando. Fuera de la Matrix desde 2024.
        </p>
        <p className="text-zinc-600 text-xs italic">
          "El conocimiento es libertad. La duda es el primer paso."
        </p>
      </div>
    </footer>
  );
};
