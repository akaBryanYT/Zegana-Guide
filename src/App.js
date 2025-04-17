import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global theming & layout
import ThemeProvider from './components/Layout/ThemeProvider';
import Navbar from './components/Navigation/Navbar';

// Pages
import Home from './pages/Home';
import Strategy from './pages/Strategy';
import MulliganGuide from './pages/MulliganGuide';
import CardAnalysis from './pages/CardAnalysis';
import VariantComparison from './pages/VariantComparison';

/**
 * Scroll to the top of the viewport whenever the route changes. This mimics the
 * browser's default behaviour on full‑page loads and greatly improves UX in an
 * SPA where pages can become quite long (e.g. the full‑length strategy guide).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  /**
   * Deck variant toggle (Emrakul vs. Darksteel).
   * We persist the choice in localStorage so the user keeps their preference on
   * hard‑refresh or when sharing deep links with friends.
   */
  const [activeVariant, setActiveVariant] = useState(() => {
    return localStorage.getItem('zeganaVariant') ?? 'emrakul';
  });

  /** Persist the preference whenever it changes. */
  useEffect(() => {
    localStorage.setItem('zeganaVariant', activeVariant);
  }, [activeVariant]);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Navbar
          activeVariant={activeVariant}
          onVariantChange={setActiveVariant}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home activeVariant={activeVariant} />} />
            <Route path="/strategy" element={<Strategy activeVariant={activeVariant} />} />
            <Route path="/mulligan" element={<MulliganGuide activeVariant={activeVariant} />} />
            <Route path="/cards" element={<CardAnalysis activeVariant={activeVariant} />} />
            <Route path="/variants" element={<VariantComparison activeVariant={activeVariant} />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
