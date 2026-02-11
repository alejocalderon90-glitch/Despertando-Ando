
import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Saga } from './components/sections/Saga';
import { ExpeditionVideos } from './components/sections/ExpeditionVideos';
import { Manuscripts } from './components/sections/Manuscripts';
import { Reflections } from './components/sections/Reflections';
import { Oracle } from './components/sections/Oracle';
import { Community } from './components/sections/Community';
import { Footer } from './components/layout/Footer';
import { Eye, Shield, Cpu, Globe } from 'lucide-react';

const AboutFeature: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="p-8 glass-card rounded-lg border-zinc-800 hover:border-[#d4af37]/30 transition-all duration-500">
    <div className="text-[#d4af37] mb-4">{icon}</div>
    <h4 className="text-xl font-mystery mb-3">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{text}</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      
      <main>
        <Hero />

        {/* What is Despertando Ando */}
        <section id="about" className="py-24 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-[#d4af37] text-sm uppercase tracking-widest">El Manifiesto</h2>
                <h3 className="text-4xl md:text-6xl font-mystery">Un portal diseñado para <br/>hackear tu percepción.</h3>
                <p className="text-zinc-400 text-xl font-light leading-relaxed">
                  No somos solo una web de misterio. Somos un laboratorio de conciencia. 
                  En <strong>Despertando Ando</strong>, unimos la narrativa épica de la saga de Alejandro 
                  con herramientas prácticas de hacking mental para aquellos que sienten que este 
                  mundo es mucho más de lo que nos han contado.
                </p>
              </div>
              <div className="hidden lg:block">
                 <div className="w-full aspect-square border border-[#d4af37]/20 rounded-full flex items-center justify-center relative">
                    <div className="w-3/4 h-3/4 border border-[#1e3a8a]/40 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                      <div className="w-4 h-4 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <Eye className="absolute text-[#d4af37]/50" size={48} />
                 </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AboutFeature 
                icon={<Globe size={32} />} 
                title="Geografía Oculta" 
                text="Descubre lo que la Antártida y otros puntos ciegos del mapa esconden tras los muros de hielo." 
              />
              <AboutFeature 
                icon={<Cpu size={32} />} 
                title="Soberanía Digital" 
                text="Usa la IA y la tecnología como herramientas de liberación, no de control social." 
              />
              <AboutFeature 
                icon={<Shield size={32} />} 
                title="Inmunidad de Conciencia" 
                text="Protege tu frecuencia vibratoria de las interferencias de la matrix y el sistema." 
              />
              <AboutFeature 
                icon={<Eye size={32} />} 
                title="Visión Remota" 
                text="Expande tus capacidades cognitivas a través de nuestros mini-libros de entrenamiento." 
              />
            </div>
          </div>
        </section>

        <Saga />
        <ExpeditionVideos />
        <Manuscripts />
        <Oracle />
        <Reflections />
        <Community />
      </main>

      <Footer />
    </div>
  );
}

export default App;
