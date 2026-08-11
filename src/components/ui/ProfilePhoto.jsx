import profilePhoto from "../../assets/images/profile.png";

export default function ProfilePhoto({
  size = "lg",
  className = "",
  showStatus = true,
}) {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-32 h-32",
    lg: "w-64 h-64 md:w-80 md:h-80",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`${sizes[size]} rounded-2xl overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10 relative z-10`}
      >
        <img
          src={profilePhoto}
          alt="Jules HABARUREMA — Senior Software Engineer"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div
        className={`absolute -inset-1 rounded-2xl bg-accent/10 blur-sm -z-0 ${size === "lg" ? "block" : "hidden"}`}
        aria-hidden="true"
      />
      {showStatus && size === "lg" && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-800 border border-accent/30 text-xs font-mono text-accent shadow-lg">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            open to opportunities
          </span>
        </div>
      )}
    </div>
  );
}
