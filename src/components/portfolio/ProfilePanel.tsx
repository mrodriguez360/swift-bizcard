

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
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-none bg-[hsl(var(--linkedin))] text-primary-foreground font-black text-[18px] md:text-[20px] leading-none" aria-label="Contact on LinkedIn">
            <span aria-hidden="true">in</span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </aside>
  );
};

export default ProfilePanel;
