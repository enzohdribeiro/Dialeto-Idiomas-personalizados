
import React from 'react';

const Banner: React.FC = () => {
  const bannerUrl = "./img/dialeto_banner.png"

  return (
    <section className="relative w-full px-2 md:px-8 pt-4 md:pt-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[3rem] shadow-xl bg-[#B91C1C] flex items-center justify-center aspect-[16/6] md:aspect-auto">
          {/* 
            Utilizamos object-contain para garantir que o texto do banner 
            (que é parte da imagem) nunca seja cortado em telas estreitas.
          */}
          <img 
            src={bannerUrl} 
            alt="Dialeto - Descomplicado e do seu jeito" 
            className="w-full h-full object-contain md:object-cover"
          />
          
          {/* Sombra interna decorativa */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
