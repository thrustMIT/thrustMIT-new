import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Box, Users } from 'lucide-react';

const Subsystems = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const containerRef = useRef(null);

  const subsystems = [
    {
      id: 'aerodynamics',
      name: 'Aerodynamics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/subsystem/aero.png', 
      tagline: 'Aerodynamics',
      description: 'Configuration and flight dynamics development',
      details: 'The Aerodynamics subsystem manages the full configuration and flight-dynamics development of our rockets. We design and optimize the fins, nose cone, boattail, and transition section, using analytical methods and computational fluid dynamics to evaluate pressure and shear distributions, aerodynamic loads, and flow behavior across all Mach regimes. These insights help us minimize drag and improve overall aerodynamic efficiency. Additionally, we oversee flight-path modeling, trajectory analysis, and the complete recovery architecture, ensuring the rocket reaches the correct apogee and maintains stable flight throughout ascent.',
      features: ['CFD simulations across all Mach regimes', 'Fins, nose cone, and transition optimization', 'Flight-path modeling and trajectory analysis', 'Single-bay dual-deployment recovery system']
    },
    {
      id: 'avionics',
      name: 'Avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/subsystem/avionics.png', 
      tagline: 'Avionics',
      description: 'The brain of the rocket',
      details: 'The avionics subsystem acts as the brain of the rocket, designing custom flight computers and firmware for reliable operations during flight. Using a combination of sensors like IMUs, barometers, GPS modules, and telemetry modules, we achieve sensor-fusion for state and apogee estimation. Our capabilities include high-rate data logging, live video telemetry, an autonomous antenna-tracking system for real-time flight following, and timely parachute deployment at apogee. We also build control systems such as airbrakes for stability management and design electronics for static-fire tests including wireless ignition systems and real-time telemetry.',
      features: ['Custom flight computers with sensor fusion', 'Live video telemetry and autonomous tracking', 'Airbrake control systems', 'Static-fire test electronics and wireless ignition']
    },
    {
      id: 'propulsion',
      name: 'Propulsion',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/subsystem/prop.png', 
      tagline: 'Propulsion',
      description: 'End-to-end solid rocket motor development',
      details: 'The Propulsion subsystem specializes in the complete end-to-end development of solid rocket motors, from conceptual design and finite element simulations to in-house manufacturing and rigorous static testing. Our team handles all critical aspects of motor development including propellant grain design, thermal analysis, nozzle optimization, and combustion characterization. We also develop ejection charge systems for reliable recovery deployment. With active research in advanced propellant formulations and hybrid engine architectures, we are working to become one of India\'s first student teams competing in the SRAD category at international competitions.',
      features: ['Complete motor design and FEA simulations', 'In-house manufacturing and static testing', 'Propellant grain design and thermal analysis', 'Research in hybrid engine architectures']
    },
    {
      id: 'payload',
      name: 'Payload',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/subsystem/payload.png', 
      tagline: 'Payload',
      description: 'Where research meets flight',
      details: 'We design, test, and build the scientific and engineering experiments flown aboard our rockets. From active control systems and data-gathering instruments to structural prototypes and real-time decision systems, the payload is where research meets flight. Our division focuses on developing reliable, high-performance payloads and experiment modules capable of surviving extreme launch and recovery conditions. With an emphasis on modularity, rapid integration, and mission-specific customization, we ensure that every payload delivers meaningful scientific value while pushing the boundaries of student-led aerospace research.',
      features: ['Modular payload designs for rapid integration', 'Real-time computer vision and autonomous navigation', 'Vibration-isolated mounts and thermal protection', 'Deployment mechanisms in various form factors']
    },
    {
      id: 'management',
      name: 'Management',
      icon: Users,
      tagline: 'Management',
      description: 'Coordination, communication, and execution',
      details: 'Our management team ensures seamless coordination across all subsystems while maintaining external relationships and project momentum. We handle social media outreach, showcase sponsor contributions, create mission patches and posters, and manage the team website. The team communicates and negotiates with sponsors, manages budgets and procurement, and ensures smooth resource flow. We plan testing and manufacturing schedules, oversee documentation, coordinate with external partners, and maintain clear communication across subsystems while tracking timelines to keep the project on schedule.',
      features: ['Social media, website, and visual communications', 'Sponsor relations and budget management', 'Testing and manufacturing schedule coordination', 'Documentation and cross-subsystem communication']
    },
    {
      id: 'structures',
      name: 'Structures',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/subsystem/structures.png', 
      tagline: 'Structures',
      description: 'Engineering the complete framework',
      details: 'The Structures team engineers the complete framework of the rocket, from metallic assemblies to advanced composite components. This subsystem oversees design, simulation, manufacturing, and testing, ensuring every part remains lightweight, reliable, and flight ready. With safety and precision at the forefront, the team guarantees structural integrity throughout the mission. Our comprehensive approach covers every aspect from initial CAD design through final quality control and testing.',
      features: ['Design and simulation with FEA analysis', 'Advanced composite manufacturing', 'Quality control and testing protocols', 'Lightweight, flight-ready structural integrity']
    }
  ];

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !isDesktop) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Start calculating when section enters viewport
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        // Section is in view and scrolling
        const scrolled = -rect.top;
        const scrollRange = containerHeight - viewportHeight;
        const progress = Math.min(1, scrolled / scrollRange);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        // Section hasn't entered yet - show first slide
        setScrollProgress(0);
      } else if (rect.bottom < viewportHeight) {
        // Section has passed - show last slide
        setScrollProgress(1);
      }
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return (
    <section id='subsystems' ref={containerRef} className="relative bg-black overflow-x-clip" style={{ height: isDesktop ? `${(subsystems.length + 1) * 100}vh` : 'auto' }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 blur-[120px] pointer-events-none"></div>
      
      {isDesktop ? (
        // Desktop: Sticky horizontal scrolling carousel
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="container mx-auto px-6 h-full flex flex-col">
            {/* Fixed Header */}
            <div className="pt-32 pb-16">
              <h2 className="text-5xl md:text-6xl font-black text-center tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Our <span className="text-blue-600">Subsystems</span>
              </h2>
            </div>
            
            {/* Subsystem slides */}
            <div className="relative flex-1 flex items-center">
              {subsystems.map((subsystem, index) => {
                // Calculate position for this slide
                const totalSlides = subsystems.length;
                const slideProgress = scrollProgress * (totalSlides - 1);
                const slideIndex = index;
                const distance = slideProgress - slideIndex;
                
                // Slide positioning: each slide should be centered when its index matches slideProgress
                const translateX = -distance * 100;
                
                // Smooth opacity with overlapping transitions
                let opacity = 0;
                if (distance >= -0.5 && distance <= 1.5) {
                  if (distance < 0) {
                    // Fade in from right (approaching)
                    opacity = 1 + (distance * 2); // 0 at -0.5, 1 at 0
                  } else if (distance > 1) {
                    // Fade out to left (leaving)
                    opacity = (1.5 - distance) * 2; // 1 at 1, 0 at 1.5
                  } else {
                    // Fully visible between 0 and 1
                    opacity = 1;
                  }
                }
                
                // Ensure opacity is between 0 and 1
                opacity = Math.max(0, Math.min(1, opacity));
                
                // Gentle scale effect
                const scaleFactor = 1 - Math.abs(distance - 0.5) * 0.15;
                const scale = Math.max(0.85, Math.min(1, scaleFactor));
                
                // Z-index for proper layering
                const zIndex = Math.round(100 - Math.abs(distance - 0.5) * 100);
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
                    }}
                  >
                    <div className="w-full max-w-6xl mx-auto px-8">
                      <div className="grid lg:grid-cols-5 gap-12 items-center">
                        {/* Left side - Content (3 columns) */}
                        <div className="lg:col-span-3 space-y-6 pointer-events-auto">
                          <h3 className="text-4xl font-bold leading-tight text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            {subsystem.tagline}
                          </h3>
                          
                          <p className="text-gray-300 leading-relaxed text-xl" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                            {subsystem.details}
                          </p>
                          
                          {subsystem.features && (
                            <ul className="space-y-4 pt-4">
                              {subsystem.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                                  <span className="w-2 h-2 rounded-full mt-2 bg-blue-600 flex-shrink-0"></span>
                                  <span className="text-lg">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Right side - Visual (2 columns) */}
                        <div className="lg:col-span-2 flex items-center justify-center pointer-events-auto">
                          <div className="relative w-full flex items-center justify-center">
                            <div className="absolute inset-0 rounded-3xl blur-3xl" style={{ backgroundColor: 'rgba(30, 64, 175, 0.4)' }}></div>
                            <div className="relative p-8 flex items-center justify-center w-full">
                              <div className="rounded-3xl p-10 flex items-center justify-center shadow-2xl" style={{ backgroundColor: '#1e40af', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                                {subsystem.image ? (
                                  <img 
                                    src={subsystem.image} 
                                    alt={subsystem.name} 
                                    className="w-40 h-40 object-contain opacity-80"
                                  />
                                ) : subsystem.icon ? (
                                  <subsystem.icon className="w-40 h-40 text-cyan-400 opacity-80" />
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // Mobile: Expandable accordion
        <div className="py-16 relative z-10">
          <div className="px-4 mb-12">
            <h2 className="text-4xl font-black text-center tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Our <span className="text-blue-600">Subsystems</span>
            </h2>
            <p className="text-gray-400 text-base text-center mt-4 max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Six specialized teams working together to push the boundaries of student rocketry
            </p>
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto px-4">
            {subsystems.map((subsystem, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300"
                >
                  {/* Header - always visible */}
                  <button
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                    className="w-full p-6 flex items-center gap-4 text-left"
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0041c2' }}>
                      {subsystem.image ? (
                        <img 
                          src={subsystem.image} 
                          alt={subsystem.name} 
                          className="w-6 h-6 object-contain opacity-90"
                        />
                      ) : subsystem.icon ? (
                        <subsystem.icon className="w-6 h-6 text-cyan-400 opacity-90" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {subsystem.name}
                      </h3>
                      <p className="text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {subsystem.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {/* Expandable content */}
                  <div className={`transition-all duration-300 overflow-hidden ${isActive ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 pt-2 border-t border-zinc-800">
                      <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {subsystem.details}
                      </p>
                      
                      <div className="space-y-2">
                        {subsystem.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-blue-600"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Subsystems;