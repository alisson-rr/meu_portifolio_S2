import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const whatsappNumber = "5551994408307"; // Número de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    // Adicionar wrapper para background pattern
    <div className="relative bg-gray-950">
      {/* Background Pattern - Linhas (Ajuste 3) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: "url(/images/background-lines.jpg)", // Nova imagem de fundo
          backgroundRepeat: "repeat",
          backgroundSize: "auto", // Usar tamanho natural ou ajustar
        }}
      />

      {/* Conteúdo principal com z-index maior */}
      <div className="relative z-10">
        {/* Hero Section - Ajustar para ocupar tela cheia */}
        <section className="relative flex items-center min-h-screen p-8 sm:p-16 overflow-hidden">

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
            {/* Coluna de Texto */}
            <div className="md:col-span-3 text-center md:text-left space-y-5">
              <p className="text-sm font-semibold text-purple-400 tracking-wider">#Desenvolvedor Low-Code & Automações</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
                Seu conteúdo <span className="text-purple-400">transforma</span>.
                <br />
                Meu trabalho é tirar os <span className="text-pink-500">bloqueios</span> do caminho.
              </h1>
              <p className="text-lg text-gray-400">
                Oi eu sou <span className="font-semibold text-gray-200">Alisson</span>, dev low-code especialista em soluções práticas.
                Crio fluxos inteligentes pra você ganhar tempo, escalar com leveza e focar no que realmente importa: vender, entregar e crescer.
              </p>
              <p className="text-md text-gray-500 italic">
                Já passou da hora de parar de apagar incêndio todo dia, né?
              </p>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 pt-2 group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" /> 
                <span className="font-semibold">🔥 Bora destravar seu projeto?</span>
              </a>
            </div>

            {/* Coluna de Imagem - Nova Imagem Hero (Ajuste 3) */}
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] p-1 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/alisson-hero-final.png" // Nova imagem hero
                    alt="Foto de Alisson Rosa"
                    fill
                    sizes="(max-width: 768px) 60vw, (max-width: 1024px) 40vw, 30vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections - Adicionar espaçamento/altura */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <AboutSection />
        </div>
        <div className="min-h-screen flex items-center justify-center px-4">
          <SkillsSection />
        </div>
        <div className="min-h-screen flex items-center justify-center px-4">
          <ProjectsSection />
        </div>
        {/* Contact Section - Adicionar espaçamento/altura (Ajuste 3) */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

