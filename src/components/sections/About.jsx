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

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 flex justify-center lg:justify-start px-2 sm:px-0"
        >
          <ProfilePhoto size="lg" className="lg:sticky lg:top-28" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 space-y-4 min-w-0"
        >
          {profile.about.map((paragraph, i) => (
            <p key={i} className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="pt-2 sm:pt-4">
            <p className="font-mono text-xs text-text-muted mb-3">
              // companies I've worked with
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.companies.map((company) => (
                <span
                  key={company}
                  className="px-2.5 sm:px-3 py-1.5 text-xs rounded-md bg-surface-700 text-text-secondary border border-border"
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
          className="lg:col-span-5 min-w-0"
        >
          <div className="rounded-xl border border-border bg-surface-800 p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden">
            <p className="text-text-muted mb-3 sm:mb-4">// profile.json</p>
            <pre className="text-text-secondary overflow-x-auto whitespace-pre-wrap break-words">
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
