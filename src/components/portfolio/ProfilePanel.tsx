import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

interface ProfilePanelProps {
  name: string;
  headline?: string;
  image: string;
  linkedinUrl: string;
}

const ProfilePanel = ({ name, headline, image, linkedinUrl }: ProfilePanelProps) => {
  return (
      <aside className="rounded-xl overflow-hidden h-64 md:h-full relative p-0 bg-card border shadow-sm">
        <img
          src={image}
          alt={`${name} profile portrait`}
          loading="eager"
          className="w-full h-full object-cover object-center block"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 via-background/60 to-transparent backdrop-blur-sm flex items-center justify-between gap-3">
          {headline ? (
            <p className="text-sm md:text-base text-foreground line-clamp-1 bg-background/60 rounded px-2 py-1 backdrop-blur-sm">{headline}</p>
          ) : null}
          <Button asChild variant="hero" size="sm" aria-label="Contact on LinkedIn">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Linkedin /> LinkedIn
            </a>
          </Button>
        </div>
      </aside>
  );
};

export default ProfilePanel;
