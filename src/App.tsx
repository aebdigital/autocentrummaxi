import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnnouncementPopup from './components/AnnouncementPopup';
import HomePage from './pages/HomePage';
import PonukaPage from './pages/PonukaPage';
import CarDetailPage from './pages/CarDetailPage';
import KontaktPage from './pages/KontaktPage';
import CookiesPage from './pages/CookiesPage';
import ZarukaPage from './pages/ZarukaPage';
import FinancovaniPage from './pages/FinancovaniPage';
import PojisteniPage from './pages/PojisteniPage';
import { initialCars } from './data/initialCars';

function AppContent() {
  // Use initialCars directly for now to ensure the user sees the requested data
  // In a real app, you might merge this with Supabase data or fetch exclusively from Supabase
  const cars = initialCars;
  const isLoading = false;
  const [announcements] = useState<any[]>([]);

  const handleCarClick = () => {
    // This function is handled by routing
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
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