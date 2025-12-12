import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left border-b border-gray-800 pb-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-exo">Autocentrum Maxi .cz</h3>
            <p className="text-gray-400 font-montserrat text-sm leading-relaxed">
              Prodejem a dovozem ojetých osobních a užitkových vozidel se pro vás zabýváme již 30 let. Máme stálou prodejnu v Ostravě. Blízko dálnice D1.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-exo">Menu</h3>
            <ul className="space-y-2 font-montserrat text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Úvod</Link></li>
              <li><Link to="/ponuka" className="hover:text-white transition-colors">Nabídka</Link></li>
              <li><Link to="/financovani" className="hover:text-white transition-colors">Financování</Link></li>
              <li><Link to="/pojisteni" className="hover:text-white transition-colors">Pojištění</Link></li>
              <li><Link to="/zaruka" className="hover:text-white transition-colors">Záruka</Link></li>
              <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-exo">Kontakt</h3>
            <div className="space-y-2 text-gray-400 font-montserrat">
              <p>Lukáš Neuwirth</p>
              <p>Ibsenova 1167/31 Ostrava 702 00</p>
              <p>+420 702 198 267</p>
              <a href="mailto:autocentrummaxi@gmail.com" className="hover:text-white">autocentrummaxi@gmail.com</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-exo">Právní</h3>
            <ul className="space-y-2 font-montserrat text-gray-400">
              <li><Link to="/cookies" className="hover:text-white transition-colors">Zásady cookies</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Ochrana osobních údajů</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-montserrat">
          <p>GDPR | Vytvořila digitální agentura 4WORKS Solutions</p>
          <div className="mt-4 md:mt-0">
             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">
               Go to Top ↑
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;