"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiBriefcase, FiCode, FiImage } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    title: "Backend Developer",
    company: "ServicePipe",
    period: "Апрель 2024 — сейчас",
    description:
      "Работаю над новым проектом в области информационной безопасности, который находится на начальной стадии разработки.",
    achievements: [
      "Погружение в новую предметную область - информационная безопасность",
      "Разработка архитектуры для нового проекта",
      "Работа с микросервисной архитектурой"
    ],
    skills: ["Python", "FastAPI", "Информационная безопасность", "Микросервисы"],
  },
  {
    id: 2,
    title: "Python Developer",
    company: "Rumberg Technologies",
    period: "Август 2023 — Апрель 2024 (9 месяцев)",
    description:
      "Работа над внутренним проектом компании в финансовом секторе.",
    achievements: [
      "Разработка бэкенда на Python/FastAPI",
      "Оптимизация высоконагруженных систем",
      "Интеграция с внешними финансовыми API"
    ],
    skills: ["Python", "FastAPI", "SQL", "Docker", "Микросервисы", "Finance"],
  },
  {
    id: 3,
    title: "Python Developer",
    company: "МАРВЕЛОС",
    period: "Сентябрь 2022 — Июль 2023 (11 месяцев)",
    description:
      "Разработка сервиса аналитики Telegram каналов, который показывает детализированную статистику по каждому каналу в Телеграмме.",
    achievements: [
      "Парсеры информации по Telegram канам с помощью библиотек Telethon и Pyrogram через аккаунты в Telegram",
      "API на FastAPI и Django REST Framework для отдельных микросервисов",
      "Оптимизация работы сотен Telegram аккаунтов для быстрого и постоянного получения данных по каналам с тысячими RPS, для сохранения их в СУБД Clickhouse",
      "Автоматизация закупки и интеграции с кодом новых Telegram аккаунтов",
      "Telegram бот на aiogram для авторизации на сайте",
      "Контейнеризация приложений с помощью docker и docker-compose",
    ],
    skills: [
      "Python",
      "TypeScript",
      "Django",
      "FastAPI",
      "Vue",
      "Clickhouse",
      "Telethon",
      "Sqlalchemy",
      "Nltk",
      "Rabbitmq",
      "Docker",
      "Docker-Compose",
      "Git",
      "GitHub Actions",
    ],
  },
];

export function ExperienceSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Опыт работы</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Мой профессиональный путь в разработке программного обеспечения.
          </p>
          <div className="mt-4 flex justify-center items-center">
            <FiCalendar className="text-accent mr-2" />
            <span className="text-gray-600 dark:text-gray-400">
              Общий опыт: 2 года 10 месяцев
            </span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-accent rounded-full items-center justify-center z-10">
                  <FiBriefcase className="text-white" />
                </div>

                <div
                  className={`md:w-5/12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm ${
                    index % 2 === 0
                      ? "md:ml-auto md:mr-8 ml-0"
                      : "md:mr-auto md:ml-8 ml-0"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-md bg-accent/10 text-accent mr-3 md:hidden">
                      <FiBriefcase />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Достижения:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 6 && (
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs px-3 py-1">
                        +{exp.skills.length - 6} еще
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 