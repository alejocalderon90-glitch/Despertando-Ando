
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';
import { Menu, X, Eye, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <div className="relative flex items-center justify-center">
            <Cpu className="text-[#00f2ff]/30 animate-pulse absolute" size={36} />
            <Eye className="text-[#00f2ff] group-hover:scale-110 transition-transform duration-500 z-10" size={24} />
          </div>
          <span className="text-xl font-mystery tracking-tighter">DESPERTANDO <span className="text-[#00f2ff]">ANDO</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-[#00f2ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 border border-[#00f2ff] text-[#00f2ff] text-xs uppercase tracking-widest hover:bg-[#00f2ff] hover:text-black transition-all">
            Únete
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#00f2ff]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-mystery text-zinc-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-8 px-12 py-4 bg-[#00f2ff] text-black font-bold uppercase tracking-widest">
            Despertar Ahora
          </button>
        </div>
      </div>
    </nav>
  );
};
