'use client'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FAF7F2] flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center py-24 lg:py-0">
        {/* Left — Text */}
        <div className="relative flex flex-col gap-5 lg:gap-6 pt-8 lg:pt-0">
          <Spotlight className="hidden lg:block" fill="#C4541A" />

          {/* Italian tag */}
          <div className="inline-flex items-center gap-2">
            <span
              className="text-[#C4541A] text-xl md:text-2xl"
              style={{ fontFamily: 'var(--font-dancing-script)' }}
            >
              Desde 🇮🇹 para ti
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-[#2C1810]"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Cocina Italiana
            <br />
            <span className="text-[#C4541A]">Artesanal</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#2C1810]/70 text-base md:text-lg max-w-md leading-relaxed">
            Ingredientes frescos, recetas auténticas y el calor de Italia en cada plato.
            En el corazón de Pereira.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#menu"
              className="px-6 py-3 rounded-full bg-[#C4541A] text-white font-semibold text-sm hover:bg-[#a84316] transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Menú & Reservar
            </a>
            <a
              href="#ubicacion"
              className="px-6 py-3 rounded-full border-2 border-[#2C1810] text-[#2C1810] font-semibold text-sm hover:bg-[#2C1810] hover:text-[#FAF7F2] transition-all duration-200"
            >
              ¿Cómo llegar?
            </a>
          </div>
        </div>

        {/* Right — Spline */}
        <div className="relative h-[50vh] lg:h-screen w-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 30C360 60 720 0 1080 30C1260 45 1380 30 1440 20V60H0V30Z"
            fill="#FFF8F0"
          />
        </svg>
      </div>
    </section>
  )
}
