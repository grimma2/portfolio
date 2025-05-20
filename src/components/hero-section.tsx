"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-secondary dark:bg-primary pt-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block text-accent text-lg font-medium mb-4">
              Привет, меня зовут
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Андрей Челла
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              <span className="text-accent">Full Stack</span> Разработчик
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Я Full Stack разработчик с опытом работы {" "}
              <span className="font-medium">2 года 10 месяцев</span>. Специализируюсь на
              Python, TypeScript, Django, FastAPI и Vue.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact#contact-form"
                className="btn btn-primary inline-flex items-center"
              >
                Заказать проект
              </a>
              <a
                href="/resume.pdf"
                className="btn bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload />
                Скачать резюме
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/grimma2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/andreycella/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              
              <Image
                src="/my_photo.jpg"  // Путь к изображению относительно папки public
                alt="Андрей Челла"
                fill
                style={{ objectFit: 'contain' }} // изменено с 'cover' на 'contain', чтобы фото помещалось полностью
                priority
                className="p-4" // добавлен внутренний отступ, чтобы изображение не касалось краев
              />
              
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" className="text-gray-500 dark:text-gray-400">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L12 18L17 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7L12 12L17 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
} 