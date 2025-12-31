
import React from 'react';
import { Users, Award, Globe } from 'lucide-react';

const Experience: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-[#B91C1C]" />,
      value: "10+",
      label: "Anos de História",
      color: "bg-[#FDB913]/10",
      delay: "delay-100"
    },
    {
      icon: <Award className="w-10 h-10 text-[#B91C1C]" />,
      value: "100%",
      label: "Aprovação em Certificações Internacionais",
      color: "bg-[#B91C1C]/10",
      delay: "delay-200"
    },
    {
      icon: <Globe className="w-10 h-10 text-[#B91C1C]" />,
      value: "12",
      label: "Idiomas Disponíveis",
      color: "bg-[#FDB913]/10",
      delay: "delay-300"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 text-center">
      <div className="reveal mb-16">
        <h2 className="text-[#B91C1C] text-sm font-bold uppercase tracking-widest mb-4">Experiência da Escola</h2>
        <h3 className="text-4xl font-bold text-[#2D2D2D]">Referência em Ensino Personalizado</h3>
        <p className="max-w-2xl mx-auto mt-4 text-[#2D2D2D]/60">
          Garantimos 100% de sucesso aos alunos que buscam certificações internacionais e fluência definitiva.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`reveal ${stat.delay} ${stat.color} p-12 rounded-[3rem] flex flex-col items-center space-y-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}
          >
            <div className="bg-white p-5 rounded-2xl shadow-sm mb-2">
              {stat.icon}
            </div>
            <span className="text-5xl font-extrabold text-[#B91C1C]">{stat.value}</span>
            <span className="text-xl font-semibold text-[#2D2D2D] text-balance">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
