"use client";

import React from "react";
import { motion } from "framer-motion";
import { Frown, Sparkles, Heart, Compass, MapPin, ArrowRight } from "lucide-react";

export default function ContrastSection() {
  const comparativos = [
    {
      id: 1,
      num: "01",
      title: "Conexiones sin Filtros",
      badge: "Mejor que las Apps de Citas",
      icon: Heart,
      iconColor: "text-pintag-orange bg-pintag-orange/10",
      realidad: "Estás en un bar o en una cafetería, ves a alguien que te llama la atención, pero terminas abriendo una app de citas. Pasas horas dando swipes a perfiles con fotos de hace tres años, esperando un match artificial que tal vez nunca llegue, mientras la oportunidad real está a tres metros de ti.",
      experiencia: "Rompe el hielo en el mundo real, aquí y ahora. Quien sube un Pin en PINTAG está físicamente en el mismo lugar que tú en este instante. Sin chats eternos que mueren en la pantalla, sin algoritmos jugando con tu atención. Es una conexión real, segura, rápida y orgánica con la gente que comparte tu espacio. Cruza la mirada, no solo los dedos."
    },
    {
      id: 2,
      num: "02",
      title: "El Radar Foodie Auténtico",
      badge: "Mejor que TripAdvisor y Google Maps",
      icon: Compass,
      iconColor: "text-pintag-teal bg-pintag-teal/10",
      realidad: "Buscas un lugar para comer en Machala y entras a TripAdvisor o Google Maps. ¿Qué encuentras? Una reseña de un turista de hace cuatro años, fotos ultra-editadas de estudio o ataques de cuentas falsas. El Internet tradicional está desactualizado y frío.",
      experiencia: "El pulso de tu ciudad en tiempo real. En PINTAG, las recomendaciones vienen de los verdaderos foodies de tu barrio, capturadas en vivo y directamente desde la cámara del lugar (¡nada de fotos falsas de galería!). Si un plato está espectacular hoy a las 8:00 PM, lo vas a ver en el mapa a las 8:01 PM. Es la evolución de la recomendación: fresca, honesta y validada por coordenadas."
    },
    {
      id: 3,
      num: "03",
      title: "Redescubre tu Entorno",
      badge: "Tu Ciudad no es un Algoritmo",
      icon: MapPin,
      iconColor: "text-purple-600 bg-purple-50",
      realidad: "Vivimos atrapados en el doomscrolling, consumiendo la vida de personas que viven a miles de kilómetros mientras ignoramos lo que pasa a la vuelta de la esquina.",
      experiencia: "Si quieres volver a enamorarte de tu propio barrio, PINTAG es tu brújula. Al ser pines efímeros que desaparecen en pocas horas, se genera un FOMO real y sano que te impulsa a salir a explorar antes de que las coordenadas expiren. Camina por el Parque Central o Paseo Shopping y descubre los secretos que las plataformas corporativas no te muestran: el evento espontáneo de hoy, la promo relámpago de la esquina o el nuevo rincón foodie que acaba de abrir. Cambiamos las pantallas por experiencias."
    }
  ];

  return (
    <section id="contraste" className="py-20 bg-pintag-cream/50 relative overflow-hidden border-t border-b border-pintag-teal/10">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Light Dynamic Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pintag-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pintag-orange/10 border border-pintag-orange/20 text-pintag-orange text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>El Manifiesto de lo Real</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pintag-teal mb-4 leading-tight"
          >
            PINTAG vs. <span className="text-pintag-orange font-caveat font-medium glow-text block sm:inline">El Viejo Internet</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-jakarta text-base sm:text-lg text-pintag-teal/80 font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            Cambiamos los algoritmos de retención por conexiones reales y efímeras. Compara cómo vives hoy tu ciudad versus la experiencia hiperlocal activa.
          </motion.p>
        </div>

        {/* Comparison List */}
        <div className="space-y-16 lg:space-y-24">
          {comparativos.map((comp, index) => {
            const IconComponent = comp.icon;
            return (
              <div key={comp.id} className="space-y-6">
                
                {/* Item Header */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-pintag-teal/10 pb-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-outfit text-3xl sm:text-4xl font-extrabold text-pintag-orange/30">
                      {comp.num}
                    </span>
                    <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-pintag-teal tracking-tight">
                      {comp.title}
                    </h3>
                  </div>
                  <span className="w-fit font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-pintag-orange bg-pintag-orange/10 px-2.5 py-0.5 rounded-full border border-pintag-orange/20">
                    {comp.badge}
                  </span>
                </motion.div>

                {/* Grid Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                  
                  {/* Realidad de Hoy (The "Old" Internet) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-slate-700/80 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full pointer-events-none" />
                    
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-red-950/40 text-red-400 border border-red-900/30">
                          <Frown className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[9px] uppercase font-bold text-red-400 tracking-wider">
                          La Realidad de Hoy
                        </span>
                      </div>
                      <p className="font-jakarta text-sm sm:text-base leading-relaxed text-slate-400 font-medium">
                        {comp.realidad}
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-slate-800 text-[10px] uppercase font-bold text-slate-500 font-mono tracking-wider">
                      Frustración digital pasiva
                    </div>
                  </motion.div>

                  {/* Experiencia PINTAG (The "Real" Experience) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white border border-pintag-teal/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-md hover:shadow-xl hover:border-pintag-teal/30 transition-all duration-300 group"
                  >
                    {/* Glowing Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-pintag-teal/5 rounded-bl-full pointer-events-none" />
                    
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-xl ${comp.iconColor} border border-white`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-[9px] uppercase font-bold text-pintag-teal tracking-wider">
                            La Experiencia PINTAG
                          </span>
                        </div>
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pintag-orange opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-pintag-orange"></span>
                        </span>
                      </div>
                      <p className="font-jakarta text-sm sm:text-base leading-relaxed text-pintag-teal font-semibold">
                        {comp.experiencia}
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-pintag-teal/5 flex items-center justify-between text-[10px] uppercase font-bold text-pintag-orange font-mono tracking-wider">
                      <span>Acción real en coordenadas</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
