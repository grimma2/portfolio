import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-10 bg-secondary dark:bg-primary">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Связаться со мной</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-16">
            У вас есть вопросы или предложения? Заполните форму ниже или
            используйте один из контактных методов, чтобы связаться со мной.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
} 