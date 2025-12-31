
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Presentation from './components/Presentation';
import AboutUs from './components/AboutUs';
import Experience from './components/Experience';
import ApprovedStudents from './components/ApprovedStudents';
import Maps from './components/Maps';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "50px 0px 50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          const rect = entry.boundingClientRect;
          const isAbove = rect.bottom < 0;
          const isBelow = rect.top > window.innerHeight;
          
          if (isAbove || isBelow) {
            entry.target.classList.remove('active');
          }
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappIconUrl = "https://img.cdndsgni.com/preview/10000403.jpg";

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Banner />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="reveal">
            <Presentation />
          </div>
          
          <div className="reveal">
            <AboutUs />
          </div>
          
          <Experience />
          
          <div className="reveal">
            <ApprovedStudents />
          </div>
          
          {/* Seção do Botão de Matrículas e Turmas 2026 */}
          <div className="pt-8 pb-12 flex flex-col items-center text-center reveal">
            <h4 className="text-2xl font-bold mb-8 text-[#2D2D2D]">Pronto para começar sua jornada?</h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center px-4">
              <button className="bg-[#B91C1C] text-[#FDB913] px-8 py-4 md:px-10 md:py-5 rounded-full font-extrabold text-lg md:text-xl hover:bg-[#991B1B] transition-all shadow-2xl transform hover:scale-105 hover:shadow-[#B91C1C]/20">
                Matrículas e Dúvidas
              </button>
              <button className="bg-[#B91C1C] text-[#FDB913] px-8 py-4 md:px-10 md:py-5 rounded-full font-extrabold text-lg md:text-xl hover:bg-[#991B1B] transition-all shadow-2xl transform hover:scale-105 hover:shadow-[#B91C1C]/20">
                Turmas 2026
              </button>
            </div>
          </div>

          {/* Mapas das Unidades */}
          <Maps />
        </div>
      </main>

      <Footer />

      {/* Ícone de WhatsApp Flutuante com Imagem Personalizada */}
      <a 
        href="https://wa.me/15997107553" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-white p-0 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group w-16 h-16 overflow-hidden border-2 border-[#25D366]"
      >
        <img 
          src={whatsappIconUrl} 
          alt="WhatsApp" 
          className="w-full h-full object-cover scale-110"
        />
        <span className="absolute right-full mr-3 bg-white text-[#2D2D2D] px-4 py-2 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-slate-100">
          Fale Conosco agora!
        </span>
      </a>
    </div>
  );
};

export default App;
