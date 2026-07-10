import React from "react";
import Header from "@/components/Header";
import HeroSimulator from "@/components/HeroSimulator";
import Manifesto from "@/components/Manifesto";
import ContrastSection from "@/components/ContrastSection";
import Superpower from "@/components/Superpower";
import ActionSection from "@/components/ActionSection";
import InteractiveMap from "@/components/InteractiveMap";
import BusinessB2B from "@/components/BusinessB2B";
import ReviewsSection from "@/components/ReviewsSection";
import RegistrationForm from "@/components/RegistrationForm";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-pintag-cream">
      {/* Top sticky glass header */}
      <Header />

      {/* Main content flow */}
      <main className="flex-1">
        {/* 1. HERO Section with 3D animated AR device simulator mockup */}
        <HeroSimulator />

        {/* 2. Manifesto: Menos scroll, más vida */}
        <Manifesto />

        {/* 2.5. Comparativa: El Manifiesto de lo Real (PINTAG vs El Viejo Internet) */}
        <ContrastSection />

        {/* 3. El Superpoder: Todo lo que amas en una sola coordenada */}
        <Superpower />

        {/* 4. Sección de Acción: Gamificación e Inmersión (Pintag Drops, Streaks & Ayuda) */}
        <ActionSection />

        {/* 5. Mapa Interactivo Simplificado (Pintag Drops naranjas en mapa crema) */}
        <InteractiveMap />

        {/* 6. B2B Section: Para comercios locales con embudo de conversión y formulario integrado */}
        <BusinessB2B />

        {/* 6.5. Sección de Reseñas Interactivas (Social Proof de Machala) */}
        <ReviewsSection />

        {/* 7. Registro General & Lista de Espera Beta */}
        <RegistrationForm />
      </main>

      {/* Persistent floating sticky CTA for mobile screens */}
      <StickyMobileCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
