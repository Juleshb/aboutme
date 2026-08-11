import { motion } from "framer-motion";
import { profile } from "../../data";
import SectionHeading from "../ui/SectionHeading";
import ProfilePhoto from "../ui/ProfilePhoto";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        index="01"
        title="About Me"
        subtitle="Engineering leader, founder, and educator based in Kigali."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 flex justify-center lg:justify-start"
        >
          <ProfilePhoto size="lg" className="lg:sticky lg:top-28" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 space-y-4"
        >
          {profile.about.map((paragraph, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="pt-4">
            <p className="font-mono text-xs text-text-muted mb-3">
              // companies I've worked with
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.companies.map((company) => (
                <span
                  key={company}
                  className="px-3 py-1.5 text-xs rounded-md bg-surface-700 text-text-secondary border border-border"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="rounded-xl border border-border bg-surface-800 p-6 font-mono text-sm">
            <p className="text-text-muted mb-4">// profile.json</p>
            <pre className="text-text-secondary overflow-x-auto">
              {JSON.stringify(
                {
                  name: profile.name,
                  role: profile.title,
                  location: profile.location,
                  email: profile.email,
                  phone: profile.phone,
                  status: "open_to_opportunities",
                },
                null,
                2
              )}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
