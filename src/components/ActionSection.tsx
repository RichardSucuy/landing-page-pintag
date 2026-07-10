"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Camera, Flame, HelpCircle, Navigation, Award, MessageSquare } from "lucide-react";

export default function ActionSection() {
  const [activeTab, setActiveTab] = useState<"drops" | "gamification" | "community">("drops");

  const tabs = [
    {
      id: "drops",
      icon: Camera,
      title: "Pintag Drops",
      shortTitle: "Pintag Drops",
      description: "Caza tesoros digitales. Apunta con tu cámara WebAR y reclama premios exclusivos (Pintag Drops) escondidos en los lugares más icónicos de tu ciudad.",
      accent: "text-pintag-orange bg-pintag-orange/5 border-pintag-orange/20"
    },
    {
      id: "gamification",
      icon: Flame,
      title: "Gamificación Activa",
      shortTitle: "Gamificación",
      description: "Cada vez que sales y exploras, subes de nivel. Gana rachas, desbloquea insignias y conviértete en el referente de tu barrio.",
      accent: "text-amber-600 bg-amber-50 border-amber-500/20"
    },
    {
      id: "community",
      icon: HelpCircle,
      title: "Ayuda Comunitaria",
      shortTitle: "Ayuda Local",
      description: "Un botón para conectar. ¿Necesitas ayuda o buscas una recomendación real? Lanza un aviso en tu coordenada y conecta con la comunidad local instantáneamente.",
      accent: "text-[#2A7A78] bg-[#2A7A78]/5 border-[#2A7A78]/20"
    }
  ];

  return (
    <section id="accion" className="py-20 bg-pintag-cream/25 border-t border-b border-pintag-teal/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pintag-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 w-80 h-80 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#2A7A78]/10 border border-[#2A7A78]/20 text-[#2A7A78] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-pintag-orange" />
            <span>Gamificación e Inmersión</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2A7A78]"
          >
            Convierte tu ciudad en un <span className="text-pintag-orange font-caveat font-medium glow-text">patio de juegos.</span>
          </motion.h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Interactive Sub-sections list */}
          <div className="lg:col-span-6 space-y-6">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              const isSelected = activeTab === tab.id;

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex items-start space-x-4 ${
                    isSelected
                      ? "bg-white border-[#2A7A78]/20 shadow-md scale-[1.01]"
                      : "bg-white/40 border-[#2A7A78]/10 hover:bg-white hover:border-[#2A7A78]/20"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${tab.accent} border border-white/50`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-outfit text-lg font-bold text-[#2A7A78]">
                        {tab.title}
                      </h3>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 bg-pintag-orange rounded-full animate-ping" />
                      )}
                    </div>
                    <p className="font-jakarta text-sm leading-relaxed text-[#2A7A78]/80 font-semibold">
                      {tab.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Simulator Mockups (changes depending on the active tab) */}
          <div className="lg:col-span-6 flex justify-center items-center min-h-[440px]">
            <AnimatePresence mode="wait">
              {activeTab === "drops" && (
                <motion.div
                  key="drops"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl border-8 border-slate-200 bg-white shadow-xl overflow-hidden"
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-200 rounded-b-2xl z-30" />

                  {/* AR Camera View Mockup - Realistic Photo Background */}
                  <div className="absolute inset-0 overflow-hidden bg-slate-100">
                    <img 
                      src="/ar_shopping_mall_golden_pin.png" 
                      alt="Gen Z users scanning mall for AR drops" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Interactive Golden Pin Floating Overlay */}
                    <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
                      {/* Pulse ring */}
                      <div className="absolute w-20 h-20 bg-amber-500/30 rounded-full animate-ping pointer-events-none" />
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-white animate-float border-2 border-white shadow-lg shadow-amber-500/50">
                        <Award className="w-7 h-7 text-white fill-amber-100 animate-pulse" />
                        {/* Pin Arrow */}
                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-amber-500" />
                      </div>
                    </div>

                    {/* High-tech AR Scanner Overlay */}
                    <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none z-10 flex items-center justify-center">
                      <div className="w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                        <div className="w-40 h-40 border border-dashed border-white/30 rounded-full" style={{ animationDuration: "20s" }} />
                      </div>
                    </div>

                    {/* Camera view text instructions overlay */}
                    <div className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur-sm border border-pintag-orange/20 p-3 rounded-2xl text-center text-xs font-jakarta font-semibold text-[#2A7A78] z-20 shadow-md">
                      <span className="text-pintag-orange font-bold font-outfit">¡Pin Dorado Localizado!</span> Apunta con tu WebAR para reclamar.
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "gamification" && (
                <motion.div
                  key="gamification"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#2A7A78]/15 rounded-3xl p-8 w-full max-w-[340px] shadow-lg flex flex-col space-y-6"
                >
                  {/* Streak Title */}
                  <div className="flex items-center justify-between border-b border-[#2A7A78]/10 pb-4">
                    <div>
                      <h4 className="font-outfit text-base font-extrabold text-[#2A7A78]">Tus Estadísticas</h4>
                      <p className="text-[10px] text-[#2A7A78]/60 font-bold font-jakarta">@ExploradorImparable</p>
                    </div>
                    <span className="text-[10px] bg-amber-500/10 text-amber-600 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono font-bold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Nivel 3
                    </span>
                  </div>

                  {/* Prominent Flame Streaks Widget (Gen Z Element) */}
                  <div className="bg-pintag-orange/5 border border-pintag-orange/20 rounded-2xl p-5 flex items-center space-x-4 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-pintag-orange/10 rounded-full blur-xl pointer-events-none" />
                    
                    {/* Flame icon */}
                    <div className="w-14 h-14 rounded-2xl bg-pintag-orange text-white flex items-center justify-center shadow-lg shadow-pintag-orange/25 shrink-0 animate-bounce-subtle">
                      <Flame className="w-8 h-8 fill-white" />
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-pintag-orange tracking-wider uppercase font-mono">Racha Activa</span>
                      <h3 className="font-outfit text-2xl font-extrabold text-[#2A7A78] leading-none">
                        7 Días Seguidos
                      </h3>
                      <p className="text-[10px] text-[#2A7A78]/70 font-semibold font-jakarta leading-tight">
                        ¡Estás a 1 día de duplicar tus recompensas!
                      </p>
                    </div>
                  </div>

                  {/* Weekly streak checkmark widget */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold text-[#2A7A78]/60 font-mono">
                      <span>Racha Semanal</span>
                      <span className="text-pintag-orange">7 / 7 días</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs font-outfit font-bold">
                      {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                        <div key={i} className="flex flex-col items-center space-y-1">
                          <span className="text-[9px] text-[#2A7A78]/50 uppercase">{d}</span>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center border font-bold text-[10px] ${
                            i < 6 
                              ? "bg-pintag-orange text-white border-pintag-orange shadow-sm" 
                              : "bg-amber-500 text-white border-amber-500 animate-pulse shadow-sm"
                          }`}>
                            ✓
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* XP Progress Bar */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-[10px] font-bold text-[#2A7A78]/60 font-mono">
                      <span>XP para Nivel 4</span>
                      <span>850 / 1000 XP</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-[#2A7A78]/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-pintag-orange to-amber-500" 
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "community" && (
                <motion.div
                  key="community"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#2A7A78]/15 rounded-3xl p-6 w-full max-w-[340px] shadow-lg flex flex-col space-y-5"
                >
                  <div className="border-b border-[#2A7A78]/10 pb-3 flex items-center justify-between">
                    <h4 className="font-outfit text-base font-extrabold text-[#2A7A78]">Ayuda Comunitaria</h4>
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                  </div>

                  {/* Simulated alert ping sent by user */}
                  <div className="bg-[#2A7A78]/5 border border-[#2A7A78]/10 rounded-2xl p-4 flex flex-col space-y-2 relative overflow-hidden">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#2A7A78] text-white flex items-center justify-center shrink-0">
                        <Navigation className="w-4 h-4 transform rotate-45" />
                      </div>
                      <div>
                        <h5 className="font-outfit text-xs font-bold text-[#2A7A78] leading-none">Aviso en Coordenada</h5>
                        <p className="text-[9px] text-[#2A7A78]/50 font-mono mt-0.5">Parque Central • Hace 2 min</p>
                      </div>
                    </div>
                    <p className="font-jakarta text-xs text-[#2A7A78]/90 font-semibold leading-relaxed">
                      "¿Alguien sabe si el café 'El Parque' está abierto hoy o recomiendan otro lugar cerca?"
                    </p>
                  </div>

                  {/* Response bubble simulation */}
                  <div className="space-y-3">
                    <span className="text-[9px] font-bold text-[#2A7A78]/60 font-mono uppercase tracking-wider block">Respuestas Locales</span>
                    
                    <div className="flex items-start space-x-2.5 text-[11px] font-jakarta font-semibold text-[#2A7A78]">
                      <div className="w-6 h-6 rounded-full bg-pintag-orange text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                        MA
                      </div>
                      <div className="bg-slate-50 border border-[#2A7A78]/5 p-2 rounded-2xl rounded-tl-none w-full leading-normal">
                        <span className="block text-[9px] text-pintag-orange font-bold leading-none mb-1">Mateo A.</span>
                        Sí está abierto. Su café filtrado es espectacular ☕️
                      </div>
                    </div>

                    <div className="flex items-start space-x-2.5 text-[11px] font-jakarta font-semibold text-[#2A7A78]">
                      <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                        SO
                      </div>
                      <div className="bg-slate-50 border border-[#2A7A78]/5 p-2 rounded-2xl rounded-tl-none w-full leading-normal">
                        <span className="block text-[9px] text-purple-600 font-bold leading-none mb-1">Sofía O.</span>
                        ¡Te sugiero el de Mocca! Está a la vuelta de la esquina.
                      </div>
                    </div>
                  </div>

                  {/* Send response bar */}
                  <div className="pt-2 border-t border-[#2A7A78]/10 flex items-center gap-2">
                    <div className="w-full bg-slate-50 border border-[#2A7A78]/10 rounded-xl px-3 py-1.5 text-[10px] font-jakarta text-[#2A7A78]/60 font-semibold">
                      Responder al aviso...
                    </div>
                    <button className="p-1.5 bg-[#2A7A78] text-white rounded-lg">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
