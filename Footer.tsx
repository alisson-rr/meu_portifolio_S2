
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Unificar com a cor de fundo da seção de contato (bg-gray-950)
    <footer className="bg-gray-950 text-gray-500 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Remover ícones sociais/contato do rodapé */}
        {/* <div className="flex justify-center space-x-6 mb-4">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-200">
            <Phone size={24} />
          </Link>
        </div> */}
        <p className="text-sm">
          &copy; {currentYear} Alisson Rosa. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-1">
          Feito com <span role="img" aria-label="coração">❤️</span> usando Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

