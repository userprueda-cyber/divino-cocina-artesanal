'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const images = [
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600', alt: 'Interior acogedor del restaurante' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', alt: 'Platos italianos artesanales' },
  { src: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600', alt: 'Pasta fresca hecha a mano' },
  { src: 'https://images.unsplash.com/photo-1473093226555-0b57e2eb4523?w=600', alt: 'Ingredientes frescos italianos' },
  { src: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=600', alt: 'Pizza artesanal al horno' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600', alt: 'Postres italianos tradicionales' },
]

function GalleryImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-60 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        unoptimized
      />
      {/* Terracotta overlay on hover */}
      <div className="absolute inset-0 bg-[#C4541A]/0 group-hover:bg-[#C4541A]/20 transition-all duration-300 flex items-end">
        <p className="w-full text-white text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#2C1810]/60 to-transparent">
          {alt}
        </p>
      </div>
    </div>
  )
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-3"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Galería
          </h2>
          <div className="w-16 h-1 bg-[#C4541A] mx-auto rounded-full mb-5" />
          <p className="text-[#2C1810]/65 text-base md:text-lg">
            Una experiencia que entra por los ojos
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <GalleryImage key={img.src} {...img} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
