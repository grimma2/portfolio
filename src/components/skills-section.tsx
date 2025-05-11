"use client";

import { motion } from "framer-motion";
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiGitBranch, 
  FiCloud 
} from "react-icons/fi";
import { 
  SiPython, 
  SiTypescript, 
  SiDjango, 
  SiFastapi, 
  SiVuedotjs,
  SiDocker,
  SiGit,
  SiClickhouse,
  SiRabbitmq,
  SiNginx
} from "react-icons/si";

const skillCategories = [
  {
    name: "Языки программирования",
    icon: <FiCode size={24} />,
    skills: [
      { name: "Python", icon: <SiPython />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 80 },
      { name: "SQL", icon: <FiDatabase />, level: 85 },
    ],
  },
  {
    name: "Фреймворки",
    icon: <FiServer size={24} />,
    skills: [
      { name: "Django", icon: <SiDjango />, level: 90 },
      { name: "FastAPI", icon: <SiFastapi />, level: 85 },
      { name: "Vue.js", icon: <SiVuedotjs />, level: 75 },
    ],
  },
  {
    name: "Инфраструктура",
    icon: <FiCloud size={24} />,
    skills: [
      { name: "Docker", icon: <SiDocker />, level: 80 },
      { name: "ClickHouse", icon: <SiClickhouse />, level: 75 },
      { name: "RabbitMQ", icon: <SiRabbitmq />, level: 70 },
    ],
  },
  {
    name: "Инструменты",
    icon: <FiGitBranch size={24} />,
    skills: [
      { name: "Git", icon: <SiGit />, level: 90 },
      { name: "GitHub Actions", icon: <FiGitBranch />, level: 75 },
      { name: "Nginx", icon: <SiNginx />, level: 70 },
    ],
  },
];

const SkillBar = ({ name, icon, level }: { name: string; icon: React.ReactNode; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <span className="mr-2 text-accent">{icon}</span>
        <span className="font-medium">{name}</span>
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-accent rounded-full" 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои навыки</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Набор технических навыков и инструментов, которые я использую для 
            создания эффективных и масштабируемых решений.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-accent/40 scrollbar-track-transparent md:overflow-visible">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm min-w-[280px] w-full"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-accent/10 text-accent mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 