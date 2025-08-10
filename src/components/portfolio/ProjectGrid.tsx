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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 hover:bg-card/60 transition-all duration-300 hover:-translate-y-0.5 ring-1 ring-transparent hover:ring-ring/60"
          aria-label={`${p.title} (opens external)`}
        >
          <div className="p-3">
            <div className="relative overflow-hidden rounded-xl border border-border/60 bg-background/40">
              <img
                src={p.image}
                alt={`${p.title} project cover`}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent" aria-hidden="true" />
            </div>
          </div>
          <div className="px-3 pb-3">
            <h3 className="text-sm md:text-base font-medium text-foreground">{p.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectGrid;
