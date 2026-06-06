'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView(0.5)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { label: 'Posts', value: 256, suffix: '' },
  { label: 'Google', value: 4.5, suffix: '★', fixed: 1 },
  { label: 'Seguidores', value: 7, suffix: 'K+' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#FAF7F2]">
      {/* Thin terracotta line */}
      <div className="w-24 h-0.5 bg-[#C4541A] mx-auto mb-16" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left */}
        <div className="flex flex-col gap-6">
          <p className="text-[#C4541A] text-xs font-bold tracking-[0.2em] uppercase">
            Nuestra Historia
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] leading-tight"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Arte en cada plato, pasión en cada receta
          </h2>
          <p className="text-[#2C1810]/70 leading-relaxed">
            En Di&apos;Vino nació un sueño: traer la esencia de las antiguas trattorias italianas
            al corazón del Eje Cafetero. Cada plato es una historia contada con ingredientes
            frescos del mercado local, mezclados con las técnicas más auténticas de la cucina
            italiana. Nuestra pasta se amasa a mano cada mañana, nuestras salsas se cocinan a
            fuego lento y cada detalle refleja el amor por el arte culinario.
          </p>
          <p className="text-[#2C1810]/70 leading-relaxed">
            Desde nuestra apertura, hemos creado un rincón acogedor donde la familia y los
            amigos se reúnen a compartir sabores que evocan las colinas de Toscana. El aroma
            del pan recién horneado, el calor de nuestros espacios y la calidez de nuestro
            servicio hacen de cada visita una experiencia memorable. Bienvenido a tu trattoria
            en Pereira.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-white shadow-sm border border-[#2C1810]/5">
                <span
                  className="text-2xl md:text-3xl font-bold text-[#C4541A]"
                  style={{ fontFamily: 'var(--font-playfair-display)' }}
                >
                  {s.fixed ? (
                    <span>{s.value.toFixed(s.fixed)}{s.suffix}</span>
                  ) : (
                    <><CountUp end={s.value} suffix={s.suffix} /></>
                  )}
                </span>
                <span className="text-xs text-[#2C1810]/60 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#C4541A]/20">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
              alt="Interior acogedor Di'Vino Cocina Artesanal"
              width={800}
              height={600}
              className="w-full h-[400px] lg:h-[500px] object-cover"
              unoptimized
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/20 to-transparent" />
          </div>
          {/* Decorative quote */}
          <div className="absolute -bottom-4 -left-4 bg-[#C4541A] text-white px-5 py-3 rounded-xl shadow-lg max-w-[200px]">
            <p
              className="text-sm leading-snug"
              style={{ fontFamily: 'var(--font-dancing-script)' }}
            >
              &ldquo;La buona cucina è un'arte&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
