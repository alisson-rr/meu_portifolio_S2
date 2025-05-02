
'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactSection() {
  const whatsappNumber = '5551994408307'; // Número de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Alisson, vi seu portfólio e gostaria de conversar sobre um projeto!")}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-950"> {/* Manter o fundo escuro por enquanto */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-100">
          Pense simples, mas faça a <span className="text-purple-400">diferença</span>.
        </h2>
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Vamos conversar <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}

