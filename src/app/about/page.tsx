import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-secondary dark:bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Обо мне</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg mb-6">
                  Привет! Меня зовут Андрей Челла, мне 19 лет, я из Москвы. Я Full Stack разработчик с опытом работы более 2 лет.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Моя история</h2>
                <p className="mb-4">
                  Я начал свой путь в программировании еще в школе, когда увлекся созданием веб-сайтов. Постепенно мое хобби переросло в профессию, и я начал работать над коммерческими проектами.
                </p>
                <p className="mb-4">
                  За 2 года 10 месяцев профессиональной карьеры я участвовал в разработке сложных проектов, включая высоконагруженные системы и аналитические платформы.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Мой подход к работе</h2>
                <p className="mb-4">
                  Я стремлюсь писать чистый, поддерживаемый код и всегда ищу способы улучшить производительность приложений. Мне нравится решать сложные задачи и изучать новые технологии.
                </p>
                <p className="mb-4">
                  В работе я ценю командное взаимодействие, четкую коммуникацию и возможность постоянно учиться новому.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Вне работы</h2>
                <p className="mb-4">
                  В свободное время я продолжаю изучать новые технологии, участвую в open-source проектах и читаю технические блоги. Кроме программирования, увлекаюсь спортом и путешествиями.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Связаться со мной</h2>
                <p className="mb-4">
                  Если у вас есть интересный проект или предложение о сотрудничестве, не стесняйтесь связаться со мной через{" "}
                  <a href="/contact" className="text-accent hover:underline">
                    контактную форму
                  </a>{" "}
                  или напрямую по email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 