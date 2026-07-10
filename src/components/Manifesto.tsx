"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Ban, ShieldCheck, Landmark, Car, Timer, ArrowLeft, ArrowRight } from "lucide-react";

export default function Manifesto() {
  const [activeIdx, setActiveIdx] = useState(0);

  const pilares = [
    {
      id: "doom",
      num: "01",
      title: "Adiós al Doomscrolling",
      shortName: "Doomscrolling",
      description: "Eliminamos el feed infinito que te aísla. Aquí no vienes a consumir pasivamente la vida de otros; vienes a descubrir, interactuar y construir momentos orgánicos con quien comparte tu espacio en tiempo real.",
      color: "#EF4444", // Red
      accent: "bg-red-500/10 text-red-600 border-red-500/20",
      icon: Ban,
      image: "/manifesto_doomscrolling.png",
      overlay: "Menos pantallas, más momentos. Sal a la calle en Machala y conecta con lo real."
    },
    {
      id: "zero",
      num: "02",
      title: "Protocolo Zero-Upload",
      shortName: "Zero-Upload",
      description: "La verdad absoluta ocurre in situ. Bloqueamos el acceso a la galería para garantizar que todo lo que veas en PINTAG sea 100% real: sin fotos viejas, sin filtros engañosos y con cero imágenes editadas o creadas por IA.",
      color: "#FF6B00", // Orange
      accent: "bg-pintag-orange/10 text-pintag-orange border-pintag-orange/20",
      icon: ShieldCheck,
      image: "/manifesto_zeroupload.png",
      overlay: "Sin fotos falsas ni filtros de IA. Solo momentos reales capturados en el instante."
    },
    {
      id: "space",
      num: "03",
      title: "Descentralización del Espacio",
      shortName: "Descentralización",
      description: "El contenido le pertenece al lugar, no a un perfil de vanidad. Tu barrio, tu parque favorito y los mejores rincones de la ciudad son los verdaderos protagonistas de una red viva y local.",
      color: "#2A7A78", // Teal
      accent: "bg-pintag-teal/10 text-pintag-teal border-pintag-teal/20",
      icon: Landmark,
      image: "/manifesto_descentralizacion.png",
      overlay: "El mapa le pertenece a tu comunidad. Tu barrio es el verdadero protagonista."
    },
    {
      id: "transit",
      num: "04",
      title: "Modo Tránsito Seguro",
      shortName: "Tránsito Seguro",
      description: "Tu seguridad física en las calles es lo primero. PINTAG detecta automáticamente cuando te desplazas a altas velocidades para pausar las notificaciones y dejarte disfrutar del trayecto sin distracciones.",
      color: "#F59E0B", // Amber
      accent: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      icon: Car,
      image: "/manifesto_transito.png",
      overlay: "Muévete libre y seguro. Tu atención se queda en el camino."
    },
    {
      id: "ephemeral",
      num: "05",
      title: "Pines Efímeros",
      shortName: "Pines Efímeros",
      description: "Nada es para siempre y eso es lo emocionante. Cada recomendación, chat o interacción nace y muere en pocas horas para mantener el mapa limpio, fresco y latiendo al ritmo de lo que pasa en tu ciudad justo ahora.",
      color: "#8A2BE2", // Purple
      accent: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      icon: Timer,
      image: "/manifesto_efimeros.png",
      overlay: "El tiempo vuela en la calle. Aprovecha el momento antes de que el Pin expire."
    }
  ];

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === pilares.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? pilares.length - 1 : prev - 1));
  };

  const activePilar = pilares[activeIdx];
  const IconComponent = activePilar.icon;

  return (
    <section id="manifiesto" className="py-20 bg-white relative overflow-hidden border-t border-b border-pintag-teal/10">
      {/* Background Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pintag-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pintag-teal/10 border border-pintag-teal/20 text-pintag-teal text-xs font-bold uppercase tracking-wider mb-4 animate-pulse"
          >
            <Sparkles className="w-3.5 h-3.5 text-pintag-orange" />
            <span>El Manifiesto</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5.5xl font-extrabold tracking-tight text-pintag-teal mt-2 leading-[1.1]"
          >
            Las Reglas del Juego Real: <span className="block sm:inline-block font-caveat text-pintag-orange font-medium glow-text mt-1 sm:mt-0">El Anti-Algoritmo</span>
          </motion.h2>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="mb-12 overflow-x-auto pb-3 scrollbar-none flex gap-2 border-b border-pintag-teal/10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {pilares.map((pilar, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={pilar.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-outfit font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? "bg-pintag-teal text-white border-pintag-teal shadow-md scale-102"
                    : "bg-pintag-cream/15 text-pintag-teal/65 border-pintag-teal/10 hover:border-pintag-teal/25 hover:bg-white hover:text-pintag-teal"
                }`}
              >
                {`${idx + 1}. ${pilar.shortName}`}
              </button>
            );
          })}
        </div>

        {/* Carousel Wrapper with Absolute Arrows on extremities */}
        <div className="relative px-2 sm:px-12 md:px-16">
          
          {/* Left Arrow Button (Far Left) */}
          <button
            onClick={prevSlide}
            className="absolute left-[-16px] sm:left-[-8px] md:left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-pintag-teal/20 bg-white/90 backdrop-blur-sm text-pintag-teal hover:bg-pintag-teal hover:text-white hover:border-pintag-teal transition-all flex items-center justify-center cursor-pointer shadow-md z-30 active:scale-95"
            aria-label="Anterior"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button (Far Right) */}
          <button
            onClick={nextSlide}
            className="absolute right-[-16px] sm:right-[-8px] md:right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-pintag-teal/20 bg-white/90 backdrop-blur-sm text-pintag-teal hover:bg-pintag-teal hover:text-white hover:border-pintag-teal transition-all flex items-center justify-center cursor-pointer shadow-md z-30 active:scale-95"
            aria-label="Siguiente"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Main Grid: Info Slide + Interactive Visual Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[420px]">
            
            {/* Left Column: Animated Pillar Info */}
            <div className="lg:col-span-7 flex flex-col justify-center h-full space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Decorative Numeral & Badge */}
                  <div className="flex items-center gap-4">
                    <span 
                      className="font-outfit text-6xl md:text-7xl font-extrabold tracking-tighter opacity-15 leading-none"
                      style={{ color: activePilar.color }}
                    >
                      {activePilar.num}
                    </span>
                    <div 
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold font-mono uppercase tracking-wider ${activePilar.accent}`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>Regla PINTAG</span>
                    </div>
                  </div>

                  {/* Title & Copywriting */}
                  <h3 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-extrabold text-pintag-teal tracking-tight leading-tight">
                    {activePilar.title}
                  </h3>
                  <p className="font-jakarta text-base sm:text-lg leading-relaxed text-pintag-teal/80 font-semibold max-w-2xl">
                    {activePilar.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Dynamic Photo Card aligned with active pilar */}
            <div className="lg:col-span-5 flex justify-center mt-6 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl overflow-hidden border p-3 w-full max-w-[380px] bg-white transition-all duration-300"
                  style={{
                    borderColor: `${activePilar.color}35`,
                    boxShadow: `0 20px 40px -15px ${activePilar.color}25, 0 0 30px ${activePilar.color}08`
                  }}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                    <img 
                      src={activePilar.image} 
                      alt={activePilar.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-103" 
                    />
                    
                    {/* Transparent overlay card */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-pintag-teal/10 shadow-md">
                      <span 
                        className="font-outfit text-[10px] font-bold tracking-wider uppercase"
                        style={{ color: activePilar.color }}
                      >
                        CONEXIÓN EN LA CALLE
                      </span>
                      <p className="font-jakarta text-xs text-[#2A7A78] font-bold leading-normal mt-1">
                        "{activePilar.overlay}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Dots tracker centered at bottom */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {pilares.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx ? "w-6 bg-pintag-teal" : "w-2 bg-pintag-teal/20"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
