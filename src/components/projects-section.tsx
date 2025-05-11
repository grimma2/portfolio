"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiCode, FiEye, FiStar, FiClock } from "react-icons/fi";
import { ProjectPreviewModal } from "./project-preview-modal";

// Профессиональные проекты
const professionalProjects = [
  {
    id: 1,
    title: "Back Office для структурных продуктов",
    description:
      "Система управления структурными продуктами, сделками и анализа риска торговых операций с высокой нагрузкой (500+ RPS).",
    image: "/placeholder-project.jpg",
    tags: ["Python", "TypeScript", "High Load", "Finance"],
    demo: "",
    github: "",
    type: "Full Stack",
    achievements: [
      "Ускорение работы высоконагруженой системы с миллионами записей", 
      "Написание тестов для текущего кода", 
      "Разработка нового функционала в live режиме"
    ]
  },
  {
    id: 2,
    title: "Сервис аналитики Telegram каналов",
    description:
      "Аналитическая платформа, показывающая детализированную статистику по каждому каналу в Telegram.",
    image: "/tgscope.jpg",
    tags: ["Python", "FastAPI", "Django", "Vue", "ClickHouse", "RabbitMQ"],
    demo: "https://tgscope.ru/home",
    github: "",
    type: "Full Stack",
    achievements: [
      "Парсеры информации через Telethon и Pyrogram", 
      "API на FastAPI и Django REST Framework", 
      "Оптимизация работы с тысячами RPS", 
      "Telegram бот на aiogram для авторизации"
    ]
  },
];

// Личные проекты в разработке
const personalProjects = [
  {
    id: 3,
    title: "FastPorgs",
    description:
      "Школа программирования, сфокусированная на внедрении автоматизации в процесс образования. Основана на опыте работы репетитором и знаниях в области автоматизации.",
    image: "/placeholder-project.jpg",
    tags: ["Education", "Python", "Automation", "Teaching"],
    demo: "https://fastprogs.ru",
    github: "",
    type: "Side Project",
    status: "Активный проект",
    progress: 85,
    features: [
      "Автоматизированные учебные материалы",
      "Индивидуальные программы обучения",
      "Интерактивные задания с автопроверкой",
      "Аналитика прогресса учеников"
    ]
  },
  {
    id: 4,
    title: "AI Code Refactoring",
    description:
      "Автоматизированный цикл рефакторинга кода с помощью ИИ. Проект позволяет автоматически улучшать определенные части кода без необходимости постоянного контроля человеком.",
    image: "/placeholder-project.jpg",
    tags: ["AI", "n8n", "Git", "Automation"],
    demo: "",
    github: "https://github.com/yourusername/ai-code-refactoring",
    type: "Side Project",
    status: "В разработке",
    progress: 60,
    features: [
      "Workflow на n8n для работы с git репозиторием",
      "Анализ кода и выделение проблемных участков",
      "ИИ-предложения по улучшению кода",
      "Автоматическое тестирование изменений"
    ]
  },
];

// Информация о текущем фокусе
const currentFocus = {
  title: "Мой текущий фокус",
  description: "В настоящее время я активно развиваюсь в следующих направлениях:",
  areas: [
    {
      title: "Автоматизация разработки с помощью ИИ",
      description: "Ищу новые возможности по облегчению жизни разработчиков с помощью искусственного интеллекта и автоматизации рутинных задач.",
      icon: "🤖"
    },
    {
      title: "Информационная безопасность",
      description: "Погружаюсь в новую для меня предметную область в рамках проекта в ServicePipe.",
      icon: "🔒"
    },
    {
      title: "Образовательные технологии",
      description: "Развиваю школу программирования FastPorgs и улучшаю процессы обучения.",
      icon: "🎓"
    }
  ]
};

export function ProjectsSection({ showAllProjects = false }) {
  const [selectedProject, setSelectedProject] = useState<null | {
    name: string;
    url: string;
  }>(null);
  
  const handlePreviewClick = (name: string, url: string) => {
    if (url) {
      setSelectedProject({ name, url });
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Отображаем только 2 проекта на главной странице или все на странице проектов
  const professionalProjectsToShow = showAllProjects
    ? professionalProjects
    : professionalProjects.slice(0, 2);

  const personalProjectsToShow = showAllProjects
    ? personalProjects
    : personalProjects.slice(0, 2);

  return (
    <>
      <section className="py-20 bg-secondary dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои проекты</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Вот некоторые из проектов, над которыми я работал. У каждого проекта есть
              своя уникальная цель и набор технологий.
            </p>
            {!showAllProjects && (
              <Link 
                href="/projects"
                className="inline-block mt-6 text-accent hover:underline"
              >
                Посмотреть все проекты
              </Link>
            )}
          </motion.div>

          <h3 className="text-2xl font-bold mb-8 border-l-4 border-accent pl-4">Профессиональные проекты</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {professionalProjectsToShow.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-56 bg-gray-200 dark:bg-gray-700">
                  {project.image && project.image !== "/placeholder-project.jpg" ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      <FiCode />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-accent text-white text-sm px-2 py-1 rounded-md">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Достижения:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink size={20} />
                        </a>
                        <button
                          onClick={() => handlePreviewClick(project.title, project.demo)}
                          className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
                          aria-label="Preview"
                        >
                          <FiEye size={20} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-8 border-l-4 border-accent pl-4">Личные проекты в разработке</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {personalProjectsToShow.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border-t-4 border-accent"
              >
                <div className="relative w-full overflow-hidden">
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Прогресс</span>
                      <span className="text-sm font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Ключевые особенности:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, i) => (
                        <li key={i} className="mb-1">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={20} className="mr-1" /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center"
                          aria-label="Demo"
                        >
                          <FiExternalLink size={20} className="mr-1" /> Demo
                        </a>
                        <button
                          onClick={() => handlePreviewClick(project.title, project.demo)}
                          className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center"
                          aria-label="Preview"
                        >
                          <FiEye size={20} className="mr-1" /> Предпросмотр
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Секция с текущим фокусом */}
          {showAllProjects && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 border-l-4 border-accent pl-4">{currentFocus.title}</h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                  {currentFocus.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {currentFocus.areas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                    >
                      <div className="text-4xl mb-4">{area.icon}</div>
                      <h4 className="text-xl font-bold mb-2">{area.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {area.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
      
      {/* Модальное окно с предпросмотром */}
      {selectedProject && (
        <ProjectPreviewModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          projectUrl={selectedProject.url}
          projectName={selectedProject.name}
        />
      )}
    </>
  );
} 