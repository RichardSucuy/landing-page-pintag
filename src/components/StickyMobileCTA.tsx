"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px (past the hero)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-40 w-[90%] max-w-[340px] md:hidden"
        >
          <a
            href="#descargar"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-pintag-orange to-amber-500 text-white font-outfit font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-pintag-orange/30 active:scale-98 transition-all text-center animate-bounce-subtle border border-white/20"
          >
            <span>📱 Descargar la Beta</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
