import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import NavItem from "./NavItem";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`glass-nav pointer-events-auto mx-auto max-w-6xl px-2.5 sm:px-4 md:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 transition-all duration-500 min-w-0 ${
            scrolled ? "glass-nav-scrolled" : ""
          }`}
        >
          <Link
            to="home"
            spy
            smooth
            offset={-100}
            duration={500}
            className="font-mono text-accent font-bold text-sm sm:text-base md:text-lg cursor-pointer hover:text-accent-dim transition-colors shrink-0 pl-0.5 sm:pl-1 min-w-0 truncate"
          >
            jules<span className="text-text-primary">.dev</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink min-w-0">
            {navLinks.map((link) => (
              <NavItem key={link.id} {...link} />
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <ThemeToggle className="glass-icon-btn" />
            <Button
              href="mailto:habaruremajules2@gmail.com"
              size="sm"
              className="!rounded-full !px-4 xl:!px-5"
            >
              Hire Me
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeToggle className="glass-icon-btn !w-9 !h-9 sm:!w-10 sm:!h-10" />
            <button
              className="glass-icon-btn !w-9 !h-9 sm:!w-10 sm:!h-10 text-lg sm:text-xl text-text-primary"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu overlay"
            />

            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="fixed top-[4.5rem] sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-[70] glass-nav glass-nav-menu lg:hidden mx-auto max-w-sm p-4 sm:p-5 max-h-[calc(100dvh-5.5rem)] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="font-mono text-xs text-text-muted">// navigation</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="glass-icon-btn text-xl text-text-primary"
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavItem
                    key={link.id}
                    {...link}
                    onClick={() => setMenuOpen(false)}
                  />
                ))}
              </ul>

              <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-[var(--color-glass-border)]">
                <Button
                  href="mailto:habaruremajules2@gmail.com"
                  className="w-full !rounded-full justify-center"
                >
                  Hire Me
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
