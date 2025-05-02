import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Dados dos projetos atualizados com novas imagens (Ajuste 3)
const projects = [
  {
    title: 'Plataforma para o Setor Esportivo (Hipismo)',
    description: 'Reconstrução e otimização de uma plataforma complexa para o setor esportivo. Foco no front-end com Bubble e Supabase, redesenhando a interface para fluidez, performance e UX aprimorada. Desafio de refazer grande parte em tempo recorde, entregando uma solução robusta e escalável.',
    tags: ['Bubble', 'Supabase', 'UI/UX Redesign', 'Performance', 'Frontend'],
    imageUrl: '/images/hipismo-project-final.jpg', // Usar nova imagem hipismo
    imageAlt: 'Ilustração artística de hipismo',
    link: null,
  },
  {
    title: 'Fixwear 2.0 - App de Serviços de Costura',
    description: 'Desenvolvimento da versão 2.0 do aplicativo Fixwear (FlutterFlow + Supabase), conectando clientes a costureiros com interface moderna e intuitiva, incluindo painel administrativo.',
    tags: ['FlutterFlow', 'Supabase', 'Mobile App', 'UI/UX Design', 'Marketplace'],
    imageUrl: '/images/fixwear-project-new.jpg',
    imageAlt: 'Screenshot da página inicial da Fixwear',
    link: 'http://fixwear.com.br/',
  },
  {
    title: 'Iuris Petições - Plataforma para Advogados',
    description: 'Desenvolvimento de plataforma para otimizar a rotina de advogados, oferecendo petições e serviços jurídicos. Foco em usabilidade e eficiência para o mercado jurídico.',
    tags: ['Bubble', 'UI/UX Design', 'Legal Tech', 'SaaS'],
    imageUrl: '/images/iuris-project-new.jpg',
    imageAlt: 'Screenshot da plataforma Iuris Petições',
    link: 'https://iurispeticoes.com.br/',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-transparent overflow-hidden"> {/* Fundo transparente */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mb-2">
            Projetos mais desafiadores.
          </h2>
          <p className="text-lg text-gray-400">
            Cases que exigiram criatividade, performance e um pouquinho de café extra ☕
          </p>
        </div>

        {/* Layout Alternando */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div key={project.title} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Coluna de Texto */}
              <div className={`md:order-${index % 2 === 0 ? '1' : '2'} space-y-4 text-center md:text-left`}>
                <h3 className="text-2xl font-semibold text-gray-100">{project.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-purple-300 text-xs backdrop-blur-sm">{tag}</Badge>
                  ))}
                </div>
                <p className="text-gray-400">{project.description}</p>
                {project.link && (
                  <div>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 group">
                      Ver Projeto <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Coluna de Imagem */}
              <div className={`md:order-${index % 2 === 0 ? '2' : '1'} flex justify-center items-center`}>
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
      </div>
    </section>
  );
}

