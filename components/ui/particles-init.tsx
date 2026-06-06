"use client";
import { useCallback } from "react";
import { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesInit({ children }: { children: React.ReactNode }) {
  // useCallback garantiza que init sea estable — requerimiento de ParticlesProvider
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return <ParticlesProvider init={init}>{children}</ParticlesProvider>;
}
