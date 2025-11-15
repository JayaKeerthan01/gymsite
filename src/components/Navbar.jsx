import { motion } from "framer-motion";
import { useState } from "react";


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Services", href: "#services" },
  { name: "Results", href: "#results" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onJoinClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-red-600"
          >
            ALPHA GYM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white hover:text-red-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onJoinClick}
            className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-sm font-bold hover:bg-red-700 transition"
            >
            JOIN NOW
            </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 border-t border-red-900"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 text-white hover:bg-red-900/50 transition"
              >
                {link.name}
              </a>
            ))}
            <button
                onClick={onJoinClick}
                className="w-full text-left px-4 py-3 bg-red-600 text-white font-bold"
                >
                JOIN NOW
                </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}