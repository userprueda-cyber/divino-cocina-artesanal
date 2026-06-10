"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const SPRING = { mass: 0.8, damping: 30, stiffness: 80 };

export function MouseFollowGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, { mass: 0.5, damping: 20, stiffness: 60 });

  useEffect(() => {
    const section = containerRef.current?.closest("section");
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      xSpring.set(e.clientX - bounds.left);
      ySpring.set(e.clientY - bounds.top);
    };
    const onEnter = () => opacitySpring.set(1);
    const onLeave = () => opacitySpring.set(0);

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, [xSpring, ySpring, opacitySpring]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute pointer-events-none"
        aria-hidden="true"
      >
        {/* Very soft warm glow — barely visible, like candlelight */}
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,84,26,0.06) 0%, rgba(139,105,20,0.03) 45%, transparent 70%)",
          }}
        />
      </motion.div>
    </div>
  );
}
