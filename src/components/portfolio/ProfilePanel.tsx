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
    <aside className="glass-card rounded-xl p-6 h-full flex flex-col items-center justify-center gap-6 text-center">
      <img
        src={image}
        alt={`${name} profile portrait`}
        loading="lazy"
        className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover"
      />
      <div>
        <p className="text-lg text-muted-foreground">{headline}</p>
      </div>
      <Button asChild variant="hero" size="lg" aria-label="Contact on LinkedIn">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          <Linkedin /> Contact on LinkedIn
        </a>
      </Button>
    </aside>
  );
};

export default ProfilePanel;
