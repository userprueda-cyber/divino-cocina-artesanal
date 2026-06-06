'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#menu', label: 'Menú' },
  { href: '#menu', label: 'Reservas' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY || y < 80)
      setScrolled(y > 20)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-[#FAF7F2]/95 shadow-sm' : 'bg-[#FAF7F2]/80'} backdrop-blur-md`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-2xl lg:text-3xl font-bold text-[#2C1810]"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            Di&apos;Vino
          </span>
          <span
            className="text-xs text-[#C4541A]"
            style={{ fontFamily: 'var(--font-dancing-script)' }}
          >
            Cocina Artesanal
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#2C1810] hover:text-[#C4541A] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#menu"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#C4541A] text-white text-sm font-semibold hover:bg-[#a84316] transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
        >
          Reservar Mesa
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#2C1810]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#2C1810]/10 px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-[#2C1810] hover:text-[#C4541A] text-base font-medium py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#menu"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#C4541A] text-white text-sm font-semibold w-full justify-center mt-2"
                onClick={() => setOpen(false)}
              >
                Reservar Mesa
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
