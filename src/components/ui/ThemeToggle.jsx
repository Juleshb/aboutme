import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`p-2.5 rounded-full border border-[var(--color-glass-border)] text-text-secondary hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 ${className}`}
    >
      {isDark ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
    </button>
  );
}
