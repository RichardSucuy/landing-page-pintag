"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "¿Qué es WebAR y por qué no tengo que descargar ninguna app?",
      answer: "WebAR es tecnología de Realidad Aumentada que corre directamente en el navegador móvil (Safari, Chrome o Samsung Internet). Simplemente haces clic en un enlace o escaneas un código QR y la cámara se abre cargando los pines y animaciones 3D. Sin descargas pesadas de App Store ni registros molestos."
    },
    {
      question: "¿Cómo se beneficia mi negocio del piloto PINTAG?",
      answer: "Tu negocio aparecerá destacado en el mapa hiperlocal como un centro de recompensas activo. Colocamos cupones digitales y misiones AR en las cercanías de tu local que atraen físicamente a los transeúntes, guiándolos directo a tu establecimiento para consumir. Esto se traduce en más visitas y ventas reales."
    },
    {
      question: "¿Cómo sabe PINTAG que el usuario realmente visitó mi local?",
      answer: "Utilizamos tecnología de geofencing móvil (GPS de alta precisión) integrada en el navegador. El sistema valida la latitud y longitud del usuario en tiempo real. Un cofre o cupón flotante de tu negocio solo puede ser desbloqueado y escaneado cuando el GPS confirma que la persona está dentro o frente a tu local."
    },
    {
      question: "¿El piloto cerrado en Machala tiene algún costo comercial?",
      answer: "No. Para los 10 comercios pioneros que sean aceptados en el programa de piloto en Machala, la configuración de la campaña, la creación de sus pines 3D WebAR y el uso del panel de métricas físicas es 100% gratuito. Queremos co-crear la plataforma y demostrar el valor físico directo."
    },
    {
      question: "¿Qué dispositivos móviles son compatibles con la plataforma?",
      answer: "Cualquier smartphone Android o iPhone moderno (lanzado de 2020 en adelante) con cámara trasera funcional y giroscopio es compatible. La mayoría de los navegadores actuales tienen soporte nativo para los servicios de geolocalización y renderizado 3D que utiliza PINTAG."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-pintag-cream relative scroll-mt-24">
      {/* Glow shapes */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pintag-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-outfit text-xs font-bold tracking-wider text-pintag-orange uppercase bg-pintag-orange/10 px-3.5 py-1 rounded-full">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pintag-teal mt-4 mb-4">
            Resuelve tus dudas
          </h2>
          <p className="font-jakarta text-base text-pintag-teal/80 font-medium">
            ¿Tienes curiosidad de cómo PINTAG combina el GPS y la WebAR para incentivar el comercio? Aquí tienes las respuestas clave.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-card-light rounded-2xl border border-pintag-teal/15 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5.5 h-5.5 shrink-0 ${isOpen ? "text-pintag-orange" : "text-pintag-teal/60"}`} />
                    <span className="font-outfit text-base sm:text-lg font-bold text-pintag-teal tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-pintag-teal/50 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-pintag-orange" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-pintag-teal/5">
                        <p className="font-jakarta text-sm sm:text-base text-pintag-teal/80 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
