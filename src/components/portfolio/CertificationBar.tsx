import { Certification } from "@/content/portfolio";

interface CertificationBarProps {
  certifications: Certification[];
}

const CertificationBar = ({ certifications }: CertificationBarProps) => {
  return (
    <nav aria-label="Certifications" className="w-full">
      <ul className="flex flex-wrap items-center gap-4 md:gap-6">
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
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CertificationBar;
