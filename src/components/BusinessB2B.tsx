"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Target, CheckCircle2, Building, Mail, Phone, Send, Award, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function BusinessB2B() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states - Commerce
  const [commerceName, setCommerceName] = useState("");
  const [commerceCategory, setCommerceCategory] = useState("Restaurante / Cafetería");
  const [commerceEmail, setCommerceEmail] = useState("");
  const [commercePhone, setCommercePhone] = useState("");

  const steps = [
    {
      title: "Configura tu geocerca",
      description: "Define el perímetro de influencia física alrededor de tu local comercial en Machala."
    },
    {
      title: "Publica tus beneficios",
      description: "Lanza ofertas 3D WebAR o cofres que aparecen en tiempo real para los peatones cercanos."
    },
    {
      title: "Lleva clientes a caja",
      description: "Mide cómo el tráfico peatonal se traduce en visitas verificadas y transacciones reales."
    }
  ];

  const handleConfetti = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <section id="comercios" className="py-20 bg-white relative overflow-hidden border-t border-b border-pintag-teal/10 scroll-mt-20">
      {/* Light background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Pitch, steps & Funnel */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pintag-orange/10 border border-pintag-orange/20 text-pintag-orange text-xs font-bold uppercase tracking-wider mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>PINTAG para Comercios</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pintag-teal mt-2 mb-5 leading-none"
              >
                Lleva el tráfico digital <br />
                <span className="text-pintag-orange font-caveat font-medium glow-text">a tu puerta física.</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-jakarta text-base sm:text-lg text-pintag-teal/80 font-medium leading-relaxed"
              >
                Olvídate de los anuncios digitales invasivos e ineficientes que nadie ve. Con PINTAG, tu local comercial es el destino de la experiencia. Dirigimos a peatones activos que caminan en la calle directamente a tu caja mediante dinámicas de realidad aumentada.
              </motion.p>
            </div>

            {/* List of Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-pintag-cream/20 border border-pintag-teal/5 hover:border-pintag-teal/10 hover:bg-pintag-cream/30 transition-all duration-200"
                >
                  <div className="p-2 bg-pintag-orange/10 text-pintag-orange rounded-xl border border-pintag-orange/20 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-outfit text-base font-bold text-pintag-teal tracking-tight">
                      {step.title}
                    </h3>
                    <p className="font-jakarta text-xs text-pintag-teal/70 leading-relaxed font-semibold">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Professional B2B Funnel Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-pintag-cream/15 border border-pintag-teal/10 p-5 rounded-2xl space-y-3"
            >
              <span className="font-mono text-[9px] font-extrabold uppercase tracking-wider text-pintag-teal/60 block">
                Embudo de Conversión de Tráfico Urbano
              </span>
              <div className="flex items-center justify-center py-2 bg-white/40 rounded-xl border border-pintag-teal/5">
                <svg className="w-full max-w-[420px] h-[120px]" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top Layer: Impresiones */}
                  <path d="M 15 5 L 385 5 L 330 38 L 70 38 Z" fill="#2A7A78" opacity="0.08" stroke="#2A7A78" strokeWidth="1.5" />
                  <text x="200" y="24" fill="#2A7A78" fontSize="9" fontFamily="var(--font-outfit)" fontWeight="bold" textAnchor="middle">1. IMPRESIONES (Mapa / Visibilidad)</text>
                  
                  {/* Middle Layer: Proximidad */}
                  <path d="M 75 44 L 325 44 L 275 77 L 125 77 Z" fill="#2A7A78" opacity="0.15" stroke="#2A7A78" strokeWidth="1.5" />
                  <text x="200" y="63" fill="#2A7A78" fontSize="9" fontFamily="var(--font-outfit)" fontWeight="bold" textAnchor="middle">2. PROXIMIDAD (Geofencing Activo)</text>
                  
                  {/* Bottom Layer: Conversión */}
                  <path d="M 130 83 L 270 83 L 230 115 L 170 115 Z" fill="#FF6B00" opacity="0.15" stroke="#FF6B00" strokeWidth="1.5" />
                  <text x="200" y="102" fill="#FF6B00" fontSize="9" fontFamily="var(--font-outfit)" fontWeight="bold" textAnchor="middle">3. CONVERSIÓN (Caja / Escaneo QR)</text>
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2 space-y-3"
            >
              <div className="flex items-center space-x-2 text-xs font-bold text-pintag-orange font-jakarta">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping shrink-0" />
                <span>Plan Semilla: Cupos limitados para el piloto (Quedan 3 lugares)</span>
              </div>
              <a
                href="#b2b-form-card"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-pintag-orange text-white font-outfit font-bold text-base tracking-wide shadow-lg shadow-pintag-orange/20 hover:shadow-pintag-orange/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group animate-bounce-subtle"
              >
                <span>Postular mi local al piloto</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Mockup Premium Dashboard + Integrated Registration Form (LOI) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 justify-center items-center">
            {/* Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-pintag-teal/15 p-6 rounded-3xl w-full max-w-[400px] shadow-xl relative"
              style={{
                boxShadow: "0 20px 40px rgba(51,127,124,0.06), 0 0 25px rgba(255,107,0,0.02)"
              }}
            >
              {/* Visual highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-pintag-orange/10 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-pintag-teal/10 pb-4 mb-6">
                <div>
                  <h4 className="font-outfit text-sm font-bold text-pintag-teal tracking-tight">Panel PINTAG Business</h4>
                  <p className="text-[10px] text-pintag-teal/60 font-semibold font-jakarta">Pizzería 'El Antojo' • Machala</p>
                </div>
                <span className="text-[9px] font-mono text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  En Vivo
                </span>
              </div>

              {/* Big Metric Box */}
              <div className="bg-pintag-cream/30 border border-pintag-teal/5 rounded-2xl p-4 mb-5 text-center relative overflow-hidden">
                <div className="absolute top-1.5 right-2">
                  <Target className="w-4 h-4 text-pintag-orange animate-pulse" />
                </div>
                <span className="text-[10px] text-pintag-teal/60 uppercase font-bold tracking-wider font-mono">Visitas Físicas Verificadas</span>
                <div className="text-4xl font-extrabold font-outfit text-pintag-teal tracking-tight mt-1">128</div>
                <span className="text-[10px] text-green-600 font-bold block mt-1">
                  +18% esta semana
                </span>
              </div>

              {/* Submetrics list */}
              <div className="space-y-3.5 mb-6">
                <div className="flex items-center justify-between p-3 bg-pintag-cream/10 border border-pintag-teal/5 rounded-xl text-xs font-jakarta font-semibold text-pintag-teal/80">
                  <span>Pines AR escaneados</span>
                  <span className="font-bold text-pintag-teal font-mono">482 scans</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-pintag-cream/10 border border-pintag-teal/5 rounded-xl text-xs font-jakarta font-semibold text-pintag-teal/80">
                  <span>CTR de Recompensas</span>
                  <span className="font-bold text-pintag-orange font-mono">26.5%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-pintag-cream/10 border border-pintag-teal/5 rounded-xl text-xs font-jakarta font-semibold text-pintag-teal/80">
                  <span>Retorno de Inversión (ROI)</span>
                  <span className="font-bold text-green-600 font-mono">3.4x</span>
                </div>
              </div>

              {/* Interactive bar graph */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-[10px] font-semibold text-pintag-teal/60">
                  <span>Tráfico por Hora (Pico: 18:00)</span>
                  <span>14:00 - 21:00</span>
                </div>
                <div className="flex items-end gap-1.5 h-16 pt-2">
                  <div className="w-full bg-slate-100 rounded-t-sm h-[30%]" />
                  <div className="w-full bg-slate-100 rounded-t-sm h-[45%]" />
                  <div className="w-full bg-slate-100 rounded-t-sm h-[60%]" />
                  <div className="w-full bg-pintag-orange rounded-t-sm h-[95%]" />
                  <div className="w-full bg-pintag-teal rounded-t-sm h-[80%]" />
                  <div className="w-full bg-slate-100 rounded-t-sm h-[50%]" />
                  <div className="w-full bg-slate-100 rounded-t-sm h-[35%]" />
                </div>
              </div>
            </motion.div>

            {/* B2B Registration Form (LOI) */}
            <motion.div
              id="b2b-form-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-pintag-darkBg text-white border border-white/10 p-6 sm:p-8 rounded-3xl w-full max-w-[400px] shadow-2xl relative scroll-mt-24"
            >
              {/* Scarcity Banner Overlay */}
              <div className="absolute -top-3.5 left-4 right-4 bg-gradient-to-r from-pintag-orange to-amber-500 py-1.5 px-4 rounded-full flex items-center justify-between text-[9px] font-bold tracking-wider uppercase text-white shadow-md">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-ping" />
                  Únete al piloto exclusivo en Machala
                </span>
                <span>Solo 3 cupos</span>
              </div>

              <div className="pt-2">
                <h4 className="font-outfit text-base font-extrabold text-white mb-1">
                  Registra tu Local
                </h4>
                <p className="font-jakarta text-[11px] text-slate-300 font-semibold mb-4 leading-normal">
                  Completa tu registro de interés (LOI) y asegura el piloto cerrado de PINTAG en tu zona comercial.
                </p>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="b2b-form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {error && (
                        <div className="p-3 bg-red-950/40 border border-red-900/40 rounded-xl flex items-center space-x-2 text-red-300 text-[11px]">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      <div className="space-y-1">
                        <label className="block text-[9px] font-bold font-outfit uppercase tracking-wider text-slate-400">
                          Nombre del Establecimiento *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            value={commerceName}
                            onChange={(e) => setCommerceName(e.target.value)}
                            placeholder="Ej: Cafetería El Parque"
                            className="w-full pl-10 pr-3 py-2.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-1 focus:ring-pintag-orange/20 text-white font-jakarta text-xs outline-none transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[9px] font-bold font-outfit uppercase tracking-wider text-slate-400">
                          Categoría *
                        </label>
                        <select
                          value={commerceCategory}
                          onChange={(e) => setCommerceCategory(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-1 focus:ring-pintag-orange/20 text-white font-jakarta text-xs outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="Restaurante / Cafetería">Restaurante / Cafetería</option>
                          <option value="Boutique / Tienda de Ropa">Boutique / Tienda de Ropa</option>
                          <option value="Gimnasio / Deporte">Gimnasio / Deporte</option>
                          <option value="Salón de Belleza / Spa">Salón de Belleza / Spa</option>
                          <option value="Otro Servicio Local">Otro Servicio Local</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[9px] font-bold font-outfit uppercase tracking-wider text-slate-400">
                          Correo Electrónico Comercial *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="email"
                            value={commerceEmail}
                            onChange={(e) => setCommerceEmail(e.target.value)}
                            placeholder="negocio@email.com"
                            className="w-full pl-10 pr-3 py-2.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-1 focus:ring-pintag-orange/20 text-white font-jakarta text-xs outline-none transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[9px] font-bold font-outfit uppercase tracking-wider text-slate-400">
                          Número de WhatsApp Comercial *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="tel"
                            value={commercePhone}
                            onChange={(e) => setCommercePhone(e.target.value)}
                            placeholder="Ej: +593 99 999 9999"
                            className="w-full pl-10 pr-3 py-2.5 bg-slate-900/60 border border-white/10 rounded-xl focus:border-pintag-orange focus:ring-1 focus:ring-pintag-orange/20 text-white font-jakarta text-xs outline-none transition-all"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 mt-2 rounded-xl bg-pintag-orange hover:bg-pintag-orange/95 text-white font-outfit font-bold text-xs tracking-wide shadow-lg shadow-pintag-orange/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:-translate-y-0 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{loading ? "Procesando Aplicación..." : "Activar mi Local"}</span>
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="b2b-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 space-y-4 flex flex-col items-center"
                    >
                      <div className="w-14 h-14 bg-green-950/60 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 shadow-xl">
                        <CheckCircle2 className="w-7 h-7 animate-pulse" />
                      </div>
                      
                      <div className="space-y-1 max-w-xs">
                        <h5 className="font-outfit text-base font-extrabold text-white">
                          ¡Aplicación Recibida!
                        </h5>
                        <p className="font-jakarta text-[11px] text-slate-300 leading-normal">
                          Hemos guardado tu interés comercial. Analizaremos tu local en Machala y nos comunicaremos contigo vía WhatsApp en las próximas 24 horas.
                        </p>
                      </div>

                      <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-[10px] flex items-center space-x-2 text-left text-pintag-orange font-bold font-jakarta">
                        <Award className="w-6 h-6 text-pintag-orange shrink-0" />
                        <span>Cupo pre-registrado. Te contactaremos pronto.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
