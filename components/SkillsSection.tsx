"use client"; // Add this for useEffect and useRef

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Link2, Palette, Stars } from 'lucide-react'; // Keep icons for others
import Image from 'next/image'; // Import Image component
import { useEffect, useRef } from 'react'; // Import useEffect and useRef

// Updated skills data to use logos for specific tools
const skills = [
  {
    name: 'Bubble',
    description: 'Onde construo sistemas completos (sem precisar codar do zero).',
    logoUrl: '/images/logo-bubble.png', // Path to Bubble logo
    icon: null // Indicate it uses a logo
  },
  {
    name: 'FlutterFlow',
    description: 'Crio apps pra celular com aparência profissional e prontos pra loja.',
    logoUrl: '/images/logo-flutterflow.png', // Path to FlutterFlow logo
    icon: null // Indicate it uses a logo
  },
  {
    name: 'Make & n8n',
    description: 'Uso pra automatizar tarefas chatas e repetitivas (tipo mágica, só que real).',
    logoUrl: null,
    icon: Bot
  },
  {
    name: 'Supabase',
    description: 'Banco de dados que guarda e organiza suas informações com segurança.',
    logoUrl: '/images/logo-supabase.png', // Path to Supabase logo
    icon: null // Indicate it uses a logo
  },
  {
    name: 'Integrações',
    description: 'Faço diferentes ferramentas "conversarem" entre si, sem dor de cabeça.',
    logoUrl: null,
    icon: Link2
  },
  {
    name: 'Design & UX',
    description: 'Prototipagem bonita, rápida e com foco em experiência.',
    logoUrl: null,
    icon: Palette // Using Palette instead of Figma for consistency
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the section
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs for cards

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add a slight delay based on index for staggered effect
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, index * 100); // 100ms delay between cards
            // observer.unobserve(entry.target); // Optional: Disconnect after animation
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    const elementsToObserve = cardRefs.current;
    elementsToObserve.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    // Cleanup
    return () => {
      elementsToObserve.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    // Add ref to the section if needed for overall animation, but we animate cards individually
    <section id="skills" ref={sectionRef} className="w-full max-w-6xl mx-auto">
      {/* Title section can also be animated if desired */}
      <div className="text-center mb-12 md:mb-16 scroll-animate"> {/* Animate title block */}
        <Stars size={32} className="text-purple-400 mb-3 mx-auto" />
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Ferramentas que eu domino
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Trabalho com ferramentas que aceleram o desenvolvimento e deixam tudo mais simples — tanto para você quanto para o usuário final.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <Card
            key={skill.name}
            ref={(el) => cardRefs.current[index] = el} // Assign ref to each card
            className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 flex flex-col text-left shadow-lg hover:border-purple-600/50 transition-colors duration-300 scroll-animate" // Add scroll-animate class
          >
            <CardHeader className="p-0 mb-3 flex-row items-center space-x-3">
              {/* Conditionally render Logo or Icon */}
              {skill.logoUrl ? (
                <div className="relative w-7 h-7"> {/* Adjust size as needed */}
                  <Image
                    src={skill.logoUrl}
                    alt={`${skill.name} logo`}
                    fill
                    sizes="28px"
                    className="object-contain" // Use contain to prevent distortion
                  />
                </div>
              ) : (
                skill.icon && <skill.icon size={28} className="text-purple-400 shrink-0" />
              )}
              <CardTitle className="text-xl font-semibold text-gray-100">
                {skill.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <p className="text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

