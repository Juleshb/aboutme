import { motion } from "framer-motion";
import { skills, education } from "../../data";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        index="04"
        title="Skills & Education"
        subtitle="Technologies I work with and academic background."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="font-mono text-accent text-sm mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-mono text-accent text-sm mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-5 rounded-xl border border-border bg-surface-800/50"
              >
                <p className="font-mono text-xs text-text-muted mb-1">{edu.period}</p>
                <h4 className="text-text-primary font-semibold">{edu.degree}</h4>
                <p className="text-sm text-accent mt-1">{edu.institution}</p>
                <p className="text-sm text-text-secondary mt-1">{edu.field}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
