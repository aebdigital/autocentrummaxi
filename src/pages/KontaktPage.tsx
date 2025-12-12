import React, { useState } from 'react';
import MiniHero from '../components/MiniHero';

const KontaktPage: React.FC = () => {
  const [mapInteractive, setMapInteractive] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <MiniHero title="KONTAKT" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <div>
            <div className="space-y-8 font-montserrat">
              
              <div>
                <h2 className="text-2xl font-bold mb-4 font-exo text-black">Autocentrum Maxi .cz</h2>
                
                <div className="mb-6">
                   <h4 className="font-semibold text-lg uppercase tracking-wide text-gray-500 mb-1">telefon</h4>
                   <p className="text-xl font-medium">+420 702 198 267</p>
                </div>

                <div className="mb-6">
                   <h4 className="font-semibold text-lg uppercase tracking-wide text-gray-500 mb-1">E-MAIL</h4>
                   <a href="mailto:autocentrummaxi@gmail.com" className="text-xl font-medium hover:text-blue-600 transition-colors">autocentrummaxi@gmail.com</a>
                </div>

                <div className="mb-6">
                   <h4 className="font-semibold text-lg uppercase tracking-wide text-gray-500 mb-1">adresa</h4>
                   <p className="text-lg">Ibsenova 1167/31, Ostrava 702 00</p>
                </div>

                <div className="mb-6">
                   <h4 className="font-semibold text-lg uppercase tracking-wide text-gray-500 mb-1">IČ</h4>
                   <p className="text-lg">875 464 00</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-lg uppercase tracking-wide text-gray-500 mb-4">otevírací doba</h4>
                <p className="text-red-600 font-bold mb-2">Vždy volat předem, prodejna nemusí být otevřena !</p>
                <div className="space-y-2 text-lg">
                  <div className="flex justify-between max-w-xs">
                    <span>Po – Čt</span>
                    <span>9.00 – 15.00 hod</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Pá</span>
                    <span>9.00 – 12.00 hod</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>So</span>
                    <span>po tel domluvě</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Ne</span>
                    <span>zavřeno</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                   <h4 className="font-bold text-lg">Lukáš Neuwirth</h4>
                   <p className="text-gray-500">jednatel</p>
                   <div className="mt-2">
                     <p className="text-sm uppercase text-gray-400">telefon</p>
                     <p className="font-medium">+420 702 198 267</p>
                   </div>
                </div>
                <div>
                   <h4 className="font-bold text-lg">Petr Neuwirth</h4>
                   <p className="text-gray-500">jednatel</p>
                   <div className="mt-2">
                     <p className="text-sm uppercase text-gray-400">telefon</p>
                     <p className="font-medium">+420 602 563 013</p>
                   </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Right Column - Map */}
          <div className="rounded-lg overflow-hidden shadow-lg min-h-[400px] relative">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.8!2d18.26555!3d49.8466421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e31c98cd8651%3A0xeb942615888194!2sAutocentrum%20Maxi%20.cz!5e0!3m2!1scs!2scz!4v1702000000000!5m2!1scs!2scz"
               width="100%"
               height="100%"
               style={{ border: 0, minHeight: '600px' }}
               allowFullScreen={true}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Autocentrum Maxi - Mapa"
             ></iframe>
             {/* Overlay to prevent scroll interference with Lenis */}
             {!mapInteractive && (
               <div
                 className="absolute inset-0 bg-transparent cursor-pointer"
                 onClick={() => setMapInteractive(true)}
               >
                 <div className="absolute bottom-4 left-0 right-0 text-center">
                   <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                     Pro interakci s mapou prosím klikněte
                   </span>
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;