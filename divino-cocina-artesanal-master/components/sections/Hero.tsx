'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { ParticlesInit } from '@/components/ui/particles-init'

const SparklesCore = dynamic(
  () => import('@/components/ui/sparkles').then((m) => m.SparklesCore),
  { ssr: false }
)
const MouseFollowGlow = dynamic(
  () => import('@/components/ui/mouse-follow-glow').then((m) => m.MouseFollowGlow),
  { ssr: false }
)

/** true solo si la sección está en viewport Y el usuario no pidió reducir movimiento */
function useShowParticles(ref: React.RefObject<HTMLElement | null>) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return show
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const showParticles = useShowParticles(sectionRef)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#FAF7F2] flex items-center overflow-hidden"
    >
      {/* Layer 1 — Sparkles tipo pimienta flotante (solo en viewport, respeta reduced-motion) */}
      {showParticles && (
        <ParticlesInit>
          <div className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <SparklesCore
              id="hero-sparkles-gold"
              background="transparent"
              minSize={0.4}
              maxSize={1.8}
              particleDensity={50}
              particleColor="#8B6914"
              speed={1.2}
              className="w-full h-full"
            />
            <div className="absolute inset-0">
              <SparklesCore
                id="hero-sparkles-terra"
                background="transparent"
                minSize={0.3}
                maxSize={1.2}
                particleDensity={20}
                particleColor="#C4541A"
                speed={0.8}
                className="w-full h-full"
              />
            </div>
          </div>
        </ParticlesInit>
      )}

      {/* Layer 2 — Mouse follow glow (se auto-conecta al <section> padre) */}
      <MouseFollowGlow />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-0 items-center py-28 lg:py-0 min-h-screen">

        {/* Left — Text */}
        <div className="flex flex-col gap-5 lg:gap-6 lg:w-1/2">

          <div className="inline-flex items-center gap-2">
            <span
              className="text-[#C4541A] text-xl md:text-2xl"
              style={{ fontFamily: 'var(--font-dancing-script)' }}
            >
              Desde <span aria-hidden="true">🇮🇹</span>
              <span className="sr-only">Italia</span> para ti
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-[#2C1810]"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Cocina Italiana
            <br />
            <span className="text-[#C4541A]">Artesanal</span>
          </h1>

          <p className="text-[#2C1810]/70 text-base md:text-lg max-w-md leading-relaxed">
            Ingredientes frescos, recetas auténticas y el calor de Italia en cada plato.
            En el corazón de Pereira.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#menu"
              className="px-6 py-3 rounded-full bg-[#C4541A] text-white font-semibold text-sm hover:bg-[#a84316] hover:scale-105 focus-visible:scale-105 motion-reduce:hover:scale-100 shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4541A] focus-visible:ring-offset-2"
            >
              Ver Menú & Reservar
            </a>
            <a
              href="#ubicacion"
              className="px-6 py-3 rounded-full border-2 border-[#2C1810] text-[#2C1810] font-semibold text-sm hover:bg-[#2C1810] hover:text-[#FAF7F2] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C1810] focus-visible:ring-offset-2"
            >
              ¿Cómo llegar?
            </a>
          </div>
        </div>

        {/* Right — Quote decorativa, solo desktop */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <div className="relative max-w-sm select-none">
            <span
              className="absolute -top-10 -left-6 text-[10rem] leading-none text-[#C4541A]/10 pointer-events-none"
              style={{ fontFamily: 'var(--font-playfair-display)' }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="relative z-10 flex flex-col gap-4">
              <p
                className="text-3xl text-[#2C1810]/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-dancing-script)' }}
                lang="it"
              >
                La cucina è un atto d&apos;amore, una festa per i sensi e un&apos;arte che nutre l&apos;anima.
              </p>
              <footer
                className="text-sm text-[#C4541A] font-medium tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                — Di&apos;Vino Cocina Artesanal
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C360 60 720 0 1080 30C1260 45 1380 30 1440 20V60H0V30Z" fill="#FFF8F0" />
        </svg>
      </div>
    </section>
  )
}
