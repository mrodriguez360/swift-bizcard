import { useEffect, useRef } from "react";

const supportsMotion = () =>
  typeof window !== "undefined" &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function InteractiveBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsMotion()) return;
    let rafId = 0;
    const onMove = (e: MouseEvent) => {
      rafId = window.requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        el.style.setProperty("--x", `${x}%`);
        el.style.setProperty("--y", `${y}%`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 [--x:50%] [--y:50%] overflow-hidden"
    >
      {/* Base gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/92 to-background/88" />
      {/* Cursor-following spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), hsl(var(--primary)/0.10), transparent 40%)",
        }}
      />
      {/* Soft color wash with slow rotation */}
      <div
        className="absolute inset-[-10%] opacity-35 blur-3xl animate-bg-move"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, hsl(var(--brand)/0.06), hsl(var(--brand-2)/0.06), transparent 35%)",
        }}
      />
      {/* Parallax dots following cursor subtly */}
      <div
        className="absolute inset-[-15%] opacity-25"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--muted-foreground)/0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform: "translate3d(calc((var(--x) - 50%) / 18), calc((var(--y) - 50%) / 18), 0)",
        }}
      />
      {/* Faint grid texture */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--muted-foreground)/0.05) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--muted-foreground)/0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
