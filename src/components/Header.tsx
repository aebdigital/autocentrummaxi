import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md text-black fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img 
              src="/logo-removebg-preview (1).png" 
              alt="MT AUTOS" 
              className="h-16 w-auto"
            />
          </Link>
        </div>
        
        <nav className="flex h-full">
          <Link to="/" className="text-black font-bold font-jost hover:text-gray-600 flex items-center px-4">Domov</Link>
          <Link to="/ponuka" className="text-black font-bold font-jost hover:text-gray-600 flex items-center px-4">Ponuka</Link>
          <Link to="/kontakt" className="text-black font-bold font-jost hover:text-gray-600 flex items-center px-4 h-full">Kontakt</Link>
        </nav>
        
        <div className="flex items-center">
          <img 
            src="/header baner.jpg" 
            alt="MT AUTOS Banner" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;