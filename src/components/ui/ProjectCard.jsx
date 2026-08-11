import Badge from "./Badge";

export default function ProjectCard({ name, company, description, tech, category }) {
  return (
    <article className="group p-6 rounded-xl border border-border bg-surface-800/50 hover:border-accent/40 hover:bg-surface-800 transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="font-mono text-xs text-accent mb-1">{category}</p>
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm text-text-muted mt-1">{company}</p>
        </div>
        <span className="text-text-muted group-hover:text-accent transition-colors text-xl">
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
