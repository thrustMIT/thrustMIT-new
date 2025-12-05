import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Alumni = ({ Header, Footer, initialYear, onNavigateHome, headerProps }) => {
  const [selectedYear, setSelectedYear] = useState(initialYear || '2025');
  const [hoveredAlumni, setHoveredAlumni] = useState(null);

  // Update selected year when initialYear prop changes
  useEffect(() => {
    if (initialYear) {
      setSelectedYear(initialYear);
    }
  }, [initialYear]);

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const alumniData = {
    '2025': {
      members: [
        {
          id: 1,
          name: 'Satvik Agrawal',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Satvik%20Agrawal__P_VEZVXb.jpg?updatedAt=1735410792912',
          atThrustMIT: 'Team Leader',
          currentWork: 'Aerospace Engineer at SpaceX',
          socials: {
            linkedin: 'https://www.linkedin.com/in/satvik-agrawal86/',
            email: 'satvikagrawal.86@gmail.com'
          }
        },
        {
          id: 2,
          name: 'Geethika Ravu',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Geethika%20Ravu__q2Z5RBwhL.jpg?updatedAt=1735410790801',
          atThrustMIT: 'Team Manager',
          currentWork: 'Robotics Engineer at Blue Origin',
          socials: {
            linkedin: 'https://www.linkedin.com/in/geethika-sree-ravu-0a4553259/',
            email:'geethikaravu@gmail.com'
          }
        },
        {
          id: 3,
          name: 'Ajinkya Sathe',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Ajinkya%20Sathe_AzFY4CeEe.jpg?updatedAt=1735410790307',
          atThrustMIT: 'Aerodynamics Head',
          currentWork: 'Design Engineer at ISRO',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ajinkya-sathe-234a1028a/',
            email: 'superajinkya783@gmail.com'
          }
        },
        {
          id: 13,
          name: 'Ayyan Bhartia',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Ayyan%20Bhartia_tCrOJtK3h1.jpg?updatedAt=1735410790778',
          atThrustMIT: 'Aerodynamics Member',
          currentWork: 'Aerospace Intern at NASA',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ayyan-bhartia-1a8700241/',
            instagram: '#',
            email: 'ayyanbhartia@gmail.com'
          }
        },
        {
          id: 14,
          name: 'Samarth Vinod',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Samarth%20Vinod_S5TdjnYLl.jpg?updatedAt=1735410790774',
          atThrustMIT: 'Avionics Head',
          currentWork: 'Mechanical Engineer at Rocket Lab',
          socials: {
            linkedin: 'https://www.linkedin.com/in/samarth-vinod-9309a324a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            email: 'samglobal24@gmail.com'
          }
        },
        {
          id: 20,
          name: 'Adithi Shetty N',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Adithi%20Shetty_xiTejsa3U.jpg?updatedAt=1735410790667',
          atThrustMIT: 'Avionics Member',
          currentWork: 'Systems Engineer at Blue Origin',
          socials: {
            linkedin: 'https://www.linkedin.com/in/adithi-shetty-n/',
            github: 'https://github.com/adithishetty01',
            email: 'adithishetty752@gmail.com'
          }
        },
        {
          id: 21,
          name: 'Jahnavi U',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Jahnavi%20U_JnAyVSYis5.jpg?updatedAt=1735410790962',
          atThrustMIT: 'Avionics Member',
          currentWork: 'Aerospace Intern at SpaceX',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jahnavi-uppaluri-011a4026a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/cygnus06',
            email: 'uppalurijahnavi@gmail.com'
          }
        },
        {
          id: 22,
          name: 'Tejas Patil',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Tejas%20Patil_ON9LtSh2k.jpg?updatedAt=1735410793264',
          atThrustMIT: 'Payload Head',
          currentWork: 'Mechanical Engineer at ISRO',
          socials: {
            linkedin: 'https://www.linkedin.com/in/tejas-patil-0b8946246/',
            github: 'tejas2510 (Tejas Patil) · GitHub',
            email: 'tejaspvt231@gmail.com'
          }
        },
        {
          id: 23,
          name: 'Mohul Podder',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Mohul%20Podder_yUtAOLLBuQ.jpg?updatedAt=1735410790753',
          atThrustMIT: 'Payload Member',
          currentWork: 'Aerospace Intern at NASA',
          socials: {
            linkedin: 'https://www.linkedin.com/in/mohul-podder-699940265/',
            github: 'https://github.com/M4podder',
            email: 'mpodder711@gmail.com'
          }
        },
        {
          id: 12,
          name: 'Aryan Gupta',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Aryan%20Gupta_2ufwXM7_J.jpg?updatedAt=1735410790307',
          atThrustMIT: 'Propulsion Member',
          currentWork: 'Aerospace Intern at ISRO',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aryan-gupta-55404826a/?originalSubdomain=in',
            email: 'planetaryan2004@gmail.com'
          }
        },
        {
          id: 18,
          name: 'Madhav Sonkusare',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Madhav%20Sonkusare_U18LXW60Pj.jpg?updatedAt=1735410790707',
          atThrustMIT: 'Propulsion Head',
          currentWork: 'Structural Engineer at SpaceX',
          socials: {
            linkedin: 'https://www.linkedin.com/in/madhav-sonkusare-550578250/',
            email: 'madhav.sonkusare@gmail.com'
          }
        },
        { id: 19,
          name: 'Shreemad Burade',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Shreemad%20Burade_qIgczp856.jpg?updatedAt=1735410793345',
          atThrustMIT: 'Propulsion Member',
          currentWork: 'Aerospace Intern at Blue Origin',
          socials: {
            linkedin: 'https://www.linkedin.com/in/shreemad-burade-97b73224a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            email: 'shreemadb@gmail.com'
          }
        },
        {
          id: 24,
          name: 'Akash Siddharth',
          image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Akash%20Siddarth_BN-VW8muG.jpg?updatedAt=1735410790589',
          atThrustMIT: 'Structures Head',
          currentWork: 'Propulsion Engineer at Rocket Lab',
          socials: {
            email: 'akasiddarth7107@gmail.com'
          }
        }

      ]
    },
    '2024': {
      members: [
        {
          id: 4,
          name: 'Parth Jain',
          image: '/alumni-2024/parth.jpg',
          atThrustMIT: 'Team Leader',
          currentWork: 'Systems Engineer at NASA',
          socials: {
            linkedin: '#',
            instagram: '#',
            email: 'emily@alumni.thrustmit.in'
          }
        },
        {
          id: 5,
          name: 'Vinoy S',
          image: '/alumni-2024/vinoy.jpg',
          atThrustMIT: 'Team Manager',
          currentWork: 'Propulsion Specialist at Rocket Lab',
          socials: {
            linkedin: '#',
            twitter: '#',
            github: '#',
            email: 'michael@alumni.thrustmit.in'
          }
        },
        {
          id: 15,
          name: 'Vedang Bhosale',
          image: '/alumni-2024/vedang.jpg',
          atThrustMIT: 'Aerodynamics Head',
          currentWork: 'Aerospace Engineer at SpaceX',
          socials: {
            linkedin: '#',
            github: '#',
            email: ''
          }
        },
        {
          id: 16,
          name: 'Aiyaz Karani',
          image: '/alumni-2024/aiyaz.jpg',
          atThrustMIT: 'Recovery Head',
          currentWork: 'Rocket Propulsion Intern at Blue Origin',
          socials: {
            linkedin: '#',
            instagram: '#',
            email: ''
          }
        },
        {
          id: 17,
          name: 'Monish Anne',
          image: '/alumni-2024/monish.jpg',
          atThrustMIT: 'Avionics Head',
          currentWork: 'Structural Engineer at Virgin Galactic',
          socials: {
            linkedin: '#',
            twitter: '#',
            email: ''
          }
        },
        {
          id: 24,
          name: 'Satwik Agarwal',
          image: '/alumni-2024/satwik.jpg',
          atThrustMIT: 'Avionics Member',
          currentWork: 'Aerospace Intern at ISRO',
          socials: {
            linkedin: '#',
            github: '#',
            email: ''
          }
        },
        {
          id: 25,
          name: 'Keeratraj Singh',
          image: '/alumni-2024/keeratraj.jpg',
          atThrustMIT: 'Avionics Member',
          currentWork: 'Mechanical Engineer at Rocket Lab',
          socials: {
            linkedin: '#',
            instagram: '#',
            email: ''
          }
        },
        {
          id: 26,
          name: 'Aman Soni',
          image: '/alumni-2024/aman.jpg',
          atThrustMIT: 'Avionics Member',
          currentWork: 'Aerospace Intern at NASA',
          socials: {
            linkedin: '#',
            twitter: '#',
            email: ''
          }
        },
        {
          id: 27,
          name: 'Hrishikesh Singh Yadav',
          image: '/alumni-2024/hrishikesh.jpg',
          atThrustMIT: 'Payload Head',
          currentWork: 'Systems Engineer at SpaceX',
          socials: {
            linkedin: '#',
            github: '#',
            email: ''
          }
        }
      ]
    },
    '2023': {
      members: [
        {
          id: 6,
          name: 'Jessica Turner',
          role: 'Software Lead',
          image: '/api/placeholder/400/400',
          atThrustMIT: 'Software Lead',
          currentWork: 'Flight Software Engineer at Boeing',
          socials: {
            linkedin: '#',
            github: '#',
            email: 'jessica@alumni.thrustmit.in'
          }
        },
        {
          id: 7,
          name: 'Ryan Patel',
          role: 'Aerodynamics Lead',
          image: '/api/placeholder/400/400',
          atThrustMIT: 'Aerodynamics Lead',
          currentWork: 'Research Scientist at MIT',
          socials: {
            linkedin: '#',
            instagram: '#',
            email: 'ryan@alumni.thrustmit.in'
          }
        }
      ]
    },
    '2022': {
      members: [
        {
          id: 8,
          name: 'Amanda Lee',
          role: 'Technical Lead',
          image: '/api/placeholder/400/400',
          atThrustMIT: 'Technical Lead',
          currentWork: 'Senior Engineer at Virgin Galactic',
          socials: {
            linkedin: '#',
            twitter: '#',
            email: 'amanda@alumni.thrustmit.in'
          }
        }
      ]
    },
    '2021': {
      members: [
        {
          id: 9,
          name: 'James Kumar',
          role: 'Team Manager',
          image: '/api/placeholder/400/400',
          atThrustMIT: 'Team Manager',
          currentWork: 'Project Manager at Lockheed Martin',
          socials: {
            linkedin: '#',
            github: '#',
            email: 'james@alumni.thrustmit.in'
          }
        }
      ]
    },
    '2020': {
      members: [
        {
          id: 10,
          name: 'Sophia Martinez',
          role: 'Structures Engineer',
          image: '/api/placeholder/400/400',
          atThrustMIT: 'Structures Engineer',
          currentWork: 'Structural Analyst at Northrop Grumman',
          socials: {
            linkedin: '#',
            instagram: '#',
            email: 'sophia@alumni.thrustmit.in'
          }
        }
      ]
    },
    '2019': {
      members: [
        {
          id: 11,
          name: 'Kevin Zhang',
          role: 'Avionics Engineer',
          image: '/api/placeholder/400/400',
          atThrustMIT: 'Avionics Engineer',
          currentWork: 'Electronics Engineer at Aerojet Rocketdyne',
          socials: {
            linkedin: '#',
            github: '#',
            email: 'kevin@alumni.thrustmit.in'
          }
        }
      ]
    },
    '2018': {
      members: [
        {
          id: 12,
          name: 'Rachel Johnson',
          role: 'Founding Member',
          image: '/api/placeholder/400/400',
          atThrustMIT: 'Founding Member',
          currentWork: 'Chief Engineer at Relativity Space',
          socials: {
            linkedin: '#',
            twitter: '#',
            instagram: '#',
            email: 'rachel@alumni.thrustmit.in'
          }
        }
      ]
    }
  };

  const years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];

  const SocialIcon = ({ type, url }) => {
    const icons = {
      linkedin: Linkedin,
      github: Github,
      instagram: Instagram,
      twitter: Twitter,
      facebook: Facebook,
      email: Mail
    };
    
    const Icon = icons[type];
    const isEmail = type === 'email';
    const href = isEmail ? `mailto:${url}` : url;
    
    return (
      <a
        href={href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 group"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon size={18} className="text-blue-400 group-hover:text-white transition-colors" />
      </a>
    );
  };

  const AlumniCard = ({ alumni }) => (
    <div
      className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setHoveredAlumni(alumni.id)}
      onMouseLeave={() => setHoveredAlumni(null)}
    >
      {/* Image Container */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20">
          <img 
            src={alumni.image} 
            alt={alumni.name}
            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
        
        {/* Social Icons - Show on Hover */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
          hoveredAlumni === alumni.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          {Object.entries(alumni.socials).map(([type, url]) => (
            <SocialIcon key={type} type={type} url={url} />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {alumni.name}
        </h3>
        <p className="text-blue-400 text-sm mb-3" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}>
          {alumni.atThrustMIT}
        </p>
        <p className="text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
          {alumni.currentWork}
        </p>
      </div>
    </div>
  );

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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Our <span className="text-blue-600">Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400, letterSpacing: '0.05em' }}>
              Celebrating the brilliant minds who paved the way and continue to reach for the stars in their careers.
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-bold ${
                  selectedYear === year
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Class Info */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Class of <span className="text-blue-600">{selectedYear}</span>
            </h2>
            <p className="text-gray-400 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
              {alumniData[selectedYear].tagline}
            </p>
          </div>

          {/* Alumni Grid */}
          {(() => {
            const members = alumniData[selectedYear].members;
            const many = members.length >= 3;
            return (
              <div className={many ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
                {members.map((alumni) => (
                  <div key={alumni.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                    <AlumniCard alumni={alumni} />
                  </div>
                ))}
              </div>
            );
          })()}

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Alumni;