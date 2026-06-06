"use client";
import React, { useId, useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: SparklesCoreProps) => {
  const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props;

  const generatedId = useId();

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <Particles
        id={id || generatedId}
        className={cn("h-full w-full", className)}
        options={{
          background: { color: { value: background || "transparent" } },
          fullScreen: { enable: false, zIndex: 0 },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: false },
              onHover: { enable: false },
            },
          },
          particles: {
            color: { value: particleColor || "#8B6914" },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: { min: 0.05, max: speed ?? 0.4 },
              straight: false,
            },
            number: {
              density: { enable: true, width: 400, height: 400 },
              value: particleDensity ?? 60,
            },
            opacity: {
              value: { min: 0.08, max: 0.55 },
              animation: {
                enable: true,
                speed: speed ?? 1.5,
                sync: false,
              },
            },
            shape: { type: "circle" },
            size: {
              value: { min: minSize ?? 0.5, max: maxSize ?? 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
};
