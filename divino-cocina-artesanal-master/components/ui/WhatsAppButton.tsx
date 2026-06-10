'use client'

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=573017590285"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 animate-bounce-subtle motion-reduce:animate-none"
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-110 motion-reduce:hover:scale-100 transition-all duration-200">
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L.057 23.886l6.195-1.438A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.029 21.818a9.857 9.857 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.846 9.846 0 012.182 12c0-5.424 4.413-9.836 9.847-9.836 5.435 0 9.847 4.412 9.847 9.836 0 5.424-4.412 9.818-9.847 9.818z" />
        </svg>
      </div>
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#2C1810] text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        ¡Escríbenos!
      </span>
    </a>
  )
}
