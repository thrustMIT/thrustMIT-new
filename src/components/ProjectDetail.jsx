import React, { useEffect } from 'react';
import { Rocket, Clock, Users, MapPin, ChevronRight, ArrowLeft, Gauge, Zap, Package, Layers } from 'lucide-react';

const ProjectDetail = ({ Header, Footer, projectId, onNavigateHome, onNavigateToProjects, onNavigateToProject, headerProps }) => {
  const projects = [
    {
      id: 'vayuvega',
      name: 'Vayuvega', 
      category: '30K COTS', 
      description: "Vayuvega was thrustMIT's latest project and second 30K COTS class rocket, launched at the 2025 IREC. Vayuvega achieved an apogee of 29,432 feet and was subsequently recovered with no damage to the airframe and systems. Vayuvega featured a payload experiment aiming to validate real-time visual tracking in extreme flight conditions, for which the team won the 2nd Place Prize in the SDL Payload Challenge. Project Vayuvega is our most successful rocket yet, achieving 4th position in the 30K COTS category and 22nd overall at the 2025 IREC.",
      image: 'https://ik.imagekit.io/wns4q4r9n2/Projects/Renders/vayuvega_Uo8rkzyzy.png?updatedAt=1753918489502',
      details: {
        maxAltitude: '29,432 ft',
        duration: '2024-25',
        height: '3.50 m',
        diameter: '126 mm',
        wetMass: '36.80 kg',
        motor: 'Aerotech 05500X-PS',
        launch: '2025 IREC',
        totalLength: '3.50 m',
        totalDiameter: '126 mm',
        totalWeight: '36.80 kg',
        propellant: 'COTS Motor',
        recovery: 'Dual Deploy',
        avionics: 'Custom Flight Computer',
        payload: 'Real-time Visual Tracking',
        achievement: '4th in 30K COTS, 22nd Overall'
      }
    },
    { 
      id: 'agniastra',
      name: 'AgniAstra', 
      category: '30K COTS', 
      description: "AgniAstra was thrustMIT's debut entry in the 2024 Spaceport America Cup under the 30K COTS category. Featuring a glass fibre and carbon fibre airframe with an Aluminium 6061 internal structure, it carried a CanSat payload to conduct real-time pose estimation via computer vision. The SRAD modular flight computer managed recovery, data logging, and telemetry. Project AgniAstra ranked as Asia's top 30K COTS team.",
      image: 'https://ik.imagekit.io/wns4q4r9n2/Projects/Renders/rocket%20render%20thrustmit_TNOILvtU5.png?updatedAt=1753908331004',
      details: {
        maxAltitude: '30,000 ft',
        duration: '2023-24',
        height: '3.19 m',
        diameter: '124 mm',
        wetMass: '32.21 kg',
        motor: 'Cesaroni N5800-P',
        launch: '2024 SA Cup',
        totalLength: '3.19 m',
        totalDiameter: '124 mm',
        totalWeight: '32.21 kg',
        propellant: 'COTS Motor',
        recovery: 'SRAD System',
        avionics: 'SRAD Modular Flight Computer',
        payload: 'CanSat - Pose Estimation',
        achievement: "Asia's Top 30K COTS Team"
      }
    },
    { 
      id: 'altair',
      name: 'Altair', 
      category: '10K COTS', 
      description: "Altair was thrustMIT's 10K COTS submission to the 2023 Spaceport America Cup. The rocket featured leading-edge extended fins and crankshaft-airbrakes to optimize flow separation. Project Altair was our most accurate launch with a 0.51% percentage error in apogee, reaching 10,331 ft.",
      image: 'https://ik.imagekit.io/wns4q4r9n2/Projects/Renders/altair_IoG2kLg-73.png?updatedAt=1753914870160',
      details: {
        maxAltitude: '10,331 ft',
        duration: '2022-23',
        height: '2.71 m',
        diameter: '150 mm',
        wetMass: '30.20 kg',
        motor: 'Cesaroni M3400-P',
        launch: '2023 SA Cup',
        totalLength: '2.71 m',
        totalDiameter: '150 mm',
        totalWeight: '30.20 kg',
        propellant: 'COTS Motor',
        recovery: 'Dual Deploy',
        avionics: 'Extended Fins',
        payload: 'Flow Optimization',
        achievement: '0.51% Apogee Error'
      }
    },
    { 
      id: 'rayquaza',
      name: 'Rayquaza', 
      category: '10K COTS', 
      description: "Rayquaza was thrustMIT's 4th developed rocket and project entry to the 2022 Spaceport America Cup. Comprising a carbon fibre airframe and Aluminium 6063 internal structure, Project Rayquaza was our first ever rocket to reach 10,000 ft. Rayquaza came 4th in the James Barrowman Award with a percentage error of less than 0.3%.",
      image: 'https://ik.imagekit.io/wns4q4r9n2/Projects/Renders/rayquaza_2-xs2pG3B.png?updatedAt=1753914869235',
      details: {
        maxAltitude: '10,000 ft',
        duration: '2021-22',
        height: '2.76 m',
        diameter: '150 mm',
        wetMass: '29.73 kg',
        motor: 'Cesaroni M3400-P',
        launch: '2022 SA Cup',
        totalLength: '2.76 m',
        totalDiameter: '150 mm',
        totalWeight: '29.73 kg',
        propellant: 'COTS Motor',
        recovery: 'Dual Deploy',
        avionics: 'Custom Flight Computer',
        payload: 'Standard Payload',
        achievement: '4th James Barrowman Award'
      }
    },
    { 
      id: 'phoenix',
      name: 'Phoenix', 
      category: '10K COTS', 
      description: "Phoenix was thrustMIT's 3rd rocket and official entry to the 2021 Spaceport America Cup. With a carbon fibre airframe and glass fibre Avionics Bay, the rocket featured a functional payload experiment aiming to accurately measure and log vibrations experienced by a CanSat during flight using a piezoelectric transducer. Project Phoenix achieved 7th position in the 10K COTS category and 16th position overall.",
      image: 'https://ik.imagekit.io/wns4q4r9n2/Projects/Renders/phoenix_8Nh7jG9bA_8isaJXVLu.png?updatedAt=1753914869369',
      details: {
        maxAltitude: '10,000 ft',
        duration: '2020-21',
        height: '3.20 m',
        diameter: '150 mm',
        wetMass: '38.10 kg',
        motor: 'Cesaroni N2200-P',
        launch: '2021 SA Cup',
        totalLength: '3.20 m',
        totalDiameter: '150 mm',
        totalWeight: '38.10 kg',
        propellant: 'COTS Motor',
        recovery: 'Dual Deploy',
        avionics: 'Glass Fibre Avionics Bay',
        payload: 'Vibration Measurement',
        achievement: '7th in 10K COTS, 16th Overall'
      }
    },
    { 
      id: 'arya',
      name: 'Arya', 
      category: 'Sounding Rocket', 
      description: "Arya, launched at the 2019 Spaceport America Cup, was our 2nd rocket made entirely out of carbon fibre with a target apogee of 3 km. It featured Aluminium 6061-T6 bulkheads and centering rings. The team successfully launched Lapwing II, a subscale rocket used to test recovery systems. Project Arya featured an in-house reefing mechanism to optimize recovery operations.",
      image: 'https://ik.imagekit.io/wns4q4r9n2/Projects/Renders/arya_K-kwONsP_.png?updatedAt=1753914869619',
      details: {
        maxAltitude: '3,000 m',
        duration: '2018-19',
        height: '2.45 m',
        diameter: '140 mm',
        wetMass: '22.36 kg',
        motor: 'Aerotech M1845-P',
        launch: '2019 SA Cup',
        totalLength: '2.45 m',
        totalDiameter: '140 mm',
        totalWeight: '22.36 kg',
        propellant: 'COTS Motor',
        recovery: 'In-house Reefing Mechanism',
        avionics: 'Standard Avionics',
        payload: 'Recovery Test',
        achievement: 'Carbon Fibre Construction'
      }
    },
    { 
      id: 'vyom',
      name: 'Vyom', 
      category: 'Debut Rocket', 
      description: "Vyom was our first rocket, launched at the 2018 Spaceport America Cup. It featured a glass fibre airframe, couplers and fin attachments, and a nose tip made of ABS. It reached an apogee of 1.2 km. Project Vyom won the Best Debutant Award at the 2018 SA Cup.",
      image: 'https://ik.imagekit.io/wns4q4r9n2/Projects/Renders/vyom_hcjagHclU_JJM559muPW.png?updatedAt=1753914869355',
      details: {
        maxAltitude: '1,200 m',
        duration: '2017-18',
        height: '2.54 m',
        diameter: '150 mm',
        wetMass: '26.00 kg',
        motor: 'Aerotech M1845-P',
        launch: '2018 SA Cup',
        totalLength: '2.54 m',
        totalDiameter: '150 mm',
        totalWeight: '26.00 kg',
        propellant: 'COTS Motor',
        recovery: 'Dual Deploy',
        avionics: 'Glass Fibre Airframe',
        payload: 'Standard Payload',
        achievement: 'Best Debutant Award 2018'
      }
    }
  ];

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const project = projects.find(p => p.id === projectId);

  // compute index and prev/next ids
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={onNavigateToProjects}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header {...headerProps} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Prev/Next project navigation */}
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => prevProject && onNavigateToProject && onNavigateToProject(prevProject.id)}
                  disabled={!prevProject}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${prevProject ? 'bg-white/5 hover:bg-white/6 text-white' : 'opacity-40 cursor-not-allowed'}`}
                  aria-label="Previous project"
                >
                  <ArrowLeft />
                  <span className="text-sm text-gray-300">Previous</span>
                </button>

                <button
                  onClick={() => nextProject && onNavigateToProject && onNavigateToProject(nextProject.id)}
                  disabled={!nextProject}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ml-auto ${nextProject ? 'bg-white/5 hover:bg-white/6 text-white' : 'opacity-40 cursor-not-allowed'}`}
                  aria-label="Next project"
                >
                  <span className="text-sm text-gray-300">Next</span>
                  <ChevronRight />
                </button>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {project.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400, letterSpacing: '0.03em' }}>
                {project.description}
              </p>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Gauge size={20} />
                    <span className="text-sm text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Max Altitude</span>
                  </div>
                  <p className="text-2xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.maxAltitude}</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Clock size={20} />
                    <span className="text-sm text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Year</span>
                  </div>
                  <p className="text-2xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.duration}</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Package size={20} />
                    <span className="text-sm text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Motor</span>
                  </div>
                  <p className="text-xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.motor}</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <MapPin size={20} />
                    <span className="text-sm text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Launch</span>
                  </div>
                  <p className="text-xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.launch}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl p-8 flex items-center justify-center min-h-[500px]">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="max-w-full max-h-[500px] object-contain transform rotate-[-90deg]"
                  style={{ width: 'auto', height: '500px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Technical <span className="text-blue-600">Specifications</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Height</p>
              <p className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.totalLength}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Diameter</p>
              <p className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.totalDiameter}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Wet Mass</p>
              <p className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.totalWeight}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Motor</p>
              <p className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.motor}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Recovery</p>
              <p className="text-xl font-bold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.recovery}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Avionics</p>
              <p className="text-xl font-bold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.avionics}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Payload</p>
              <p className="text-xl font-bold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.payload}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Achievement</p>
              <p className="text-lg font-bold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{project.details.achievement}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;