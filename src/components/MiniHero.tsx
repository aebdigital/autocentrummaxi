import React from 'react';

interface MiniHeroProps {
  title: string;
}

const MiniHero: React.FC<MiniHeroProps> = ({ title }) => {
  return (
    <section className="relative min-h-[20vh] bg-gray-400 flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/hero section.jpg")',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold font-jost text-center">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default MiniHero;