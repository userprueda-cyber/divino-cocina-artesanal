import type { Metadata } from "next";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Di'Vino Cocina Artesanal | Pereira, Colombia",
  description:
    "Restaurante italiano artesanal en Pereira. Pasta hecha a mano, ingredientes frescos y el calor de Italia en cada plato. C.C. Castilla Plaza, Km 10 Vía Cerritos.",
  keywords: ["restaurante italiano", "Pereira", "cocina artesanal", "pasta", "Di'Vino"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${lato.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
