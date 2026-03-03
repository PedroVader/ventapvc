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
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
