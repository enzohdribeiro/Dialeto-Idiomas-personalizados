
import React from 'react';
import { Mail, MapPin, PhoneCall } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/341316301_4462867203837005_4245424553688041673_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Xd4a1RWnMpIQ7kNvwEHjDNy&_nc_oc=Adkgz7SFHezTGdx1gZiDFrxOlgFg7Uh9Q0U6ePbmneYjyNMbcftgyYXGowo6v2E_JnyvRZFhWn5hj-6qqZJBkkSc&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=mh0sq7riPpItxwlg668Cfw&oh=00_Afmou8y8XGgM25C9Z3aRid-mSksQ1Kcqb93oZG_q3zUJxg&oe=69587286";

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-100 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <img 
              src={logoUrl} 
              alt="Dialeto Logo" 
              className="h-24 w-24 mb-4 object-cover rounded-full border-2 border-[#B91C1C]/10"
            />
            <h3 className="text-[#B91C1C] font-bold text-xl mb-4">DIALETO</h3>
            <p className="text-sm text-[#2D2D2D]/60 leading-relaxed text-center md:text-left">
              Transformando a forma como você aprende idiomas com foco, clareza e personalização.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#2D2D2D]">Navegação</h4>
            <ul className="space-y-4 text-sm text-[#2D2D2D]/70">
              <li><a href="#" className="hover:text-[#B91C1C] transition-colors">Página Inicial</a></li>
              <li><a href="#about" className="hover:text-[#B91C1C] transition-colors">Nossa Escola</a></li>
              <li><a href="#experience" className="hover:text-[#B91C1C] transition-colors">Conquistas</a></li>
              <li><a href="#" className="hover:text-[#B91C1C] transition-colors font-bold text-[#B91C1C]">Novas Turmas 2026</a></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#2D2D2D]">Cursos</h4>
            <ul className="space-y-4 text-sm text-[#2D2D2D]/70">
              <li className="hover:text-[#B91C1C] cursor-pointer">Inglês</li>
              <li className="hover:text-[#B91C1C] cursor-pointer">Espanhol</li>
              <li className="hover:text-[#B91C1C] cursor-pointer">Francês & Italiano</li>
              <li className="hover:text-[#B91C1C] cursor-pointer">Aulas VIP Individuais</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#2D2D2D]">Contato</h4>
            <ul className="space-y-4 text-sm text-[#2D2D2D]/70">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#B91C1C] shrink-0 mt-0.5" />
                <span>Atendimento Presencial e Online<br/>Sorocaba - São Paulo</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall size={18} className="text-[#B91C1C] shrink-0" />
                <span>Unidade Campolim (15)3035-6114 / Unidade Olga (15)3227-6534</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#B91C1C] shrink-0" />
                <span>ola@dialeto.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-[#2D2D2D]/40 gap-4">
          <p>© 2026 Dialeto Idiomas Personalizados. Educando com paixão.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
