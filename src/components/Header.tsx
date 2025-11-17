import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img 
              src="/logo.jpg" 
              alt="MT AUTOS" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <nav className="flex space-x-8">
          <Link to="/" className="text-blue-400 font-bold font-jost hover:text-blue-300">Domov</Link>
          <Link to="/ponuka" className="text-blue-400 font-bold font-jost hover:text-blue-300">Ponuka</Link>
          <Link to="/kontakt" className="text-blue-400 font-bold font-jost hover:text-blue-300">Kontakt</Link>
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