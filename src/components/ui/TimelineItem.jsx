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
    <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-10 last:pb-0 border-l border-border min-w-0">
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-surface-900" />
      <div className="flex flex-col gap-2 mb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-text-primary break-words">
            {role}
          </h3>
          <p className="text-accent font-mono text-xs sm:text-sm break-words">@ {company}</p>
        </div>
        <div className="sm:text-right shrink-0">
          <p className="font-mono text-xs text-text-muted">{period}</p>
          <p className="text-xs text-text-muted mt-1 break-words">{location}</p>
        </div>
      </div>
      <div className="mb-3 sm:mb-4">
        <Badge variant="accent">{type}</Badge>
      </div>
      <ul className="space-y-2 mb-4">
        {highlights.map((item, i) => (
          <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2 min-w-0">
            <span className="text-accent shrink-0 mt-1">▹</span>
            <span className="break-words">{item}</span>
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
