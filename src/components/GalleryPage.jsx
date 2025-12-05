import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const GalleryPage = ({ Header, Footer, onNavigateHome, headerProps }) => {
  const galleryItems = [
    { id: 0, src: "https://ik.imagekit.io/wns4q4r9n2/Gallery/Vayuvega/Award%20Ceremony%20Photo_mtsP57mDR.jpg?updatedAt=1753898886832", title: "Launch Day Success", description: "Our team's first successful rocket launch at the regional competition in 2024. A moment of pride and achievement." },
    { id: 1, src: "gallery/i2.png", title: "Pre-Flight Preparation", description: "Final checks and calibration before the big launch at nationals. Precision and attention to detail matter." },
    { id: 2, src: "gallery/i3.png", title: "Team Assembly", description: "The entire crew working together on rocket assembly in our lab. Teamwork makes the dream work." },
    { id: 3, src: "gallery/i4.png", title: "Engine Test Fire", description: "Static fire test of our custom-built rocket engine. Testing our innovation under pressure." },
    { id: 4, src: "gallery/i5.png", title: "Recovery System Deploy", description: "Successful parachute deployment during a test flight. Safety first, always." },
    { id: 5, src: "gallery/i1.png", title: "Award Ceremony", description: "Receiving first place trophy at the State Rocketry Championship. Celebrating our victory." },
    { id: 6, src: "gallery/i2.png", title: "Wind Tunnel Testing", description: "Aerodynamic testing of our rocket design in the university wind tunnel. Science in action." },
    { id: 7, src: "gallery/i3.png", title: "Mission Control", description: "Team monitoring telemetry data during a live launch sequence. Every second counts." },
    { id: 8, src: "gallery/i4.png", title: "Payload Integration", description: "Installing scientific instruments into the payload bay. Precision engineering at its finest." },
    { id: 9, src: "gallery/i5.png", title: "Post-Launch Analysis", description: "Reviewing flight data and performance metrics after recovery. Learning from every mission." },
    { id: 10, src: "gallery/i1.png", title: "Team Celebration", description: "Celebrating a successful launch and mission accomplishment. Hard work pays off." },
    { id: 11, src: "gallery/i2.png", title: "Ground Operations", description: "Team coordinating launch sequences and safety protocols. Preparation is everything." }
  ];

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full relative" style={{ overflowX: 'clip' }}>
      <Header {...headerProps} />
      
      <section className="py-20 bg-black mt-5">
        <div className="container mx-auto px-6">

          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Our <span className="text-blue-600">Gallery</span>
          </h1>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
            Explore our complete collection of moments from launches, tests, training, and team celebrations
          </p>

          {/* Gallery Grid - 3 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20"
                data-aos="fade-up"
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2 text-white group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-sm text-gray-400 leading-relaxed"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect - Icon in top-right */}
                {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                    </svg>
                  </div>
                </div> */}
              </div>
            ))}
          </div>

          {/* Call-to-Action Section */}
          <div className="mt-20 text-center">
            <p className="text-blue-600 mb-8" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
              Want to be part of our journey?
            </p>
            <button 
              onClick={() => {
                if (headerProps && headerProps.onShowRecruitmentModal) {
                  headerProps.onShowRecruitmentModal();
                } else if (headerProps && headerProps.onNavigateToJoin) {
                  headerProps.onNavigateToJoin();
                }
              }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-600/50"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}
            >
              Join ThrustMIT Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
