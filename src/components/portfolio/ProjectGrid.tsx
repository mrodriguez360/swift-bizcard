import { useMemo } from "react";
import { Project } from "@/content/portfolio";

interface ProjectGridProps {
  projects: Project[];
}

const supportsMotion = () =>
  typeof window !== "undefined" &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const allowMotion = useMemo(() => supportsMotion(), []);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!allowMotion) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = -((y / rect.height) - 0.5) * 6;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const onLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!allowMotion) return;
    const el = e.currentTarget;
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl ring-1 ring-border/60 bg-card hover:ring-ring transition-all duration-300 shadow-sm hover:shadow-lg"
          style={{ transform: "perspective(700px)" }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          aria-label={`${p.title} (opens external)`}
        >
          <img
            src={p.image}
            alt={`${p.title} project cover`}
            loading="lazy"
            className="h-36 md:h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity backdrop-brightness-105"
            aria-hidden="true"
          >
            {/* Subtle vertical wash for a clean card feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-transparent" />
            {/* Faint grid for structure without heaviness */}
            <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(hsl(var(--muted-foreground))/0.08_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0]" />
            {/* Gentle top sheen */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-foreground/5 to-transparent" />
            {/* Delicate primary glow at the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-primary/15 via-primary/5 to-transparent blur-[1.5px] mix-blend-screen" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end">
            <h3 className="text-sm md:text-base font-medium text-foreground shadow-none whitespace-pre-line">
              {p.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectGrid;
