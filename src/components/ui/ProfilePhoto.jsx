import profilePhoto from "../../assets/images/profile.png";

export default function ProfilePhoto({
  size = "lg",
  className = "",
  showStatus = true,
}) {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-28 h-28 sm:w-32 sm:h-32",
    lg: "w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80",
  };

  return (
    <div className={`relative inline-block max-w-full ${className}`}>
      <div
        className={`${sizes[size]} rounded-2xl overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10 relative z-10 mx-auto`}
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
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 max-w-[calc(100vw-3rem)]">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface-800 border border-accent/30 text-[10px] sm:text-xs font-mono text-accent shadow-lg whitespace-nowrap">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success animate-pulse shrink-0" />
            open to opportunities
          </span>
        </div>
      )}
    </div>
  );
}
