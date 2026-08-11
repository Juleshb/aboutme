export default function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-surface-700 text-text-secondary border-border",
    accent: "bg-accent/10 text-accent border-accent/30",
    muted: "bg-surface-800 text-text-muted border-border",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-mono rounded-md border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
