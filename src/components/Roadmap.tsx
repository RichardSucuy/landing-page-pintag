"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Compass, ShieldCheck, Cpu, Globe } from "lucide-react";

export default function Roadmap() {
  const steps = [
    {
      phase: "Fase 1",
      date: "Q3 2026",
      title: "Piloto Cerrado Machala",
      icon: Compass,
      description: "Lanzamiento exclusivo para 10 comercios pioneros y 500 usuarios beta. Validación de la tecnología WebAR geofencing en el centro comercial de la ciudad y entrega de las primeras recompensas físicas.",
      status: "active",
      color: "border-pintag-orange text-pintag-orange bg-pintag-orange/10"
    },
    {
      phase: "Fase 2",
      date: "Q1 2027",
      title: "Expansión Nacional",
      icon: ShieldCheck,
      description: "Despliegue de PINTAG en Guayaquil y Quito. Alianzas estratégicas con marcas de retail nacionales. Lanzamiento de la plataforma de mini-juegos WebAR integrados y misiones de caza grupal.",
      status: "upcoming",
      color: "border-pintag-teal text-pintag-teal bg-pintag-teal/10"
    },
    {
      phase: "Fase 3",
      date: "Q3 2027",
      title: "PINTAG SDK Abierto",
      icon: Cpu,
      description: "Apertura del motor gráfico WebAR para creadores y modeladores 3D independientes. Cualquier artista local o marca podrá subir sus propios pines, grafitis virtuales o modelos interactivos a la ciudad.",
      status: "upcoming",
      color: "border-purple-500 text-purple-500 bg-purple-500/10"
    },
    {
      phase: "Fase 4",
      date: "2028",
      title: "Descentralización LATAM",
      icon: Globe,
      description: "Expansión regional a Perú, Colombia y Chile. Transición a un protocolo publicitario hiperlocal totalmente descentralizado donde la comunidad valida la autenticidad física de las visitas.",
      status: "upcoming",
      color: "border-blue-500 text-blue-500 bg-blue-500/10"
    }
  ];

  return (
    <section className="py-24 bg-pintag-cream/50 relative overflow-hidden border-t border-pintag-teal/10">
      {/* Dots pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      {/* Dynamic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="font-outfit text-xs font-bold tracking-wider text-pintag-orange uppercase bg-pintag-orange/10 px-3.5 py-1 rounded-full">
            NUESTRA VISIÓN
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pintag-teal mt-4 mb-4">
            El Roadmap de PINTAG
          </h2>
          <p className="font-jakarta text-base sm:text-lg text-pintag-teal/80 font-medium">
            Tenemos un plan a largo plazo para redefinir cómo interactuamos con las redes sociales y el comercio local. Únete hoy y sé pionero en el camino.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pintag-orange via-pintag-teal to-blue-400 rounded-full transform md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.title} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Icon Node Anchor */}
                  <div className="absolute left-6 md:left-1/2 top-0 transform -translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-pintag-cream shadow-xl ${
                        step.status === "active" ? "bg-pintag-orange text-white glow-orange" : "bg-pintag-teal text-white"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Left spacer / right content block for alternating layout */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 flex ${isEven ? "md:justify-end" : "md:order-last md:pl-12 md:justify-start"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card-light p-8 rounded-[28px] border border-pintag-teal/15 shadow-lg w-full max-w-md relative hover:shadow-xl transition-shadow group"
                    >
                      {/* Alternating tag indicator arrow */}
                      <div className={`hidden md:block absolute top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ${
                        isEven
                          ? "right-[-8px] border-l-8 border-l-white"
                          : "left-[-8px] border-r-8 border-r-white"
                      }`} />

                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${step.color}`}>
                          {step.phase}
                        </span>
                        <span className="font-outfit text-sm font-bold text-pintag-orange flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {step.date}
                        </span>
                      </div>

                      <h3 className="font-outfit text-xl font-extrabold text-pintag-teal tracking-tight leading-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="font-jakarta text-sm leading-relaxed text-pintag-teal/80 font-medium">
                        {step.description}
                      </p>

                      {step.status === "active" && (
                        <div className="mt-4 pt-4 border-t border-pintag-teal/5 flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                          <span className="text-xs font-outfit font-extrabold uppercase text-green-600 tracking-wider">Fase Actual en Desarrollo</span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty node for desktop grid spacing */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
