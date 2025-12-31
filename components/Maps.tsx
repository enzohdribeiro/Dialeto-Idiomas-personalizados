
import React from 'react';
import { MapPin } from 'lucide-react';

const Maps: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10 reveal">
        <h2 className="text-[#B91C1C] text-sm font-bold uppercase tracking-widest mb-2">Onde Estamos</h2>
        <h3 className="text-3xl font-bold text-[#2D2D2D]">Nossas Unidades</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Unidade Olga */}
        <div className="reveal delay-100 flex flex-col">
          <div className="bg-white p-4 rounded-t-[2rem] border-t border-l border-r border-slate-100 shadow-sm flex items-center space-x-3">
            <div className="bg-[#B91C1C] p-2 rounded-full text-white">
              <MapPin size={20} />
            </div>
            <h4 className="font-bold text-xl text-[#2D2D2D]">Unidade Olga</h4>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-b-[2rem] shadow-lg border-b border-l border-r border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.7690305747528!2d-47.4076677!3d-23.4937675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf61b101308acb%3A0x2c599b48826a8182!2sDialeto%20Idiomas%20Personalizados%20-%20Unidade%202!5e0!3m2!1spt-BR!2sau!4v1767053382043!5m2!1spt-BR!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Unidade Olga"
            ></iframe>
          </div>
        </div>

        {/* Unidade Campolim */}
        <div className="reveal delay-200 flex flex-col">
          <div className="bg-white p-4 rounded-t-[2rem] border-t border-l border-r border-slate-100 shadow-sm flex items-center space-x-3">
            <div className="bg-[#FDB913] p-2 rounded-full text-[#B91C1C]">
              <MapPin size={20} />
            </div>
            <h4 className="font-bold text-xl text-[#2D2D2D]">Unidade Campolim</h4>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-b-[2rem] shadow-lg border-b border-l border-r border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279.8789479840004!2d-47.463193325905024!3d-23.51853143875204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a897b4c58d1%3A0x6bbe592ae416b611!2sDialeto%20Idiomas%20Personalizados%20-%20Unidade%201!5e0!3m2!1spt-BR!2sau!4v1767053622809!5m2!1spt-BR!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Unidade Campolim"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
