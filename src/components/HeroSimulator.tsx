"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Coffee, ShoppingBag, Sparkles, Navigation, Camera, Map, PawPrint, Megaphone, AlertTriangle, User } from "lucide-react";

export default function HeroSimulator() {
  const [activePin, setActivePin] = useState<string | null>("coffee");
  const [viewMode, setViewMode] = useState<"webar" | "map">("map");

  const pins = [
    {
      id: "coffee",
      type: "comercial",
      icon: Coffee,
      avatar: null as string | null,
      title: "Café Mocca 2x1",
      description: "Escaneado en 'Café del Parque'.",
      distance: "A 50 metros",
      x: "28%",
      y: "28%",
      color: "#2A7A78",
      delay: "0s",
      reward: "¡Recompensa! Presenta el código AR en caja para obtener un 2x1."
    },
    {
      id: "shop",
      type: "comercial",
      icon: ShoppingBag,
      avatar: null as string | null,
      title: "Fashion Drop -15%",
      description: "Escaneado en 'Boutique Urbana'.",
      distance: "A 120 metros",
      x: "72%",
      y: "22%",
      color: "#2A7A78",
      delay: "1.2s",
      reward: "¡Desbloqueado! 15% de descuento en la colección de invierno."
    },
    {
      id: "sofi",
      type: "social",
      icon: User,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      title: "@Sofi_M en Vivo",
      description: "Compartió: 'Probando el nuevo postre de limón 🍋 en la cafetería'",
      distance: "A 15 metros",
      x: "48%",
      y: "40%",
      color: "#FF6B00",
      delay: "0.6s",
      reward: "Chat efímero: Únete a la conversación hiperlocal de Sofi."
    },
    {
      id: "alex",
      type: "social",
      icon: User,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
      title: "@Alex_K en Club",
      description: "Dejó una nota: 'El DJ está tocando excelente música hoy 🎶'",
      distance: "A 80 metros",
      x: "78%",
      y: "60%",
      color: "#FF6B00",
      delay: "1.8s",
      reward: "Conexión social: Toca para responder a la nota de Alex."
    },
    {
      id: "paw",
      type: "comunitario",
      icon: PawPrint,
      avatar: null as string | null,
      title: "Mascota Perdida: Coqui",
      description: "Visto por última vez cerca del Parque Central. Lleva collar rojo.",
      distance: "A 180 metros",
      x: "22%",
      y: "68%",
      color: "#8A2BE2",
      delay: "2.4s",
      reward: "Ayuda Cívica: Si lo ves, toca para enviar ubicación en tiempo real."
    },
    {
      id: "mega",
      type: "comunitario",
      icon: Megaphone,
      avatar: null as string | null,
      title: "Mercadito Barrial",
      description: "Feria de emprendimientos locales este sábado en la plaza.",
      distance: "A 300 metros",
      x: "52%",
      y: "80%",
      color: "#8A2BE2",
      delay: "3.0s",
      reward: "Sugerencia Barrial: Apoya el comercio local de tu vecindad."
    },
    {
      id: "alert",
      type: "comunitario",
      icon: AlertTriangle,
      avatar: null as string | null,
      title: "Precaución Vial",
      description: "Bache profundo reportado en Av. 25 de Junio, carril derecho.",
      distance: "A 250 metros",
      x: "82%",
      y: "48%",
      color: "#8A2BE2",
      delay: "1.5s",
      reward: "Seguridad Ciudadana: Conduce con cuidado al transitar por esta zona."
    }
  ];

  const getRoutePath = () => {
    if (activePin === "coffee") return "M 160 320 L 160 180 L 90 180";
    if (activePin === "shop") return "M 160 320 L 160 140 L 230 140";
    if (activePin === "sofi") return "M 160 320 L 154 320 L 154 256";
    if (activePin === "alex") return "M 160 320 L 250 320 L 250 384";
    if (activePin === "paw") return "M 160 320 L 70 320 L 70 435";
    if (activePin === "mega") return "M 160 320 L 166 320 L 166 512";
    if (activePin === "alert") return "M 160 320 L 262 320 L 262 307";
    return "";
  };

  const getRouteColor = () => {
    const pin = pins.find(p => p.id === activePin);
    return pin ? pin.color : "#FF6B00";
  };

  return (
    <section id="proyecto" className="relative overflow-hidden bg-dot-pattern py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-pintag-cream/40">
      {/* Light Dynamic Glowing Backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pintag-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-pintag-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Side: Copywriting & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* 1. Pill Badge: Saca tu vida del scroll infinito */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pintag-orange/20 bg-pintag-orange/10 mb-6 w-fit mx-auto lg:mx-0 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-pintag-orange" />
            <span className="font-caveat text-lg sm:text-xl text-pintag-orange font-bold tracking-wide italic leading-none">
              Saca tu vida del scroll infinito y llévala a las calles.
            </span>
          </motion.div>

          {/* 2. Headline Principal (H1 - El Concepto Mejorado) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-3xl sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3rem] xl:text-[3.4rem] font-extrabold tracking-tight text-pintag-teal leading-[1.1] mb-6"
          >
            ¿Cuántas horas pasaste <br className="hidden sm:inline" />
            hoy viendo la vida de otros?
            <span className="block font-caveat text-4xl sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.2rem] text-pintag-orange font-bold mt-2 tracking-normal normal-case leading-none">
              Es hora de vivir la tuya.
            </span>
          </motion.h1>

          {/* 3. Description (Contexto y Llamado a la Acción) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-jakarta text-base sm:text-lg text-pintag-teal/85 font-bold max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            <strong className="font-extrabold text-pintag-teal">PINTAG</strong> una app hiperlocal. Rompe el algoritmo pasivo y transforma tu entorno en un ecosistema interactivo. Accede a beneficios comerciales, conecta con tu comunidad y descubre tu ciudad aquí y ahora. Crea conexiones humanas reales en el lugar donde te encuentras. Disponible en tu tienda favorita y optimizado para ejecutarse al instante desde tu aplicación móvil o navegador web alternativo.
          </motion.p>

          {/* 4. Action buttons: Comienza a Explorar & Descargar la Beta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            {/* Comienza a Explorar Button */}
            <a
              href="#mapa-drops"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-pintag-orange text-white font-outfit font-bold text-sm tracking-wide shadow-lg shadow-pintag-orange/20 hover:shadow-pintag-orange/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer animate-bounce-subtle"
            >
              <span>Comienza a Explorar</span>
              <ArrowRight className="w-4.5 h-4.5 ml-2" />
            </a>

            {/* Descargar la Beta Button */}
            <a
              href="#descargar"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-pintag-teal text-white hover:bg-pintag-teal/95 font-outfit font-bold text-sm tracking-wide shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Descargar la Beta</span>
            </a>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 pt-8 border-t border-pintag-teal/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-pintag-teal/70 font-semibold font-jakarta"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
              <span>Piloto cerrado en Machala</span>
            </div>
            <span>•</span>
            <div>10 Comercios Pioneros</div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-pintag-orange animate-pulse" />
              <span>Disponible para iOS y Android</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive WebAR Phone Simulator Mockup in LIGHT/AR mode */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[320px] h-[640px] rounded-[48px] border-[12px] border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden perspective-1000 group hover:border-slate-300 transition-colors duration-300"
            style={{
              boxShadow: "0 25px 50px -12px rgba(51, 127, 124, 0.15), 0 0 40px rgba(255, 107, 0, 0.05)"
            }}
          >
            {/* Phone Speaker & Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-200 rounded-b-3xl z-40 flex items-center justify-center">
              <div className="w-16 h-1 bg-slate-300 rounded-full mb-1" />
              <div className="w-3.5 h-3.5 bg-white rounded-full border border-slate-300 absolute right-6 mb-1 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
              </div>
            </div>

            {/* Screen Content Wrapper */}
            <div className="relative w-full h-full flex flex-col bg-white overflow-hidden">
              
              {/* Simulator Tabs Toggle (Map vs WebAR) */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 z-40 flex bg-white/90 backdrop-blur-md p-1 rounded-full border border-pintag-teal/15 shadow-md w-[85%]">
                <button
                  type="button"
                  onClick={() => setViewMode("webar")}
                  className={`flex-grow flex items-center justify-center gap-1.5 py-1.5 rounded-full text-[9px] font-outfit font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    viewMode === "webar"
                      ? "bg-pintag-orange text-white shadow-sm"
                      : "text-pintag-teal hover:text-pintag-orange"
                  }`}
                >
                  <Camera className="w-3 h-3" />
                  <span>Cámara WebAR</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("map")}
                  className={`flex-grow flex items-center justify-center gap-1.5 py-1.5 rounded-full text-[9px] font-outfit font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    viewMode === "map"
                      ? "bg-pintag-orange text-white shadow-sm"
                      : "text-pintag-teal hover:text-pintag-orange"
                  }`}
                >
                  <Map className="w-3 h-3" />
                  <span>Mapa GPS</span>
                </button>
              </div>

              {viewMode === "webar" ? (
                /* ---------------------------------------------------- */
                /* WebAR Camera View Mode                               */
                /* ---------------------------------------------------- */
                <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                  <img
                    src="/city_ar_exploration.png"
                    alt="Vista de cámara WebAR con calles reales"
                    className="w-full h-full object-cover brightness-[0.85]"
                  />
                  
                  {/* Camera scan lines and crosshairs */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none z-10" />
                  
                  {/* AR Scan Target Reticle in Center */}
                  <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-white/20 rounded-full flex items-center justify-center pointer-events-none z-10">
                    <div className="w-36 h-36 border border-dashed border-white/30 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="w-2.5 h-2.5 bg-pintag-orange rounded-full absolute shadow-[0_0_8px_#FF6B00]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-full absolute animate-ping" />
                  </div>

                  {/* Pulsing Orange Pin floating on the street */}
                  <div className="absolute top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                    {/* Multi-layered Pulsing Halo Rings */}
                    <div className="absolute w-24 h-24 bg-pintag-orange/30 rounded-full animate-pulse-ring pointer-events-none" />
                    <div className="absolute w-16 h-16 bg-pintag-orange/20 rounded-full animate-pulse-ring pointer-events-none" style={{ animationDelay: "0.5s" }} />

                    {/* The Pin itself */}
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-pintag-orange to-amber-500 text-white animate-float border-2 border-white shadow-[0_10px_25px_rgba(255,107,0,0.5)]">
                      <Coffee className="w-7 h-7 text-white fill-white/10 animate-pulse" />
                      
                      {/* Pin Arrow pointing down */}
                      <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-pintag-orange" />
                    </div>
                  </div>

                  {/* Dynamic WebAR Overlay UI */}
                  <div className="absolute inset-0 z-30 flex flex-col justify-between p-5 pt-24 pb-4">
                    {/* AR Header Status (floating capsule) */}
                    <div className="flex items-center justify-between glass-card-dark px-3 py-1.5 rounded-full border-white/10 text-white shadow-lg">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="font-outfit text-[9px] font-bold uppercase tracking-wider">Cámara WebAR Activa</span>
                      </div>
                      <span className="text-[9px] font-mono text-white/70 font-semibold">Machala Centro</span>
                    </div>

                    {/* Bottom Info Card */}
                    <div className="w-full mt-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="glass-card-dark p-4 rounded-2xl border-white/15 text-white shadow-2xl flex flex-col space-y-3"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[9px] bg-pintag-orange/20 border border-pintag-orange/30 text-pintag-orange font-extrabold uppercase px-2.5 py-0.5 rounded-full inline-block mb-1 tracking-wider">
                              PIN ENCONTRADO
                            </span>
                            <h3 className="font-outfit text-xs font-bold tracking-tight text-white leading-tight">
                              Café Mocca 2x1
                            </h3>
                            <p className="font-jakarta text-[10px] text-white/80 mt-0.5 leading-snug">
                              Escaneado en "Café del Parque"
                            </p>
                          </div>
                          <span className="text-[9px] font-mono text-white bg-pintag-orange px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 font-bold">
                            A 50m de ti
                          </span>
                        </div>
                        
                        <div className="bg-white/5 p-2 rounded-lg border border-white/10 text-[10px] font-jakarta leading-relaxed text-white/90 font-semibold">
                          ☕️ Presenta este código WebAR en caja y obtén tu 2x1 al instante. ¡Sin instalar apps!
                        </div>

                        <a
                          href="#descargar"
                          className="w-full py-2 bg-pintag-orange hover:bg-pintag-orange/90 text-white rounded-lg text-xs font-outfit font-extrabold transition-all shadow-md shadow-pintag-orange/20 flex items-center justify-center space-x-1.5"
                        >
                          <span>Reclamar Recompensa</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 z-0">
                    <svg className="w-full h-full object-cover" viewBox="0 0 320 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Map Ground (#FFF7E6) */}
                      <rect width="320" height="640" fill="#FFF7E6" />
                      
                      {/* Grid overlay in Azul Zafiro */}
                      <defs>
                        <pattern id="map-grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A7A78" strokeWidth="0.5" opacity="0.1" />
                        </pattern>
                      </defs>
                      <rect width="320" height="640" fill="url(#map-grid-light)" />
                      
                      {/* Parks / Green Areas in soft teal-cream */}
                      <rect x="15" y="180" width="110" height="110" rx="16" fill="#2A7A78" fillOpacity="0.06" stroke="#2A7A78" strokeOpacity="0.15" strokeWidth="1" />
                      <text x="70" y="205" fill="#2A7A78" fontSize="7" fontFamily="var(--font-outfit)" fontWeight="bold" textAnchor="middle" letterSpacing="1px" opacity="0.5">PARQUE CENTRAL</text>
                      
                      <rect x="240" y="40" width="90" height="70" rx="12" fill="#2A7A78" fillOpacity="0.06" stroke="#2A7A78" strokeOpacity="0.15" strokeWidth="1" />
                      <rect x="-20" y="520" width="100" height="140" rx="20" fill="#2A7A78" fillOpacity="0.06" stroke="#2A7A78" strokeOpacity="0.15" strokeWidth="1" />
                      
                      {/* River */}
                      <path d="M 280 640 C 260 500, 310 300, 290 0 L 320 0 L 320 640 Z" fill="#2A7A78" fillOpacity="0.05" stroke="#2A7A78" strokeOpacity="0.1" strokeWidth="1" />
                      <text x="300" y="480" fill="#2A7A78" fontSize="7" fontFamily="var(--font-outfit)" fontWeight="bold" textAnchor="middle" transform="rotate(-90 300 480)" letterSpacing="1px" opacity="0.5">RÍO JUBONES</text>
                      
                      {/* Building Footprints */}
                      <rect x="30" y="90" width="30" height="40" rx="4" fill="#2A7A78" fillOpacity="0.04" />
                      <rect x="65" y="100" width="20" height="25" rx="3" fill="#2A7A78" fillOpacity="0.04" />
                      <rect x="185" y="245" width="25" height="25" rx="4" fill="#2A7A78" fillOpacity="0.04" />
                      <rect x="215" y="245" width="25" height="45" rx="4" fill="#2A7A78" fillOpacity="0.04" />
                      <rect x="190" y="350" width="70" height="35" rx="6" fill="#2A7A78" fillOpacity="0.04" />
                      
                      {/* Road Network - Azul Zafiro (#2A7A78) styled for Zoom-Out view */}
                      {/* Main Avenues */}
                      <line x1="160" y1="0" x2="160" y2="640" stroke="#2A7A78" strokeWidth="10" opacity="0.22" />
                      <line x1="0" y1="320" x2="320" y2="320" stroke="#2A7A78" strokeWidth="10" opacity="0.22" />
                      
                      {/* Secondary streets */}
                      <line x1="0" y1="224" x2="320" y2="224" stroke="#2A7A78" strokeWidth="6" opacity="0.16" />
                      <line x1="0" y1="160" x2="320" y2="160" stroke="#2A7A78" strokeWidth="6" opacity="0.16" />
                      <line x1="0" y1="416" x2="320" y2="416" stroke="#2A7A78" strokeWidth="6" opacity="0.16" />
                      <line x1="96" y1="0" x2="96" y2="640" stroke="#2A7A78" strokeWidth="6" opacity="0.16" />
                      <line x1="224" y1="0" x2="224" y2="640" stroke="#2A7A78" strokeWidth="6" opacity="0.16" />
                      <line x1="0" y1="500" x2="320" y2="280" stroke="#2A7A78" strokeWidth="8" opacity="0.16" />

                      {/* Zoom Out local streets density */}
                      <line x1="48" y1="0" x2="48" y2="640" stroke="#2A7A78" strokeWidth="3" opacity="0.1" />
                      <line x1="272" y1="0" x2="272" y2="640" stroke="#2A7A78" strokeWidth="3" opacity="0.1" />
                      <line x1="0" y1="80" x2="320" y2="80" stroke="#2A7A78" strokeWidth="3" opacity="0.1" />
                      <line x1="0" y1="520" x2="320" y2="520" stroke="#2A7A78" strokeWidth="3" opacity="0.1" />

                      {/* Central markers in avenues */}
                      <line x1="160" y1="0" x2="160" y2="640" stroke="#FFF7E6" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
                      <line x1="0" y1="320" x2="320" y2="320" stroke="#FFF7E6" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
                      
                      {/* Street Labels */}
                      <text x="154" y="120" fill="#2A7A78" fontSize="7" fontFamily="var(--font-outfit)" fontWeight="bold" textAnchor="middle" transform="rotate(-90 154 120)" opacity="0.6">AV. 25 DE JUNIO</text>
                      <text x="260" y="315" fill="#2A7A78" fontSize="7" fontFamily="var(--font-outfit)" fontWeight="bold" textAnchor="middle" opacity="0.6">C. ROCAFUERTE</text>
                      
                      {/* Dynamic Active Route Path */}
                      {activePin && (
                        <>
                          {/* Glow underlay */}
                          <path
                            d={getRoutePath()}
                            fill="none"
                            stroke={getRouteColor()}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity={0.25}
                          />
                          {/* Animated route */}
                          <path
                            d={getRoutePath()}
                            fill="none"
                            stroke={getRouteColor()}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-route-flow"
                          />
                        </>
                      )}
                      
                      {/* User GPS Indicator (Blue Dot) */}
                      <circle cx="160" cy="320" r="24" fill="#2A7A78" opacity="0.1" className="animate-pulse" />
                      <circle cx="160" cy="320" r="8" fill="#2A7A78" opacity="0.2" />
                      <circle cx="160" cy="320" r="4" fill="#FFFFFF" stroke="#2A7A78" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  {/* WebAR UI Overlay in Light Mode */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 pt-24">
                    {/* Floating AR Pins on Screen */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      {pins.map((pin) => {
                        const IconComponent = pin.icon;
                        const isSelected = activePin === pin.id;

                        return (
                          <div
                            key={pin.id}
                            className="absolute pointer-events-auto cursor-pointer group/pin"
                            style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
                            onClick={() => setActivePin(isSelected ? null : pin.id)}
                          >
                            {/* Proximity Ring (animate-ping-slow) at the point of the teardrop pin */}
                            <div className="absolute bottom-[2px] left-1/2 pointer-events-none z-0">
                              <div
                                className="w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping-slow opacity-35"
                                style={{ backgroundColor: pin.color }}
                              />
                            </div>

                            {/* Floating Teardrop Pin Container */}
                            <div
                              className="relative flex items-center justify-center transition-all duration-300 animate-float"
                              style={{
                                animationDelay: pin.delay,
                                animationDuration: "4s"
                              }}
                            >
                              {/* The Teardrop shape rotated 45deg */}
                              <div
                                className={`w-11 h-11 rounded-[50%_50%_50%_0%] rotate-45 border-2 border-white shadow-md transition-all duration-300 ${
                                  isSelected ? "scale-115 ring-2 ring-white" : "group-hover/pin:scale-105"
                                }`}
                                style={{
                                  backgroundColor: pin.color,
                                  boxShadow: isSelected ? `0 8px 16px ${pin.color}50` : "0 4px 8px rgba(0,0,0,0.15)"
                                }}
                              >
                                {/* Inner circle rotated -45deg to keep content upright */}
                                <div className="absolute inset-[3px] rounded-full bg-white flex items-center justify-center -rotate-45 overflow-hidden">
                                  {pin.avatar ? (
                                    <img src={pin.avatar} alt={pin.title} className="w-full h-full object-cover" />
                                  ) : (
                                    <IconComponent className="w-4.5 h-4.5" style={{ color: pin.color }} />
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Hover Tooltip label */}
                            <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white text-pintag-teal text-[10px] font-bold px-2.5 py-1 rounded-lg border border-pintag-teal/10 opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none shadow-md">
                              {pin.title}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Dynamic Bottom Info Card (If a pin is tapped) */}
                    <div className="z-30 w-full mt-auto mb-1">
                      <AnimatePresence mode="wait">
                        {activePin ? (
                          <motion.div
                            key={activePin}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="glass-card-light p-4 rounded-3xl border-pintag-teal/15 text-pintag-teal shadow-xl flex flex-col space-y-3"
                          >
                            <div className="flex items-start justify-between">
                              {(() => {
                                const selectedPin = pins.find(p => p.id === activePin);
                                const pinLabel = selectedPin?.type === "comercial" ? "BENEFICIO COMERCIAL" : selectedPin?.type === "social" ? "CONEXIÓN SOCIAL" : "AYUDA CÍVICA";
                                const pinColor = selectedPin?.color || "#FF6B00";
                                
                                return (
                                  <>
                                    <div>
                                      <span
                                        className="text-[9px] border font-bold uppercase px-2.5 py-0.5 rounded-full inline-block mb-1.5 tracking-wider"
                                        style={{
                                          borderColor: `${pinColor}40`,
                                          backgroundColor: `${pinColor}15`,
                                          color: pinColor
                                        }}
                                      >
                                        {pinLabel}
                                      </span>
                                      <h3 className="font-outfit text-sm font-bold tracking-tight text-pintag-teal leading-tight">
                                        {selectedPin?.title}
                                      </h3>
                                      <p className="font-jakarta text-[11px] text-pintag-teal/80 mt-0.5 leading-snug">
                                        {selectedPin?.description}
                                      </p>
                                    </div>
                                    <span className="text-[10px] font-mono text-pintag-teal/60 bg-pintag-teal/5 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 font-bold">
                                      <MapPin className="w-3 h-3 text-pintag-orange" />
                                      {selectedPin?.distance}
                                    </span>
                                  </>
                                );
                              })()}
                            </div>
                            
                            {(() => {
                              const selectedPin = pins.find(p => p.id === activePin);
                              const pinColor = selectedPin?.color || "#FF6B00";
                              return (
                                <div
                                  className="p-2.5 rounded-xl border text-[11px] font-jakarta leading-relaxed text-pintag-teal/90"
                                  style={{
                                    borderColor: `${pinColor}20`,
                                    backgroundColor: `${pinColor}08`
                                  }}
                                >
                                  {selectedPin?.reward}
                                </div>
                              );
                            })()}
                            
                            {(() => {
                              const selectedPin = pins.find(p => p.id === activePin);
                              const pinColor = selectedPin?.color || "#FF6B00";
                              return (
                                <a
                                  href="#descargar"
                                  className="w-full py-2 text-white rounded-xl text-xs font-outfit font-bold hover:brightness-95 transition-all shadow-md flex items-center justify-center space-x-1.5"
                                  style={{
                                    backgroundColor: pinColor,
                                    boxShadow: `0 4px 10px ${pinColor}30`
                                  }}
                                >
                                  <span>
                                    {selectedPin?.type === "comercial" ? "Reclamar Recompensa" : selectedPin?.type === "social" ? "Unirse al Chat" : "Ver Detalles"}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                              );
                            })()}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="scan"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="glass-card-light p-3.5 rounded-2xl border-pintag-teal/10 text-pintag-teal/80 text-center text-[11px] font-jakarta leading-normal shadow-md"
                          >
                            <Navigation className="w-5 h-5 text-pintag-orange mx-auto mb-1.5 animate-bounce" />
                            <span>Presiona cualquier <b>Pin Flotante</b> en el mapa de arriba para interactuar.</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </>
              )}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
