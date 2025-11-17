import React from 'react';
import MiniHero from '../components/MiniHero';

const KontaktPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <MiniHero title="KONTAKT" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <div>
            
            <div className="space-y-6 font-montserrat">
              <div>
                <h3 className="text-lg font-semibold mb-2 font-jost">MT AUTOS s.r.o.</h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>29 Augusta č.2261/145,</p>
                  <p>03852 Sučany, okres Martin</p>
                  <p>(Sučany-Juh, pri Čerpacej stanici Orlen)</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Tel:</span> +421 915 511 111
                </p>
                <p className="text-gray-700 ml-8">
                  +421 915 834 574
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">W</span>
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">V</span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">e-mail:</span> mtautossro@gmail.com
                </p>
              </div>
              
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">IČO:</span> 47384017
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">DIČ:</span> 2023892652
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">IČ DPH:</span> SK2023892652
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 font-jost">Otváracie hodiny:</h4>
                <div className="text-gray-700">
                  <p>Pondelok - piatok 9:00-17:00</p>
                  <p>Sobota - 9:00 - 13:00</p>
                  <p>Nedeľa - zatvorené</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form Card */}
          <div className="bg-blue-600 rounded-lg overflow-hidden shadow-lg">
            {/* Header image */}
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNEY4NEY3O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTQwQUY7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JhZCkiLz4KPHN2ZyB4PSI0MCIgeT0iNDAiIHdpZHRoPSI0MjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgNDIwIDEyMCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Im01IDUgaDQxMCB2MTEwIGgtNDEwIHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI1LDUiLz4KPHRleHQgeD0iMjEwIiB5PSI2NSIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCI+Q2l0eWxpbmU8L3RleHQ+CjwvZz4KPC9zdmc+")',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-4 left-4">
                <h2 className="text-white text-2xl font-bold font-jost">
                  Ak máte otázky, neváhajte sa pýtať!
                </h2>
              </div>
            </div>
            
            {/* Form */}
            <div className="p-6 bg-white">
              <p className="text-sm text-gray-600 mb-6 font-montserrat">
                Vyplňte potrebné údaje a zašleme sa Vám na najskôr
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Meno"
                    className="w-full border border-gray-300 rounded px-3 py-2 font-montserrat"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded px-3 py-2 font-montserrat"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefón"
                    className="w-full border border-gray-300 rounded px-3 py-2 font-montserrat"
                  />
                  <input
                    type="text"
                    placeholder="Predmet"
                    className="w-full border border-gray-300 rounded px-3 py-2 font-montserrat"
                  />
                </div>
                
                <textarea
                  placeholder="Správa"
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2 font-montserrat"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded font-bold font-montserrat hover:bg-gray-800 transition-colors"
                >
                  Odoslať
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 font-montserrat">
                Odoslaním súhlasíte pohltom spracovaniu v{' '}
                <a href="#" className="text-blue-600 underline">
                  ochrane osobných údajov
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;