import React, { useState, useEffect } from 'react';
import { Rocket, Zap, Gauge, Layers, Info, ChevronRight, Search, Book, Star, TrendingUp, ArrowLeft } from 'lucide-react';

const RocketWiki = () => {
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const rockets = [
    {
      id: 1,
      name: 'AgniAstra',
      category: 'competition',
      tagline: 'High-Altitude Champion',
      description: 'AgniAstra is our flagship high-altitude rocket designed for competitive launches. Built with advanced composite materials and featuring a dual-stage propulsion system.',
      specs: {
        height: '3.2m',
        diameter: '15cm',
        weight: '25kg',
        apogee: '10,000ft',
        motor: 'L-Class Solid',
      },
      features: [
        'Carbon fiber airframe',
        'Dual deployment system',
        'GPS tracking module',
        'Custom avionics bay',
        'Aerodynamic fin design'
      ],
      status: 'Active',
      launchDate: 'March 2024',
      image: '/placeholder-rocket.png'
    },
    {
      id: 2,
      name: 'Altair',
      category: 'research',
      tagline: 'Atmospheric Research Platform',
      description: 'Altair is designed for atmospheric research and carries scientific payloads to study upper atmosphere conditions. Features modular payload bay.',
      specs: {
        height: '2.8m',
        diameter: '12cm',
        weight: '18kg',
        apogee: '8,000ft',
        motor: 'K-Class Solid',
      },
      features: [
        'Modular payload system',
        'Real-time telemetry',
        'Temperature sensors',
        'Pressure monitoring',
        'Data logging capability'
      ],
      status: 'Development',
      launchDate: 'June 2024',
      image: '/placeholder-rocket.png'
    },
    {
      id: 3,
      name: 'Rayquaza',
      category: 'experimental',
      tagline: 'Next-Gen Propulsion',
      description: 'Rayquaza is our experimental platform testing hybrid propulsion systems and advanced recovery mechanisms for future rocket designs.',
      specs: {
        height: '2.5m',
        diameter: '10cm',
        weight: '15kg',
        apogee: '6,000ft',
        motor: 'Hybrid',
      },
      features: [
        'Hybrid propulsion system',
        '3D printed components',
        'Advanced recovery system',
        'Thrust vectoring capability',
        'Modular design'
      ],
      status: 'Testing',
      launchDate: 'August 2024',
      image: '/placeholder-rocket.png'
    },
    {
      id: 4,
      name: 'Phoenix',
      category: 'competition',
      tagline: 'Speed Demon',
      description: 'Phoenix focuses on maximum velocity and rapid ascent profiles. Optimized for speed records with minimal drag coefficient.',
      specs: {
        height: '2.2m',
        diameter: '8cm',
        weight: '12kg',
        apogee: '7,500ft',
        motor: 'J-Class Solid',
      },
      features: [
        'Streamlined aerodynamics',
        'Lightweight construction',
        'High-speed recovery',
        'Minimal drag design',
        'Competition optimized'
      ],
      status: 'Active',
      launchDate: 'January 2024',
      image: '/placeholder-rocket.png'
    },
    {
      id: 5,
      name: 'Arya',
      category: 'research',
      tagline: 'Educational Pioneer',
      description: 'Arya serves as our educational platform for training new team members and testing fundamental rocketry concepts.',
      specs: {
        height: '1.8m',
        diameter: '7cm',
        weight: '8kg',
        apogee: '4,000ft',
        motor: 'H-Class Solid',
      },
      features: [
        'Educational design',
        'Easy assembly',
        'Safety focused',
        'Training platform',
        'Cost effective'
      ],
      status: 'Active',
      launchDate: 'September 2023',
      image: '/placeholder-rocket.png'
    },
    {
      id: 6,
      name: 'Vyom',
      category: 'experimental',
      tagline: 'Space Aspirant',
      description: 'Vyom represents our most ambitious project, aiming to reach the Karman line with advanced multi-stage propulsion.',
      specs: {
        height: '4.5m',
        diameter: '20cm',
        weight: '45kg',
        apogee: '100km',
        motor: 'Multi-Stage',
      },
      features: [
        'Multi-stage separation',
        'Advanced guidance',
        'Satellite deployment',
        'Space-grade materials',
        'Autonomous systems'
      ],
      status: 'Development',
      launchDate: 'TBD 2025',
      image: '/placeholder-rocket.png'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Rockets', icon: Rocket },
    { id: 'competition', name: 'Competition', icon: Star },
    { id: 'research', name: 'Research', icon: Book },
    { id: 'experimental', name: 'Experimental', icon: TrendingUp }
  ];

  const filteredRockets = rockets.filter(rocket => {
    const matchesSearch = rocket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rocket.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || rocket.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Development': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Testing': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/20 text-blue-400 text-sm border border-blue-600/30 backdrop-blur-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}>
              KNOWLEDGE BASE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Rocket <span className="text-blue-600">Encyclopedia</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400, letterSpacing: '0.05em' }}>
            Explore our fleet of rockets, from competition champions to experimental platforms pushing the boundaries of student rocketry
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search rockets by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                  style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                >
                  <Icon size={18} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rockets Grid */}
      <section className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRockets.map((rocket) => (
              <div
                key={rocket.id}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl overflow-hidden hover:border-blue-600/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20"
                onClick={() => setSelectedRocket(rocket)}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(rocket.status)}`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                    {rocket.status}
                  </span>
                </div>

                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center border-b border-gray-800/50">
                  <Rocket size={64} className="text-blue-400 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {rocket.name}
                  </h3>
                  <p className="text-blue-400 text-sm mb-3" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                    {rocket.tagline}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                    {rocket.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Height</p>
                      <p className="text-white font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{rocket.specs.height}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Apogee</p>
                      <p className="text-white font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{rocket.specs.apogee}</p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-blue-600/30" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    View Details
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredRockets.length === 0 && (
            <div className="text-center py-20">
              <Rocket size={64} className="mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                No rockets found matching your search
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Modal */}
      {selectedRocket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedRocket(null)}>
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-blue-600/30 rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedRocket(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <span className="text-2xl text-white">×</span>
            </button>

            {/* Header */}
            <div className="relative h-64 bg-gradient-to-br from-blue-600/30 to-blue-800/30 flex items-center justify-center border-b border-gray-800/50">
              <Rocket size={96} className="text-blue-400 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm border ${getStatusColor(selectedRocket.status)} inline-block mb-3`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                  {selectedRocket.status}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {selectedRocket.name}
                </h2>
                <p className="text-blue-400 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                  {selectedRocket.tagline}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <Info size={24} className="text-blue-600" />
                  Overview
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                  {selectedRocket.description}
                </p>
                <p className="text-gray-500 mt-4" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                  Launch Date: {selectedRocket.launchDate}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <Gauge size={24} className="text-blue-600" />
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(selectedRocket.specs).map(([key, value]) => (
                    <div key={key} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-gray-500 text-sm mb-2 capitalize" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>{key}</p>
                      <p className="text-white text-xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <Layers size={24} className="text-blue-600" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedRocket.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RocketWiki;