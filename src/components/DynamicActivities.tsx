"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Navigation, Users, Trophy } from "lucide-react";

export default function DynamicActivities() {
  const cards = [
    {
      icon: Navigation,
      badge: "Exploración",
      title: "Caza Premios AR",
      description: "Apunta con tu cámara, encuentra pines flotantes y desbloquea beneficios exclusivos escondidos en tu ciudad.",
      shadowColor: "hover:shadow-amber-500/10",
      accent: "text-amber-600 bg-amber-50",
      border: "hover:border-amber-500/20"
    },
    {
      icon: Users,
      badge: "Social",
      title: "Conexiones Orgánicas",
      description: "¿Ves a alguien interesante en el mismo lugar? Rompe el hielo. Los chats se abren solo si ambos comparten la coordenada geográfica.",
      shadowColor: "hover:shadow-purple-500/10",
      accent: "text-purple-600 bg-purple-50",
      border: "hover:border-purple-500/20"
    },
    {
      icon: Trophy,
      badge: "Gamificación",
      title: "Sube de Nivel",
      description: "Tus pasos cuentan. Gana rachas, acumula puntos y conviértete en el referente de tus lugares favoritos.",
      shadowColor: "hover:shadow-pintag-orange/10",
      accent: "text-pintag-orange bg-pintag-orange/5",
      border: "hover:border-pintag-orange/20"
    }
  ];

  return (
    <section id="comunidad" className="py-20 bg-pintag-cream/20 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pintag-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pintag-teal/10 border border-pintag-teal/20 text-pintag-teal text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-pintag-orange animate-pulse" />
            <span>¿Qué harás hoy en PINTAG?</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pintag-teal"
          >
            El mapa de tu ciudad, <span className="font-caveat text-pintag-orange font-medium">vivo.</span>
          </motion.h2>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-white border border-pintag-teal/10 rounded-2xl p-8 hover:scale-[1.02] shadow-sm hover:shadow-xl transition-all duration-300 ${card.shadowColor} ${card.border} flex flex-col justify-between`}
              >
                <div className="space-y-6">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pintag-teal/60 bg-pintag-teal/5 px-2.5 py-0.5 rounded-full">
                      {card.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${card.accent} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="font-outfit text-xl font-extrabold text-pintag-teal tracking-tight">
                    {card.title}
                  </h3>
                  
                  <p className="font-jakarta text-sm leading-relaxed text-pintag-teal/80 font-medium">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-pintag-teal/5 flex items-center justify-between text-xs font-bold text-pintag-orange">
                  <span>Aprender más</span>
                  <span className="text-lg">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
