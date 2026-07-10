"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Sparkles, Quote, Heart, Camera, CheckCircle } from "lucide-react";

export default function ReviewsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [likes, setLikes] = useState([42, 38, 56, 49, 63]);
  const [hasLiked, setHasLiked] = useState([false, false, false, false, false]);

  const reviews = [
    {
      name: "Mateo Delgado",
      age: 23,
      role: "Foodie Local",
      location: "Zona Gourmet, Machala",
      coords: { top: "25%", left: "20%" },
      avatar: "/user_mateo.png",
      rating: 5,
      review: "Me encanta que las reseñas de comida sean en tiempo real. Fui a una picantería en Machala y la foto de PINTAG se había tomado hace 15 minutos. El plato estaba tal cual: calientito y delicioso. ¡Adiós a las fotos falsas de menú!",
      pilar: "Protocolo Zero-Upload"
    },
    {
      name: "Valeria Espinoza",
      age: 26,
      role: "Exploradora Activa",
      location: "Parque de la Madre",
      coords: { top: "65%", left: "15%" },
      avatar: "/user_valeria.png",
      rating: 5,
      review: "Estaba en el Parque de la Madre y vi un pin de café gratis a 50 metros. Fui, escaneé y en 2 minutos ya tenía mi beneficio. Es una locura cómo la app te recompensa por el simple hecho de salir a caminar.",
      pilar: "Pines Efímeros"
    },
    {
      name: "Renato Cueva",
      age: 28,
      role: "Ciclista Urbano",
      location: "Ciclovía Av. Ferroviaria",
      coords: { top: "45%", left: "55%" },
      avatar: "/user_renato.png",
      rating: 5,
      review: "El modo tránsito seguro es un salvavidas. Salgo a trotar o a andar en bicicleta por la ciudad y no me llegan notificaciones molestas hasta que me detengo por completo. PINTAG cuida tu seguridad en las calles de verdad.",
      pilar: "Modo Tránsito Seguro"
    },
    {
      name: "Doménica Jaramillo",
      age: 24,
      role: "Conectora de Comunidad",
      location: "Paseo Shopping Machala",
      coords: { top: "75%", left: "75%" },
      avatar: "/user_domenica.png",
      rating: 5,
      review: "Conocí a un grupo genial para hacer senderismo a través de un Pin de evento activo en Paseo Shopping. No hay feeds eternos de odio ni likes de vanidad, solo gente real en el lugar real. Altamente recomendada.",
      pilar: "Descentralización"
    },
    {
      name: "Carlos Ortiz",
      age: 34,
      role: "Emprendedor Comercial",
      location: "Centro de Machala",
      coords: { top: "20%", left: "80%" },
      avatar: "/user_carlos.png",
      rating: 5,
      review: "Como dueño de un local comercial, los pines de beneficios atrajeron a más de 30 clientes en nuestro primer fin de semana. Es el ecosistema perfecto para reactivar la economía de nuestro barrio y conectar con los vecinos.",
      pilar: "Pintag Business"
    }
  ];

  // Auto-play reviews selector
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleLike = (idx: number) => {
    if (hasLiked[idx]) return;
    const newLikes = [...likes];
    newLikes[idx] += 1;
    setLikes(newLikes);
    const newHasLiked = [...hasLiked];
    newHasLiked[idx] = true;
    setHasLiked(newHasLiked);
  };

  const activeReview = reviews[activeIdx];

  return (
    <section id="reseñas" className="py-20 bg-pintag-cream/40 relative overflow-hidden border-b border-pintag-teal/10">
      {/* Background Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pintag-teal/10 border border-pintag-teal/20 text-pintag-teal text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-pintag-orange" />
            <span>Reseñas de la Comunidad</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pintag-teal mb-4 leading-tight"
          >
            Voces Reales en <span className="font-caveat text-pintag-orange font-medium glow-text block sm:inline">Coordenadas Reales</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-jakarta text-base sm:text-lg text-pintag-teal/80 font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            Mira cómo los vecinos y comercios de Machala están utilizando PINTAG para romper el algoritmo pasivo y reconectar con su entorno.
          </motion.p>
        </div>

        {/* Dynamic Map Pinboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Map Grid (lg:col-span-7) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <h3 className="font-outfit text-lg font-bold text-pintag-teal mb-4 uppercase tracking-wider text-center lg:text-left flex items-center gap-2 justify-center lg:justify-start">
              <MapPin className="w-5 h-5 text-pintag-orange animate-bounce" />
              <span>Mapa de Interacciones de Machala</span>
            </h3>
            
            {/* The Stylized Map Canvas */}
            <div className="relative w-full aspect-[16/10] bg-[#FFF7E6] border border-pintag-teal/15 rounded-3xl overflow-hidden shadow-inner p-4 group">
              {/* Simulated Map Streets */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20,100 L800,100 M-20,300 L800,300 M-20,200 L800,450" stroke="#2A7A78" strokeWidth="6" fill="none" />
                <path d="M150,-20 L150,600 M450,-20 L450,600 M650,-20 L650,600" stroke="#2A7A78" strokeWidth="4" fill="none" />
                <circle cx="150" cy="200" r="40" stroke="#2A7A78" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                <circle cx="450" cy="300" r="60" stroke="#2A7A78" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              </svg>
              
              {/* Topographic grid overlay */}
              <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

              {/* Glowing active zones */}
              <div className="absolute top-1/4 left-1/3 w-28 h-28 bg-pintag-orange/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-pintag-teal/10 rounded-full blur-xl animate-pulse" />

              {/* Rendering 5 avatar map pins */}
              {reviews.map((rev, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={rev.name}
                    onClick={() => setActiveIdx(idx)}
                    className="absolute cursor-pointer group/pin transition-all duration-300 z-20"
                    style={{ top: rev.coords.top, left: rev.coords.left }}
                  >
                    <div className="relative flex flex-col items-center">
                      
                      {/* Pulsing Proximity Rings */}
                      <span className="flex h-3 w-3 absolute bottom-0 translate-y-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isSelected ? "bg-pintag-orange" : "bg-pintag-teal"
                        }`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${
                          isSelected ? "bg-pintag-orange" : "bg-pintag-teal/60"
                        }`}></span>
                      </span>

                      {/* Floating Teardrop Pin containing Avatar */}
                      <motion.div
                        animate={{
                          y: isSelected ? -10 : 0,
                          scale: isSelected ? 1.15 : 1,
                        }}
                        className={`w-12 h-12 rounded-[50%_50%_50%_0%] rotate-45 border-2 flex items-center justify-center shadow-lg transition-all duration-300 ${
                          isSelected 
                            ? "bg-pintag-orange border-white ring-4 ring-pintag-orange/20" 
                            : "bg-pintag-teal border-white hover:bg-pintag-orange"
                        }`}
                      >
                        {/* Un-rotate profile photo inside */}
                        <div className="w-10 h-10 rounded-full overflow-hidden -rotate-45 relative bg-white border border-slate-100 shrink-0">
                          <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                        </div>
                      </motion.div>

                      {/* Tiny Name Badge */}
                      <span className={`mt-2 px-2 py-0.5 rounded-full text-[9px] font-bold font-mono tracking-tight shadow-sm border transition-all ${
                        isSelected 
                          ? "bg-pintag-orange text-white border-pintag-orange" 
                          : "bg-white text-pintag-teal border-pintag-teal/15 opacity-75 group-hover/pin:opacity-100"
                      }`}>
                        {rev.name.split(" ")[0]}
                      </span>

                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Polaroid Testimonial Card Details (lg:col-span-5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[390px] bg-white border border-pintag-teal/15 rounded-3xl p-6 shadow-xl relative overflow-hidden group/card hover:border-pintag-teal/30 hover:shadow-2xl transition-all duration-300"
              >
                {/* Visual quote accent mark */}
                <div className="absolute top-4 right-6 text-pintag-teal/5 pointer-events-none">
                  <Quote className="w-24 h-24 fill-current rotate-180" />
                </div>

                {/* Card Header: User Avatar, Name, Stars */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pintag-teal/15 shadow-sm shrink-0 bg-slate-50">
                    <img src={activeReview.avatar} alt={activeReview.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-outfit text-lg font-extrabold text-pintag-teal leading-tight flex items-center gap-1.5">
                      {activeReview.name}
                      <span className="text-xs text-pintag-teal/60 font-semibold font-jakarta">({activeReview.age} años)</span>
                    </h4>
                    <p className="font-jakarta text-xs text-pintag-orange font-bold uppercase tracking-wider mt-0.5">
                      {activeReview.role}
                    </p>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mt-1.5">
                      {[...Array(activeReview.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-pintag-orange text-pintag-orange" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Verification & Location Badge */}
                <div className="mt-5 flex items-center justify-between bg-pintag-cream/40 border border-pintag-teal/5 rounded-2xl px-4 py-2 text-xs font-semibold text-pintag-teal">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-pintag-orange shrink-0 animate-bounce" />
                    <span>{activeReview.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-500/10 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wide">
                    <CheckCircle className="w-3 h-3" />
                    <span>En Vivo</span>
                  </div>
                </div>

                {/* Review Text */}
                <div className="mt-5 relative z-10">
                  <p className="font-jakarta text-sm leading-relaxed text-pintag-teal/85 font-semibold italic">
                    "{activeReview.review}"
                  </p>
                </div>

                {/* Card Footer: Verified Pillar and Likes */}
                <div className="mt-6 pt-4 border-t border-pintag-teal/5 flex items-center justify-between text-xs font-bold text-pintag-teal/60 uppercase tracking-wide relative z-10">
                  <div className="flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-pintag-teal/70" />
                    <span className="font-mono text-[9px] font-bold text-pintag-teal/70 tracking-wider">Pilar: {activeReview.pilar}</span>
                  </div>
                  
                  {/* Interactive Like button */}
                  <button 
                    onClick={() => handleLike(activeIdx)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-xl border transition-all group/like cursor-pointer ${
                      hasLiked[activeIdx] 
                        ? "bg-red-50 text-red-500 border-red-500/20" 
                        : "bg-white border-pintag-teal/10 hover:border-red-400 hover:text-red-500 hover:bg-red-50/50"
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 transition-all ${
                      hasLiked[activeIdx] 
                        ? "fill-red-500 text-red-500 scale-110" 
                        : "text-pintag-teal/60 group-hover/like:text-red-500 group-hover/like:scale-110"
                    }`} />
                    <span className="font-mono">{likes[activeIdx]}</span>
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Selector dots for reviews */}
            <div className="flex items-center gap-2 mt-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === idx ? "w-6 bg-pintag-teal" : "w-2 bg-pintag-teal/20"
                  }`}
                  aria-label={`Reseña ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
