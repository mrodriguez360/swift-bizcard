import { useMemo } from "react";

export default function InteractiveBackground() {
  // Generate a set of subtle highlighted cells (AI Studio–style)
  const cells = useMemo(
    () =>
      Array.from({ length: 48 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 8 + Math.random() * 10, // 8px - 18px
        delay: Math.random() * 4, // 0s - 4s
        opacity: 0.35 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Fine grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--muted-foreground)/0.075) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--muted-foreground)/0.075) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle flickering cells (no cursor interaction) */}
      <div className="absolute inset-0">
        {cells.map((c) => (
          <div
            key={c.id}
            className="absolute animate-pulse"
            style={{
              left: `${c.left}%`,
              top: `${c.top}%`,
              width: `${c.size}px`,
              height: `${c.size}px`,
              opacity: c.opacity,
              backgroundColor: "hsl(var(--muted-foreground)/0.12)",
              boxShadow: "0 0 0 1px hsl(var(--muted-foreground)/0.06) inset",
              animationDuration: "2.4s",
              animationDelay: `${c.delay}s`,
            }}
          />)
        )}
      </div>

      {/* Very soft vignette so content pops while preserving the page gradient underneath */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(120% 100% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 100% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
