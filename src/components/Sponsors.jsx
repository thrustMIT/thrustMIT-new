import React, { useState, useEffect } from 'react';

const Sponsors = () => {
  const sponsor = {
    name: "Altium",
    logo: "https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/sponsors/altium.png",
    description: "Altium is the world's leading PCB design software that combines schematic, layout, and everything else needed in one environment to effortlessly design printed circuit boards. Used across industries from aerospace and defense to automotive and consumer electronics, Altium empowers designers to develop electronics products faster and more efficiently than ever before.",
    partnership: "Official PCB Design Partner",
    impact: [
      "Industry-leading PCB design and layout tools",
      "Integrated schematic capture and simulation",
      "Seamless collaboration with Altium 365 platform",
      "Complete design-to-manufacturing workflow"
    ]
  };

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <section id="sponsors" className="relative min-h-screen bg-black py-20 px-4 overflow-hidden flex items-center">
      {/* Background effects */}
      {/* <div className="absolute inset-0 bg-gradient-radial from-blue-600/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-medium border border-blue-600/20" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
              Partnership Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Our <span className="text-blue-600">Sponsor</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Powering innovation through strategic partnership that drives the future of aerospace technology.
          </p>
        </div>

        {/* Main Sponsor Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 via-blue-500/50 to-blue-600/50 rounded-3xl blur-xl opacity-75 transition-opacity duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 rounded-3xl overflow-hidden">
              
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-5 gap-8 p-12 items-center">
                {/* Logo Section (2 columns) */}
                <div className="md:col-span-2 flex items-center justify-center">
                  <div className="relative">
                    {/* Logo glow */}
                    <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-2xl"></div>
                    {/* Logo container */}
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        className="w-full h-auto max-w-[280px] object-contain"
                      />
                  </div>
                </div>

                {/* Content Section (3 columns) */}
                <div className="md:col-span-3 space-y-6">
                  {/* Partnership badge */}
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium border border-blue-600/40" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {sponsor.partnership}
                    </span>
                  </div>

                  {/* Company name */}
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {sponsor.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {sponsor.description}
                  </p>

                  {/* Impact Points */}
                  <div className="pt-4 space-y-3">
                    <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      What They Provide
                    </h4>
                    <ul className="space-y-3">
                      {sponsor.impact.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-2 bg-blue-600 flex-shrink-0"></span>
                          <span className="text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl blur-xl"></div>
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        className="w-full h-auto max-w-[200px] object-contain"
                      />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Partnership badge */}
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium border border-blue-600/40" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {sponsor.partnership}
                    </span>
                  </div>

                  {/* Company name */}
                  <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {sponsor.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {sponsor.description}
                  </p>

                  {/* Impact Points */}
                  <div className="pt-2 space-y-3">
                    <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wide text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      What They Provide
                    </h4>
                    <ul className="space-y-2">
                      {sponsor.impact.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-blue-600 flex-shrink-0"></span>
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

// import React, { useState, useEffect } from 'react';

// const Sponsors = () => {
//   const sponsors = [
//     {
//       name: "SolidWorks",
//       logo: "/sponsors/solidworks.png",
//       description: "SOLIDWORKS is a software used for creating 3D models and simulations, primarily for product development and engineering applications. It's a powerful tool used in industries like automotive, aerospace, and manufacturing, offering features for design, analysis, and manufacturing.",
//       angle: 0,
//     },
//     {
//       name: "Ansys",
//       logo: "/sponsors/ansys.png",
//       description: "Ansys provides engineering simulation software for product design and testing. Used across aerospace, automotive, and electronics industries for structural, fluid, electromagnetic, and systems simulation.",
//       angle: 45,
//     },
//     {
//       name: "Anaconda",
//       logo: "/sponsors/anaconda.png",
//       description: "Anaconda is a distribution platform for Python and R programming, widely used in data science, machine learning, and scientific computing. It simplifies package management and deployment.",
//       angle: 90,
//     },
//     {
//       name: "Microplacer",
//       logo: "/sponsors/microplacer.png",
//       description: "Microplacer specializes in precision microelectronics placement and assembly solutions for aerospace and defense applications, delivering high-reliability components.",
//       angle: 135,
//     },
//     {
//       name: "Precision",
//       logo: "/sponsors/precision.png",
//       description: "Precision provides advanced manufacturing solutions and components for aerospace applications, focusing on high-accuracy machining and assembly processes.",
//       angle: 180,
//     },
//     {
//       name: "ROBU.IN",
//       logo: "/sponsors/robu.png",
//       description: "ROBU.IN is an online platform offering robotics and electronics components, serving makers, hobbyists, and professionals in India with a wide range of sensors, controllers, and development boards.",
//       angle: 225,
//     },
//     {
//       name: "Babaji shivram",
//       logo: "/sponsors/babaji.png",
//       description: "Babaji Shivram specializes in aerospace components and systems integration, providing innovative solutions for satellite and spacecraft development.",
//       angle: 270,
//     },
//     {
//       name: "Sensomatic",
//       logo: "/sponsors/sensomatic.png",
//       description: "Sensomatic develops advanced sensor technologies for aerospace applications, offering high-precision measurement and monitoring systems for critical mission parameters.",
//       angle: 315,
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Font loading
//   useEffect(() => {
//     const link = document.createElement('link');
//     link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setActiveIndex((prev) => (prev + 1) % sponsors.length);
//         setIsTransitioning(false);
//       }, 400);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const activeSponsor = sponsors[activeIndex];
//   const needleAngle = activeSponsor.angle;
//   const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
//   const radius = isMobile ? 140 : 300;

//   return (
//     <section id="sponsors" className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-gradient-radial from-blue-600/5 via-transparent to-transparent" />
//       <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block mb-4">
//             <span className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-medium border border-blue-600/20" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
//               Partnership Excellence
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
//             Our <span className="text-blue-600">Sponsors</span>
//           </h2>
//           <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
//             Powering innovation through strategic partnerships that drive the future of aerospace technology.
//           </p>
//         </div>

//         {/* Sponsors Wheel with Center Description (desktop) or stacked list (mobile) */}
//         <div className="relative w-full max-w-6xl mx-auto mb-20">
//           {!isMobile ? (
//             <div className="relative w-full aspect-square max-w-4xl mx-auto">
//               {/* Sponsor logos in circle */}
//               {sponsors.map((sponsor, index) => {
//                 const angle = sponsor.angle;
//                 const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
//                 const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
//                 const isActive = index === activeIndex;

//                 return (
//                   <div
//                     key={sponsor.name}
//                     className="absolute top-1/2 left-1/2 transition-all duration-700 z-20"
//                     style={{
//                       transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                     }}
//                   >
//                     <button
//                       onClick={() => {
//                         setIsTransitioning(true);
//                         setTimeout(() => {
//                           setActiveIndex(index);
//                           setIsTransitioning(false);
//                         }, 400);
//                       }}
//                       className={`p-2 md:p-4 rounded-lg border transition-all duration-500 hover:scale-110 ${
//                         isActive
//                           ? "bg-blue-600/20 border-blue-400 shadow-[0_0_25px_rgba(37,99,235,0.5)] scale-110"
//                           : "bg-gray-900/80 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 hover:bg-gray-800/80"
//                       }`}
//                     >
//                       <img 
//                         src={sponsor.logo} 
//                         alt={sponsor.name}
//                         className={`h-6 md:h-12 w-auto object-contain transition-all duration-500 ${
//                           isActive ? "brightness-125" : "brightness-90 hover:brightness-110"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                 );
//               })}

//               {/* Center Description Card */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[160px] md:w-[420px]">
//                 <div
//                   className={`bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border border-blue-600/30 rounded-2xl md:rounded-3xl p-3 md:p-8 shadow-2xl transition-all duration-500 ${
//                     isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
//                   }`}
//                 >
//                   {/* Icon/Logo placeholder */}
//                   <div className="flex items-center justify-center mb-2 md:mb-4">
//                     <div className="w-12 h-12 md:w-24 md:h-24 bg-gray-800/50 rounded-xl md:rounded-2xl flex items-center justify-center p-2 md:p-3">
//                       <img 
//                         src={activeSponsor.logo} 
//                         alt={activeSponsor.name}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </div>
                  
//                   {/* Company name */}
//                   <h3 className="text-sm md:text-2xl font-bold text-center mb-1 md:mb-3 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
//                     {activeSponsor.name}
//                   </h3>
                  
//                   {/* Description */}
//                   <p className="text-[10px] md:text-sm text-gray-400 leading-relaxed text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
//                     {activeSponsor.description}
//                   </p>
                  
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col gap-4">
//               {sponsors.map((sponsor, index) => (
//                 <div key={sponsor.name} className="flex gap-4 items-start bg-gray-900/60 border border-white/5 rounded-2xl p-4">
//                   <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-gray-800/30 rounded-md p-2">
//                     <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{sponsor.name}</h4>
//                     <p className="text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{sponsor.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sponsors;