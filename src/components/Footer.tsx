"use client";

import React, { useState } from "react";
import { MessageSquare, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate saving lead
    setTimeout(() => {
      setSubscribed(true);
      const subscribers = JSON.parse(localStorage.getItem("pintag_newsletter") || "[]");
      subscribers.push({ email, date: new Date().toISOString() });
      localStorage.setItem("pintag_newsletter", JSON.stringify(subscribers));
      setEmail("");
    }, 600);
  };

  return (
    <footer id="contacto" className="bg-pintag-cream/40 text-pintag-teal py-16 border-t border-pintag-teal/10 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-pintag-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-pintag-teal/10 pb-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-5">
            <a href="#" className="flex items-center space-x-2 group w-fit">
              <img
                src="/logo.png"
                alt="Pintag Logo"
                className="w-9 h-9 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              />
              <span className="font-outfit text-xl font-extrabold tracking-tight text-pintag-teal">
                PIN<span className="text-pintag-orange">TAG</span>
              </span>
            </a>
            <p className="font-jakarta text-sm text-pintag-teal/80 leading-relaxed max-w-sm font-medium">
              PINTAG es la red social hiperlocal que saca el entretenimiento, las ofertas y los mensajes de las redes tradicionales y los pinta en las calles reales de tu ciudad.
            </p>
            <div className="flex items-center space-x-3.5 pt-2">
              <a href="#" className="p-2 rounded-xl bg-white hover:bg-pintag-orange hover:text-white transition-colors duration-200 border border-pintag-teal/10 text-pintag-teal" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-xl bg-white hover:bg-pintag-orange hover:text-white transition-colors duration-200 border border-pintag-teal/10 text-pintag-teal" aria-label="Twitter X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-xl bg-white hover:bg-pintag-orange hover:text-white transition-colors duration-200 border border-pintag-teal/10 text-pintag-teal" aria-label="Message">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div className="space-y-4">
              <h4 className="font-outfit text-sm font-bold text-pintag-teal uppercase tracking-wider">
                Navegación
              </h4>
              <ul className="space-y-2.5 text-xs font-jakarta font-semibold text-pintag-teal/80">
                <li>
                  <a href="#proyecto" className="hover:text-pintag-orange transition-colors">El Proyecto</a>
                </li>
                <li>
                  <a href="#comercios" className="hover:text-pintag-orange transition-colors">Para Comercios</a>
                </li>
                <li>
                  <a href="#comunidad" className="hover:text-pintag-orange transition-colors">Comunidad</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-outfit text-sm font-bold text-pintag-teal uppercase tracking-wider">
                Legal & Contacto
              </h4>
              <ul className="space-y-2.5 text-xs font-jakarta font-semibold text-pintag-teal/80">
                <li>
                  <a href="#" className="hover:text-pintag-orange transition-colors">Privacidad de Ubicación</a>
                </li>
                <li>
                  <a href="#" className="hover:text-pintag-orange transition-colors">Términos de Servicio</a>
                </li>
                <li>
                  <span className="block text-pintag-teal/50 mt-1 font-mono">contacto@pintag.app</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-outfit text-sm font-bold text-pintag-teal uppercase tracking-wider">
              Boletín Urbano
            </h4>
            <p className="font-jakarta text-xs text-pintag-teal/70 leading-relaxed font-semibold">
              Recibe notificaciones mensuales sobre nuevos comercios y eventos de AR en Machala.
            </p>

            {subscribed ? (
              <div className="p-3 bg-pintag-orange/10 border border-pintag-orange/20 rounded-xl text-xs font-jakarta font-bold text-pintag-orange text-center">
                ¡Gracias por suscribirte! 🌸
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo"
                  className="w-full px-3.5 py-2.5 bg-white border border-pintag-teal/15 rounded-xl focus:border-pintag-orange text-pintag-teal font-jakarta text-xs outline-none transition-all font-semibold"
                  required
                />
                <button
                  type="submit"
                  className="p-2.5 bg-pintag-orange text-white rounded-xl shadow-md hover:bg-pintag-orange/95 transition-colors cursor-pointer shrink-0"
                >
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Copy block */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-pintag-teal/60 font-jakarta font-bold">
          <p>© {new Date().getFullYear()} PINTAG. Todos los derechos reservados.</p>
          <p className="mt-2.5 sm:mt-0 flex items-center gap-1">
            <span>Diseñado con pasión para iOS y Android en Machala, Ecuador</span>
            <span className="text-pintag-orange">🇪🇨</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
