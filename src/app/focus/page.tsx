import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CurrentFocusSection } from "@/components/current-focus-section";

export default function FocusPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-10 bg-secondary dark:bg-primary">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Текущий фокус</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-16">
            Узнайте над чем я сейчас работаю, какие технологии изучаю и какие проекты
            находятся в активной разработке. Это отражение моего профессионального пути
            и интересов в данный момент времени.
          </p>
        </div>
      </div>
      <CurrentFocusSection />
      <Footer />
    </main>
  );
} 