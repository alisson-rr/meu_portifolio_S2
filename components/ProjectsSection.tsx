"use client";

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, CheckCircle, Briefcase } from 'lucide-react'; // Adicionar ícones
import Link from 'next/link';
import { useEffect, useRef } from 'react'; // Importar useEffect e useRef

// Dados dos projetos atualizados conforme texto 5.0
const projects = [
  {
    title: '🐴 App de Gestão de Torneios de Hipismo',
    description: 'Plataforma criada pra digitalizar torneios de hipismo, usada por federações e hípicas em tempo real. Inclui cadastro de atletas, acompanhamento de provas e interface otimizada pra eventos ao vivo. Teve redesenho total da UI e reestruturação técnica pra lidar com grande volume de dados e acessos simultâneos.',
    tags: ['Bubble', 'Supabase', 'UI/UX', 'Plataforma esportiva'], // Tags atualizadas
    imageUrl: '/images/hipismo-project-final.jpg', // Updated image path
    imageAlt: 'Ilustração artística de hipismo',
    link: null, // Sem link público
    confidential: true, // Marcar como confidencial
  },
  {
    title: '⚖️ Iuris Petições – Plataforma para advogados',
    description: 'Conecta advogados a redatores jurídicos de forma prática.\n• Controle de prazos e pagamentos\n• Dashboard com visão do negócio\n• Área do cliente pra envio e acompanhamento\n• Foco em rastreabilidade e fluidez',
    tags: ['Bubble', 'MVP', 'Automação', 'Legal Tech'], // Tags atualizadas
    imageUrl: '/images/iuris-project-new.jpg',
    imageAlt: 'Screenshot da plataforma Iuris Petições',
    link: 'https://iurispeticoes.com.br/',
    confidential: false,
  },
  {
    title: '🧵 Fixwear – App de serviços de costura',
    description: 'App que conecta clientes e costureiros com agilidade.\n• Filtro por localização\n• Painel para cliente, costureiro e admin\n• Integração com Asaas pra pagamentos e resgates\n• Notificações automáticas via WhatsApp',
    tags: ['Bubble', 'Marketplace', 'API Asaas', 'WhatsApp'], // Tags atualizadas
    imageUrl: '/images/fixwear-project-new.jpg',
    imageAlt: 'Screenshot da página inicial da Fixwear',
    link: 'http://fixwear.com.br/',
    confidential: false,
  },
];

export default function ProjectsSection() {
  // Refs para os elementos que queremos animar
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const othersRef = useRef<HTMLDivElement>(null);
  const partnershipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Opcional: Desconectar o observer após a animação para performance
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger quando 10% do elemento está visível
      }
    );

    // Observar os elementos
    const elementsToObserve: (HTMLElement | null)[] = [
      ...projectRefs.current,
      othersRef.current,
      partnershipRef.current,
    ];

    elementsToObserve.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    // Limpeza ao desmontar o componente
    return () => {
      elementsToObserve.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []); // Executar apenas uma vez na montagem

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e Subtítulo Atualizados (5.0) */}
        <div className="text-center mb-12 md:mb-16 scroll-animate" ref={(el) => { /* Adicionar ref aqui também se desejado */ }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mb-3">
            📌 Projetos em Destaque
          </h2>
          <p className="text-lg text-gray-400">
            Cases que exigiram criatividade, performance e um pouquinho de café extra ☕
          </p>
        </div>

        {/* Layout Alternando Atualizado */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              ref={(el) => projectRefs.current[index] = el} // Adicionar ref a cada projeto
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center scroll-animate" // Adicionar classe scroll-animate
            >
              {/* Coluna de Texto */}
              <div className={`md:order-${index % 2 === 1 ? '1' : '2'} space-y-4 text-center md:text-left`}> {/* Ajuste na ordem para começar com texto à esquerda no primeiro */}
                <h3 className="text-2xl font-semibold text-gray-100">{project.title}</h3>
                {project.confidential && <Badge variant="destructive" className="mb-2">🔒 Projeto confidencial</Badge>}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-purple-300 text-xs backdrop-blur-sm">{tag}</Badge>
                  ))}
                </div>
                {/* Usar whitespace-pre-line para renderizar quebras de linha do \n */}
                <p className="text-gray-400 whitespace-pre-line">{project.description}</p>
                {project.link && (
                  <div>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 group">
                      🌐 Acessar projeto <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Coluna de Imagem */}
              <div className={`md:order-${index % 2 === 1 ? '2' : '1'} flex justify-center items-center`}> {/* Ajuste na ordem */}
                <div className="relative w-full max-w-lg aspect-[16/10] bg-gray-800/50 rounded-lg overflow-hidden shadow-xl group backdrop-blur-sm border border-white/10">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção 5.1 - Outros projetos */}
        <div ref={othersRef} className="mt-20 md:mt-32 pt-12 md:pt-16 text-center scroll-animate"> {/* Adicionar ref e classe */}
          <h3 className="text-2xl font-semibold text-gray-100 mb-6">📦 Outros projetos entregues</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 text-lg text-gray-300">
            <span className="inline-flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/> +29 projetos concluídos</span>
            <span className="inline-flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/> +12 automações integradas</span>
            <span className="inline-flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/> +16 apps mobile</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada um deles criado sob medida, com foco no que mais importa:
            <br className="hidden sm:block"/>
            <strong className="text-gray-200">resolver o problema e fazer o negócio rodar com leveza.</strong>
          </p>
        </div>

        {/* Seção 5.2 - Parceria WA */}
        <div ref={partnershipRef} className="mt-16 pt-12 text-center scroll-animate"> {/* Adicionar ref e classe */}
           <h3 className="text-xl font-semibold text-gray-100 mb-3 inline-flex items-center"><Briefcase className="text-purple-400 mr-2" size={20}/> Em parceria com WA project</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mais de 8 projetos desenvolvidos, incluindo sistemas para eventos, gestão e automações.
          </p>
        </div>

      </div>
    </section>
  );
}

