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
      <aside className="glass-card rounded-xl overflow-hidden h-full relative p-0">
        <img
          src={image}
          alt={`${name} profile portrait`}
          loading="eager"
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent flex items-center justify-between gap-3">
          {headline ? (
            <p className="text-sm md:text-base text-muted-foreground line-clamp-1">{headline}</p>
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
