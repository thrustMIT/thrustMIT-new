import React, { useEffect } from 'react';
import { Rocket, Book, ArrowRight, ExternalLink } from 'lucide-react';

const WikiCard = ({ onNavigateToRocketWiki, onScrollToSection, onNavigateHome, currentPage }) => {
  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleRocketWikiClick = (e) => {
    e.preventDefault();
    if (onNavigateToRocketWiki) {
      // Use internal navigation if provided
      onNavigateToRocketWiki();
    } else {
      // Fallback to opening in new tab
      window.open('/rocket-wiki', '_blank', 'noopener,noreferrer');
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    // If we're on the home page, just scroll to the projects section
    if (currentPage === 'home') {
      if (onScrollToSection) {
        onScrollToSection('projects');
      }
    } else {
      // If we're on another page, navigate home first and then scroll to projects
      if (onNavigateHome) {
        onNavigateHome('projects');
      }
    }
  };

  return (
    <>
      {/* Rocket Wiki CTA Section - Before Footer */}
      <section className="relative bg-black py-20 px-4 border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 md:p-12 overflow-hidden">

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-600/30 mb-6">
                  <span className="text-blue-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}>
                    The Academy
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Master the <span className="text-blue-600">Fundamentals of Rocketry</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                  Curious about the science behind the launch? Dive into our comprehensive knowledge base. We break down the complex principles of aerospace engineering into accessible insights, covering everything from basic physics to advanced propulsion.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    Principles of Propulsion & Aerodynamics
                  </li>
                  <li className="flex items-center gap-3 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    Avionics and Control Systems
                  </li>
                  <li className="flex items-center gap-3 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    Recovery Mechanisms & Safety
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <button
                    onClick={handleRocketWikiClick}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 group cursor-pointer"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}
                  >
                    Start Learning
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                <p 
                  onClick={handleProjectsClick}
                  className="text-sm text-blue-600 mt-4 hover:text-blue-300 transition-colors cursor-pointer" 
                  style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                >
                  Looking for our specific fleet specs? Visit the Our Projects page.
                </p>
              </div>

              {/* Right Visual - Module Cards */}
              <div className="relative hidden md:block">
                <div className="relative">
                  {/* Floating Module Cards */}
                  <div className="space-y-4">
                    {/* Core Modules */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-sm border border-blue-600/40 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30">
                      <div className="mb-3">
                        <h4 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>Core Modules</h4>
                        <p className="text-sm text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Comprehensive Guides</p>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-full" />
                    </div>

                    {/* Key Concepts */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-sm border border-blue-600/40 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 ml-8">
                      <div className="mb-3">
                        <h4 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>Key Concepts</h4>
                        <p className="text-sm text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Physics & Math</p>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-full" />
                    </div>

                    {/* Deep Dives */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-sm border border-blue-600/40 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 ml-4">
                      <div className="mb-3">
                        <h4 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>Deep Dives</h4>
                        <p className="text-sm text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Advanced Topics</p>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WikiCard;