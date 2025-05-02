import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar' // Importar Navbar
import Footer from '@/components/layout/Footer' // Importar Footer

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Alisson Rosa - Desenvolvedor Low-Code & Automações',
  description: 'Portfólio de Alisson Rosa, desenvolvedor freelancer especialista em Bubble, FlutterFlow, Supabase, Make e n8n. Transformando ideias em soluções digitais eficientes.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth"> {/* Adicionado scroll-smooth */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100 flex flex-col min-h-screen`}> {/* Garantir altura mínima e flex col */}
        <Navbar />
        <main className="flex-grow pt-16"> {/* Adicionado padding-top para compensar navbar fixa e flex-grow */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

