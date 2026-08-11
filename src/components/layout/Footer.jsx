import { profile } from "../../data";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-900">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="min-w-0">
            <p className="font-mono text-accent font-bold text-lg mb-3">
              jules<span className="text-text-primary">.dev</span>
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Senior Software Engineer building scalable web applications from Kigali, Rwanda.
            </p>
          </div>

          <div className="min-w-0">
            <p className="font-mono text-sm text-text-muted mb-4">// contact</p>
            <div className="space-y-2 text-sm text-text-secondary">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-2 hover:text-accent transition-colors break-all"
              >
                <FaEnvelope className="text-accent shrink-0 mt-0.5" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FaPhone className="text-accent shrink-0" /> {profile.phone}
              </a>
              <p className="flex items-center gap-2 break-words">
                <FaGlobe className="text-accent shrink-0" /> {profile.location}
              </p>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-mono text-sm text-text-muted mb-4">// links</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent text-xl transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent text-xl transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={profile.links.company}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent text-xl transition-colors"
                aria-label="HB-Lab"
              >
                <FaGlobe />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-text-secondary hover:text-accent text-xl transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 border-t border-border flex flex-col items-center sm:flex-row sm:justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="font-mono text-[11px] sm:text-xs text-text-muted break-words">
            © {year} {profile.name}. Built with React + Vite.
          </p>
          <p className="font-mono text-[11px] sm:text-xs text-text-muted break-all sm:break-normal">
            <span className="text-accent">const</span> status ={" "}
            <span className="text-success">"open_to_opportunities"</span>;
          </p>
        </div>
      </div>
    </footer>
  );
}
