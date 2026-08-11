import { profile } from "../../data";
import { FaLinkedin, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-mono text-accent font-bold text-lg mb-3">
              jules<span className="text-text-primary">.dev</span>
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Senior Software Engineer building scalable web applications from Kigali, Rwanda.
            </p>
          </div>

          <div>
            <p className="font-mono text-sm text-text-muted mb-4">// contact</p>
            <div className="space-y-2 text-sm text-text-secondary">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FaEnvelope className="text-accent" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FaPhone className="text-accent" /> {profile.phone}
              </a>
              <p className="flex items-center gap-2">
                <FaGlobe className="text-accent" /> {profile.location}
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-sm text-text-muted mb-4">// links</p>
            <div className="flex gap-4">
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

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            © {year} {profile.name}. Built with React + Vite.
          </p>
          <p className="font-mono text-xs text-text-muted">
            <span className="text-accent">const</span> status ={" "}
            <span className="text-success">"open_to_opportunities"</span>;
          </p>
        </div>
      </div>
    </footer>
  );
}
