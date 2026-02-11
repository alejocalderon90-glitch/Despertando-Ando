
import React, { useState } from 'react';
import { EXPEDITION_VIDEOS, EXPEDITION_IMAGES } from '../../constants';
import { Video, Disc, Activity, Image as ImageIcon, X, ArrowLeft, Camera, Shield } from 'lucide-react';
import { Button } from '../ui/Button';

export const ExpeditionVideos: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section id="expedicion" className="py-24 px-4 bg-black relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-[#d4af37] text-sm uppercase tracking-[0.4em] flex items-center justify-center md:justify-start gap-2">
              <Activity size={16} className="animate-pulse" /> Material Clasificado
            </h2>
            <h3 className="text-4xl md:text-6xl font-mystery italic">Videos de la Expedición</h3>
            <p className="text-zinc-500 max-w-xl font-light">
              Registros visuales obtenidos durante las incursiones más allá del paralelo 60. 
              Advertencia: Las imágenes pueden contener distorsiones de realidad.
            </p>
          </div>
          
          <div className="flex gap-4">
             <Button 
                variant="outline" 
                size="md" 
                className="gap-2"
                onClick={() => setShowGallery(true)}
             >
                <ImageIcon size={18} /> Ver Galería de Evidencias
             </Button>
             <div className="hidden md:flex p-4 glass-card rounded-full border-[#d4af37]/20">
                <Disc className="text-[#d4af37] animate-spin-slow" size={32} />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {EXPEDITION_VIDEOS.map((vid) => (
            <div key={vid.id} className="lg:col-span-8 group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37]/20 to-transparent blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative glass-card rounded-xl overflow-hidden border border-[#d4af37]/10 p-2 shadow-2xl">
                <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
                  <video 
                    className="w-full h-full object-contain"
                    controls
                    poster="https://picsum.photos/seed/expedition-poster/1280/720?grayscale"
                  >
                    <source src={vid.url} type="video/mp4" />
                    Tu navegador no soporta el formato de video.
                  </video>
                  {/* Overlay aesthetic elements */}
                  <div className="absolute top-4 left-4 pointer-events-none text-[10px] text-[#d4af37]/40 font-mono flex flex-col gap-1 uppercase">
                    <span>Rec_State: Active</span>
                    <span>Enc: Supraconciencia_V2</span>
                    <span>Lat: 90.0000° S</span>
                  </div>
                  <div className="absolute bottom-4 right-4 pointer-events-none">
                    <Video className="text-[#d4af37]/20" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 glass-card rounded-xl border-[#1e3a8a]/20 h-full flex flex-col justify-center">
              <h4 className="text-[#d4af37] font-mystery text-2xl mb-4">Bitácora de Hallazgo</h4>
              <p className="text-zinc-400 text-sm leading-relaxed italic mb-6">
                "Lo que ves en este video no es una simulación. Alejandro logró capturar el momento exacto en que la frecuencia del muro de hielo se estabiliza. 
                Presta atención a las sombras; no pertenecen a nuestro espectro visible."
              </p>
              <div className="space-y-4 pt-6 border-t border-zinc-800">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-500">
                  <span>Archivo:</span>
                  <span className="text-zinc-300">Exp_001_Antarctica.mp4</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-500">
                  <span>Autorización:</span>
                  <span className="text-[#d4af37]">Nivel 7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Gallery Overlay */}
      {showGallery && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl animate-in fade-in duration-500 flex flex-col overflow-y-auto">
          <div className="sticky top-0 p-6 flex items-center justify-between border-b border-zinc-900 bg-black/50 z-10">
            <div className="flex items-center gap-4">
               <button 
                onClick={() => setShowGallery(false)}
                className="p-2 hover:bg-zinc-800 rounded-full text-[#d4af37] transition-colors"
               >
                 <ArrowLeft size={24} />
               </button>
               <div>
                 <h4 className="text-xl font-mystery text-white uppercase tracking-wider">Galería de Evidencias</h4>
                 <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">Expedición Alejandro R.C. | Sector 60-90S</p>
               </div>
            </div>
            <button 
              onClick={() => setShowGallery(false)}
              className="p-2 hover:bg-zinc-800 rounded-full text-zinc-500 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-10 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {EXPEDITION_IMAGES.map((img, idx) => (
                <div key={idx} className="group relative bg-zinc-900 border border-zinc-800 p-4 rounded-sm shadow-2xl hover:border-[#d4af37]/40 transition-all duration-500">
                  <div className="absolute top-6 left-6 z-10">
                     <Camera size={16} className="text-[#d4af37]/30" />
                  </div>
                  <div className="aspect-square overflow-hidden bg-black mb-4 relative">
                    <img 
                      src={img} 
                      alt={`Evidencia ${idx + 1}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 border-[10px] border-zinc-900 pointer-events-none"></div>
                  </div>
                  <div className="flex justify-between items-end border-t border-zinc-800 pt-4">
                    <div className="space-y-1">
                      <span className="block text-[10px] text-zinc-600 font-mono uppercase">Evidence_File: 00{idx + 1}</span>
                      <span className="block text-[8px] text-[#d4af37]/50 font-mono">HASH: 77a28b{idx}ef...</span>
                    </div>
                    <Shield size={14} className="text-zinc-700" />
                  </div>
                </div>
              ))}
              
              {/* Fake empty slot for aesthetic */}
              <div className="border border-zinc-800 border-dashed rounded-sm flex flex-col items-center justify-center p-10 text-zinc-700 gap-4 opacity-30">
                 <div className="w-12 h-12 border border-current rounded-full flex items-center justify-center">?</div>
                 <span className="text-[10px] uppercase tracking-widest font-mono">Missing_Data</span>
              </div>
            </div>
          </div>

          <div className="mt-auto p-12 text-center text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-mono">
            End of records | Authorized access only | Despertando Ando 2024
          </div>
        </div>
      )}
      
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
