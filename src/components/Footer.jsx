import React, { useEffect } from 'react';
import { Rocket, Book, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = ({ 
  onNavigateToRocketWiki,
  onScrollToSection,
  onNavigateToBlog,
  onNavigateHome
}) => {
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

  return (
    <>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="/" className="flex items-center gap-3 group justify-between">
            <img 
              src="https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/logo.png" 
              alt="thrustMIT Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </a>
              <p className="text-sm text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                Pushing the boundaries of rocket propulsion and aerospace engineering at MIT.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Quick Links</h4>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                <button 
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome('about');
                    if (onScrollToSection) onScrollToSection('about');
                  }}
                  className="block text-gray-400 hover:text-blue-600 transition-colors text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome('subsystems');
                    if (onScrollToSection) onScrollToSection('subsystems');
                  }}
                  className="block text-gray-400 hover:text-blue-600 transition-colors text-left"
                >
                  Subsystems
                </button>
                <button 
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome('projects');
                    if (onScrollToSection) onScrollToSection('projects');
                  }}
                  className="block text-gray-400 hover:text-blue-600 transition-colors text-left"
                >
                  Projects
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Resources</h4>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                <button 
                  onClick={() => {
                    if (onNavigateToRocketWiki) onNavigateToRocketWiki();
                  }}
                  className="block text-gray-400 hover:text-blue-600 transition-colors text-left"
                >
                  Documentation
                </button>
                <button 
                  onClick={() => {
                    if (onNavigateToBlog) onNavigateToBlog();
                  }}
                  className="block text-gray-400 hover:text-blue-600 transition-colors text-left"
                >
                  Blog
                </button>
                <button 
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome('sponsors');
                    if (onScrollToSection) onScrollToSection('sponsors');
                  }}
                  className="block text-gray-400 hover:text-blue-600 transition-colors text-left"
                >
                  Sponsors
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Connect</h4>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                <a href="https://www.instagram.com/thrustmit/?hl=en" target='_blank' className="block text-gray-400 hover:text-blue-600 transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/company/thrustmit/posts/?feedView=all" target='_blank' className="block text-gray-400 hover:text-blue-600 transition-colors">LinkedIn</a>
                <a href="https://www.youtube.com/@thrustmit" target='_blank' className="block text-gray-400 hover:text-blue-600 transition-colors">YouTube</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
            <p>© 2026 thrustMIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;