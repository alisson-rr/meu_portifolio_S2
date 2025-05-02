import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, SmartToy, Zap, Database, Figma, Link2 } from 'lucide-react';

// Lista de habilidades atualizada para linguagem acessível
const skills = [
  { name: 'Bubble', level: 'Especialista', description: 'Construo sistemas web completos sem precisar programar do zero.', icon: Code },
  { name: 'FlutterFlow', level: 'Avançado', description: 'Crio apps mobile profissionais e prontos para publicação.', icon: SmartToy },
  { name: 'Make & n8n', level: 'Avançado', description: 'Automatizo tarefas repetitivas para você ganhar tempo.', icon: Zap },
  { name: 'Supabase', level: 'Avançado', description: 'Banco de dados seguro que organiza tudo de forma simples.', icon: Database },
  { name: 'Integrações', level: 'Avançado', description: 'Faço suas ferramentas falarem entre si, sem dor de cabeça.', icon: Link2 },
  { name: 'Design & UX', level: 'Avançado', description: 'Desenvolvo interfaces intuitivas e agradáveis para usuários.', icon: Figma },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Ferramentas que eu domino
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Trabalho com ferramentas que aceleram o desenvolvimento e deixam tudo mais simples — tanto para você quanto para o usuário final.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="flex flex-col h-full bg-white/5 border border-purple-800/30 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <skill.icon size={24} className="text-purple-400" />
                  <CardTitle className="text-xl font-semibold text-gray-100">
                    {skill.name}
                  </CardTitle>
                </div>
                <Badge variant="secondary" className="bg-purple-600 text-white">
                  {skill.level}
                </Badge>
              </CardHeader>
              <CardContent className="flex-grow pt-2">
                <p className="text-gray-400">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
