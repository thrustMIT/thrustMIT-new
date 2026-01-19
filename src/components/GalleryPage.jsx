import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const GalleryPage = ({ Header, Footer, onNavigateHome, headerProps }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 0, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i1.jpg", title: "Launch Day Success", description: "Our team's first successful rocket launch at the regional competition in 2024. A moment of pride and achievement." },
    { id: 2, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i3.webp", title: "Team Assembly", description: "The entire crew working together on rocket assembly in our lab. Teamwork makes the dream work." },
    { id: 1, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i2.webp", title: "Pre-Flight Preparation", description: "Final checks and calibration before the big launch at nationals. Precision and attention to detail matter." },
    { id: 3, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i4.webp", title: "Engine Test Fire", description: "Static fire test of our custom-built rocket engine. Testing our innovation under pressure." },
    { id: 4, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i5.webp", title: "Recovery System Deploy", description: "Successful parachute deployment during a test flight. Safety first, always." },
    { id: 5, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i6.webp", title: "Award Ceremony", description: "Receiving first place trophy at the State Rocketry Championship. Celebrating our victory." },
    { id: 6, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i7.webp", title: "Wind Tunnel Testing", description: "Aerodynamic testing of our rocket design in the university wind tunnel. Science in action." },
    { id: 7, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i8.webp", title: "Mission Control", description: "Team monitoring telemetry data during a live launch sequence. Every second counts." },
    { id: 8, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i9.webp", title: "Payload Integration", description: "Installing scientific instruments into the payload bay. Precision engineering at its finest." },
    { id: 9, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i10.webp", title: "Post-Launch Analysis", description: "Reviewing flight data and performance metrics after recovery. Learning from every mission." },
    { id: 10, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i11.jpeg", title: "Team Celebration", description: "Celebrating a successful launch and mission accomplishment. Hard work pays off." },
    { id: 11, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i12.jpeg", title: "Ground Operations", description: "Team coordinating launch sequences and safety protocols. Preparation is everything." },
    { id: 12, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i13.jpeg", title: "Rocket Assembly", description: "Assembling the rocket components in our workshop. Building dreams piece by piece." },
    { id: 13, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i14.jpeg", title: "Launch Pad Setup", description: "Setting up the launch pad and safety perimeter. Ready for liftoff." },
    { id: 14, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i15.jpeg", title: "Team Strategy Meeting", description: "Planning session before a major competition. Strategy and execution go hand in hand." },
    { id: 15, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i16.jpg", title: "Rocket Transport", description: "Carefully transporting our rocket to the launch site. Every detail matters." },
    { id: 16, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i17.jpg", title: "Telemetry Setup", description: "Installing telemetry systems for real-time data during flight. Knowledge is power." },
    { id: 17, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i18.jpeg", title: "Rocket Design Review", description: "Team reviewing CAD models and design schematics. Innovation starts with great design." },
    { id: 18, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i19.jpg", title: "Safety Briefing", description: "Conducting a safety briefing before launch operations. Safety is our top priority." },
    { id: 19, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i20.jpg", title: "Rocket Recovery", description: "Team recovering the rocket post-flight. Every mission is a learning opportunity." },
    { id: 20, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i21.jpg", title: "Team Training", description: "Hands-on training session for new team members. Building skills for future success." },
    { id: 21, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i22.jpg", title: "Rocket Painting", description: "Applying final paint and decals to the rocket. Attention to detail in every aspect." },
    { id: 22, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i23.jpg", title: "Launch Countdown", description: "Final countdown moments before liftoff. The excitement is palpable." },
    { id: 23, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i24.jpg", title: "Rocket Testing", description: "Conducting pre-launch tests on rocket systems. Ensuring everything is go for launch." },
    { id: 24, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i25.jpg", title: "Team Huddle", description: "Motivational huddle before a big launch. United we stand, divided we fall." },
    { id: 25, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i26.jpg", title: "Rocket Inspection", description: "Thorough inspection of rocket components before flight. Quality assurance is key." },
    { id: 26, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i27.jpg", title: "Launch Success", description: "Celebrating a flawless launch and mission success. Onward and upward!" },
    { id: 27, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i28.webp", title: "Rocket Design Session", description: "Brainstorming and sketching new rocket designs. Creativity fuels innovation." },
    { id: 28, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i29.webp", title: "Team Bonding", description: "Team outing to celebrate a successful competition season. Building camaraderie off the field." },
    { id: 29, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i30.webp", title: "Rocket Calibration", description: "Calibrating onboard instruments for accurate data collection. Precision is everything." },
    { id: 30, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i31.webp", title: "Launch Day", description: "The big day has arrived! Team ready for rocket launch at the competition site." },
    { id: 31, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i32.webp", title: "Rocket Assembly Line", description: "Streamlined assembly process in our workshop. Efficiency leads to excellence." },
    { id: 32, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i33.webp", title: "Team Briefing", description: "Pre-launch briefing to align on roles and responsibilities. Clear communication is vital." },
    { id: 33, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i34.webp", title: "Rocket Transport to Launch Site", description: "Carefully moving our rocket to the launch pad. Every step is crucial." },
    { id: 34, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i35.webp", title: "Final Countdown", description: "The team gathers for the final countdown before launch. Anticipation builds." },
    { id: 35, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i36.webp", title: "Rocket Launch", description: "Liftoff! Our rocket soars into the sky, marking another successful mission." },
    { id: 36, src: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/gallery/i37.webp", title: "Post-Launch Debrief", description: "Team analyzing launch data and performance metrics. Continuous improvement is our goal." }
  ];

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

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

          {/* Gallery Grid - Masonry Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => openModal(index)}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20 cursor-pointer break-inside-avoid mb-6"
                data-aos="fade-up"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center px-4">
                      {/* <h3 
                        className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                      >
                        {item.title}
                      </h3> */}
                      <p 
                        className="text-sm text-gray-300"
                        style={{ fontFamily: 'Rajdhani, sans-serif' }}
                      >
                        Click to view
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* Fullscreen Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container - 75% of viewport */}
          <div 
            className="relative max-w-[75vw] max-h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            
            {/* Image Info */}
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
              <h3 
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {galleryItems[selectedImage].title}
              </h3>
              <p 
                className="text-gray-300"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {galleryItems[selectedImage].description}
              </p>
            </div> */}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full">
            <span className="text-white font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {selectedImage + 1} / {galleryItems.length}
            </span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;