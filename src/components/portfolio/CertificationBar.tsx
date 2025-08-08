import { Certification } from "@/content/portfolio";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CertificationBarProps {
  certifications: Certification[];
}

const CertificationBar = ({ certifications }: CertificationBarProps) => {
  return (
    <nav aria-label="Certifications" className="w-full">
      <TooltipProvider delayDuration={200}>
        <ul className="grid grid-cols-4 items-center gap-2 sm:gap-3 md:gap-4">
          {certifications.map((c) => (
            <li key={c.title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md p-1 bg-card/60 backdrop-blur transition-all duration-300 ring-1 ring-border/60 hover:ring-ring/40 shadow-sm hover:shadow-md hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`${c.title} certification (opens external)`}
                  >
                    <img
                      src={c.image}
                      alt={`${c.title} certification badge`}
                      loading="lazy"
                      className="w-full h-auto max-h-24 md:max-h-28 lg:max-h-32 object-contain transition-transform duration-300"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">{c.title}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>
    </nav>
  );
};

export default CertificationBar;
