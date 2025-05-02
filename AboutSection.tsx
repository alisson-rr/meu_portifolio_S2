import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Bot, BarChart } from "lucide-react"; // Ícones relevantes

// Conteúdo da seção "O que eu resolvo por aqui"
const services = [
  {
    title: "⚡ Velozes no Dev, Furiosos na Entrega",
    description: "Criação de sistemas completos com low-code, entregues com agilidade e aquele cuidado que você só vê em projeto próprio.",
    icon: Zap
  },
  {
    title: "🔄 Automações que economizam tempo e paciência",
    description: "Integro plataformas, crio fluxos e tiro tarefas repetitivas da sua frente. Você foca no que importa, eu cuido do resto.",
    icon: Bot
  },
  {
    title: "📊 Dashboards e áreas de gestão sem dor de cabeça",
    description: "Você enxerga o que precisa, do jeito que precisa. Organização, performance e rastreabilidade de um jeito leve.",
    icon: BarChart
  }
];

export default function AboutSection() {
  return (
    // Remover bg-gray-900 para usar o fundo global
    <section id="about" className="py-16 sm:py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          O que eu resolvo por aqui
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            // Remover bg-gray-950, manter borda e sombra
            <Card key={service.title} className="bg-transparent border border-purple-800/30 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 flex flex-col text-center items-center p-6 rounded-xl">
              <service.icon className="text-purple-400 mb-4" size={40} />
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-gray-100">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

