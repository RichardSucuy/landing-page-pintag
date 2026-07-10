"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Dumbbell, ShoppingBag, Palette, MapPin, Sparkles, Navigation, Award } from "lucide-react";

export default function InteractiveMap() {
  const [selectedPin, setSelectedPin] = useState<string | null>("cafe");

  const landmarks = [
    {
      id: "cafe",
      name: "Café Central",
      category: "Cafetería Gourmet",
      icon: Coffee,
      x: 180,
      y: 160,
      distance: "A 10m de ti",
      offer: "2x1 en toda la cafetería",
      howToClaim: "Abre la WebAR frente a la entrada. Un pin flotante en 3D aparecerá para validar tu cupón en caja.",
      detail: "Café de especialidad oaxaqueña y postres artesanales en pleno centro urbano."
    },
    {
      id: "gym",
      name: "Machala Fit Center",
      category: "Gimnasio & Salud",
      icon: Dumbbell,
      x: 420,
      y: 190,
      distance: "A 350m de ti",
      offer: "Pase diario gratis + Proteína",
      howToClaim: "Abre la cámara de PINTAG al llegar, y pincha el cofre AR flotando sobre la entrada.",
      detail: "Equipos de última generación y clases grupales de spinning y funcional."
    },
    {
      id: "boutique",
      name: "Boutique Estilo Real",
      category: "Moda & Calzado",
      icon: ShoppingBag,
      x: 290,
      y: 280,
      distance: "A 150m de ti",
      offer: "20% OFF en la colección nueva",
      howToClaim: "Apunta con la WebAR al maniquí principal del escaparate exterior. Verás ropa digital flotante y el cupón de descuento.",
      detail: "Ropa urbana premium y calzado importado con las últimas tendencias de temporada."
    },
    {
      id: "art",
      name: "ArtFest Machala 2026",
      category: "Evento Cultural",
      icon: Palette,
      x: 520,
      y: 320,
      distance: "A 600m de ti",
      offer: "Filtro 3D Exclusivo + Pin de Colección",
      howToClaim: "Usa WebAR frente al mural urbano gigante de la plaza. Captura el graffiti 3D interactivo y desbloquea el coleccionable.",
      detail: "Festival de arte callejero ecuatoriano, música en vivo y exposiciones digitales en vivo."
    }
  ];

  return (
    <section id="mapa-drops" className="py-20 bg-white relative scroll-mt-24 border-t border-b border-pintag-teal/10">
      {/* Light glow highlights */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pintag-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-outfit text-xs font-bold tracking-wider text-[#2A7A78] uppercase bg-[#2A7A78]/10 px-3.5 py-1 rounded-full">
            El Mapa Vivo de Pintag Drops
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2A7A78] mt-4 mb-4">
            Tu ciudad es tu <span className="text-pintag-orange font-caveat font-medium glow-text">lienzo digital.</span>
          </h2>
          <p className="font-jakarta text-base sm:text-lg text-[#2A7A78]/80 font-medium">
            Mira el mapa del piloto cerrado en **Machala**. Camina por las calles principales y descubre los pines de WebAR activos (**Pintag Drops**) que te otorgan promociones e interacciones exclusivas.
          </p>
        </div>

        {/* Map Container and Interactive Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Map Graphic */}
          <div className="lg:col-span-8 bg-white border border-pintag-teal/10 rounded-2xl p-4 sm:p-6 shadow-md relative overflow-hidden flex flex-col justify-center min-h-[400px]">
            {/* Map Header Indicators */}
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center space-x-1.5 text-xs text-[#2A7A78] font-bold font-jakarta">
                <Navigation className="w-4 h-4 text-pintag-orange animate-spin" style={{ animationDuration: "6s" }} />
                <span>Geolocalización: Machala Centro</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-pintag-orange bg-pintag-orange/10 px-2 py-0.5 rounded-full border border-pintag-orange/20">
                4 pines activos
              </span>
            </div>

            {/* The Stylized SVG Vector Map in Cream Background with Orange Drops */}
            <div className="relative w-full aspect-[4/3] bg-[#FFF7E6] rounded-xl border border-pintag-teal/10 overflow-hidden shadow-inner">
              <svg className="w-full h-full" viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Green Parks */}
                <rect x="50" y="80" width="180" height="120" rx="16" fill="#E8F5E9" stroke="#C8E6C9" strokeWidth="1" />
                <rect x="450" y="240" width="200" height="150" rx="16" fill="#E8F5E9" stroke="#C8E6C9" strokeWidth="1" />
                
                {/* Blue Water Body / Shoreline representation (Estuary) */}
                <path d="M0 0C150 20 280 80 320 0H700V50H0V0Z" fill="#E3F2FD" stroke="#BBDEFB" strokeWidth="1" />

                {/* Stylized Grid Roads - Base (Grey Borders) */}
                <line x1="80" y1="0" x2="80" y2="500" stroke="#E2E8F0" strokeWidth="16" />
                <line x1="240" y1="0" x2="240" y2="500" stroke="#E2E8F0" strokeWidth="16" />
                <line x1="380" y1="0" x2="380" y2="500" stroke="#E2E8F0" strokeWidth="16" />
                <line x1="560" y1="0" x2="560" y2="500" stroke="#E2E8F0" strokeWidth="16" />
                <line x1="0" y1="120" x2="700" y2="120" stroke="#E2E8F0" strokeWidth="16" />
                <line x1="0" y1="240" x2="700" y2="240" stroke="#E2E8F0" strokeWidth="16" />
                <line x1="0" y1="360" x2="700" y2="360" stroke="#E2E8F0" strokeWidth="16" />
                <path d="M0 450L700 200" stroke="#E2E8F0" strokeWidth="10" />

                {/* Stylized Grid Roads - Surface (White Roads) */}
                <line x1="80" y1="0" x2="80" y2="500" stroke="white" strokeWidth="12" />
                <line x1="240" y1="0" x2="240" y2="500" stroke="white" strokeWidth="12" />
                <line x1="380" y1="0" x2="380" y2="500" stroke="white" strokeWidth="12" />
                <line x1="560" y1="0" x2="560" y2="500" stroke="white" strokeWidth="12" />
                <line x1="0" y1="120" x2="700" y2="120" stroke="white" strokeWidth="12" />
                <line x1="0" y1="240" x2="700" y2="240" stroke="white" strokeWidth="12" />
                <line x1="0" y1="360" x2="700" y2="360" stroke="white" strokeWidth="12" />
                <path d="M0 450L700 200" stroke="white" strokeWidth="6" />

                {/* Text Labels for streets */}
                <text x="94" y="440" fill="#94A3B8" opacity="0.8" fontSize="10" fontWeight="bold" fontFamily="monospace" transform="rotate(90,94,440)">AV. 25 DE JUNIO</text>
                <text x="254" y="80" fill="#94A3B8" opacity="0.8" fontSize="10" fontWeight="bold" fontFamily="monospace" transform="rotate(90,254,80)">CALLE BOLIVAR</text>
                <text x="350" y="234" fill="#94A3B8" opacity="0.8" fontSize="10" fontWeight="bold" fontFamily="monospace">CALLE ROCAFUERTE</text>

                {/* User pulsing location dot on map */}
                <circle cx="240" cy="240" r="22" fill="#0284C7" opacity="0.1" className="animate-pulse" />
                <circle cx="240" cy="240" r="8" fill="#0284C7" opacity="0.25" />
                <circle cx="240" cy="240" r="4" fill="white" stroke="#0284C7" strokeWidth="2" />
              </svg>

              {/* Pins Placed On Map (HTML Overlay absolute markers - Orange Drops) */}
              {landmarks.map((landmark) => {
                const IconComponent = landmark.icon;
                const isSelected = selectedPin === landmark.id;

                const leftPercent = `${(landmark.x / 700) * 100}%`;
                const topPercent = `${(landmark.y / 500) * 100}%`;

                return (
                  <div
                    key={landmark.id}
                    className="absolute z-20 cursor-pointer"
                    style={{ left: leftPercent, top: topPercent, transform: "translate(-50%, -50%)" }}
                    onClick={() => setSelectedPin(landmark.id)}
                  >
                    {/* Ring glow animations */}
                    <div className="absolute -inset-4 bg-pintag-orange/15 rounded-full pointer-events-none animate-pulse" />
                    
                    {isSelected && (
                      <div className="absolute -inset-6 bg-pintag-orange/25 rounded-full pointer-events-none animate-pulse-ring" />
                    )}

                    {/* Pin Icon Bubble (Orange Drop) */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`relative flex items-center justify-center w-11 h-11 rounded-full border-2 border-white shadow-lg bg-pintag-orange text-white hover:scale-110 transition-all duration-200`}
                    >
                      <IconComponent className="w-5 h-5" />
                      
                      {/* Anchor arrow */}
                      <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-pintag-orange" />
                    </motion.div>

                    {/* Small pulsing dot at the very tip anchor of the pin */}
                    <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pintag-orange rounded-full border border-white" />
                  </div>
                );
              })}
            </div>
            
            <p className="text-[10px] text-center text-[#2A7A78]/70 font-bold font-jakarta mt-3">
              📍 El mapa simula la zona del centro de Machala. Haz clic en cada Pin Naranja para revelar los Pintag Drops.
            </p>
          </div>

          {/* Right Side: POI Detail Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {selectedPin ? (
                <motion.div
                  key={selectedPin}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFF7E6]/40 border border-pintag-teal/15 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-outfit font-bold uppercase tracking-wider text-pintag-orange bg-pintag-orange/10 px-2.5 py-0.5 rounded-full border border-pintag-orange/20">
                          {landmarks.find(l => l.id === selectedPin)?.category}
                        </span>
                        <h3 className="font-outfit text-2xl font-extrabold text-[#2A7A78] tracking-tight mt-2.5 leading-none">
                          {landmarks.find(l => l.id === selectedPin)?.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#2A7A78]/60 bg-white border border-[#2A7A78]/5 px-2 py-0.5 rounded-full flex items-center shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-pintag-orange mr-1" />
                        {landmarks.find(l => l.id === selectedPin)?.distance}
                      </span>
                    </div>

                    <p className="font-jakarta text-sm leading-relaxed text-[#2A7A78]/80 font-medium">
                      {landmarks.find(l => l.id === selectedPin)?.detail}
                    </p>

                    {/* Offer box */}
                    <div className="bg-pintag-orange/5 border border-pintag-orange/25 rounded-xl p-4 space-y-2">
                      <span className="flex items-center text-[10px] uppercase font-bold text-pintag-orange font-mono tracking-wider gap-1">
                        <Award className="w-4 h-4 text-pintag-orange" />
                        Recompensa Drop AR
                      </span>
                      <p className="font-outfit text-base font-extrabold text-[#2A7A78] tracking-tight leading-tight">
                        {landmarks.find(l => l.id === selectedPin)?.offer}
                      </p>
                    </div>

                    {/* How to claim */}
                    <div className="space-y-2">
                      <h4 className="font-outfit text-xs font-bold text-[#2A7A78] tracking-wider uppercase">
                        ¿Cómo se reclama?
                      </h4>
                      <p className="font-jakarta text-xs text-[#2A7A78]/85 leading-relaxed font-semibold">
                        {landmarks.find(l => l.id === selectedPin)?.howToClaim}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-pintag-teal/10">
                    <a
                      href="#descargar"
                      className="w-full py-3.5 rounded-xl bg-pintag-orange hover:bg-pintag-orange/95 text-white font-outfit font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center space-x-2 animate-bounce-subtle"
                    >
                      <Sparkles className="w-4.5 h-4.5 text-white animate-pulse" />
                      <span>Quiero este Drop</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white/50 border border-dashed border-pintag-teal/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full text-pintag-teal/70">
                  <Navigation className="w-12 h-12 text-pintag-teal/40 mb-4 animate-bounce" />
                  <h3 className="font-outfit text-lg font-bold tracking-tight mb-2">Selecciona un Pin</h3>
                  <p className="font-jakarta text-xs max-w-[240px] leading-relaxed">
                    Haz clic en cualquiera de las burbujas naranjas de drops en el mapa de Machala para ver la recompensa WebAR.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
