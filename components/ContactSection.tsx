
'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Send } from "lucide-react"; // Usar Send ou ArrowRight
import { useEffect, useRef } from 'react'; // Import useEffect and useRef

export default function ContactSection() {
  const whatsappNumber = '5551994408307';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Alisson, vi seu portfólio e gostaria de conversar sobre um projeto!")}`;

  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // observer.unobserve(entry.target); // Optional: Disconnect after animation
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    // Add ref and scroll-animate class to the section
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 bg-transparent scroll-animate">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Texto atualizado (6.0) */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-100 leading-tight">
          Você sabe onde quer chegar.
        </h2>
        <p className="text-2xl sm:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Juntos encurtamos esse caminho.
        </p>
        {/* Botão/Link atualizado */}
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out px-8 py-3 text-lg"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            👉 Vamos falar sobre seu projeto? <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}

