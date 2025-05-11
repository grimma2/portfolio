"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-primary py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-accent">A</span>ndrey Chella
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Разработчик
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/grimma2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/andreycella/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:chella05andrey@gmail.com"
              className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex justify-between items-center">
          <Link
            href="#"
            className="text-sm flex items-center text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors"
          >
            <span className="mr-1">Наверх</span>
            <FiExternalLink size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
} 