'use client'
import { useEffect, useRef, useState } from 'react'

export default function MenuReservations() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FFF8F0]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-3"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Menú & Reservas
          </h2>
          {/* Terracotta underline */}
          <div className="w-16 h-1 bg-[#C4541A] mx-auto rounded-full mb-5" />
          <p className="text-[#2C1810]/70 text-base md:text-lg max-w-xl mx-auto">
            Explora nuestra carta y reserva tu mesa en un solo lugar
          </p>
        </div>

        {/* iframe */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#2C1810]/5">
          {/* Loading skeleton */}
          {!loaded && (
            <div className="absolute inset-0 z-10 bg-[#FFF8F0] flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-[#FAF7F2] border-t-[#C4541A] animate-spin" />
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-48 h-3 bg-[#C4541A]/20 rounded-full animate-pulse" />
                  <div className="w-32 h-3 bg-[#C4541A]/10 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          )}
          <iframe
            src="https://divino-cocina-artesanal.cluvi.co"
            className="w-full h-[75vh] min-h-[560px] md:h-[900px]"
            title="Menú y Reservas Di'Vino"
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
