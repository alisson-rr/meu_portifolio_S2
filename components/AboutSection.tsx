"use client"; // Add this for useEffect and useRef

import { BrainCircuit } from "lucide-react"; // Ícone para representar pensamento/TDAH
import { useEffect, useRef } from 'react'; // Import useEffect and useRef

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 bg-transparent scroll-animate">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ícone e Título Opcional (ou remover para focar no texto) */}
        {/* <BrainCircuit className="text-purple-400 mx-auto mb-4" size={40} /> */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          💬 Fala real:
        </h2>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed"> {/* Aumentar leading */}
          <p>
            Minha cabeça funciona no modo <span className="font-semibold text-purple-300">turbo</span>.
            TDAH? Tenho sim — e é por isso que penso rápido, conecto ideias fora do padrão e crio soluções que <span className="font-semibold text-pink-400">economizam tempo</span> de verdade.
          </p>
          <p>
            Isso significa que você vai ter alguém direto ao ponto, que entende seu ritmo e entrega <span className="font-semibold text-gray-100">fluxo sem enrolação</span>.
          </p>
          <p>
            Já trabalhei com apps robustos, automações que salvam tempo todo dia e soluções prontas pra escalar.
            E agora, quero aplicar isso no seu projeto.
          </p>
        </div>
      </div>
    </section>
  );
}

