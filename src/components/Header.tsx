import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-md text-black fixed w-full top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-20">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl md:text-3xl font-bold font-exo tracking-tight text-black hover:text-gray-700 transition-colors">
            Autocentrum Maxi .cz
          </Link>
        </div>
        
        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/ponuka" className="text-sm font-bold font-exo uppercase tracking-wider hover:text-red-600 transition-colors">Nabídka</Link>
          <Link to="/financovani" className="text-sm font-bold font-exo uppercase tracking-wider hover:text-red-600 transition-colors">Financování</Link>
          <Link to="/pojisteni" className="text-sm font-bold font-exo uppercase tracking-wider hover:text-red-600 transition-colors">Pojištění</Link>
          <Link to="/zaruka" className="text-sm font-bold font-exo uppercase tracking-wider hover:text-red-600 transition-colors">Záruka</Link>
          <Link to="/kontakt" className="text-sm font-bold font-exo uppercase tracking-wider hover:text-red-600 transition-colors">Kontakt</Link>
        </nav>
        
        {/* Right Side: Contact / Mobile Toggle */}
        <div className="flex items-center">
           <a href="tel:+420702198267" className="hidden lg:block bg-black text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors mr-4">
             +420 702 198 267
           </a>

          {/* Hamburger Menu Button (Mobile) */}
          <button 
            className="lg:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay (Full Screen) */}
      <div 
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-white z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center h-20 border-b border-gray-100 bg-white">
          <Link to="/" onClick={toggleMenu} className="text-2xl font-bold font-exo">
             Autocentrum Maxi .cz
          </Link>
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col justify-start p-8 h-full bg-white space-y-6">
           <Link to="/ponuka" className="text-black font-bold font-exo hover:text-red-600 text-3xl" onClick={toggleMenu}>Nabídka</Link>
           <Link to="/financovani" className="text-black font-bold font-exo hover:text-red-600 text-3xl" onClick={toggleMenu}>Financování</Link>
           <Link to="/pojisteni" className="text-black font-bold font-exo hover:text-red-600 text-3xl" onClick={toggleMenu}>Pojištění</Link>
           <Link to="/zaruka" className="text-black font-bold font-exo hover:text-red-600 text-3xl" onClick={toggleMenu}>Záruka</Link>
           <Link to="/kontakt" className="text-black font-bold font-exo hover:text-red-600 text-3xl" onClick={toggleMenu}>Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;