import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    // Ensuring it works even if there's a slight delay in rendering
    const timeout = setTimeout(() => window.scrollTo(0, 0), 10);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}