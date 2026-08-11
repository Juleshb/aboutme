export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-accent text-sm">{index}.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{title}</h2>
        <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
      </div>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
