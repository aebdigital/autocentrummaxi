import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-start mb-8">
          <img 
            src="/logo.jpg" 
            alt="MT AUTOS" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 font-jost">Navigácia</h3>
            <ul className="space-y-2 font-montserrat">
              <li><a href="/" className="hover:text-gray-300">Domov</a></li>
              <li><a href="/ponuka" className="hover:text-gray-300">Ponuka</a></li>
              <li><a href="/kontakt" className="hover:text-gray-300">Kontakt</a></li>
              <li><a href="#" className="hover:text-gray-300">Ochrana osobných údajov</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 font-jost">Adresa</h3>
            <div className="space-y-2 text-gray-400 font-montserrat">
              <p>29 Augusta č.2261/145,</p>
              <p>03852 Sučany, okres Martin</p>
              <p>(Sučany-Juh,pri Čerpacej stanici Orlen)</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 font-jost">Kontakt</h3>
            <div className="space-y-2 text-gray-400 font-montserrat">
              <p>mtautossro@gmail.com</p>
              <p>+421 915 511 111</p>
              <p>+421 915 834 574</p>
              <div className="flex justify-start space-x-4 mt-4">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 font-montserrat">
          <p>Copyright © 2025 MT AUTOS s.r.o. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;