import React, { useEffect } from 'react';
import { Clock, ArrowLeft } from 'lucide-react';

const ComingSoon = ({ Header, headerProps, onNavigateHome }) => {
  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      {Header && <Header {...headerProps} />}

      {/* Animated Background - Matching site theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern - matching About section */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Title */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
            data-aos="fade-up"
          >
            <span className="text-white">
              COMING <span className="text-blue-600">SOON</span>
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-semibold"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}
            >
              Rocket Wiki Launching Soon
            </p>
          </div>

          {/* Description */}
          <p 
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400, letterSpacing: '0.05em' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We're crafting an amazing knowledge base about rocketry, propulsion systems, 
            and space exploration. Get ready to dive deep into the science of rockets!
          </p>

          {/* Back to Home Button - Matching Hero button style */}
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl font-bold text-base transition-colors duration-300"
            style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

