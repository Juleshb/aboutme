import Badge from "./Badge";

export default function ProjectCard({ name, company, description, tech, category }) {
  return (
    <article className="group p-4 sm:p-6 rounded-xl border border-border bg-surface-800/50 hover:border-accent/40 hover:bg-surface-800 transition-all duration-300 h-full min-w-0">
      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4 min-w-0">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs text-accent mb-1">{category}</p>
          <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors break-words">
            {name}
          </h3>
          <p className="text-sm text-text-muted mt-1 break-words">{company}</p>
        </div>
        <span className="text-text-muted group-hover:text-accent transition-colors text-lg sm:text-xl shrink-0">
          ↗
        </span>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed mb-5">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <Badge key={item} variant="muted">
            {item}
          </Badge>
        ))}
      </div>
    </article>
  );
}
