'use client'
import { useRef, useEffect, useState } from 'react'

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className = '', fill = '#C4541A' }: SpotlightProps) {
  const ref = useRef<SVGSVGElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      setOpacity(1)
    }
    const handleMouseLeave = () => setOpacity(0)

    const el = ref.current?.parentElement
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <svg
      ref={ref}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="spotlight-gradient"
          cx={position.x}
          cy={position.y}
          r="300"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={fill} stopOpacity="0.15" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#spotlight-gradient)"
        style={{ opacity, transition: 'opacity 0.3s ease' }}
      />
      {/* Static ambient warm glow */}
      <ellipse
        cx="30%"
        cy="50%"
        rx="350"
        ry="300"
        fill={fill}
        fillOpacity="0.06"
      />
    </svg>
  )
}
