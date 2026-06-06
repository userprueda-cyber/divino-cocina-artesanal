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

const siteUrl = "https://divino-cocina-artesanal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Di'Vino Cocina Artesanal | Restaurante Italiano en Pereira",
  description:
    "Restaurante italiano artesanal en Pereira, Colombia. Pasta hecha a mano, ingredientes frescos y el calor de Italia en cada plato. C.C. Castilla Plaza, Km 10 Vía Cerritos.",
  keywords: ["restaurante italiano", "Pereira", "cocina artesanal", "pasta", "Di'Vino", "Risaralda", "trattoria"],
  openGraph: {
    title: "Di'Vino Cocina Artesanal — Trattoria Italiana en Pereira",
    description:
      "Ingredientes frescos, recetas auténticas y el calor de Italia. En el corazón de Pereira, Colombia.",
    url: siteUrl,
    siteName: "Di'Vino Cocina Artesanal",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Di'Vino Cocina Artesanal — Interior del restaurante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Di'Vino Cocina Artesanal | Pereira",
    description: "Trattoria italiana artesanal en el corazón de Pereira.",
    images: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Di'Vino Cocina Artesanal",
  description:
    "Restaurante italiano artesanal en Pereira, Colombia. Pasta hecha a mano, ingredientes frescos.",
  url: siteUrl,
  telephone: "+573017590285",
  servesCuisine: "Italian",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C.C. Castilla Plaza, Km 10 Vía Cerritos",
    addressLocality: "Pereira",
    addressRegion: "Risaralda",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.8137,
    longitude: -75.7234,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "22:00",
    },
  ],
  sameAs: ["https://www.instagram.com/divino.cocinartesanal"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${lato.variable} ${dancingScript.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* Skip link — accesibilidad teclado */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C4541A] focus:text-white focus:rounded-lg focus:font-semibold focus:text-sm focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
