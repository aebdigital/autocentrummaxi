import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CarModal from './components/CarModal';
import AnnouncementPopup from './components/AnnouncementPopup';
import HomePage from './pages/HomePage';
import PonukaPage from './pages/PonukaPage';
import CarDetailPage from './pages/CarDetailPage';
import KontaktPage from './pages/KontaktPage';
import AdminPage from './pages/AdminPage';
import { Car } from './types/car';
import { getCarsForPonuka, PublicCar } from './lib/publicCars';

function AppContent() {
  const [supabaseCars, setSupabaseCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Announcements disabled
  const [announcements] = useState<any[]>([]);

  // Load cars from Supabase
  useEffect(() => {
    const loadCars = async () => {
      try {
        setIsLoading(true);
        console.log('Loading cars from Supabase...');
        const data = await getCarsForPonuka();
        console.log('Cars loaded:', data.length);

        // Convert PublicCar to Car type
        const cars: Car[] = data.map((car: PublicCar) => ({
          id: car.id,
          brand: car.brand,
          model: car.model,
          year: car.year ?? 0,
          price: car.price ?? 0,
          mileage: car.mileage ?? 0,
          fuel: car.fuel ?? '',
          transmission: car.transmission ?? '',
          image: car.image,
          power: car.power ?? undefined,
          showOnHomepage: car.showOnHomepage ?? false,
        }));

        setSupabaseCars(cars);
      } catch (error) {
        console.error('Failed to load cars from Supabase:', error);
        setSupabaseCars([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadCars();
  }, []);

  // Cars come from Supabase
  const cars = supabaseCars;

  // Admin car handlers (for local admin functionality - kept for compatibility)
  const [adminCars, setAdminCars] = useState<Car[]>([]);

  const handleAddCar = (newCarData: Omit<Car, 'id'>) => {
    const newCar: Car = {
      ...newCarData,
      id: Date.now().toString(),
      image: newCarData.image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNkI3Mjg4Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIj5Ub3JhZGxvPC90ZXh0Pgo8L3N2Zz4='
    };
    setAdminCars([...adminCars, newCar]);
  };

  const handleAddAdminCar = (newCar: Car) => {
    setAdminCars([...adminCars, newCar]);
  };

  const handleDeleteAdminCar = (carId: string) => {
    setAdminCars(adminCars.filter(car => car.id !== carId));
  };

  const handleEditAdminCar = (updatedCar: Car) => {
    setAdminCars(adminCars.map(car => car.id === updatedCar.id ? updatedCar : car));
  };

  const handleCarClick = () => {
    // This function is now handled by routing
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cars={cars}
              isLoading={isLoading}
              onCarClick={handleCarClick}
              announcements={announcements}
            />
          }
        />
        <Route
          path="/ponuka"
          element={
            <PonukaPage
              cars={cars}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/vozidlo/:slug"
          element={<CarDetailPage cars={cars} />}
        />
        <Route
          path="/kontakt"
          element={<KontaktPage />}
        />
        <Route
          path="/admin"
          element={<AdminPage onAddCar={handleAddAdminCar} onDeleteCar={handleDeleteAdminCar} onEditCar={handleEditAdminCar} adminCars={adminCars} />}
        />
      </Routes>

      <Footer />

      <CarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCar}
      />

      <AnnouncementPopup />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
