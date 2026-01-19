import React, { useState, useEffect } from 'react';
import { Rocket, Zap, Flame, Star, Check } from 'lucide-react';

const SponsorshipTiers = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [hoveredTier, setHoveredTier] = useState(null);

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const tiers = [
    {
      name: 'Subsonic Partner',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-800',
      glow: 'shadow-blue-600/50',
      deliverables: [
        'Logo on Website Sponsors Page',
        'Individual Social Media Thank You Post',
        'Logo on Team T-Shirts / Apparel: Small',
        'Logo on Competition Banners: Small',
        'Logo on Rocket: Small'
      ],
      price: '₹20k – ₹50k',
      description: 'Start your journey with us'
    },
    {
      name: 'Transonic Partner',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-800',
      glow: 'shadow-blue-600/50',
      deliverables: [
        'Logo on Website Sponsors Page',
        'Individual Social Media Thank You Post',
        'Logo Placement on Livestream Overlay',
        'Dedicated Blog Post and Collaboration Instagram Reel',
        'Logo on Team T-Shirts / Apparel: Medium',
        'Logo on Competition Banners: Medium',
        'Logo on Rocket: Medium'
      ],
      price: '₹50k – ₹1L',
      description: 'Breaking the sound barrier of innovation',
      featured: true,
      premium: true
    },
    {
      name: 'Supersonic Partner',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-800',
      glow: 'shadow-blue-600/50',
      deliverables: [
        'Logo on Website Sponsors Page',
        'Individual Social Media Thank You Post',
        'Logo Placement on Livestream Overlay',
        'Dedicated Blog Post and Collaboration Instagram Reel',
        'LinkedIn Article / Post Mention',
        'Logo on Team T-Shirts / Apparel: Large',
        'Logo on Competition Banners: Large',
        'Logo on Rocket: Large',
        'Featured in Project Video / Team Documentary',
        '"Presented By" Tagline in Project Videos'
      ],
      price: '₹1L+',
      description: 'Accelerating beyond expectations'
    },
    {
      name: 'Travel Partner',
      color: 'purple',
      gradient: 'from-purple-600 to-purple-800',
      glow: 'shadow-purple-600/50',
      deliverables: [
        'Logo on Website Sponsors Page',
        'Individual Social Media Thank You Post',
        'Logo Placement on Livestream Overlay',
        'Dedicated Blog Post and Collaboration Instagram Reel',
        'LinkedIn Article / Post Mention',
        'Logo on Team T-Shirts / Apparel: Large',
        'Logo on Competition Banners: Large',
        'Logo on Rocket: Large',
        'Featured in Project Video / Team Documentary',
        '"Presented By" Tagline in Project Videos',
        '"Official Partner" Mention in Public Events'
      ],
      price: 'Custom Package',
      description: 'Complete partnership experience'
    }
  ];

  return (
    <section className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/20 text-blue-400 text-sm font-medium border border-blue-600/30 backdrop-blur-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}>
              Sponsorship Packages
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Choose Your <span className="text-blue-600">Velocity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
            Accelerate your brand into the future of aerospace innovation with our tiered sponsorship programs
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tiers.map((tier, index) => {
            const isSelected = selectedTier === tier.name;
            const isHovered = hoveredTier === tier.name;
            const isActive = isSelected || isHovered;

            return (
              <div
                key={tier.name}
                className={`relative group transition-all duration-700 ${
                  tier.featured ? 'md:-mt-8 md:mb-8' : ''
                }`}
                onMouseEnter={() => setHoveredTier(tier.name)}
                onMouseLeave={() => setHoveredTier(null)}
                onClick={() => setSelectedTier(isSelected ? null : tier.name)}
              >
                {/* Premium Badge */}
                {tier.premium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Star size={12} fill="currentColor" />
                      most popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-700 cursor-pointer ${
                    isActive
                      ? `border-${tier.color}-500/50 shadow-2xl ${tier.glow} scale-105`
                      : 'border-gray-800/50 hover:border-gray-700/50'
                  } ${tier.featured ? 'border-2' : ''}`}
                  style={{
                    transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

                  {/* Icon Header */}
                  <div className="relative p-8 border-b border-gray-800/50">
                    <h3 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {tier.name}
                    </h3>
                    <p className="text-gray-400 text-center text-sm mb-4" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                      {tier.description}
                    </p>
                    <div className={`text-center text-sm font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}>
                      {tier.price}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="p-8">
                    <div className="space-y-3">
                      {tier.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 transition-all duration-500`}
                          style={{ 
                            transitionDelay: isActive ? `${i * 50}ms` : '0ms',
                            opacity: isActive ? 1 : 0.7
                          }}
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${tier.gradient} flex items-center justify-center mt-0.5`}>
                            <Check size={12} className="text-white" strokeWidth={3} />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                {isActive && (
                  <>
                    <div className="absolute top-10 -right-2 w-2 h-2 bg-blue-600 rounded-full animate-ping" />
                    <div className="absolute bottom-20 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="relative mt-20">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl overflow-hidden">
            <div className="p-8 border-b border-gray-800/50">
              <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Detailed <span className="text-blue-600">Comparison</span>
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <thead>
                  <tr className="border-b border-gray-800/50">
                    <th className="text-left p-6 text-gray-400 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>Deliverables</th>
                    <th className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 text-blue-600 font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                        Subsonic
                      </div>
                    </th>
                    <th className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 text-blue-600 font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                        Transonic
                      </div>
                    </th>
                    <th className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 text-blue-600 font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                        Supersonic
                      </div>
                    </th>
                    <th className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 text-purple-600 font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                        Travel
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-gray-700/50 bg-gray-900/50">
                    <td className="p-6 text-gray-300 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>Suggested Contribution</td>
                    <td className="p-6 text-center text-blue-600 font-bold text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>₹20k – ₹50k</td>
                    <td className="p-6 text-center text-blue-600 font-bold text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>₹50k – ₹1L</td>
                    <td className="p-6 text-center text-blue-600 font-bold text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>₹1L+</td>
                    <td className="p-6 text-center text-purple-600 font-bold text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>Custom</td>
                  </tr>
                  <tr className="bg-green-900/20">
                    <td colSpan="5" className="p-4 text-green-400 font-bold text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                      DIGITAL BRANDING
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Logo on Website Sponsors Page</td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-purple-600" /></td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Individual Social Media Thank You Post</td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-purple-600" /></td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Logo Placement on Livestream Overlay</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-purple-600" /></td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Dedicated Blog Post and Collaboration Instagram Reel</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-purple-600" /></td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>LinkedIn Article / Post Mention</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-purple-600" /></td>
                  </tr>
                  
                  <tr className="bg-green-900/20">
                    <td colSpan="5" className="p-4 text-green-400 font-bold text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                      PHYSICAL BRANDING
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Logo on Team T-Shirts / Apparel</td>
                    <td className="p-6 text-center text-blue-600">Small</td>
                    <td className="p-6 text-center text-blue-600 font-semibold">Medium</td>
                    <td className="p-6 text-center text-blue-600 font-semibold">Large</td>
                    <td className="p-6 text-center text-purple-600 font-semibold">Large</td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Logo on Competition Banners</td>
                    <td className="p-6 text-center text-blue-600">Small</td>
                    <td className="p-6 text-center text-blue-600 font-semibold">Medium</td>
                    <td className="p-6 text-center text-blue-600 font-semibold">Large</td>
                    <td className="p-6 text-center text-purple-600 font-semibold">Large</td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Logo on Rocket</td>
                    <td className="p-6 text-center text-blue-600">Small</td>
                    <td className="p-6 text-center text-blue-600 font-semibold">Medium</td>
                    <td className="p-6 text-center text-blue-600 font-semibold">Large</td>
                    <td className="p-6 text-center text-purple-600 font-semibold">Large</td>
                  </tr>

                  <tr className="bg-green-900/20">
                    <td colSpan="5" className="p-4 text-green-400 font-bold text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                      STRATEGIC PARTNERSHIP
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Featured in Project Video / Team Documentary</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-purple-600" /></td>
                  </tr>

                  <tr className="bg-green-900/20">
                    <td colSpan="5" className="p-4 text-green-400 font-bold text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                      EXCLUSIVE RIGHTS
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/30 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>"Presented By" Tagline in Project Videos</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-blue-600" /></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-purple-600" /></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>"Official Partner" Mention in Public Events</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-center"><Check size={20} className="inline text-purple-600" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="relative mt-20">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Ready to Launch?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400, letterSpacing: '0.05em' }}>
              Join us in pushing the boundaries of aerospace innovation. Let's create something extraordinary together.
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-600/50" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}>
              Contact Us for Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipTiers;