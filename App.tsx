
import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Saga } from './components/sections/Saga';
import { ExpeditionVideos } from './components/sections/ExpeditionVideos';
import { Manuscripts } from './components/sections/Manuscripts';
import { Reflections } from './components/sections/Reflections';
import { Oracle } from './components/sections/Oracle';
import { VoiceCall } from './components/chat/VoiceCall';
import { Community } from './components/sections/Community';
import { Footer } from './components/layout/Footer';
import { ChatAgent } from './components/chat/ChatAgent';
import { Eye, Shield, Cpu, Globe } from 'lucide-react';

const AboutFeature: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="p-8 glass-card rounded-lg border-zinc-800 hover:border-[#00f2ff]/30 transition-all duration-500 reveal">
    <div className="text-[#00f2ff] mb-4">{icon}</div>
    <h4 className="text-xl font-mystery mb-3">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{text}</p>
  </div>
);

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedY = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5;
      }

      update() {
        this.y += this.speedY;

        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(0, 242, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Subtle trail
        ctx.fillStyle = `rgba(0, 242, 255, ${this.opacity * 0.3})`;
        ctx.fillRect(this.x - 0.5, this.y - 15, 1, 15);
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none opacity-30" />;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => {
      setAccessGranted(true);
      setTimeout(() => setLoading(false), 1000); // Allow fade out
    }, 2500);

    // Custom cursor logic
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setDotPos({ x: e.clientX, y: e.clientY }), 50);
    };

    // Scroll reveal logic
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#00f2ff] selection:text-black">
      {/* Loading Screen */}
      <div className={`loading-screen ${accessGranted ? 'hidden' : ''}`}>
        <div className="w-24 h-24 border-2 border-[#00f2ff]/20 border-t-[#00f2ff] rounded-full animate-spin shadow-[0_0_20px_rgba(0,242,255,0.3)]"></div>
        <div className="loading-text">Iniciando sistema...</div>
        <div className="mt-4 text-[#00f2ff]/40 font-mono text-[10px] uppercase tracking-widest animate-pulse">
          Desencriptando realidad paralela...
        </div>
      </div>

      {/* Main Content - Hidden until access granted */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Custom Cursor */}
        <div 
          className="custom-cursor hidden md:block" 
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, transform: 'translate(-50%, -50%)' }}
        ></div>
        <div 
          className="custom-cursor-dot hidden md:block" 
          style={{ left: `${dotPos.x}px`, top: `${dotPos.y}px`, transform: 'translate(-50%, -50%)' }}
        ></div>

        <ParticleBackground />
        <Navbar />
        
        <main>
          <Hero />

          {/* What is Despertando Ando */}
          <section id="about" className="py-24 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 items-center mb-20 reveal">
                <div className="lg:col-span-2 space-y-6">
                  <h2 className="text-[#00f2ff] text-sm uppercase tracking-widest">El Manifiesto</h2>
                  <h3 className="text-4xl md:text-6xl font-mystery">Un portal diseñado para <br/>hackear tu percepción.</h3>
                  <p className="text-zinc-400 text-xl font-light leading-relaxed">
                    No somos solo una web de misterio. Somos un laboratorio de conciencia. 
                    En <strong>Despertando Ando</strong>, unimos la narrativa épica de la saga de Alejandro 
                    con herramientas prácticas de hacking mental para aquellos que sienten que este 
                    mundo es mucho más de lo que nos han contado.
                  </p>
                </div>
                <div className="hidden lg:block">
                   <div className="w-full aspect-square border border-[#00f2ff]/20 rounded-full flex items-center justify-center relative">
                      <div className="w-3/4 h-3/4 border border-[#00f2ff]/40 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                        <div className="w-4 h-4 bg-[#00f2ff] rounded-full"></div>
                      </div>
                      <Eye className="absolute text-[#00f2ff]/50" size={48} />
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
          <VoiceCall />
          <Reflections />
          <Community />
        </main>

        <ChatAgent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
