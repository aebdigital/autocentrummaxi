import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnnouncementPopup from './components/AnnouncementPopup';
import ScrollToTop from './components/ScrollToTop';
import FloatingCebiaButton from './components/FloatingCebiaButton';
import HomePage from './pages/HomePage';
import PonukaPage from './pages/PonukaPage';
import CarDetailPage from './pages/CarDetailPage';
import KontaktPage from './pages/KontaktPage';
import CookiesPage from './pages/CookiesPage';
import ZarukaPage from './pages/ZarukaPage';
import FinancovaniPage from './pages/FinancovaniPage';
import PojisteniPage from './pages/PojisteniPage';
import { initialCars } from './data/initialCars';
import { getCarsForPonuka } from './lib/publicCars';
import { Car } from './types/car';

function AppContent() {
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [isLoading, setIsLoading] = useState(true);
  const [announcements] = useState<any[]>([]);

  useEffect(() => {
    async function loadCars() {
      try {
        const supabaseCars = await getCarsForPonuka();
        // Convert Supabase cars to Car type and merge with hardcoded cars
        const convertedCars: Car[] = supabaseCars.map(car => ({
          id: car.id,
          brand: car.brand.trim(),
          model: car.model,
          year: car.year ?? 0,
          price: car.price ?? 0,
          mileage: car.mileage ?? 0,
          fuel: car.fuel ?? '',
          transmission: car.transmission ?? '',
          image: car.image,
          power: car.power ?? undefined,
          showOnHomepage: car.showOnHomepage,
        }));
        // Supabase cars first, then hardcoded cars
        setCars([...convertedCars, ...initialCars]);
      } catch (error) {
        console.error('Failed to load cars from Supabase:', error);
        // Fall back to hardcoded cars only
        setCars(initialCars);
      } finally {
        setIsLoading(false);
      }
    }
    loadCars();
  }, []);

  const handleCarClick = () => {
    // This function is handled by routing
  };

  return (
    <div className="min-h-screen bg-dark-900 font-sans">
      <ScrollToTop />
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
          path="/cookies"
          element={<CookiesPage />}
        />
        <Route
          path="/zaruka"
          element={<ZarukaPage />}
        />
        <Route
          path="/financovani"
          element={<FinancovaniPage />}
        />
        <Route
          path="/pojisteni"
          element={<PojisteniPage />}
        />
      </Routes>

      <Footer />

      <FloatingCebiaButton />
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