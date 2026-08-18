import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || !isHome
          ? "bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-[0_1px_30px_-10px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <Link
          to="/"
          className={`font-display text-xl md:text-2xl tracking-[0.08em] transition-colors duration-500 ${
            scrolled || !isHome ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {siteConfig.companyNameShort} <span className="text-accent font-medium">{siteConfig.companyNameSuffix}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`body-sm transition-colors duration-300 relative group ${
                location.pathname === link.href
                  ? "text-accent"
                  : scrolled || !isHome
                  ? "text-foreground hover:text-accent"
                  : "text-white hover:text-accent"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-500 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className={`btn-primary text-[10px] px-6 py-3 ${
              scrolled || !isHome ? "text-white" : "text-white"
            }`}
          >
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden transition-colors duration-300 ${
            scrolled || !isHome ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-border/30"
          >
            <div className="flex flex-col items-center py-10 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`body-sm transition-colors duration-300 ${
                      location.pathname === link.href
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="gold-line mt-2 mb-2" />
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-[10px] px-6 py-3">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
