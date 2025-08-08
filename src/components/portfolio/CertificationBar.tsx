import { Certification } from "@/content/portfolio";

interface CertificationBarProps {
  certifications: Certification[];
}

const CertificationBar = ({ certifications }: CertificationBarProps) => {
  return (
    <nav aria-label="Certifications" className="w-full">
      <ul className="grid grid-cols-4 items-center gap-2 sm:gap-3 md:gap-4">
        {certifications.map((c) => (
          <li key={c.title}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md p-1 hover:bg-accent transition-colors"
              aria-label={`${c.title} certification (opens external)`}
            >
              <img
                src={c.image}
                alt={`${c.title} certification badge`}
                loading="lazy"
                className="w-full h-auto max-h-24 md:max-h-28 lg:max-h-32 object-contain"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CertificationBar;
