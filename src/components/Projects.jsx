import React, { useEffect } from 'react';
import { Rocket, Clock, Users, MapPin, ChevronRight, ArrowLeft, Gauge, Zap, Package, Layers } from 'lucide-react';

const Projects = ({ onNavigateToProject }) => {
  const projects = [
    {
      id: 'vayuvega',
      name: 'Vayuvega', 
      category: '30K COTS', 
      description: "Vayuvega was thrustMIT's latest project and second 30K COTS class rocket, launched at the 2025 IREC. Vayuvega achieved an apogee of 29,432 feet and was subsequently recovered with no damage to the airframe and systems. Vayuvega featured a payload experiment aiming to validate real-time visual tracking in extreme flight conditions, for which the team won the 2nd Place Prize in the SDL Payload Challenge.",
      image: 'projects/vayu.png',
      details: {
        maxAltitude: '29,432 ft',
        duration: '2024-25',
        height: '3.50 m',
        diameter: '126 mm',
        wetMass: '36.80 kg',
        motor: 'Aerotech 05500X-PS',
        launch: '2025 IREC',
      }
    },
    { 
      id: 'agniastra',
      name: 'AgniAstra', 
      category: '30K COTS', 
      description: "AgniAstra was thrustMIT's debut entry in the 2024 Spaceport America Cup under the 30K COTS category. Featuring a glass fibre and carbon fibre airframe with an Aluminium 6061 internal structure, it carried a CanSat payload to conduct real-time pose estimation via computer vision. The SRAD modular flight computer managed recovery, data logging, and telemetry.",
      image: 'projects/agni.png',
      details: {
        maxAltitude: '30,000 ft',
        duration: '2023-24',
        height: '3.19 m',
        diameter: '124 mm',
        wetMass: '32.21 kg',
        motor: 'Cesaroni N5800-P',
        launch: '2024 SA Cup',
      }
    },
    { 
      id: 'altair',
      name: 'Altair', 
      category: '10K COTS', 
      description: "Altair was thrustMIT's 10K COTS submission to the 2023 Spaceport America Cup. The rocket featured leading-edge extended fins and crankshaft-airbrakes to optimize flow separation. Project Altair was our most accurate launch with a 0.51% percentage error in apogee, reaching 10,331 ft.",
      image: 'projects/altair.png',
      details: {
        maxAltitude: '10,331 ft',
        duration: '2022-23',
        height: '2.71 m',
        diameter: '150 mm',
        wetMass: '30.20 kg',
        motor: 'Cesaroni M3400-P',
        launch: '2023 SA Cup',
      }
    },
    { 
      id: 'rayquaza',
      name: 'Rayquaza', 
      category: '10K COTS', 
      description: "Rayquaza was thrustMIT's 4th developed rocket and project entry to the 2022 Spaceport America Cup. Comprising a carbon fibre airframe and Aluminium 6063 internal structure, Project Rayquaza was our first ever rocket to reach 10,000 ft. Rayquaza came 4th in the James Barrowman Award with a percentage error of less than 0.3%.",
      image: 'projects/ray.png',
      details: {
        maxAltitude: '10,000 ft',
        duration: '2021-22',
        height: '2.76 m',
        diameter: '150 mm',
        wetMass: '29.73 kg',
        motor: 'Cesaroni M3400-P',
        launch: '2022 SA Cup',
      }
    },
    { 
      id: 'phoenix',
      name: 'Phoenix', 
      category: '10K COTS', 
      description: "Phoenix was thrustMIT's 3rd rocket and official entry to the 2021 Spaceport America Cup. With a carbon fibre airframe and glass fibre Avionics Bay, the rocket featured a functional payload experiment aiming to accurately measure and log vibrations experienced by a CanSat during flight using a piezoelectric transducer.",
      image: 'projects/pheo.png',
      details: {
        maxAltitude: '10,000 ft',
        duration: '2020-21',
        height: '3.20 m',
        diameter: '150 mm',
        wetMass: '38.10 kg',
        motor: 'Cesaroni N2200-P',
        launch: '2021 SA Cup',
      }
    },
    { 
      id: 'arya',
      name: 'Arya', 
      category: 'Sounding Rocket', 
      description: "Arya, launched at the 2019 Spaceport America Cup, was our 2nd rocket made entirely out of carbon fibre with a target apogee of 3 km. It featured Aluminium 6061-T6 bulkheads and centering rings. The team successfully launched Lapwing II, a subscale rocket used to test recovery systems.",
      image: 'projects/arya.png',
      details: {
        maxAltitude: '3,000 m',
        duration: '2018-19',
        height: '2.45 m',
        diameter: '140 mm',
        wetMass: '22.36 kg',
        motor: 'Aerotech M1845-P',
        launch: '2019 SA Cup',
      }
    },
    { 
      id: 'vyom',
      name: 'Vyom', 
      category: 'Debut Rocket', 
      description: "Vyom was our first rocket, launched at the 2018 Spaceport America Cup. It featured a glass fibre airframe, couplers and fin attachments, and a nose tip made of ABS. It reached an apogee of 1.2 km. Project Vyom won the Best Debutant Award at the 2018 SA Cup.",
      image: 'projects/vyom.png',
      details: {
        maxAltitude: '1,200 m',
        duration: '2017-18',
        height: '2.54 m',
        diameter: '150 mm',
        wetMass: '26.00 kg',
        motor: 'Aerotech M1845-P',
        launch: '2018 SA Cup',
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

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Our <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
          Discover our research and development projects, each pushing the limits of rocketry
        </p>

        {(() => {
          const many = projects.length >= 3;
          return (
            <div className={many ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
              {projects.map((project, i) => (
                <div 
                  key={i} 
                  onClick={() => onNavigateToProject && onNavigateToProject(project.id)}
                  className={`${many ? '' : 'w-full sm:w-80 md:w-96'} group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl overflow-hidden hover:border-blue-600/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20`}
                >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center border-b border-gray-800/50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.name} logo`}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {project.name}
                </h3>
                <p className="text-blue-400 text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                  {project.category}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                  {project.description}
                </p>

                {/* Learn More Button */}
                <div className="flex items-center justify-between">
                  <button onClick={() => onNavigateToProject && onNavigateToProject(project.id)} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/btn" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    <span>Learn More</span>
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent" />
              </div>
            </div>
              ))}
            </div>
          );
        })()
        }
      </div>
    </section>
  );
};

export default Projects;