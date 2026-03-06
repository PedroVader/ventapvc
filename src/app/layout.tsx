import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VentaPVC.com | Suelos de PVC en España al Mejor Precio",
    template: "%s | VentaPVC.com",
  },
  description:
    "Venta e instalación de suelos de PVC en toda España. Vinílico click, losetas, rollo y SPC. Envío rápido y precios de fábrica. Marca de Disstands, Barcelona.",
  metadataBase: new URL("https://ventapvc.com"),
  alternates: {
    canonical: "/",
    languages: { "es-ES": "/" },
  },
  openGraph: {
    siteName: "VentaPVC.com",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ventapvc",
  },
  robots: { index: true, follow: true },
};

const globalJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VentaPVC.com",
    url: "https://ventapvc.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ventapvc.com/suelos-pvc?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VentaPVC.com",
    url: "https://ventapvc.com",
    logo: "https://ventapvc.com/logo.png",
    description:
      "Venta e instalación de suelos de PVC en toda España. Vinílico click, losetas, rollo y SPC. Precios de fábrica.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-934-123-456",
      contactType: "sales",
      areaServed: "ES",
      availableLanguage: "Spanish",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Industria 45, Local 3",
      addressLocality: "Barcelona",
      postalCode: "08025",
      addressCountry: "ES",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Disstands S.L.",
      url: "https://disstands.com",
    },
    sameAs: [
      "https://www.instagram.com/disstands/",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {globalJsonLd.map((ld, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        ))}
        {/* Hidden forms for Netlify Forms detection on static export */}
        <form name="contacto" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contacto" />
          <input name="bot-field" />
          <input name="nombre" />
          <input name="email" />
          <input name="telefono" />
          <input name="ciudad" />
          <input name="tipoSuelo" />
          <input name="mensaje" />
        </form>
        <form name="presupuesto" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="presupuesto" />
          <input name="bot-field" />
          <input name="nombre" />
          <input name="email" />
          <input name="telefono" />
          <input name="ciudad" />
          <input name="tipoSuelo" />
          <input name="metros" />
          <input name="instalacion" />
          <input name="mensaje" />
        </form>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
