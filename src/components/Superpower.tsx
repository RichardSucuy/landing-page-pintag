"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Map, MessageSquareShare, MessageCircleHeart } from "lucide-react";

export default function Superpower() {
  const features = [
    {
      icon: Map,
      badge: "Google Maps+",
      title: "Mapas Reales",
      description: "Encuentra lugares, eventos y secretos urbanos que el algoritmo convencional no te muestra.",
      color: "text-[#2A7A78] bg-[#2A7A78]/5",
      border: "border-[#2A7A78]/10",
      image: "/ar_exploration_hand.jpg"
    },
    {
      icon: MessageSquareShare,
      badge: "TripAdvisor+",
      title: "Curaduría Social",
      description: "Reseñas in situ, verificadas y actuales. Adiós al review bombing; aquí, si no estás ahí, no puedes opinar.",
      color: "text-amber-600 bg-amber-50",
      border: "border-amber-500/10",
      image: "/ar_cafe_review.jpg"
    },
    {
      icon: MessageCircleHeart,
      badge: "Apps de Citas+",
      title: "Conexiones Reales",
      description: "Rompe el hielo orgánicamente en el lugar donde te encuentras. Chats temporales y seguros con personas a metros de distancia.",
      color: "text-pintag-orange bg-pintag-orange/5",
      border: "border-pintag-orange/10",
      image: "/couple_match.png"
    }
  ];

  return (
    <section id="superpoder" className="py-20 bg-white relative overflow-hidden">
      {/* Light background highlight */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>El Superpoder de PINTAG</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2A7A78] mb-6 leading-tight"
          >
            Todo lo que amas, <br className="hidden sm:inline" />
            en una sola <span className="text-pintag-orange font-caveat font-medium glow-text">coordenada real.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-jakarta text-base sm:text-lg text-[#2A7A78]/80 font-medium leading-relaxed"
          >
            PINTAG toma lo mejor de tus apps diarias y lo ancla al mundo físico:
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-white border ${feat.border} rounded-2xl p-6 hover:scale-[1.02] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pintag-orange bg-pintag-orange/10 px-2.5 py-0.5 rounded-full border border-pintag-orange/20">
                      {feat.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${feat.color} flex items-center justify-center border border-white`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="font-outfit text-xl font-extrabold text-[#2A7A78] tracking-tight">
                    {feat.title}
                  </h3>
                  
                  <p className="font-jakarta text-sm leading-relaxed text-[#2A7A78]/85 font-semibold">
                    {feat.description}
                  </p>

                  {/* High-Fidelity Functional Image */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 mt-4">
                    <img 
                      src={feat.image} 
                      alt={feat.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A7A78]/5 text-xs font-bold text-[#2A7A78]/60 uppercase tracking-wide">
                  Anclado al espacio físico
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
