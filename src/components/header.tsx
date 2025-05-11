"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { name: "Главная", path: "/" },
  { name: "Опыт", path: "/experience" },
  { name: "Проекты", path: "/projects" },
  { name: "Текущий фокус", path: "/focus" },
  { name: "Обо мне", path: "/about" },
  { name: "Контакты", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-primary/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center min-w-0 w-full">
        <Link href="/" className="text-2xl font-heading font-bold">
          <span className="text-accent">A</span>ndrey
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          {/* Кнопка 'Заказать проект' всегда видна и ведет на главную страницу к форме */}
          <a
            href="/#contact"
            className="ml-8 px-6 py-3 rounded-lg bg-accent text-white font-bold text-lg shadow-lg hover:bg-accent/90 transition-colors border-2 border-accent"
          >
            Заказать проект
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:flex lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-1"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-primary shadow-md"
        >
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Кнопка для мобильного меню всегда видна */}
            <li>
              <a
                href="/#contact"
                className="block m-4 px-6 py-3 rounded-lg bg-accent text-white font-bold text-lg shadow-lg hover:bg-accent/90 transition-colors border-2 border-accent text-center"
                onClick={() => setIsOpen(false)}
              >
                Заказать проект
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
} 