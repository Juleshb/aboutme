import { motion } from "framer-motion";
import { projects } from "../../data";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        index="03"
        title="Projects"
        subtitle="Selected work across transportation, real estate, education, and enterprise platforms."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
