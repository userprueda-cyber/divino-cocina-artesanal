"use client";
import { useCallback, useEffect, useState } from "react";
import { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesInit({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true) }, []);

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Don't render ParticlesProvider on the server — avoids Vercel SSR crash
  if (!mounted) return <>{children}</>;

  return <ParticlesProvider init={init}>{children}</ParticlesProvider>;
}
