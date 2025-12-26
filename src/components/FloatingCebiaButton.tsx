import React from 'react';

const FloatingCebiaButton: React.FC = () => {
  return (
    <a
      href="https://cz.cebia.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 bg-lime-400 hover:bg-lime-500 text-dark-900 font-semibold py-3 px-5 rounded-lg shadow-lg transition-all hover:scale-105 font-montserrat text-sm flex items-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Prověřte si vozidlo
    </a>
  );
};

export default FloatingCebiaButton;
