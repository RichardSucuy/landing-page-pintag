"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Building, User, Mail, Phone, MapPin, Sparkles, Send, Award } from "lucide-react";
import confetti from "canvas-confetti";

export default function RegistrationForm() {
  const [activeTab, setActiveTab] = useState<"comercio" | "usuario">("comercio");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states - Commerce
  const [commerceName, setCommerceName] = useState("");
  const [commerceCategory, setCommerceCategory] = useState("Restaurante / Cafetería");
  const [commerceEmail, setCommerceEmail] = useState("");
  const [commercePhone, setCommercePhone] = useState("");

  // Form states - User
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userZone, setUserZone] = useState("Machala Centro");

  useEffect(() => {
    // Custom event to switch tabs from other sections
    const handleSwitchTab = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === "comercio" || customEvent.detail === "usuario") {
        setActiveTab(customEvent.detail);
        setIsSubmitted(false);
        setError(null);
      }
    };
    window.addEventListener("select-form-tab", handleSwitchTab);
    return () => window.removeEventListener("select-form-tab", handleSwitchTab);
  }, []);

  const handleConfetti = () => {
    // Launch a premium confetti explosion
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FF6B00", "#337F7C", "#FFEDD5"]
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FF6B00", "#337F7C", "#FFEDD5"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleCommerceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!commerceName || !commerceEmail || !commercePhone) {
      setError("Por favor completa todos los campos requeridos.");
      return;
    }

    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      handleConfetti();

      // Save to mock database (localStorage)
      const registrations = JSON.parse(localStorage.getItem("pintag_commerce_leads") || "[]");
      registrations.push({
        name: commerceName,
        category: commerceCategory,
        email: commerceEmail,
        phone: commercePhone,
        date: new Date().toISOString()
      });
      localStorage.setItem("pintag_commerce_leads", JSON.stringify(registrations));
    }, 1200);
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!userName || !userEmail) {
      setError("Por favor completa todos los campos requeridos.");
      return;
    }

    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      handleConfetti();

      // Save to mock database (localStorage)
      const registrations = JSON.parse(localStorage.getItem("pintag_user_leads") || "[]");
      registrations.push({
        name: userName,
        email: userEmail,
        zone: userZone,
        date: new Date().toISOString()
      });
      localStorage.setItem("pintag_user_leads", JSON.stringify(registrations));
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setError(null);
    setCommerceName("");
    setCommerceEmail("");
    setCommercePhone("");
    setUserName("");
    setUserEmail("");
  };

  return (
    <section id="descargar" className="py-24 bg-pintag-darkBg text-white relative overflow-hidden scroll-mt-24">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pintag-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-pintag-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-outfit text-xs font-bold tracking-wider text-pintag-orange uppercase bg-pintag-orange/10 px-3.5 py-1 rounded-full border border-pintag-orange/20 animate-pulse">
            Piloto Lanzamiento 2026
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Únete al cambio en Machala
          </h2>
          <p className="font-jakarta text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Estamos seleccionando **únicamente 10 comercios pioneros** en Machala para co-crear la red hiperlocal más grande. ¡Los usuarios que se registren hoy obtendrán recompensas VIP exclusivas!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#121824] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative">
          
          {/* Visual Badge indicator (FOMO) */}
          <div className="bg-gradient-to-r from-pintag-orange to-amber-500 py-3.5 px-6 flex items-center justify-between">
            <span className="font-outfit text-xs font-bold tracking-wider uppercase text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: "4s" }} />
              Solo 3 cupos disponibles para Comercios
            </span>
            <span className="font-mono text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full text-white">
              70% Completo
            </span>
          </div>

          <div className="p-8 sm:p-12">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  {/* Selector Tabs */}
                  <div className="grid grid-cols-2 p-1 bg-slate-900/60 border border-white/5 rounded-2xl">
                    <button
                      type="button"
                      onClick={() => { setActiveTab("comercio"); setError(null); }}
                      className={`py-3.5 rounded-xl font-outfit text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        activeTab === "comercio"
                          ? "bg-pintag-orange text-white shadow-lg shadow-pintag-orange/20"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Building className="w-4.5 h-4.5" />
                      <span>Soy Comercio</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setActiveTab("usuario"); setError(null); }}
                      className={`py-3.5 rounded-xl font-outfit text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        activeTab === "usuario"
                          ? "bg-pintag-orange text-white shadow-lg shadow-pintag-orange/20"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <User className="w-4.5 h-4.5" />
                      <span>Soy Usuario</span>
                    </button>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-950/40 border border-red-900/40 rounded-2xl flex items-center space-x-3 text-red-300 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* COMMERCE FORM */}
                  {activeTab === "comercio" ? (
                    <form onSubmit={handleCommerceSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-xs font-bold font-outfit uppercase tracking-wider text-slate-400">
                            Nombre del Establecimiento *
                          </label>
                          <div className="relative">
                            <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                              type="text"
                              value={commerceName}
                              onChange={(e) => setCommerceName(e.target.value)}
                              placeholder="Ej: Cafetería El Parque"
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-2 focus:ring-pintag-orange/20 text-white font-jakarta text-sm outline-none transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs font-bold font-outfit uppercase tracking-wider text-slate-400">
                            Categoría *
                          </label>
                          <select
                            value={commerceCategory}
                            onChange={(e) => setCommerceCategory(e.target.value)}
                            className="w-full px-4 py-3.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-2 focus:ring-pintag-orange/20 text-white font-jakarta text-sm outline-none transition-all appearance-none cursor-pointer"
                          >
                            <option value="Restaurante / Cafetería">Restaurante / Cafetería</option>
                            <option value="Boutique / Tienda de Ropa">Boutique / Tienda de Ropa</option>
                            <option value="Gimnasio / Deporte">Gimnasio / Deporte</option>
                            <option value="Salón de Belleza / Spa">Salón de Belleza / Spa</option>
                            <option value="Eventos / Entretenimiento">Eventos / Entretenimiento</option>
                            <option value="Otro Servicio Local">Otro Servicio Local</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-xs font-bold font-outfit uppercase tracking-wider text-slate-400">
                            Correo Electrónico Comercial *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                              type="email"
                              value={commerceEmail}
                              onChange={(e) => setCommerceEmail(e.target.value)}
                              placeholder="negocio@email.com"
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-2 focus:ring-pintag-orange/20 text-white font-jakarta text-sm outline-none transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs font-bold font-outfit uppercase tracking-wider text-slate-400">
                            Número de WhatsApp Comercial *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                              type="tel"
                              value={commercePhone}
                              onChange={(e) => setCommercePhone(e.target.value)}
                              placeholder="Ej: +593 99 999 9999"
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-2 focus:ring-pintag-orange/20 text-white font-jakarta text-sm outline-none transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-pintag-orange text-white font-outfit font-bold text-base tracking-wide shadow-lg shadow-pintag-orange/20 hover:bg-pintag-orange/95 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:-translate-y-0 transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
                      >
                        <Send className="w-5 h-5" />
                        <span>{loading ? "Procesando Aplicación..." : "Aplicar al Piloto PINTAG"}</span>
                      </button>
                    </form>
                  ) : (
                    /* USER FORM */
                    <form onSubmit={handleUserSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-xs font-bold font-outfit uppercase tracking-wider text-slate-400">
                            Nombre Completo *
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                              type="text"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              placeholder="Ej: Sofía Guerrero"
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-2 focus:ring-pintag-orange/20 text-white font-jakarta text-sm outline-none transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs font-bold font-outfit uppercase tracking-wider text-slate-400">
                            Zona de Residencia en Machala *
                          </label>
                          <select
                            value={userZone}
                            onChange={(e) => setUserZone(e.target.value)}
                            className="w-full px-4 py-3.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-2 focus:ring-pintag-orange/20 text-white font-jakarta text-sm outline-none transition-all appearance-none cursor-pointer"
                          >
                            <option value="Machala Centro">Machala Centro</option>
                            <option value="Puerto Bolívar">Puerto Bolívar</option>
                            <option value="El Cambio">El Cambio</option>
                            <option value="Zona Norte">Zona Norte</option>
                            <option value="Zona Sur / Vía Pajonal">Zona Sur / Vía Pajonal</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold font-outfit uppercase tracking-wider text-slate-400">
                          Correo Electrónico Personal *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            placeholder="tuemail@gmail.com"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-2 focus:ring-pintag-orange/20 text-white font-jakarta text-sm outline-none transition-all"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-pintag-orange text-white font-outfit font-bold text-base tracking-wide shadow-lg shadow-pintag-orange/20 hover:bg-pintag-orange/95 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:-translate-y-0 transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
                      >
                        <Send className="w-5 h-5" />
                        <span>{loading ? "Registrando..." : "Entrar a la Lista de Espera VIP"}</span>
                      </button>
                    </form>
                  )}
                </motion.div>
              ) : (
                /* SUCCESS SCREEN */
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-10 space-y-6 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-green-950/60 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 shadow-xl shadow-green-500/10">
                    <CheckCircle2 className="w-12 h-12 animate-pulse" />
                  </div>
                  
                  <div className="space-y-2 max-w-lg">
                    <h3 className="font-outfit text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {activeTab === "comercio" ? "¡Aplicación Recibida!" : "¡Registro Exitoso!"}
                    </h3>
                    <p className="font-jakarta text-sm text-slate-300 leading-relaxed font-medium">
                      {activeTab === "comercio"
                        ? "Hemos registrado a PINTAG tu interés para el piloto cerrado en Machala. Analizaremos tu local comercial y nos pondremos en contacto contigo vía WhatsApp o Correo en las próximas 24 horas."
                        : "¡Ya eres parte de la lista de espera VIP de PINTAG! Serás el primero en recibir notificaciones de los cofres AR y pines activos en Machala tan pronto abramos el acceso."}
                    </p>
                  </div>

                  <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl text-xs max-w-sm flex items-center space-x-3.5 text-left text-pintag-orange font-bold font-jakarta">
                    <Award className="w-8 h-8 shrink-0 text-pintag-orange" />
                    <span>Beneficio: Cupo pre-registrado en el servidor. Te enviaremos un minijuego AR exclusivo a tu correo electrónico.</span>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full border border-white/10 text-xs font-outfit text-slate-400 hover:text-white transition-colors"
                    >
                      Registrar otro contacto
                    </button>
                    <button
                      onClick={() => {
                        const el = document.getElementById("experiencia");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 py-2.5 rounded-full bg-pintag-orange text-white text-xs font-outfit font-bold hover:bg-pintag-orange/90 transition-colors shadow-lg shadow-pintag-orange/20"
                    >
                      Explorar la Experiencia
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
