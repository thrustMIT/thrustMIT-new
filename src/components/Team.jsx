import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Team = ({ Header, Footer, headerProps, onNavigateToJoinTeam, onNavigateHome, onScrollToSection, onNavigateToRocketWiki, onNavigateToBlog }) => {
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/shaunak.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/anushka.webp',
      socials: {
        github: 'https://github.com/asprcode',
        email: 'anushkaprabhutendolkar@gmail.com'
      }
    },
    {
      id: 3,
      name: 'Shaurya Mittal',
      role: 'Head of Aerodynamics',
      tag: 'aero',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/shaurya.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/samrudh.webp',
      socials: {
        linkedin: 'https://www.linkedin.com/in/samrudh-raja-53657728b/',
        email: 'samrudh2204@gmail.com'
      }
    },
    {
      id: 5,
      name: 'Sanskruti Ginde',
      role: 'Head of Avionics',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/sanskruti.webp',
      socials: {
        linkedin: 'https://www.linkedin.com/in/sanskruti-ginde-a512602b2/',
        email: 'sanskrutiginde@gmail.com'
      }
    },
    {
      id: 6,
      name: 'Dhruv Phalod',
      role: 'Head of Ground Systems',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/dhruvp.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/krishanu.webp',
      socials: {
        linkedin: 'https://www.linkedin.com/in/krishanu-dey-976892275/',
        github: 'https://github.com/krishanu-170605',
        email: 'krishanu.170605@gmail.com'
      }
    },
    {
      id: 8,
      name: 'Shawn Chris D Silva',
      role: 'Senior Member',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/shawn.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/vansh.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/tharun.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/adi.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/rudra.webp',
      socials: {
        linkedin: 'https://www.linkedin.com/in/rajrudra06?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        email: 'rudrarajpurohit06@gmail.com'
      }
    },
    {
      id: 13,
      name: 'Dhruv Jadhav',
      role: 'Head of Propulsion',
      tag: 'propulsion',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/dhruvj.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/varun.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/tushit.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/avnish.webp',
      socials: {
        linkedin: 'https://www.linkedin.com/in/avnish-kaur-77984a211/',
        email: 'kauravnish28@gmail.com'
      }
    },
    {
      id: 17,
      name: 'Vedant Totla',
      role: 'Head of Management',
      tag: 'management',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/vedant.webp',
      socials: {
        linkedin: 'https://www.linkedin.com/in/vedant-totla-51a629223/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        email: 'totla.vedant1@gmail.com'
      }
    },
    {
      id: 18,
      name: 'Swaraa Sule',
      role: 'Senior Member',
      tag: 'management',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/swaraa.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/aayush.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/shubh.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/prasanna.webp',
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
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/adiga.webp',
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
      image: 'https://ik.imagekit.io/shasta/thrustMIT_website/image_FKuk4PJIA.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667060881552',
      socials: {
        linkedin: 'https://www.linkedin.com/in/srinivas-g-2652a341/?originalSubdomain=in',
        email: 'srinivas.g@manipal.edu'
      }
    },
    {
      id: 24,
      name: 'Jenna Ann Sonali Sreshta Shetty',
      role: 'Junior Member',
      tag: 'payload',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/payload/jenna.webp',
      socials: {
        email: 'jenxtra06@gmail.com',
        github: 'https://github.com/JENX-5'
      }
    },
    {
      id: 25,
      name: 'Dev Sharma',
      role: 'Junior Member',
      tag: 'payload',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/payload/dev.webp',
      socials: {
        email: 'devsharma.techinnovate@gmail.com',
        linkedin: 'https://www.linkedin.com/in/dev-sharma-092447316/',
        github: 'https://github.com/DevSharma1903'
      }
    },
    {
      id: 26,
      name: 'Yash Patidar',
      role: 'Junior Member',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/avionics/yash.webp',
      socials: {
        email: 'yashpatidar0718@gmail.com',
        linkedin: 'https://linkedin.com/in/pashyatidar/',
        github: 'https://github.com/pashyatidar'
      }
    },
    {
      id: 27,
      name: 'Badampudi Mytreya',
      role: 'Junior Member',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/avionics/badampudi.webp',
      socials: {
        email: 'badampudimytreya@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mytreya-badampudi',
        github: 'https://github.com/BadampudiMytreya'
      }
    },
    {
      id: 28,
      name: 'Keshav H Nambiar',
      role: 'Junior Member',
      tag: 'propulsion',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/mechanical/keshav.webp',
      socials: {
        email: 'keshavnambiar2617@gmail.com',
        linkedin: 'https://www.linkedin.com/in/keshav-h-nambiar-752165264'
      }
    },
    {
      id: 29,
      name: 'Deepshikha Sarangi',
      role: 'Junior Member',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/avionics/deepshikha.webp',
      socials: {
        email: 'deepshikhasarangi13@gmail.com',
        github: 'https://github.com/deepshikhasarangi'
      }
    },
    {
      id: 30,
      name: 'Rishit Kulkarni',
      role: 'Junior Member',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/avionics/rishit.webp',
      socials: {
        email: 'kulkarnirishit26@gmail.com',
        linkedin: 'https://www.linkedin.com/in/rishit-kulkarni-406018317/',
        github: 'https://github.com/rishitkulkarni'
      }
    },
    {
      id: 31,
      name: 'Anshul Sekuri',
      role: 'Junior Member',
      tag: 'payload',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/payload/anshul.webp',
      socials: {
        email: 'anshul.sekuri@gmail.com',
        linkedin: 'https://www.linkedin.com/in/anshul-sekuri-10b3b02b6/',
        github: 'https://github.com/SpxceMan'
      }
    },
    {
      id: 32,
      name: 'Sai Srinivas',
      role: 'Junior Member',
      tag: 'structures',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/mechanical/sai.webp',
      socials: {
        email: 'sairileck454@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sai-srinivas-kaipa-745961375/?originalSubdomain=in'
      }
    },
    {
      id: 33,
      name: 'Prisha Banerjee',
      role: 'Junior Member',
      tag: 'management',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/management/prisha.webp',
      socials: {
        email: 'prishaban09@gmail.com',
        linkedin: 'https://www.linkedin.com/in/prisha-banerjee-4138321ba/'
      }
    },
    {
      id: 34,
      name: 'Tejaswinee Gunjal',
      role: 'Junior Member',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/avionics/tejaswinee.webp',
      socials: {
        email: 'tejaswinee2609@gmail.com',
        linkedin: 'https://www.linkedin.com/in/tejaswinee-gunjal-316055346/',
        github: 'https://github.com/tejaswinee2609'
      }
    },
    {
      id: 35,
      name: 'Sanyukta Dutta',
      role: 'Junior Member',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/avionics/sanyukta.webp',
      socials: {
        email: 'sanyukta.dutta.05@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sanyukta-dutta-312259329/',
        github: 'https://github.com/sanyuktadutta'
      }
    },
    {
      id: 36,
      name: 'Arya Chatterjee',
      role: 'Junior Member',
      tag: 'management',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/management/arya.webp',
      socials: {
        email: 'aryachatterjee8715@gmail.com'
      }
    },
    {
      id: 37,
      name: 'Devansh Gupta',
      role: 'Junior Member',
      tag: 'structures',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/mechanical/devansh.webp',
      socials: {
        email: 'devanshgupta0505006@gmail.com',
        linkedin: 'https://www.linkedin.com/in/devansh-gupta-43b57830a/',
        github: 'https://github.com/devanshgupta0505006-svg'
      }
    },
    {
      id: 38,
      name: 'Sudarsan D Naidu',
      role: 'Junior Member',
      tag: 'aero',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/mechanical/sudarshan.webp',
      socials: {
        email: 'sdnaidu2007@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sudarsan-d-naidu-897438383',
        github: 'https://github.com/scientific-dev'
      }
    },
    {
      id: 39,
      name: 'Palak Chhaparwal',
      role: 'Junior Member',
      tag: 'payload',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/payload/palak.webp',
      socials: {
        email: 'palakchhaparwal11@gmail.com',
        linkedin: 'https://www.linkedin.com/in/palak-chhaparwal-285953374',
        github: 'https://github.com/Palakc11'
      }
    },
    {
      id: 40,
      name: 'Akshat Richhariya',
      role: 'Junior Member',
      tag: 'payload',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/payload/akshat.webp',
      socials: {
        email: 'akshat.richh174@gmail.com',
        linkedin: 'https://in.linkedin.com/in/akshat-richhariya-0b9883322',
        github: 'https://github.com/oneSevenAR'
      }
    },
    {
      id: 41,
      name: 'Ansh Sinha',
      role: 'Junior Member',
      tag: 'payload',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/payload/ansh.webp',
      socials: {
        email: 'anshsinha468@gmail.com',
        linkedin: 'https://www.linkedin.com/in/ansh-sinha-20778b34b/',
        github: 'https://github.com/ansh468'
      }
    },
    {
      id: 42,
      name: 'Mahathi Subramanian',
      role: 'Junior Member',
      tag: 'management',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/management/mahathi.webp',
      socials: {
        email: 'maha38thi@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mahathi-subramanian-876779345/'
      }
    },
    {
      id: 43,
      name: 'Shaunak Saraf',
      role: 'Junior Member',
      tag: 'payload',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/payload/shaunaks.webp',
      socials: {
        email: 'saraf.shaunak123@gmail.com'
      }
    },
    {
      id: 44,
      name: 'Krishna Gund',
      role: 'Junior Member',
      tag: 'avionics',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/avionics/krishna.webp',
      socials: {
        email: 'krishgund54@gmail.com',
        linkedin: 'https://www.linkedin.com/in/krishna-gund-46b477310/',
        github: 'https://github.com/KezP3z'
      }
    },
    {
      id: 45,
      name: 'Meghha Rajith',
      role: 'Junior Member',
      tag: 'aero',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/mechanical/meghha.webp',
      socials: {
        email: 'meghha21@gmail.com',
        linkedin: 'https://www.linkedin.com/in/meghha-rajith-66500a34a/'
      }
    },
    {
      id: 46,
      name: 'Kartik Yadav',
      role: 'Junior Member',
      tag: 'propulsion',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/mechanical/kartik.webp',
      socials: {
        email: 'eeexxddeee@gmail.com',
        linkedin: 'https://www.linkedin.com/in/kartik-yadav-840a87324/'
      }
    },
    {
      id: 47,
      name: 'Bhumik Chhabra',
      role: 'Junior Member',
      tag: 'structures',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/mechanical/bhumik.webp',
      socials: {
        email: 'chhabrabhumik0@gmail.com',
        linkedin: 'https://www.linkedin.com/in/bhumikchhabra',
        github: 'https://github.com/bhumik5686'
      }
    },
    {
      id: 48,
      name: 'Shalik Raj',
      role: 'Junior Member',
      tag: 'propulsion',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/mechanical/shalik.webp',
      socials: {
        email: 'rajshalik@gmail.com',
        linkedin: 'https://www.linkedin.com/in/shalik-raj-a0495b1a0/'
      }
    },
    {
      id: 49,
      name: 'Palak Agrawal',
      role: 'Junior Member',
      tag: 'management',
      image: 'https://pub-5e90a2f5e8c44905a47c1b15177024fe.r2.dev/public/team/management/palaka.webp',
      socials: {
        email: 'palakk1152@gmail.com'
      }
    },
    {
      id: 50,
      name: 'Prakhar Raj Kharbanda',
      role: 'Junior Member',
      tag: 'management',
      image: '',
      socials: {
        email: 'unicornprincessprakhar@gmail.com'
      }
    }
  ];

  const LazyImage = React.memo(({ src, alt }) => {
    const [isInView, setIsInView] = useState(false);
    const [imageError, setImageError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
      if (!src) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px' }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }, [src]);

    const hasImage = src && !imageError;

    return (
      <div ref={imgRef} className="w-full h-full absolute inset-0">
        {!hasImage ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600/30 to-blue-800/30 flex items-center justify-center border-2 border-blue-600/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <>
            {!isInView && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
            )}
            {isInView && (
              <img
                src={src}
                alt={alt}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            )}
          </>
        )}
      </div>
    );
  });

  const SocialIcon = React.memo(({ type, url }) => {
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
        className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 group/icon"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon size={18} className="text-blue-400 group-hover/icon:text-white transition-colors" />
      </a>
    );
  });

  const MemberCard = React.memo(({ member }) => (
    <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-500 cursor-pointer">
      {/* Image Container */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20">
          <LazyImage src={member.image} alt={member.name} />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
        
        {/* Social Icons - Always rendered, just hidden */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
          {Object.entries(member.socials).map(([type, url]) => (
            <SocialIcon key={type} type={type} url={url} />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {member.name}
        </h3>
        <p className="text-blue-600 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}>
          {member.role}
        </p>
      </div>
    </div>
  ));

  const TeamSection = ({ title, tag, members }) => {
    const filteredMembers = members.filter(m => m.tag === tag);
    const count = filteredMembers.length;

    const getGridClass = () => {
      if (count === 1) {
        return 'flex justify-center';
      } else if (count === 2) {
        return 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto';
      } else {
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      }
    };

    const getCardClass = () => {
      if (count === 1) {
        return 'w-full sm:w-80 md:w-96';
      }
      return '';
    };

    if (count === 0) return null;

    return (
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <span className="text-blue-600">{title}</span>
        </h2>
        <div className={getGridClass()}>
          {filteredMembers.map((member) => (
            <div key={member.id} className={getCardClass()}>
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header {...headerProps} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden -mt-px">
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

          {/* Team Sections */}
          <TeamSection title="Leadership" tag="leader" members={teamMembers} />
          <TeamSection title="Aerodynamics" tag="aero" members={teamMembers} />
          <TeamSection title="Avionics" tag="avionics" members={teamMembers} />
          <TeamSection title="Payload" tag="payload" members={teamMembers} />
          <TeamSection title="Propulsion" tag="propulsion" members={teamMembers} />
          <TeamSection title="Structures" tag="structures" members={teamMembers} />
          <TeamSection title="Management" tag="management" members={teamMembers} />
          <TeamSection title="Faculty Advisors" tag="advisor" members={teamMembers} />

          {/* Join Team CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Want to <span className="text-blue-600">Join Us?</span>
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                We're always looking for passionate individuals who want to push the boundaries of rocket science
              </p>
              <button 
                onClick={() => {
                  if (headerProps && headerProps.onShowRecruitmentModal) {
                    headerProps.onShowRecruitmentModal();
                  } else if (onNavigateToJoinTeam) {
                    onNavigateToJoinTeam();
                  }
                }} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50" 
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer 
        onNavigateHome={onNavigateHome}
        onScrollToSection={onScrollToSection}
        onNavigateToRocketWiki={onNavigateToRocketWiki}
        onNavigateToBlog={onNavigateToBlog}
      />
    </div>
  );
};

export default Team;