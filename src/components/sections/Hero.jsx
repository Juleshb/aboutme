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
    <section id="home" className="section min-h-[100dvh] flex items-center pt-24 sm:pt-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          <p className="font-mono text-accent text-xs sm:text-sm mb-3 sm:mb-4">
            // Hello, World! I am
          </p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-3 sm:mb-4 break-words">
            {profile.firstName}{" "}
            <span className="text-accent">{profile.lastName}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-5 sm:mb-6 max-w-xl">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {topSkills.map((skill) => (
              <Badge key={skill} variant="accent">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
            <Button href={profile.links.github} className="w-full xs:w-auto justify-center">
              View GitHub
            </Button>
            <Button
              variant="secondary"
              href={profile.links.linkedin}
              className="w-full xs:w-auto justify-center"
            >
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${profile.email}?subject=Let's work together`}
              className="w-full xs:w-auto justify-center"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto min-w-0"
        >
          <div className="rounded-xl border border-border bg-surface-800 overflow-hidden shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-surface-700 border-b border-border min-w-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs text-text-muted ml-1 sm:ml-3 truncate">
                ~/jules-habarurema
              </span>
            </div>
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-3 overflow-x-auto">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.3 }}
                  className="min-w-0"
                >
                  <p className="text-text-muted break-words">
                    <span className="text-accent">$</span> {line.text}
                  </p>
                  <p className="text-text-primary pl-3 sm:pl-4 mt-1 break-words">{line.output}</p>
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="font-mono text-xs text-text-muted animate-bounce">scroll ↓</div>
      </motion.div>
    </section>
  );
}
