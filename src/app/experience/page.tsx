import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ExperienceSection } from "@/components/experience-section";

export default function ExperiencePage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-10 bg-secondary dark:bg-primary">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Опыт работы</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-16">
            Подробная информация о моем профессиональном опыте, проектах, на которых я работал, и достижениях в каждой компании.
          </p>
        </div>
      </div>
      <ExperienceSection />
      <Footer />
    </main>
  );
} 