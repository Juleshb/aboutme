export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-4 mb-3 sm:mb-4">
        <span className="font-mono text-accent text-sm shrink-0">{index}.</span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary break-words">
          {title}
        </h2>
        <div className="hidden sm:block flex-1 h-px bg-border min-w-[2rem]" />
      </div>
      {subtitle && (
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
