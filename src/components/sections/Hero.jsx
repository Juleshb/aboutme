import { motion } from "framer-motion";
import { profile, topSkills } from "../../data";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const terminalLines = [
  { prompt: true, text: "whoami", output: profile.name },
  { prompt: true, text: "cat role.txt", output: profile.title },
  { prompt: true, text: "echo $LOCATION", output: profile.location },
  { prompt: true, text: "npm run build", output: "✓ Portfolio compiled successfully" },
];

export default function Hero() {
  return (
    <section id="home" className="section min-h-screen flex items-center pt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm mb-4">// Hello, World! I am</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4">
            {profile.firstName}{" "}
            <span className="text-accent">{profile.lastName}</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6 max-w-xl">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {topSkills.map((skill) => (
              <Badge key={skill} variant="accent">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href={profile.links.github}>View GitHub</Button>
            <Button variant="secondary" href={profile.links.linkedin}>
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${profile.email}?subject=Let's work together`}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="rounded-xl border border-border bg-surface-800 overflow-hidden shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-700 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="font-mono text-xs text-text-muted ml-3">
                ~/jules-habarurema
              </span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.3 }}
                >
                  <p className="text-text-muted">
                    <span className="text-accent">$</span> {line.text}
                  </p>
                  <p className="text-text-primary pl-4 mt-1">{line.output}</p>
                </motion.div>
              ))}
              <p className="text-text-muted">
                <span className="text-accent">$</span>{" "}
                <span className="animate-pulse">▊</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="font-mono text-xs text-text-muted animate-bounce">scroll ↓</div>
      </motion.div>
    </section>
  );
}
