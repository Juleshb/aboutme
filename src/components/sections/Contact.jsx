import { motion } from "framer-motion";
import { profile } from "../../data";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "habarurema-jules",
    href: profile.links.linkedin,
  },
  {
    icon: FaGlobe,
    label: "Company",
    value: "hblab.rw",
    href: profile.links.company,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeading
        index="05"
        title="Get In Touch"
        subtitle="Open to freelance projects, full-time roles, and collaboration opportunities."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-text-secondary leading-relaxed mb-10">
          Whether you need a high-converting website, a scalable backend system, or a
          technical lead for your team — let's talk. I typically respond within 24 hours.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface-800/50 hover:border-accent/40 hover:bg-surface-800 transition-all text-left group"
            >
              <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                <Icon />
              </div>
              <div>
                <p className="font-mono text-xs text-text-muted">{label}</p>
                <p className="text-sm text-text-primary">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <Button href={`mailto:${profile.email}?subject=Project Inquiry`}>
          Send Me an Email
        </Button>
      </motion.div>
    </section>
  );
}
