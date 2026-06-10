"use client";
import React, { useId } from "react";
import Particles from "@tsparticles/react";
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

// ParticlesProvider must live above this component in the tree (see ParticlesInit)
export const SparklesCore = (props: SparklesCoreProps) => {
  const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props;
  const generatedId = useId();

  return (
    <Particles
      id={id || generatedId}
      className={cn("h-full w-full", className)}
      options={{
        background: { color: { value: background || "transparent" } },
        fullScreen: { enable: false, zIndex: 0 },
        fpsLimit: 60,
        interactivity: {
          events: { onClick: { enable: false }, onHover: { enable: false } },
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
            animation: { enable: true, speed: speed ?? 1.5, sync: false },
          },
          shape: { type: "circle" },
          size: { value: { min: minSize ?? 0.5, max: maxSize ?? 2 } },
        },
        detectRetina: true,
      }}
    />
  );
};
