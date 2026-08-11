import Badge from "./Badge";

export default function TimelineItem({
  company,
  role,
  period,
  location,
  type,
  highlights,
  tech,
}) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 border-l border-border">
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-surface-900" />
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{role}</h3>
          <p className="text-accent font-mono text-sm">
            @ {company}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-mono text-xs text-text-muted">{period}</p>
          <p className="text-xs text-text-muted mt-1">{location}</p>
        </div>
      </div>
      <div className="mb-4">
        <Badge variant="accent">{type}</Badge>
      </div>
      <ul className="space-y-2 mb-4">
        {highlights.map((item, i) => (
          <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
            <span className="text-accent shrink-0 mt-1">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}
