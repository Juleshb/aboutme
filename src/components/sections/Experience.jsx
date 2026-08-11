import { motion } from "framer-motion";
import { experience } from "../../data";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        index="02"
        title="Experience"
        subtitle="5+ years building products, leading teams, and mentoring developers."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl min-w-0"
      >
        {experience.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} {...item} />
        ))}
      </motion.div>
    </section>
  );
}
