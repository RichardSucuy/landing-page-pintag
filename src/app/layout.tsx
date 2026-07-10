import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "PINTAG | Rompe el algoritmo. Vive tu ciudad.",
  description: "PINTAG es una plataforma hiperlocal basada en WebAR y geofencing que transforma la ciudad en una red social viva. Conecta con negocios, descubre eventos en tiempo real y vive el Bloomscrolling.",
  keywords: [
    "PINTAG",
    "WebAR",
    "Realidad Aumentada",
    "Geofencing",
    "Machala",
    "Ecuador",
    "Bloomscrolling",
    "Publicidad Interactiva",
    "Drive to store",
    "Red Social Hiperlocal",
    "Gamificación Urbana"
  ],
  authors: [{ name: "PINTAG Team", url: "https://pintag.app" }],
  openGraph: {
    title: "PINTAG | Rompe el algoritmo. Vive tu ciudad.",
    description: "Plataforma WebAR hiperlocal que transforma la ciudad en una red social interactiva. Únete al piloto exclusivo en Machala.",
    url: "https://pintag.app",
    siteName: "PINTAG",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PINTAG | Rompe el algoritmo. Vive tu ciudad.",
    description: "Plataforma WebAR hiperlocal que transforma la ciudad en una red social interactiva. Únete al piloto exclusivo en Machala.",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jakarta.variable} ${caveat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pintag-cream text-pintag-teal font-sans">
        {children}
      </body>
    </html>
  );
}
