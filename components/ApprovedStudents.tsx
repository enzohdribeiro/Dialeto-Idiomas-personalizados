
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const students = [
  {
    id: 1,
    name: "Ana Oliveira",
    achievement: "Aprovada no exame TOEFL com nota máxima.",
    image: ""
  },
  {
    id: 2,
    name: "Carlos Mendes",
    achievement: "CAE - C1 Na prova de Cambridge",
    image: ""
  },
  {
    id: 3,
    name: "Juliana Costa",
    achievement: "Conquistou uma oportunidade de intercâmbio após o curso Dialeto.",
    image: ""
  }
];

const ApprovedStudents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % students.length);
  };

  return (
    <section id="approved" className="py-16 md:py-24 bg-white/30 rounded-[3rem] my-12 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-[#B91C1C] text-sm font-bold uppercase tracking-widest mb-4">Nossos Orgulhos</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Alunos Aprovados e Casos de Sucesso</h3>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-6 md:p-10 shadow-lg border border-slate-100 overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-700 ease-in-out">
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0">
            <img 
              src={students[currentIndex].image} 
              alt={students[currentIndex].name}
              className="w-full h-full object-cover rounded-full border-4 border-[#FDB913] shadow-md"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-2xl font-bold text-[#B91C1C] mb-3">{students[currentIndex].name}</h4>
            <p className="text-lg text-[#2D2D2D]/80 leading-relaxed italic">
              "{students[currentIndex].achievement}"
            </p>
          </div>
          <button 
            onClick={handleNext}
            className="bg-[#FDB913] text-[#B91C1C] p-4 rounded-full shadow-md hover:scale-110 transition-transform flex items-center justify-center"
            aria-label="Próximo aluno"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mt-8">
          {students.map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#B91C1C]' : 'w-2 bg-[#B91C1C]/20'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApprovedStudents;
