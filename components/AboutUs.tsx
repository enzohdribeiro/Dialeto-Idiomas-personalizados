
import React from 'react';
import { ShieldCheck, Target, Building2 } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white/50 rounded-[3rem] px-8 md:px-12 my-12"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-[#B91C1C] text-sm font-bold uppercase tracking-widest">
            Sobre Nós
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            Excelência em Idiomas em Sorocaba
          </h3>

          <div className="space-y-4 text-lg text-[#2D2D2D]/80 leading-relaxed">
            <p>
              A <strong>Dialeto Idiomas Personalizados</strong> é uma escola com
              um atendimento adaptado ao perfil e às características de cada
              aluno. Nosso ensino atende de maneira exclusiva todas as
              necessidades linguísticas, proporcionando a aquisição do idioma de
              forma natural e definitiva.
            </p>
            <p>
              Contamos com profissionais altamente qualificados, que passam por
              treinamentos constantes para aprimorar e desenvolver seu
              aprendizado de forma interativa e eficiente.
            </p>
          </div>

          <div className="bg-[#B91C1C]/5 border-l-4 border-[#B91C1C] p-6 rounded-r-2xl my-8">
            <h4 className="text-[#B91C1C] font-bold text-lg mb-2 flex items-center gap-2">
              <ShieldCheck size={24} /> Centro Preparatório e Aplicador
            </h4>
            <p className="text-[#2D2D2D]/80">
              Somos aplicadores oficiais das provas{" "}
              <strong>Cambridge, TOEFL, TOEIC, IELTS, SAT</strong> e de outros
              11 idiomas em Sorocaba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FDB913]/20 rounded-xl flex items-center justify-center mb-4 text-[#B91C1C]">
                <Target size={28} />
              </div>
              <h4 className="text-[#B91C1C] font-bold text-xl mb-2">
                Aquisição Natural
              </h4>
              <p className="text-sm text-[#2D2D2D]/70">
                Foco na fluência definitiva através de imersão e contexto real.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#B91C1C]/10 rounded-xl flex items-center justify-center mb-4 text-[#B91C1C]">
                <Building2 size={28} />
              </div>
              <h4 className="text-[#B91C1C] font-bold text-xl mb-2">
                Soluções Corporate
              </h4>
              <p className="text-sm text-[#2D2D2D]/70">
                Desenvolvemos serviços personalizados para multinacionais e
                companhias, primando pela qualidade e resultados.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#B91C1C]/10 rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              src="./img/dialeto_aboutus.jpg"
              alt="Nossa Equipe e Ambiente"
              className="relative rounded-[2.5rem] shadow-2xl z-10 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutUs;
