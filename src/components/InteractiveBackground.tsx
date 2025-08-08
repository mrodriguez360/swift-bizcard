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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
      {/* Cursor-following spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), hsl(var(--primary)/0.15), transparent 40%)",
        }}
      />
      {/* Soft color wash */}
      <div
        className="absolute inset-[-10%] opacity-30 blur-3xl"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, hsl(var(--primary)/0.08), hsl(var(--accent)/0.08), transparent 30%)",
        }}
      />
      {/* Faint grid texture */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120,119,198,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,119,198,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
