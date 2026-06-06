'use client'
import { useEffect, useRef, useState } from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export default function Location() {
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
    <section id="ubicacion" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-3"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Dónde Encontrarnos
          </h2>
          <div className="w-16 h-1 bg-[#C4541A] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="bg-white rounded-2xl shadow-xl border border-[#2C1810]/5 p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#C4541A]/10 text-[#C4541A] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#C4541A] uppercase tracking-wider mb-1">Dirección</p>
                <p className="text-[#2C1810] font-medium">C.C. Castilla Plaza</p>
                <p className="text-[#2C1810]/70 text-sm">Km 10 Vía Cerritos, Pereira, Risaralda</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#C4541A]/10 text-[#C4541A] shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#C4541A] uppercase tracking-wider mb-1">Horarios</p>
                <p className="text-[#2C1810] text-sm"><span className="font-medium">Lun – Jue:</span> 12:00 PM – 9:00 PM</p>
                <p className="text-[#2C1810] text-sm"><span className="font-medium">Vie – Dom:</span> 12:00 PM – 10:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#C4541A]/10 text-[#C4541A] shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#C4541A] uppercase tracking-wider mb-1">Teléfono</p>
                <a
                  href="tel:+573017590285"
                  className="text-[#2C1810] font-medium hover:text-[#C4541A] transition-colors"
                >
                  +57 301 759 0285
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#C4541A]/10 text-[#C4541A] shrink-0">
                <InstagramIcon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#C4541A] uppercase tracking-wider mb-1">Instagram</p>
                <a
                  href="https://instagram.com/divino.cocinartesanal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2C1810] font-medium hover:text-[#C4541A] transition-colors"
                >
                  @divino.cocinartesanal
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=573017590285"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1da851] transition-all duration-200 hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L.057 23.886l6.195-1.438A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.029 21.818a9.857 9.857 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.846 9.846 0 012.182 12c0-5.424 4.413-9.836 9.847-9.836 5.435 0 9.847 4.412 9.847 9.836 0 5.424-4.412 9.818-9.847 9.818z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps?q=R538+FV+Divino+Cocina+Artesanal,+Pereira,+Risaralda&ftid=0x8e387bae904f15bf:0x4aa52b52f2ff0d65"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#2C1810] text-[#2C1810] font-semibold text-sm hover:bg-[#2C1810] hover:text-white transition-all duration-200"
              >
                <MapPin size={16} />
                Abrir en Google Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#2C1810]/5 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1234!2d-75.7234!3d4.8137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387bae904f15bf%3A0x4aa52b52f2ff0d65!2sDivino%20Cocina%20Artesanal!5e0!3m2!1ses!2sco!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Di'Vino en Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
