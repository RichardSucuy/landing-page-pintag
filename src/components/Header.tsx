"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "El Proyecto", href: "#proyecto" },
    { name: "Para Comercios", href: "#comercios" },
    { name: "Comunidad", href: "#comunidad" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-card-light py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <img
                src="/logo.png"
                alt="Pintag Logo"
                className="w-10 h-10 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              />
              <span className="font-outfit text-2xl font-extrabold tracking-tight text-pintag-teal">
                PIN<span className="text-pintag-orange">TAG</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-jakarta text-sm font-semibold text-pintag-teal hover:text-pintag-orange transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#descargar"
                className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-2xl bg-pintag-orange text-white font-outfit font-bold text-sm tracking-wide shadow-lg hover:shadow-pintag-orange/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 overflow-hidden group animate-bounce-subtle"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Descargar la Beta</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-pintag-teal hover:text-pintag-orange hover:bg-pintag-orange/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-pintag-teal/10 bg-pintag-cream/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-xl font-jakarta text-base font-semibold text-pintag-teal hover:text-pintag-orange hover:bg-pintag-orange/5 transition-all"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2 px-3">
                  <a
                    href="#descargar"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center px-6 py-3 rounded-2xl bg-pintag-orange text-white font-outfit font-bold text-center shadow-lg animate-bounce-subtle"
                  >
                    Descargar la Beta
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer to avoid layout jump since header is fixed */}
      <div className="h-20" />
    </>
  );
}
