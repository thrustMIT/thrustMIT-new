import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Team = ({ Header, Footer, headerProps, onNavigateToJoinTeam }) => {
  const [hoveredMember, setHoveredMember] = useState(null);

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Shaunak Purkayastha',
      role: 'Team Leader',
      tag: 'leader',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Shaunak%20Purkayastha__eTDJDXK5r.HEIC?updatedAt=1735410814877',
      socials: {
        linkedin: 'https://www.linkedin.com/in/shaunakpurkayastha/?originalSubdomain=in',
        email: 'shaunakp1709@gmail.com'
      }
    },
    {
      id: 2,
      name: 'Anushka Prabhutendolkar',
      role: 'Team Manager',
      tag: 'leader',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Anushka%20Prabhutendolkar_wPjll-9coc.HEIC?updatedAt=1735410811512',
      socials: {
        github: 'https://github.com/asprcode',
        email: 'anushkaprabhutendolkar@gmail.com'
      }
    },
    {
      id: 3,
      name: 'Shaurya Mittal',
      role: 'Aerodynamics Head',
      tag: 'aero',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Shaurya%20Mittal_vm63fTBj2j.HEIC?updatedAt=1735410815461',
      socials: {
        linkedin: 'https://www.linkedin.com/in/shaurya-mittal-744483291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/extorc',
        email: 'mittalshaurya003@gmail.com'
      }
    },
    {
      id: 4,
      name: 'Samrudh Raja',
      role: 'Head of Recovery',
      tag: 'aero',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Samrudh%20Raja_cX4ldgPWy.HEIC?updatedAt=1735410813903',
      socials: {
        linkedin: 'https://www.linkedin.com/in/samrudh-raja-53657728b/',
        email: 'samrudh2204@gmail.com'
      }
    },
    {
      id: 5,
      name: 'Sanskruti Ginde',
      role: 'Avionics Head',
      tag: 'avionics',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Sanskruti%20Ginde_Vg6PLfMCk.HEIC?updatedAt=1735410814796',
      socials: {
        linkedin: 'https://www.linkedin.com/in/sanskruti-ginde-a512602b2/',
        email: 'sanskrutiginde@gmail.com'
      }
    },
    {
      id: 6,
      name: 'Dhruv Phalod',
      role: 'Ground Systems Head',
      tag: 'avionics',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Dhruv%20Phalod_UpqptrSoG5.HEIC?updatedAt=1735410810811',
      socials: {
        linkedin: 'https://www.linkedin.com/in/dhruv-phalod-b75a51282/',
        github: 'https://github.com/D-Coder-42',
        email: 'dhruvphalod@gmail.com'
      }
    },
    {
      id: 7,
      name: 'Krishanu Dey',
      role: 'Senior Member',
      tag: 'avionics',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Krishanu%20Dey_cawTxipxw.HEIC?updatedAt=1735410809227',
      socials: {
        github: 'https://github.com/krishanu-170605',
        email: 'krishanu.170605@gmail.com'
      }
    },
    {
      id: 8,
      name: 'Shawn Chris D Silva',
      role: 'Senior Member',
      tag: 'avionics',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Shawn%20Chris%20D%20Silva_aqEyt3PkM.HEIC?updatedAt=1735410815506',
      socials: {
        linkedin: 'https://www.linkedin.com/in/shawn-chris-d-silva-12960a20b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        github: 'https://github.com/sirdeeznuts',
        email: 'shawnchris100@gmail.com'
      }
    },
    {
      id: 9,
      name: 'Vanshdeep Trivedi',
      role: 'Senior Member',
      tag: 'avionics',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Vanshdeep%20Trivedi_D_GtGaGAt.HEIC?updatedAt=1735410816157',
      socials: {
        linkedin: 'https://www.linkedin.com/in/vanshdeep-trivedi-8108ab288/',
        github: 'https://github.com/Vel0c1ty04',
        email: 'vanshd.trivedi04@gmail.com'
      }
    },
    {
      id: 10,
      name: 'Mutra Sai Tharun',
      role: 'Head of Payload',
      tag: 'payload',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Mutra%20Sai%20Tharun_eTOFs6mCg.HEIC?updatedAt=1735410811259',
      socials: {
        github: 'https://github.com/Tharun22122005',
        email: 'mst.tharun39@gmail.com'
      }
    },
    {
      id: 11,
      name: 'Adi Narayan',
      role: 'Senior Member',
      tag: 'payload',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Adi%20Narayan%20R%20S_6DXQMEp2LN.HEIC?updatedAt=1735410811485',
      socials: {
        linkedin: 'https://www.linkedin.com/in/adi-narayan-059ab8241/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/Adi-Narayan',
        email: 'adinarayanrs777@gmail.com'
      }
    },
    {
      id: 12,
      name: 'Rudra Rajpurohit',
      role: 'Senior Member',
      tag: 'payload',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Rudra%20Rajpurohit_f_Lp5BH16.HEIC?updatedAt=1735410813472',
      socials: {
        linkedin: 'https://www.linkedin.com/in/rudra-rajpurohit-2215772a4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        email: 'rudrarajpurohit06@gmail.com'
      }
    },
    {
      id: 13,
      name: 'Dhruv Jadhav',
      role: 'Head of Propulsion',
      tag: 'propulsion',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Dhruv%20Jadhav_AqowM1ZUX.HEIC?updatedAt=1735410811559',
      socials: {
        linkedin: 'https://www.linkedin.com/in/dhruv-jadhav/',
        github: 'https://github.com/dhruv-jadhav',
        email: 'dhruvjadhav225@gmail.com'
      }
    },
    {
      id: 14,
      name: 'Varun PV',
      role: 'Senior Member',
      tag: 'propulsion',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Varun%20PV_98fFAJqgb.HEIC?updatedAt=1735410816389',
      socials: {
        linkedin: 'https://www.linkedin.com/in/varun-pv-91b20628a',
        email: 'varunpv44@gmail.com'
      }
    },
    {
      id: 15,
      name: 'Tushit Chatterjee',
      role: 'Head of Structures',
      tag: 'structures',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Tushit%20Chatterjee_-Y7MmF2I4D.HEIC?updatedAt=1735410815796',
      socials: {
        linkedin: 'https://www.linkedin.com/in/tushitchatterjee/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        email: 'tushitchatterjee1@gmail.com'
      }
    },
    {
      id: 16,
      name: 'Avnish Kaur',
      role: 'Senior Member',
      tag: 'structures',
      image: 'https://ik.imagekit.io/wns4q4r9n2/2024-25/Avnish%20Kaur_rsh2X_9Hw.HEIC?updatedAt=1735410811451',
      socials: {
        linkedin: 'https://www.linkedin.com/in/avnish-kaur-77984a211/',
        email: 'kauravnish28@gmail.com'
      }
    },
    {
      id: 17,
      name: 'Vedant Pankaj Totla',
      role: 'Head of Management',
      tag: 'management',
      image: '/team/vedant.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/vedant-totla-51a629223/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        email: 'totla.vedant1@gmail.com'
      }
    },
    {
      id: 18,
      name: 'Swara Sule',
      role: 'Senior Member',
      tag: 'management',
      image: '/team/swara.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/swaraa-sule-814975228/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        email: 'swaraasule@gmail.com'
      }
    },
    {
      id: 19,
      name: 'Aayush Sinha',
      role: 'Senior Member',
      tag: 'management',
      image: '/team/aayush.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/aayush-sinha-64a631202/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        email: 'sinha.aayush.aayush@gmail.com'
      }
    },
    {
      id: 20,
      name: 'Shubhendu Arya',
      role: 'Senior Member',
      tag: 'management',
      image: '/team/shubhendu.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/shubhendu-arya-003041338/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        email: 'Shubhenduarya96@gmail.com'
      }
    },
    {
      id: 21,
      name: 'Prasanna K',
      role: 'Senior Member',
      tag: 'management',
      image: '/team/prasanna.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/prasanna-bhat-b259ba285/',
        github: 'https://github.com/Prasannakbhat123',
        email: 'prasannabhat345@gmail.com'
      }
    },
    {
      id: 22,
      name: 'Adithya M Adiga',
      role: 'Senior Member',
      tag: 'management',
      image: '/team/adithya.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/adithya-adiga-0b69a61ab/',
        github: 'https://github.com/adithya1107',
        email: 'adigaadithya70@gmail.com'
      }
    },
    {
      id: 23,
      name: 'Dr. Srinivas G',
      role: 'Faculty Advisor',
      tag: 'advisor',
      image: '/team/srinivas.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/srinivas-g-2652a341/?originalSubdomain=in',
        email: 'srinivas.g@manipal.edu'
      }
    }
  ];

  const SocialIcon = ({ type, url }) => {
    const icons = {
      linkedin: Linkedin,
      github: Github,
      instagram: Instagram,
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

  const MemberCard = ({ member }) => (
    <div
      className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      {/* Image Container */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
        
        {/* Social Icons - Show on Hover */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
          hoveredMember === member.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          {Object.entries(member.socials).map(([type, url]) => (
            <SocialIcon key={type} type={type} url={url} />
          ))}
        </div>

        {/* Bio - Show on Hover */}
        <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 transition-all duration-500 ${
          hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-300 text-sm leading-relaxed text-center" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
            {member.bio}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {member.name}
        </h3>
        <p className="text-blue-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}>
          {member.role}
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
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Our <span className="text-blue-600">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400, letterSpacing: '0.05em' }}>
              Meet the brilliant minds behind thrustMIT - passionate engineers, innovators, and dreamers who are literally reaching for the stars.
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-16">
            {(() => {
              const members = teamMembers.filter(m => m.tag === 'leader');
              const many = members.length >= 3;
              return (
                <div className={many ? 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto' : 'flex justify-center flex-wrap gap-8'}>
                  {members.map((member) => (
                    <div key={member.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Aerodynamics Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-blue-600">Aerodynamics</span>
            </h2>
            {(() => {
              const members = teamMembers.filter(m => m.tag === 'aero');
              const many = members.length >= 3;
              return (
                <div className={many ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
                  {members.map((member) => (
                    <div key={member.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Avionics Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-blue-600">Avionics</span>
            </h2>
            {(() => {
              const members = teamMembers.filter(m => m.tag === 'avionics');
              const many = members.length >= 3;
              return (
                <div className={many ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
                  {members.map((member) => (
                    <div key={member.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Payload Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-blue-600">Payload</span>
            </h2>
            {(() => {
              const members = teamMembers.filter(m => m.tag === 'payload');
              const many = members.length >= 3;
              return (
                <div className={many ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
                  {members.map((member) => (
                    <div key={member.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Propulsion Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-blue-600">Propulsion</span>
            </h2>
            {(() => {
              const members = teamMembers.filter(m => m.tag === 'propulsion');
              const many = members.length >= 3;
              return (
                <div className={many ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
                  {members.map((member) => (
                    <div key={member.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Structures Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-blue-600">Structures</span>
            </h2>
            {(() => {
              const members = teamMembers.filter(m => m.tag === 'structures');
              const many = members.length >= 3;
              return (
                <div className={many ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
                  {members.map((member) => (
                    <div key={member.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Management Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-blue-600">Management</span>
            </h2>
            {(() => {
              const members = teamMembers.filter(m => m.tag === 'management');
              const many = members.length >= 3;
              return (
                <div className={many ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
                  {members.map((member) => (
                    <div key={member.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
          {/* Faculty Advisors Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-blue-600">Faculty Advisors</span>
            </h2>
            {(() => {
              const members = teamMembers.filter(m => m.tag === 'advisor');
              const many = members.length >= 3;
              return (
                <div className={many ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex justify-center flex-wrap gap-8'}>
                  {members.map((member) => (
                    <div key={member.id} className={many ? '' : 'w-full sm:w-80 md:w-96'}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Join Team CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Want to <span className="text-blue-600">Join Us?</span>
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                We're always looking for passionate individuals who want to push the boundaries of rocket science
              </p>
              <button onClick={() => {
                if (headerProps && headerProps.onShowRecruitmentModal) {
                  headerProps.onShowRecruitmentModal();
                } else if (onNavigateToJoinTeam) {
                  onNavigateToJoinTeam();
                }
              }} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;