
import React from 'react';

const Presentation: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#FDB913]/20 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1744181526018-9a6efb9fdb3f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Estudantes conversando" 
              className="relative rounded-[2.5rem] shadow-xl z-10 w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-[#B91C1C] text-sm font-bold uppercase tracking-widest">Apresentação</h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight text-[#2D2D2D]">Um novo conceito em aprender idiomas</h3>
          <p className="text-lg text-[#2D2D2D]/80 leading-relaxed">
            Na Dialeto, focamos no que realmente importa: a sua capacidade de se comunicar. Com suporte para <strong>12 idiomas</strong> e modalidades <strong>individuais ou em grupos</strong>, moldamos o ensino ao seu ritmo.
          </p>
          <div className="space-y-4">
            {[
              { text: 'Aulas Individuais e em Grupos', color: '#FDB913' },
              { text: '12 Idiomas Disponíveis', color: '#B91C1C' },
              { text: 'Metodologia Adaptativa', color: '#FDB913' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: item.color }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-semibold text-[#2D2D2D]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
