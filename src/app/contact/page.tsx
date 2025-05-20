"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    // Scroll to the contact form on page load
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      const yOffset = -100; // Offset to account for fixed header
      const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

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