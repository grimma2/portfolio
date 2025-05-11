import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectsSection } from "@/components/projects-section";

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-10 bg-secondary dark:bg-primary">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Мои проекты</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-10">
            Коллекция проектов, над которыми я работал и работаю. Каждый проект демонстрирует
            различные навыки и технологии из моего арсенала, а также отражает мой профессиональный и личный рост.
          </p>
          <p className="text-gray-600 dark:text-gray-400 italic">
            Нажмите на иконку <span className="text-accent inline-flex items-center mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span> 
            возле демо-ссылки, чтобы просмотреть проект прямо здесь, не покидая сайт.
          </p>
        </div>
      </div>
      <ProjectsSection showAllProjects={true} />
      <Footer />
    </main>
  );
} 