
import React from 'react';

const Banner: React.FC = () => {
  const bannerUrl = "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/340766604_139518252403864_2108269236411058950_n.png?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ySdWAouOvoEQ7kNvwEuA0gM&_nc_oc=Adk5fmw0p_ms-eRG8jihZDkjATpXzP9nkYkoXiu5QP4GfA1VVLtpMAJyKIpRU2axebO6_atEYNeYmn989gVQmOqO&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=M26sE2LMLqBBVKiOb2Z7RQ&oh=00_AfkN5PfEJw6x23G2AIeWuz3cRRw_1soyI4vscpXmudajJA&oe=695881C2";

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
