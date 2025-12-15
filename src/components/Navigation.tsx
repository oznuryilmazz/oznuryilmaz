"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    // { label: "Articles", href: "#articles" },
    { label: "Contacts", href: "#contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
      style={{ backgroundColor: "var(--color-background)" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="font-mono" style={{ color: "var(--color-foreground)" }}>
          <span className="text-lg">Öznur Yılmaz</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm underline-animation transition-colors"
              style={{ color: "var(--color-gray)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-foreground)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-gray)"}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side - CV Download & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* CV Link */}
          <motion.a
            href="/oznur-yilmaz-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all"
            style={{ 
              border: "1px solid var(--color-border)",
              color: "var(--color-foreground)"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={14} />
            <span>CV</span>
          </motion.a>

          {/* Theme Toggle */}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} style={{ color: "var(--color-foreground)" }} />
            ) : (
              <Moon size={18} style={{ color: "var(--color-foreground)" }} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* CV Link Mobile */}
          <a
            href="/oznur-yilmaz-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full"
            style={{ 
              border: "1px solid var(--color-border)",
              color: "var(--color-foreground)"
            }}
          >
            <Download size={16} />
          </a>

          {/* Theme Toggle Mobile */}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} style={{ color: "var(--color-foreground)" }} />
            ) : (
              <Moon size={18} style={{ color: "var(--color-foreground)" }} />
            )}
          </motion.button>

          <button
            className="p-2"
            style={{ color: "var(--color-foreground)" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0"
          style={{ 
            backgroundColor: "var(--color-background)",
            borderTop: "1px solid var(--color-border)"
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block transition-colors"
                style={{ color: "var(--color-gray)" }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navigation;
