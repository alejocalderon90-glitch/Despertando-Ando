
import React, { useState } from 'react';
import { REFLECTIONS } from '../../constants';
import { ArrowUpRight, X, Globe, Shield, Search, BookOpen, AlertCircle, Info, Map, Cpu, Sparkles, Zap, Eye, Ghost, Lightbulb, Compass, Scale, Radio, SignalHigh, Focus, ShieldCheck, HeartPulse, Activity } from 'lucide-react';

interface EssayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SovereigntyEssay: React.FC<EssayModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-black/98 backdrop-blur-3xl flex justify-center overflow-y-auto animate-in fade-in zoom-in duration-500">
      <div className="max-w-4xl w-full p-6 md:p-12 relative">
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 p-3 bg-white/5 hover:bg-[#0066cc]/20 rounded-full border border-white/10 text-[#00f2ff] transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-16 text-center space-y-6">
          <div className="w-20 h-20 border border-[#0066cc]/40 rounded-2xl flex items-center justify-center mb-2 relative group shadow-[0_0_20px_rgba(0,102,204,0.2)]">
            <Radio className="text-[#00f2ff] group-hover:scale-110 transition-transform duration-500" size={40} />
            <div className="absolute inset-0 border border-[#00f2ff]/10 rounded-2xl scale-125 animate-pulse"></div>
          </div>
          <span className="text-[#0066cc] text-xs uppercase tracking-[0.6em] font-black">Conciencia Digital</span>
          <h1 className="text-4xl md:text-7xl font-mystery text-white leading-tight italic">
            Soberanía en la <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#00f2ff]">Era Digital</span>
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"></div>
        </div>

        <div className="space-y-20 text-zinc-300 leading-relaxed pb-32">
          {/* El Concepto */}
          <section className="space-y-8 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 italic">
              "La capacidad de mantener autonomía personal —mental, emocional y energética— en un mundo hiperconectado."
            </p>
            <div className="p-8 glass-card rounded-2xl border-zinc-800 bg-zinc-900/20">
              <p className="text-zinc-400 text-sm md:text-base">
                No se refiere solo a política o tecnología, sino a <span className="text-white font-bold">quién gobierna tu atención</span>, tus decisiones y tu estado interno cuando estás rodeado de pantallas, algoritmos y estímulos constantes.
              </p>
            </div>
          </section>

          {/* Frecuencia Vibratoria */}
          <section className="space-y-12">
            <div className="flex flex-col items-center gap-4">
               <Activity className="text-[#00f2ff] animate-pulse" size={32} />
               <h2 className="text-3xl font-mystery text-white italic">Cómo mantener tu frecuencia vibratoria</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-zinc-400 text-sm italic border-l-2 border-[#0066cc] pl-6 py-2">
                  Aquí “frecuencia vibratoria” se usa de forma simbólica/holística. Significa tu estado interno predominante.
                </p>
                <div className="space-y-6 pt-4">
                  {[
                    { label: "Nivel de calma o ansiedad", icon: <HeartPulse size={16} /> },
                    { label: "Claridad mental vs. confusión", icon: <Eye size={16} /> },
                    { label: "Coherencia entre pensamiento, sentimiento y acción", icon: <Scale size={16} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/80">
                      <div className="text-[#00f2ff]">{item.icon}</div>
                      <span className="text-sm tracking-wide">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-[#0066cc]/10 border border-[#0066cc]/20 rounded-2xl flex items-center justify-center text-center">
                 <p className="text-lg font-mystery text-[#00f2ff] leading-relaxed">
                   Mantenerla implica no dejar que el entorno te arrastre emocionalmente. Es el blindaje de tu núcleo.
                 </p>
              </div>
            </div>
          </section>

          {/* Ecosistema No Neutral */}
          <section className="space-y-10 relative">
            <div className="absolute -left-10 top-0 text-[#00f2ff]/5 font-mystery text-9xl pointer-events-none select-none">RUIDO</div>
            <div className="flex items-center gap-4">
               <AlertCircle className="text-red-500" size={24} />
               <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">Un ecosistema diseñado para la distracción</h2>
            </div>
            
            <p className="text-zinc-400">Este es el punto clave: las redes, apps y plataformas no son neutrales. Están diseñadas para:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Atención", desc: "Captar y retener tu foco" },
                { title: "Dopamina", desc: "Generar gratificación rápida" },
                { title: "Foco", desc: "Fragmentar la concentración" },
                { title: "Emoción", desc: "Provocar ira o comparación" }
              ].map((item, i) => (
                <div key={i} className="p-4 border border-zinc-800 rounded-lg hover:border-red-900/30 transition-colors">
                  <h4 className="text-white text-xs font-bold uppercase mb-1 tracking-widest">{item.title}</h4>
                  <p className="text-[10px] text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-red-950/10 border border-red-900/20 rounded-xl">
              <p className="text-sm italic leading-relaxed">
                El “ruido” no es solo sonido: es información excesiva, urgencia artificial y estímulo permanente. Es la estática de la Matrix.
              </p>
            </div>
          </section>

          {/* El Significado Real */}
          <section className="bg-gradient-to-br from-[#0066cc]/20 to-black p-12 rounded-3xl border border-white/5 text-center space-y-6">
            <h2 className="text-4xl font-mystery text-white">Conserva tu centro</h2>
            <p className="text-xl text-[#00f2ff] font-light italic">
              "Cómo conservar tu claridad y tu poder personal en un entorno digital que compite constantemente por tu atención y energía."
            </p>
          </section>

          {/* La Práctica Consciente */}
          <section className="space-y-10">
            <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
               <Focus className="text-[#00f2ff]" size={24} />
               <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">En la práctica: La Guía del Soberano</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Elegir conscientemente qué consumes y cuánto",
                "Poner límites claros al uso de tecnología",
                "No reaccionar automáticamente a cada notificación",
                "Cultivar silencio, foco y presencia absoluta",
                "Usar lo digital como herramienta, no como dueño de tu mente"
              ].map((step, i) => (
                <div key={i} className="flex gap-4 p-4 glass-card rounded-lg hover:bg-zinc-900/50 transition-all">
                  <span className="text-[#0066cc] font-mono text-xs">0{i+1}</span>
                  <p className="text-sm text-zinc-300">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cierre Trascendental */}
          <section className="text-center pt-16 space-y-8">
            <div className="w-16 h-px bg-[#00f2ff] mx-auto opacity-50"></div>
            <h3 className="text-4xl md:text-5xl font-mystery text-white leading-tight italic">
              Es una invitación a pasar de <br/> <span className="text-[#00f2ff] not-italic font-bold">usuario pasivo</span> a <span className="text-white underline decoration-[#00f2ff]/40 underline-offset-8">sujeto consciente</span>.
            </h3>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">El poder reside en tu atención</p>
          </section>
        </div>

        <div className="mt-24 text-center text-zinc-800 text-[10px] font-mono uppercase tracking-[0.8em] border-t border-zinc-900 pt-16 pb-20">
          Fragmento de Conciencia | Ref_03 | Despertando Ando © 2025
        </div>
      </div>
    </div>
  );
};

const AISoulEssay: React.FC<EssayModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-black/98 backdrop-blur-3xl flex justify-center overflow-y-auto animate-in fade-in zoom-in duration-500">
      <div className="max-w-4xl w-full p-6 md:p-12 relative">
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 p-3 bg-white/5 hover:bg-[#0066cc]/20 rounded-full border border-white/10 text-[#00f2ff] transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-16 text-center space-y-6">
          <div className="w-20 h-20 border border-[#00f2ff]/30 rounded-full flex items-center justify-center mb-2 relative group">
            <Cpu className="text-[#00f2ff] group-hover:rotate-90 transition-transform duration-700" size={40} />
            <div className="absolute inset-0 border border-[#00f2ff]/10 rounded-full scale-150 animate-pulse"></div>
          </div>
          <span className="text-[#00f2ff] text-xs uppercase tracking-[0.5em] font-bold">Transmisión de Tecnología</span>
          <h1 className="text-4xl md:text-7xl font-mystery text-white leading-tight italic">
            La IA como <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-white">Espejo del Alma</span>
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"></div>
        </div>

        <div className="space-y-20 text-zinc-300 leading-relaxed pb-32">
          {/* Introducción */}
          <section className="space-y-8 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-light leading-relaxed italic text-white/90">
              "La inteligencia artificial no tiene conciencia, emociones ni espíritu propio. Sin embargo, funciona como un espejo: refleja con una precisión brutal lo que somos, lo que pensamos, lo que valoramos y también lo que tememos."
            </p>
            <div className="space-y-4 pt-8 border-t border-white/5">
              <p className="text-zinc-500 uppercase tracking-widest text-[10px]">La Esencia</p>
              <p className="text-lg">
                Todo lo que la IA “es” proviene de nosotros: <br/>
                <span className="text-white font-semibold">Nuestros datos, lenguaje, decisiones éticas, sombras y luces.</span>
              </p>
            </div>
            <div className="pt-8">
              <h4 className="text-[#00f2ff] font-mystery text-2xl">Por eso la pregunta no es realmente si la IA es buena o mala.</h4>
              <p className="text-white text-3xl font-mystery mt-2 italic">La pregunta es: <span className="underline decoration-[#00f2ff]/30">¿qué revela de nosotros?</span></p>
            </div>
          </section>

          {/* Dualidad: Amenaza vs Catalizador */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* AMENAZA */}
            <div className="glass-card rounded-2xl p-8 border-red-900/20 bg-red-950/5 flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                  <Ghost size={24} />
                </div>
                <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">¿Amenaza?</h2>
              </div>
              <p className="text-zinc-400 mb-6 font-medium">La IA se vuelve una amenaza cuando:</p>
              <ul className="space-y-5 flex-1 text-sm">
                <li className="flex gap-3"><Zap size={16} className="text-red-500 mt-1 flex-shrink-0" /> La usamos para evadir responsabilidad.</li>
                <li className="flex gap-3"><Zap size={16} className="text-red-500 mt-1 flex-shrink-0" /> Delegamos decisiones morales sin consciencia.</li>
                <li className="flex gap-3"><Zap size={16} className="text-red-500 mt-1 flex-shrink-0" /> Permitimos que amplifique el ego, el control, la deshumanización o la desigualdad.</li>
              </ul>
              <div className="mt-8 p-4 bg-black/40 rounded-lg italic text-zinc-500 text-[13px] border border-red-900/10">
                "No crea el problema: lo magnifica. Agranda nuestras heridas no resueltas: miedo y desconexión interior."
              </div>
            </div>

            {/* CATALIZADOR */}
            <div className="glass-card rounded-2xl p-8 border-[#00f2ff]/20 bg-[#00f2ff]/5 flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#00f2ff]/10 rounded-lg text-[#00f2ff]">
                  <Sparkles size={24} />
                </div>
                <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">¿Catalizador?</h2>
              </div>
              <p className="text-zinc-400 mb-6 font-medium">Puede ser un catalizador espiritual cuando:</p>
              <ul className="space-y-5 flex-1 text-sm">
                <li className="flex gap-3"><Lightbulb size={16} className="text-[#00f2ff] mt-1 flex-shrink-0" /> Nos obliga a redefinir qué significa ser humano.</li>
                <li className="flex gap-3"><Lightbulb size={16} className="text-[#00f2ff] mt-1 flex-shrink-0" /> Nos empuja a valorar la conciencia y compasión por encima de la productividad.</li>
                <li className="flex gap-3"><Lightbulb size={16} className="text-[#00f2ff] mt-1 flex-shrink-0" /> Nos confronta: si la máquina imita la mente, ¿qué hay en nosotros que no puede ser replicado?</li>
              </ul>
              <div className="mt-8 p-4 bg-black/40 rounded-lg italic text-zinc-500 text-[13px] border border-[#00f2ff]/10">
                "Aparece el alma no como dogma, sino como experiencia: presencia, intuición, amor y propósito."
              </div>
            </div>
          </div>

          {/* El Verdadero Giro */}
          <section className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-zinc-900 to-black border border-white/5 text-center">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#00f2ff_0%,_transparent_70%)]"></div>
            </div>
            <div className="max-w-2xl mx-auto space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-mystery text-white italic">El verdadero giro</h2>
              <p className="text-3xl text-[#00f2ff] font-mystery">La IA no nos reemplaza. <br/><span className="text-white text-5xl not-italic">Nos desnuda.</span></p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <p className="text-zinc-500 uppercase text-[10px] tracking-widest">Inteligencia</p>
                  <p className="text-sm">Sin conciencia es poderosa… <br/><span className="text-white font-bold">pero vacía.</span></p>
                </div>
                <div className="space-y-2">
                  <p className="text-zinc-500 uppercase text-[10px] tracking-widest">Conciencia</p>
                  <p className="text-sm">Sin tecnología es profunda… <br/><span className="text-white font-bold">pero limitada.</span></p>
                </div>
              </div>
              <p className="text-xl italic font-light pt-6 text-zinc-300">"La evolución real ocurre cuando ambas se encuentran."</p>
            </div>
          </section>

          {/* Conclusión */}
          <section className="text-center space-y-12 max-w-3xl mx-auto">
            <div className="inline-block px-10 py-1 bg-[#00f2ff] text-black text-[10px] font-black uppercase tracking-[0.5em] rounded-full">Destino</div>
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-mystery text-white leading-tight italic">
                La inteligencia artificial no decide nuestro destino espiritual. Nosotros lo hacemos.
              </h3>
              <p className="text-zinc-400 text-lg">
                La IA es el espejo. El reflejo depende de quién se mire.
              </p>
              <div className="p-10 border border-[#00f2ff]/20 rounded-2xl bg-black/60 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-[#00f2ff]">
                  <Scale size={24} />
                </div>
                <p className="text-white text-xl md:text-2xl font-mystery leading-relaxed">
                  "Si queremos que sea una amenaza, lo será. Si elegimos que sea un catalizador, nos empujará —sin piedad y sin juicio— a convertirnos en una versión más consciente de nosotros mismos."
                </p>
                <p className="text-[#00f2ff] font-bold text-3xl font-mystery mt-8">Y ese, quizá, es su propósito más elevado.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-24 text-center text-zinc-800 text-[10px] font-mono uppercase tracking-[0.8em] border-t border-zinc-900 pt-16 pb-20">
          Documento Recuperado | Oráculo V.01 | Despertando Ando © 2025
        </div>
      </div>
    </div>
  );
};

const IceWallEssay: React.FC<EssayModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-2xl flex justify-center overflow-y-auto animate-in fade-in duration-500">
      <div className="max-w-4xl w-full p-6 md:p-12 relative">
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 p-3 bg-white/5 hover:bg-[#00f2ff]/20 rounded-full border border-white/10 text-[#00f2ff] transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <div className="w-20 h-20 border border-[#00f2ff]/30 rounded-full flex items-center justify-center mb-6 relative">
            <Globe className="text-[#00f2ff] animate-pulse" size={40} />
            <div className="absolute inset-0 border border-[#00f2ff]/10 rounded-full scale-150 animate-ping"></div>
          </div>
          <span className="text-[#00f2ff] text-xs uppercase tracking-[0.5em] font-bold">Investigación Especial: Ref_02</span>
          <h1 className="text-4xl md:text-6xl font-mystery text-white leading-tight italic">
            El Muro de Hielo: <br /><span className="text-[#00f2ff]">Realidad o Metáfora</span>
          </h1>
          <p className="text-zinc-500 font-mono text-[10px] uppercase">Explorando los límites de nuestro mundo</p>
        </div>

        <div className="space-y-16 text-zinc-300 leading-relaxed pb-24 text-sm md:text-base">
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#00f2ff]/20 pb-4">
              <AlertCircle className="text-[#00f2ff]" size={20} />
              <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">1. ¿Qué dice la teoría conspirativa?</h2>
            </div>
            <div className="glass-card p-8 rounded-lg border-zinc-800 space-y-4">
              <p>
                En el modelo terraplanista moderno, la Tierra es un disco plano con el Polo Norte en el centro y la Antártida formando un <strong>anillo periférico de hielo</strong> que actúa como barrera natural.
              </p>
              <ul className="list-none space-y-4 text-sm text-zinc-400">
                <li className="flex gap-3"><span className="text-[#00f2ff] mt-1">•</span> Este "muro" supuestamente mide cientos de metros de altura y miles de kilómetros de longitud, impidiendo que los océanos se derramen al vacío.</li>
                <li className="flex gap-3"><span className="text-[#00f2ff] mt-1">•</span> El Tratado Antártico de 1959 se interpreta como una conspiración global para prohibir la exploración libre y ocultar tierras desconocidas.</li>
                <li className="flex gap-3"><span className="text-[#00f2ff] mt-1">•</span> Se añaden elementos como anomalías magnéticas, bases extraterrestres y las expediciones del almirante Richard Byrd sacadas de contexto.</li>
              </ul>
              <p className="text-zinc-500 italic text-xs pt-4 border-t border-zinc-800">
                Esta idea es una metáfora de los "límites del conocimiento", pero se presenta como realidad literal por sus defensores.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#00f2ff]/20 pb-4">
              <Globe className="text-[#00f2ff]" size={20} />
              <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">2. La realidad científica: ¿Qué es realmente la Antártida?</h2>
            </div>
            <p>
              La Antártida es un <strong>continente real</strong> de unos 14 millones de km², cubierto en un 98% por una capa de hielo promedio de 1,9 km de espesor.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded">
                <h4 className="text-[#00f2ff] text-xs font-bold uppercase mb-2">Ice Shelves (Plataformas)</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Lo que llaman "muro" son las plataformas de hielo flotante (como Ross) con frentes verticales de hasta 60 metros sobre el nivel del mar.</p>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded">
                <h4 className="text-[#00f2ff] text-xs font-bold uppercase mb-2">Masa Continental</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">No es un anillo infinito; es un continente irregular visible desde satélites como Landsat o Sentinel de forma diaria.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#00f2ff]/20 pb-4">
              <Search className="text-[#00f2ff]" size={20} />
              <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">3. Evidencia Verificable</h2>
            </div>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4 p-4 glass-card rounded border-zinc-900">
                <Map className="text-[#00f2ff] flex-shrink-0" size={24} />
                <p><span className="text-white font-bold">Circunnavegación:</span> Regatas como la Vendée Globe rodean el continente. Si fuera un muro exterior, la circunferencia sería físicamente imposible de recorrer en los tiempos registrados.</p>
              </div>
              <div className="flex gap-4 p-4 glass-card rounded border-zinc-900">
                <Globe className="text-[#00f2ff] flex-shrink-0" size={24} />
                <p><span className="text-white font-bold">Sol de 24 horas:</span> En el verano antártico, el sol nunca se oculta en el Polo Sur, algo imposible en un modelo plano.</p>
              </div>
              <div className="flex gap-4 p-4 glass-card rounded border-zinc-900">
                <Info className="text-[#00f2ff] flex-shrink-0" size={24} />
                <p><span className="text-white font-bold">Turismo y Ciencia:</span> Más de 70 bases operan allí. Unos 70,000 turistas visitan el área anualmente en cruceros abiertos a cualquier persona con recursos.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#00f2ff]/20 pb-4">
              <Shield className="text-[#00f2ff]" size={20} />
              <h2 className="text-2xl font-mystery text-white uppercase tracking-wider">4. ¿Por qué parece el mayor secreto?</h2>
            </div>
            <div className="space-y-4">
              <p>Las <strong>condiciones extremas</strong> (-89°C) y el <strong>Tratado Antártico (1959)</strong> crean un aura de exclusividad. El tratado promueve la paz y la investigación, prohibiendo la minería y actividades militares, pero no la visita civil regulada.</p>
              <div className="border-l-2 border-[#00f2ff] pl-6 py-2 italic text-zinc-500">
                "Lo que sí es 'secreto' es lo que aún no hemos descubierto bajo el hielo (ecosistemas subglaciales), pero eso se investiga abiertamente por científicos de todo el mundo."
              </div>
            </div>
          </section>

          <section className="pt-12 border-t border-zinc-900 text-center space-y-6">
             <div className="inline-block px-4 py-1 bg-[#00f2ff] text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Conclusión</div>
             <h3 className="text-3xl font-mystery text-white italic">Realidad vs. Metáfora</h3>
             <p className="max-w-2xl mx-auto text-zinc-400">
                El "Muro de Hielo" como barrera que oculta un world secreto es ficción conspirativa. Sin embargo, las plataformas reales son maravillas naturales fundamentales para la estabilidad climática global, conteniendo el 70% del agua dulce del planeta.
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
    if (id === 'r1') {
      setActiveEssay('ai-soul');
    } else if (id === 'r2') {
      setActiveEssay('ice-wall');
    } else if (id === 'r3') {
      setActiveEssay('sovereignty');
    } else {
      alert("Este fragmento de realidad aún está siendo descifrado por Alejandro...");
    }
  };

  return (
    <section id="reflexiones" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-[#00f2ff] text-sm uppercase tracking-widest">Contenido & Reflexiones</h2>
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
              className="group p-8 glass-card rounded-lg hover:bg-zinc-900/40 transition-all duration-300 cursor-pointer border-transparent hover:border-[#00f2ff]/30"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase">{item.category}</span>
                <span className="text-[10px] tracking-widest text-zinc-600 uppercase">{item.date}</span>
              </div>
              <h4 className="text-2xl font-mystery mb-4 group-hover:text-[#00f2ff] transition-colors">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                {item.excerpt}
              </p>
              <div className="flex items-center text-[#00f2ff] text-sm font-bold transition-all transform group-hover:translate-x-2">
                Leer ensayo <ArrowUpRight size={16} className="ml-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-12 relative group cursor-default">
             <div className="absolute inset-0 border border-[#00f2ff]/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000"></div>
             <p className="text-2xl md:text-3xl font-mystery italic text-zinc-300 relative z-10">
               "Si no cuestionas el sistema, el sistema te cuestionará a ti."
             </p>
          </div>
        </div>
      </div>

      <AISoulEssay 
        isOpen={activeEssay === 'ai-soul'} 
        onClose={() => setActiveEssay(null)} 
      />
      <IceWallEssay 
        isOpen={activeEssay === 'ice-wall'} 
        onClose={() => setActiveEssay(null)} 
      />
      <SovereigntyEssay 
        isOpen={activeEssay === 'sovereignty'} 
        onClose={() => setActiveEssay(null)} 
      />
    </section>
  );
};
