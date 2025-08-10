import * as React from "react";
import { Separator } from "@/components/ui/separator";

interface ExperienceItem {
  number: string; // e.g., "15+"
  area: string;   // e.g., "Splunk"
}

const items: ExperienceItem[] = [
  { number: "15+", area: "Splunk" },
  { number: "8+", area: "Automation" },
  { number: "2+", area: "AI" },
  { number: "2+", area: "AWS" },
];

const ExperienceHighlights: React.FC = () => {
  return (
    <nav aria-label="Experience highlights" className="w-full">
      <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {items.map((it, idx) => (
          <React.Fragment key={it.area}>
            <li
              className="group hover-scale"
              aria-label={`${it.number} years experience in ${it.area}`}
            >
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card/40 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/40 hover:ring-2 hover:ring-primary/40">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-border bg-accent/30 text-foreground ring-1 ring-primary/30 shadow-sm transition-transform duration-200 group-hover:scale-105">
                  <span className="text-base md:text-lg font-bold leading-none tracking-tight">
                    {it.number}
                  </span>
                </div>
                <div className="flex flex-col leading-tight text-foreground">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">years</span>
                  <span className="text-sm md:text-base font-medium">{it.area}</span>
                </div>
              </div>
            </li>

            {idx < items.length - 1 && (
              <>
                <li className="hidden md:flex" aria-hidden="true" key={`sep-${idx}`}>
                  <Separator orientation="vertical" className="h-8 mx-1" />
                </li>
                <li className="md:hidden text-muted-foreground" aria-hidden="true" key={`pipe-${idx}`}>
                  |
                </li>
              </>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default ExperienceHighlights;
