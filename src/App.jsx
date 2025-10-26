import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Subsystems from './components/Subsystems';
import Projects from './components/Projects';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SponsorshipTiers from './components/SponsorshipTiers';
import RocketWiki from './components/RocketWiki';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/rocket-wiki' || path.includes('rocket-wiki')) {
        setCurrentPage('rocket-wiki');
      } else {
        setCurrentPage('home');
      }
    };

    // Set initial page based on URL
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate function to change pages
  const navigate = (page) => {
    setCurrentPage(page);
    if (page === 'rocket-wiki') {
      window.history.pushState({}, '', '/rocket-wiki');
    } else {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo(0, 0);
  };

  if (currentPage === 'rocket-wiki') {
    return (
      <div className="bg-black text-white min-h-screen">
        <RocketWiki onNavigateHome={() => navigate('home')} />
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Subsystems />
      <Projects />
      <Sponsors />
      <SponsorshipTiers />
      <Gallery />
      <Contact />
      <Footer onNavigateToRocketWiki={() => navigate('rocket-wiki')} />
    </div>
  );
}