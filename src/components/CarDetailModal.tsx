import React from 'react';
import { Car } from '../types/car';

interface CarDetailModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, isOpen, onClose }) => {
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{car.brand} {car.model}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src={car.image} 
                alt={`${car.brand} ${car.model}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="text-3xl font-bold text-red-600 mb-4">
              {car.price.toLocaleString()} €
            </div>

            <h3 className="text-xl font-semibold mb-4">Základné údaje</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">🎨</span>
                <div>
                  <div className="font-medium">Farba</div>
                  <div className="text-gray-600">Modrá tm.</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">🚗</span>
                <div>
                  <div className="font-medium">Dýbere</div>
                  <div className="text-gray-600">{car.drivetrain || '4x4'}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">📊</span>
                <div>
                  <div className="font-medium">Kilometre</div>
                  <div className="text-gray-600">{car.mileage.toLocaleString()} km</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">⚙️</span>
                <div>
                  <div className="font-medium">Výkon</div>
                  <div className="text-gray-600">{car.power || 'N/A'}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">📅</span>
                <div>
                  <div className="font-medium">Rok výroby</div>
                  <div className="text-gray-600">{car.year}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">⛽</span>
                <div>
                  <div className="font-medium">Palivo</div>
                  <div className="text-gray-600">{car.fuel}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">🏭</span>
                <div>
                  <div className="font-medium">Karoséria</div>
                  <div className="text-gray-600">{car.bodyType || 'SUV'}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">⚡</span>
                <div>
                  <div className="font-medium">Objem motora</div>
                  <div className="text-gray-600">{car.engine || 'N/A'}</div>
                </div>
              </div>
            </div>

            {car.vin && (
              <div className="mt-4">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">🔖</span>
                  <div>
                    <div className="font-medium">VIN</div>
                    <div className="text-gray-600">{car.vin}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Výbava</h3>
            <div className="grid grid-cols-1 gap-2">
              {car.features ? car.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </div>
              )) : (
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> ABS</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Airbag</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Centrálne zamykanie</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Parkovacie senzory</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> LED svetlenie</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Navigácia</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Klimatizácia</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Vyhriévané sedačky</div>
                </div>
              )}
            </div>

            {car.description && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Poznámka</h3>
                <p className="text-gray-700">{car.description}</p>
              </div>
            )}

            <div className="mt-8">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold">
                Kontaktovať predajcu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;