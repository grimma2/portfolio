"use client";

import { motion } from "framer-motion";
import { FiTarget, FiCode } from "react-icons/fi";

// Информация о текущем фокусе
const currentFocus = {
  title: "Мой текущий фокус",
  description: "В настоящее время я активно развиваюсь в следующих направлениях, расширяя свои знания и навыки для решения более сложных задач.",
  areas: [
    {
      title: "Автоматизация разработки с помощью ИИ",
      description: "Ищу новые возможности по облегчению жизни разработчиков с помощью искусственного интеллекта и автоматизации рутинных задач.",
      icon: "🤖",
      details: [
        "Инструменты на базе генеративного ИИ",
        "Автоматизация рефакторинга кода",
        "Оптимизация workflow разработчика",
        "Интеграция ИИ в процесс разработки"
      ]
    },
    {
      title: "Информационная безопасность",
      description: "Погружаюсь в новую для меня предметную область в рамках проекта в ServicePipe, который находится на начальной стадии разработки.",
      icon: "🔒",
      details: [
        "Основы кибербезопасности",
        "Защита данных и приватность",
        "Архитектура безопасных систем",
        "Оценка и снижение рисков"
      ]
    },
    {
      title: "Образовательные технологии",
      description: "Развиваю школу программирования FastPorgs, основанную на моем опыте репетиторства и знаниях в автоматизации процесса обучения.",
      icon: "🎓",
      details: [
        "Автоматизация учебных процессов",
        "Персонализированное обучение",
        "Интерактивные методы преподавания",
        "Анализ эффективности обучения"
      ]
    }
  ],
  currentProjects: [
    {
      name: "FastPorgs - Школа программирования",
      description: "Развитие школы программирования с автоматизированными учебными процессами. Проект успешно работает с небольшим количеством учеников.",
      progress: 85,
      technologies: ["Python", "Education", "Automation", "Web"]
    },
    {
      name: "AI Code Refactoring",
      description: "Разработка workflow на n8n для автоматизации улучшения кода с помощью ИИ, работающего с git репозиторием.",
      progress: 60,
      technologies: ["n8n", "AI", "Git", "Automation"]
    }
  ]
};

export function CurrentFocusSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentFocus.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {currentFocus.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentFocus.areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {area.description}
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FiTarget className="mr-2 text-accent" /> Ключевые аспекты
                  </h4>
                  <ul className="space-y-1">
                    {area.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FiCode className="mr-3 text-accent" />
              Текущие проекты в разработке
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {currentFocus.currentProjects.map((project, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">{project.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Прогресс</span>
                      <span>{project.progress}%</span>
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
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs px-2.5 py-0.5 border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Хотите узнать больше о моих проектах или обсудить сотрудничество?
          </p>
          <a
            href="/contact"
            className="btn btn-primary inline-flex items-center"
          >
            Связаться со мной
          </a>
        </div>
      </div>
    </section>
  );
} 