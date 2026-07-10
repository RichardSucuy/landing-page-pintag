"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, MapPin, Gift, TrendingUp, Users, BarChart3, Navigation, ArrowRight, Zap, Target } from "lucide-react";

export default function Features() {
  const userFeatures = [
    {
      icon: Eye,
      title: "Explora con WebAR",
      description: "Abre la cámara desde el navegador de tu teléfono. Sin instalar aplicaciones pesadas, el mundo digital y físico se unen instantáneamente.",
      color: "from-amber-500/10 to-orange-500/10",
      border: "border-orange-500/10",
      iconColor: "text-pintag-orange"
    },
    {
      icon: MapPin,
      title: "Pintags Efímeros",
      description: "Deja tu marca en la ciudad. Pega notas virtuales, fotos o arte digital en lugares físicos que tus amigos podrán ver durante 24 horas.",
      color: "from-teal-500/10 to-emerald-500/10",
      border: "border-teal-500/10",
      iconColor: "text-pintag-teal"
    },
    {
      icon: Gift,
      title: "Caza de Recompensas",
      description: "Descubre cupones flotantes de tiendas locales, cofres del tesoro virtuales y coleccionables digitales exclusivos mientras caminas.",
      color: "from-pink-500/10 to-rose-500/10",
      border: "border-rose-500/10",
      iconColor: "text-rose-500"
    }
  ];

  const businessFeatures = [
    {
      icon: TrendingUp,
      title: "Campaña Drive-to-Store",
      description: "Coloca pines WebAR interactivos en las calles cercanas a tu local. Atrae a transeúntes activos guiándolos directamente hasta tu puerta.",
      badge: "Más Visitas"
    },
    {
      icon: Users,
      title: "Tráfico Físico Verificado",
      description: "Paga por clientes reales que ingresaron a tu establecimiento comercial verificados con geolocalización de alta precisión.",
      badge: "Conversión Real"
    },
    {
      icon: BarChart3,
      title: "Métricas Físicas Completas",
      description: "Mide impresiones AR, interacciones y el retorno real de tu inversión (ROI) con nuestro panel de estadísticas urbanas.",
      badge: "Métricas Reales"
    }
  ];

  const handleTabScroll = (tab: "comercio" | "usuario") => {
    const el = document.getElementById("piloto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("select-form-tab", { detail: tab }));
    }
  };

  return (
    <div className="py-20 space-y-32">
      {/* 1. SECCION USUARIOS */}
      <section id="usuarios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-outfit text-xs font-bold tracking-wider text-pintag-orange uppercase bg-pintag-orange/10 px-3.5 py-1 rounded-full">
            SOY USUARIO / EXPLORADOR
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pintag-teal mt-4 mb-4">
            Tu ciudad es una red social viva
          </h2>
          <p className="font-jakarta text-base sm:text-lg text-pintag-teal/80">
            Deja de observar la vida de otros a través de una pantalla. Sal a la calle, desbloquea recompensas reales y diviértete interactuando con tu entorno.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userFeatures.map((feat, index) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`glass-card-light p-8 rounded-[28px] border ${feat.border} flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="space-y-6">
                  {/* Icon wrap */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center border border-white/50 group-hover:scale-105 transition-transform duration-300 shadow-inner`}>
                    <IconComp className={`w-7 h-7 ${feat.iconColor}`} />
                  </div>
                  <h3 className="font-outfit text-xl font-extrabold text-pintag-teal tracking-tight leading-tight">
                    {feat.title}
                  </h3>
                  <p className="font-jakarta text-sm leading-relaxed text-pintag-teal/80 font-medium">
                    {feat.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-pintag-teal/5">
                  <button
                    onClick={() => handleTabScroll("usuario")}
                    className="inline-flex items-center text-xs font-outfit font-extrabold tracking-wider uppercase text-pintag-orange hover:text-pintag-teal transition-colors cursor-pointer group/btn"
                  >
                    <span>Entrar a la Lista</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. SECCION NEGOCIOS */}
      <section id="negocios" className="bg-pintag-darkBg text-white py-24 relative overflow-hidden scroll-mt-24">
        {/* Background Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern-dark opacity-15 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pintag-teal/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side: Text & Features list */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="font-outfit text-xs font-bold tracking-wider text-pintag-orange uppercase bg-pintag-orange/10 px-3.5 py-1 rounded-full border border-pintag-orange/20">
                  SOY COMERCIO / NEGOCIO LOCAL
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-5 leading-none">
                  Convierte el tráfico digital en <br />
                  <span className="text-pintag-orange">clientes físicos reales</span>
                </h2>
                <p className="font-jakarta text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                  ¿Harto de gastar en anuncios digitales que solo generan clics vacíos y likes sin valor? PINTAG conecta tu negocio con transeúntes listos para consumir mediante incentivos WebAR geolocalizados.
                </p>
              </div>

              {/* Rows */}
              <div className="space-y-6">
                {businessFeatures.map((feat, index) => {
                  const IconComp = feat.icon;
                  return (
                    <motion.div
                      key={feat.title}
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-200"
                    >
                      <div className="p-3 bg-pintag-orange/10 text-pintag-orange rounded-xl border border-pintag-orange/20 shrink-0 shadow-inner">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-outfit text-lg font-bold text-white tracking-tight">
                            {feat.title}
                          </h3>
                          <span className="font-mono text-[9px] font-bold text-pintag-orange bg-pintag-orange/10 px-2 py-0.5 rounded-full border border-pintag-orange/20">
                            {feat.badge}
                          </span>
                        </div>
                        <p className="font-jakarta text-sm text-slate-400 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleTabScroll("comercio")}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-pintag-orange text-white font-outfit font-bold text-base tracking-wide shadow-lg shadow-pintag-orange/20 hover:shadow-pintag-orange/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
                >
                  <span>Registrar mi Local</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right side: Mockup Premium Dashboard */}
            <div className="lg:col-span-5 flex justify-center z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="glass-card-dark p-6 rounded-3xl border-white/10 w-full max-w-[400px] shadow-2xl relative"
                style={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 25px rgba(255, 107, 0, 0.15)"
                }}
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-pintag-orange/20 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <h4 className="font-outfit text-sm font-bold text-white tracking-tight">Panel PINTAG Business</h4>
                    <p className="text-[10px] text-slate-400">Pizzería 'El Antojo' • Machala</p>
                  </div>
                  <span className="text-[9px] font-mono text-green-400 bg-green-950/60 border border-green-800/40 px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                    En Vivo
                  </span>
                </div>

                {/* Big Metric Box */}
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 mb-5 text-center relative overflow-hidden">
                  <div className="absolute top-1 right-2">
                    <Target className="w-4 h-4 text-pintag-orange animate-pulse" />
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Visitas Físicas Verificadas</span>
                  <div className="text-4xl font-extrabold font-outfit text-white tracking-tight mt-1">128</div>
                  <span className="text-[10px] text-green-400 font-bold block mt-1">
                    +18% esta semana
                  </span>
                </div>

                {/* Submetrics list */}
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-center justify-between p-3 bg-slate-900/40 border border-white/5 rounded-xl text-xs">
                    <span className="text-slate-400">Pines AR escaneados</span>
                    <span className="font-bold text-white font-mono">482 scans</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/40 border border-white/5 rounded-xl text-xs">
                    <span className="text-slate-400">CTR de Recompensas</span>
                    <span className="font-bold text-pintag-orange font-mono">26.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/40 border border-white/5 rounded-xl text-xs">
                    <span className="text-slate-400">Retorno de Inversión (ROI)</span>
                    <span className="font-bold text-green-400 font-mono">3.4x</span>
                  </div>
                </div>

                {/* Interactive bar graph simulation */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Tráfico por Hora (Pico: 18:00)</span>
                    <span className="text-slate-400 font-bold">14:00 - 21:00</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 pt-2">
                    <div className="w-full bg-slate-800 rounded-t-sm h-[30%]" />
                    <div className="w-full bg-slate-800 rounded-t-sm h-[45%]" />
                    <div className="w-full bg-slate-800 rounded-t-sm h-[60%]" />
                    <div className="w-full bg-pintag-orange rounded-t-sm h-[95%] glow-orange" />
                    <div className="w-full bg-pintag-teal rounded-t-sm h-[80%]" />
                    <div className="w-full bg-slate-800 rounded-t-sm h-[50%]" />
                    <div className="w-full bg-slate-800 rounded-t-sm h-[35%]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
