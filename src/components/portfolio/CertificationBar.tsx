import { Certification } from "@/content/portfolio";

interface CertificationBarProps {
  certifications: Certification[];
}

const CertificationBar = ({ certifications }: CertificationBarProps) => {
  return (
    <nav aria-label="Certifications" className="w-full">
      <ul className="flex flex-wrap items-center gap-6 md:gap-8">
        {certifications.map((c) => (
          <li key={c.title}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md p-2 hover:bg-accent transition-colors"
              aria-label={`${c.title} certification (opens external)`}
            >
              <img
                src={c.image}
                alt={`${c.title} certification badge`}
                loading="lazy"
                className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 object-contain"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CertificationBar;
