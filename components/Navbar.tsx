
import React from 'react';
import { Phone, Instagram, Facebook } from 'lucide-react';

const Navbar: React.FC = () => {
  const logoUrl = "/imgs/dialeto_logo.jpg";

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F7F2]/95 backdrop-blur-md shadow-sm border-b border-black/5">
      <div className="container mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
        {/* Logo Real com Recorte Redondo */}
        <div className="flex items-center shrink-0">
          <img 
            src={logoUrl} 
            alt="Dialeto Logo" 
            className="h-10 w-10 md:h-16 md:w-16 object-cover rounded-full border-2 border-[#B91C1C]/10"
          />
          <div className="ml-2 md:ml-3 hidden sm:block leading-tight">
            <span className="block text-[#B91C1C] font-bold text-base md:text-xl tracking-tighter uppercase">DIALETO</span>
            <span className="text-[8px] md:text-[10px] text-[#2D2D2D]/60 uppercase tracking-widest font-semibold">Idiomas Personalizados</span>
          </div>
        </div>

        {/* Links de Texto (Apenas Desktop) */}
        <div className="hidden lg:flex items-center space-x-6 font-medium text-sm">
          <a href="#" className="hover:text-[#B91C1C] transition-colors">Início</a>
          <a href="#about" className="hover:text-[#B91C1C] transition-colors">Sobre Nós</a>
          <a href="#experience" className="hover:text-[#B91C1C] transition-colors">Experiência</a>
          <a href="#approved" className="hover:text-[#B91C1C] transition-colors">Alunos</a>
        </div>

        {/* Ações Visíveis em todos os dispositivos */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Ícones Sociais */}
          <div className="flex items-center space-x-1.5 md:space-x-3">
            <a href="https://wa.me/15997107553" target="_blank" rel="noopener noreferrer" className="p-1.5 md:p-2 bg-white text-[#2D2D2D] rounded-full shadow-sm hover:text-[#B91C1C] transition-all border border-slate-100">
              <Phone size={14} className="md:w-4 md:h-4" />
            </a>
            <a href="https://www.instagram.com/dialeto.idiomas/" target="_blank" rel="noopener noreferrer" className="p-1.5 md:p-2 bg-white text-[#2D2D2D] rounded-full shadow-sm hover:text-[#B91C1C] transition-all border border-slate-100">
              <Instagram size={14} className="md:w-4 md:h-4" />
            </a>
            <a href="https://www.facebook.com/dialeto.idiomas/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="p-1.5 md:p-2 bg-white text-[#2D2D2D] rounded-full shadow-sm hover:text-[#B91C1C] transition-all border border-slate-100">
              <Facebook size={14} className="md:w-4 md:h-4" />
            </a>
          </div>

          {/* Botão Novas Turmas */}
          <a href="#" className="bg-[#B91C1C] text-[#FDB913] px-3 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-[10px] md:text-sm hover:bg-[#991B1B] transition-all shadow-lg transform hover:scale-105 whitespace-nowrap">
            Novas Turmas
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
