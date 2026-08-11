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
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`glass-nav pointer-events-auto mx-auto max-w-6xl px-3 sm:px-5 py-2.5 flex items-center justify-between gap-3 transition-all duration-500 ${
            scrolled ? "glass-nav-scrolled" : ""
          }`}
        >
          <Link
            to="home"
            spy
            smooth
            offset={-100}
            duration={500}
            className="font-mono text-accent font-bold text-base sm:text-lg cursor-pointer hover:text-accent-dim transition-colors shrink-0 pl-1"
          >
            jules<span className="text-text-primary">.dev</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavItem key={link.id} {...link} />
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <ThemeToggle className="glass-icon-btn" />
            <Button
              href="mailto:habaruremajules2@gmail.com"
              size="sm"
              className="!rounded-full !px-5"
            >
              Hire Me
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <ThemeToggle className="glass-icon-btn" />
            <button
              className="glass-icon-btn text-xl text-text-primary"
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
              className="fixed top-20 left-4 right-4 z-[70] glass-nav glass-nav-menu lg:hidden mx-auto max-w-sm p-5"
            >
              <div className="flex items-center justify-between mb-5">
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

              <div className="mt-5 pt-5 border-t border-[var(--color-glass-border)]">
                <Button
                  href="mailto:habaruremajules2@gmail.com"
                  className="w-full !rounded-full"
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
