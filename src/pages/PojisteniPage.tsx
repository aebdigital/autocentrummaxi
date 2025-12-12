import React from 'react';
import MiniHero from '../components/MiniHero';

const PojisteniPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <MiniHero title="Pojištění" />
      <div className="container mx-auto px-4 py-12 max-w-6xl font-sans text-gray-800">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <section>
            <p className="text-lg mb-6 leading-relaxed">
              Připravili jsme pro vás možnost sjednání povinného ručení a havarijního pojištění za výhodnějších podmínek, než dostanete v pojišťovně nebo na internetu.
            </p>
            <p className="text-lg mb-6 leading-relaxed font-semibold">
              Využijte možnosti pojištění vozidla přímo u nás.
            </p>
            <p className="text-lg leading-relaxed">
              Nezabere to víc, než pár minut a odjíždíte s plně pojištěným vozidlem.
            </p>
          </section>
          
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
              alt="Pojištění vozidla" 
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
        </div>

        <section>
          <h3 className="text-2xl font-bold font-exo mb-6">Spolupracujeme</h3>
          <div className="flex flex-wrap gap-8 items-center">
             {/* Placeholders for logos */}
             <div className="text-gray-500 italic">Generali, Kooperativa, Allianz...</div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PojisteniPage;