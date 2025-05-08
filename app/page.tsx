import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react"; // Adicionar Zap
import Image from "next/image";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const whatsappNumber = "5551994408307";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20Alisson!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto.`; // Adicionar mensagem padrão

  return (
    <div className="relative bg-gray-950">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage: "url(/images/background-lines.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10">
        {/* Hero Section - Full Screen, Novo Texto e CTA */}
        <section className="relative flex items-center min-h-screen p-8 sm:p-16 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
            {/* Coluna de Texto - Atualizada */}
            <div className="md:col-span-3 text-center md:text-left space-y-6"> {/* Aumentar space-y */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
                Seu conteúdo <span className="text-purple-400">transforma</span>.
                <br />
                Meu trabalho é tirar os <span className="text-pink-500 font-extrabold">bloqueios</span> do caminho.
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed"> {/* Aumentar leading */}
                Sou <span className="font-semibold text-gray-100">Alisson</span>, especialista em low-code e automações.
                Crio soluções práticas pra destravar seu negócio, escalar com leveza e focar no que importa: vender, entregar e crescer.
              </p>
              {/* CTA Atualizado */}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg font-semibold text-purple-300 hover:text-purple-200 transition-colors duration-200 pt-4 group"
              >
                <Zap className="mr-2 h-5 w-5 text-yellow-400 group-hover:animate-bounce" /> 
                <span>🔥 Bora destravar seu projeto?</span>
              </a>
            </div>

            {/* Coluna de Imagem - Adicionar espaço */}
            <div className="md:col-span-2 flex justify-center md:justify-end md:pl-8"> {/* Adicionar pl-8 para espaço */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] p-1 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/alisson-hero-final.png"
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

        {/* Wrappers para garantir min-h-screen e centralização */}
        <div className="min-h-screen flex items-center justify-center p-8 sm:p-16">
          <AboutSection />
        </div>
        <div className="min-h-screen flex items-center justify-center p-8 sm:p-16">
          <SkillsSection />
        </div>
        <div className="min-h-screen flex items-center justify-center p-8 sm:p-16">
          <ProjectsSection />
        </div>
        <div className="min-h-screen flex items-center justify-center p-8 sm:p-16">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

