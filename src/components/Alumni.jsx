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
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Parth%20Jain%20_uPuCbI0PD.webp?updatedAt=1735394198017',
          atThrustMIT: 'Team Leader',
          currentWork: 'Systems Engineer at NASA',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jain-parth/',
            email: 'parthjain03@gmail.com'
          }
        },
        {
          id: 5,
          name: 'Vinoy S',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Vinoy%20S_nmXcvB0p2.webp?updatedAt=1735394374055',
          atThrustMIT: 'Team Manager',
          currentWork: 'Propulsion Specialist at Rocket Lab',
          socials: {
            email: 'mailmevinoy@gmail.com'
          }
        },
        {
          id: 15,
          name: 'Vedang Bhosale',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Vedang_YIpPUHszJ.webp?updatedAt=1735394373819',
          atThrustMIT: 'Aerodynamics Head',
          currentWork: 'Aerospace Engineer at SpaceX',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vedang-bhosale-bb340b24a',
            github: 'https://github.com/Vedang2002',
            email: 'vedangbhosale2002@gmail.com'
          }
        },
        {
          id: 16,
          name: 'Aiyaz Karani',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Aiyaz%20Karani_ELwAI9JSj7.webp?updatedAt=1735394371861',
          atThrustMIT: 'Recovery Head',
          currentWork: 'Rocket Propulsion Intern at Blue Origin',
          socials: {
            linkedin: '#',
            instagram: '#',
            email: 'aiyazkarani@gmail.com'
          }
        },
        {
          id: 17,
          name: 'Monish Anne',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Monish%20Anne_6ayNR8-40.webp?updatedAt=1735394373663',
          atThrustMIT: 'Avionics Head',
          currentWork: 'Structural Engineer at Virgin Galactic',
          socials: {
            email: 'monhar1407@gmail.com'
          }
        },
        {
          id: 24,
          name: 'Satwik Agarwal',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Satwik%20Agarwal_9WAWSlHVD1.webp?updatedAt=1735394374232',
          atThrustMIT: 'Avionics Member',
          currentWork: 'Aerospace Intern at ISRO',
          socials: {
            linkedin: 'https://www.linkedin.com/in/satwik-agarwal-a7b14323a',
            email: 'asatwik218@gmail.com'
          }
        },
        {
          id: 25,
          name: 'Keeratraj Singh',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Keeratraj%20Singh_UAJ1Ydqaw.webp?updatedAt=1735394371856',
          atThrustMIT: 'Avionics Member',
          currentWork: 'Mechanical Engineer at Rocket Lab',
          socials: {
            linkedin: 'https://www.linkedin.com/in/keeratraj-singh-00660a219',
            email: 'rajsinghsach@gmail.com'
          }
        },
        {
          id: 26,
          name: 'Aman Soni',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Aman%20Soni_ToHkCh9qxn.webp?updatedAt=1735394371845',
          atThrustMIT: 'Avionics Member',
          currentWork: 'Aerospace Intern at NASA',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aman-soni-214262255',
            github: 'https://github.com/itzzamann',
            email: 'amansoni16@icloud.com'
          }
        },
        {
          id: 27,
          name: 'Hrishikesh Singh Yadav',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Hrishikesh%20Singh%20Yadav_XnggdyTV1Z.webp?updatedAt=1735394370837',
          atThrustMIT: 'Payload Head',
          currentWork: 'Systems Engineer at SpaceX',
          socials: {
            linkedin: 'https://www.linkedin.com/in/hrishikesh-singh-yadav-0aaa28244',
            github: 'https://github.com/HrishikeshSinghYdadav',
            email: 'yadavhrishikeshsingh@gmail.com'
          }
        },
        {
          id: 28,
          name: 'Joshvir Nirula',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Joshvir%20Nirula_tZiGv5OJVL.webp?updatedAt=1735394371099',
          atThrustMIT: 'Payload Member',
          currentWork: 'Aerospace Intern at Blue Origin',
          socials: {
            github: 'https://github.com/JoshvirNarula',
            email: ''
          }
        },
        {
          id: 29,
          name: 'Vedansh Mittal',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Vedansh%20Mittal_ZimObOfWh.webp?updatedAt=1735394373769',
          atThrustMIT: 'Propulsion Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vedansh-mittal-16b169211',
            email: 'mittalvedansh7@gmail.com'
          }
        },
        {
          id: 30,
          name: 'Kripal',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Kripal_Emm79rlwnP.webp?updatedAt=1735394371791',
          atThrustMIT: 'Propulsion Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/kripal-rao-3a718a225',
            email: 'Kripalrao12@gmail.com'
          }
        },
        {
          id: 31,
          name: 'Dhruva Karanth',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Dhruva%20Karanth_Vq8cpI4kjb.webp?updatedAt=1735394371191',
          atThrustMIT: 'Structures Head',
          currentWork: '',
          socials: {
            email: 'dhruvakaranth@gmail.com'
          }
        },
        {
          id: 32,
          name: 'Bharat Dutta',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Bharath%20Dutta_qlw8UCpnPJ.webp?updatedAt=1735394371852',
          atThrustMIT: 'Structures Member',
          currentWork: '',
          socials: {
            linkedin: 'http://www.linkedin.com/in/bharatdutta',
            email: 'bharattdutta@gmail.com'
          }
        },
        {
          id: 33,
          name: 'Mahesh Chalamala',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Mahesh%20Chalamala_jQimbeMRU.webp?updatedAt=1735394370888',
          atThrustMIT: 'Management Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/mahesh-chalamala-474835231',
            github: 'https://github.com/mahesh1112k04',
            email: 'chmahesh618@gmail.com'
          }
        },
        {
          id: 34,
          name: 'Devika Subash',
          image: 'https://ik.imagekit.io/wns4q4r9n2/Alumni/Devika%20Subash_vNSKJ9CoYO.webp?updatedAt=1735394370933',
          atThrustMIT: 'Management Member',
          currentWork: '',
          socials: {
            email: 'devikasubash30@gmail.com'
          }
        }
      ]
    },
    '2023': {
      members: [
        {
          id: 6,
          name: 'Ashwinraj M. Renuka',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2022/ashwin_WkD67L-e6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667082644770',
          atThrustMIT: 'Team Leader',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ashwinraj-manikandan-8095821b0',
            email: 'ashvinraj555@gmail.com'
          }
        },
        {
          id: 7,
          name: 'Emad Shattari',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2022/imad_upFcbHUg_.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667082621474',
          atThrustMIT: 'Team Manager',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/mwlite/in/emad-shattari-aa366b236',
            github: 'https://github.com/thefranticbeing',
            email: 'imadbinams@gmail.com'
          }
        },
        {
          id: 35,
          name: "Ronan Mark D’souza",
          image: '',
          atThrustMIT: 'Avionics Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ronan-mark-d%E2%80%99souza-719851206',
            github: 'https://github.com/ronanmarkdsouza',
            email: 'onanmarkdsouza@gmail.com'
          }
        },
        {
          id: 36,
          name: 'Darpan Theng',
          image: '',
          atThrustMIT: 'Controls Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/darpan-theng/',
            github: '#',
            email: 'theng.darpan@gmail.com'
          }
        },
        {
          id: 37,
          name: 'Utkarsh Anand',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2022/Pic_5vCVLjttx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667082731206',
          atThrustMIT: 'Payload Head',
          currentWork: '',
          socials: {
            github: 'https://github.com/utkarshanand140',
            email: 'utkarshanand221@gmail.com'
          }
        },
        {
          id: 38,
          name: 'Tanvi Agrawal',
          image: '',
          atThrustMIT: 'Research Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/tanvi-a-349472217/',
            email: 'tanviagrawal02@gmail.com'
          }
        },
        {
          id: 39,
          name: 'Sharada Belagavi',
          image: '',
          atThrustMIT: 'Propulsion Head',
          currentWork: '',
          socials: {
            email: 'sharadaspace18@gmail.com'
          }
        },
        {
          id: 40,
          name: 'Aastha Bhatnagar',
          image: '',
          atThrustMIT: 'Structures Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aastha-bhatnagar-332692218/',
            email: 'aastha.2505ab@gmail.com'
          }
        },
        {
          id: 41,
          name: 'Arjun Chhabra',
          image: '',
          atThrustMIT: 'Management Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/arjun-chhabra-8b9772224',
            email: 'arjunchhabra2015@gmail.com'
          }
        },
        {
          id: 42,
          name: 'Kadar Basha Azad ',
          image: '',
          atThrustMIT: 'Aerodynamics Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/kadar-basha-azad-13advf',
            github: 'https://github.com/Zero-7860',
            email: 'kadarbasha.azad@gmail.com'
          }
        },
        {
          id: 43,
          name: 'Anway Das',
          image: '',
          atThrustMIT: 'Avionics Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/anway-das-ab18b7254/'
          }
        },
        {
          id: 44,
          name: 'Thakur Pranav',
          image: '',
          atThrustMIT: 'Payload Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/thakur4pranav',
            github: 'https://github.com/PranavThakur4',
            email: 'hellopranavthakur@gmail.com'
          }
        },
        {
          id: 45,
          name: 'Diya Parekh',
          image: '',
          atThrustMIT: 'Payload Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/diya-parekh-5130321b6',
            email: 'diyaaparekh@gmail.com'
          }
        },
        {
          id: 46,
          name: 'Vanshitha',
          image: '',
          atThrustMIT: 'Payload Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vanshitha-r-b4b3a7205',
            github: 'https://github.com/Vanshitha',
            email: 'vanshitha02@gmail.com'
          }
        },
        {
          id: 47,
          name: 'Raeid Basit Mukadam',
          image: '',
          atThrustMIT: 'Propulsion Member',
          currentWork: '',
          socials: {
            email: 'raeidmukadam123@gmail.com'
          }
        },
        {
          id: 48,
          name: 'Jayadeep',
          image: '',
          atThrustMIT: 'Structures Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jayadeep-gangarapu-606a31211',
            email: 'gangarapu.jayadeep@gmail.com'
          }
        },
        {
          id: 49,
          name: 'Aryaman Gadiya',
          image: '',
          atThrustMIT: 'Structures Member',
          currentWork: '',
          socials: {
            email: 'gadiyaaryaman122@gmail.com'
          }
        }
      ]
    },
    '2022': {
      members: [
        {
          id: 8,
          name: 'Aneesh Salian',
          image: 'https://media.licdn.com/dms/image/v2/C5603AQE-YLKAoJ4osw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1663762081840?e=1766620800&v=beta&t=nEsEPda8jLXl30R1CN7AjOsiOdWnzio4Ap_4Lq1q6o4',
          atThrustMIT: 'Team Leader',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aneesh-salian-39238b1b5',
            email: 'aneeshsalian8@gmail.com'
          }
        },
        {
          id: 50,
          name: 'Samanway Chakraborty',
          image: '',
          atThrustMIT: 'Team Manager',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/mwlite/in/samanway-chakraborty-04a831193',
            email: 'samanway5301@gmail.com'
          }
        },
        {
          id: 51,
          name: 'Aryaman Srivastav',
          image: '',
          atThrustMIT: 'Propulsion Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/blackk100/',
            twitter: '',
            email: 'aryaman.srivastav@learner.manipal.edu'
          }
        },
        {
          id: 52,
          name: 'Siddharth Sudhakar',
          image: '',
          atThrustMIT: 'Avionics Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/siddharth-s-1206/',
            email: 's.siddharth.2207@gmail.com'
          }
        },
        {
          id: 53,
          name: 'Anshul Agrawal',
          image: 'https://media.licdn.com/dms/image/v2/C4D03AQH11VR5-pWCQQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1597752369020?e=1766620800&v=beta&t=OYOb5DO21xXm66P4Da5KlEWMPJ096WnEA7AudXQ_AJk',
          atThrustMIT: 'Payload and Research Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/anshul-agrawal-5761301b3',
            email: 'anshul.agrawal.1908@gmail.com'
          }
        },
        {
          id: 54,
          name: 'Prishita Rathore',
          image: 'https://ik.imagekit.io/2wpcbxztl/prishitaedit_Qv1iYvwuS?ik-sdk-version=javascript-1.4.3&updatedAt=1665568498972',
          atThrustMIT: 'Payload and Research Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/prishita-rathore-6ba3851b5',
            email: 'prishita_r@yahoo.com'
          }
        },
        {
          id: 55,
          name: 'Prajwal Jayaraman',
          image: 'https://media.licdn.com/dms/image/v2/D4E03AQG87RSyqG1swQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710197011280?e=1766620800&v=beta&t=tjycyIE9fetN0XWXJtkjUiTqAHdOUr3jzIaVbX3zfZo',
          atThrustMIT: 'Structures Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/prajwal-jayaraman-a7658a195',
            email: 'prajwal.jay9.75@gmail.com'
          }
        },
        {
          id: 56,
          name: 'Vignesh Renganathan',
          image: 'https://media.licdn.com/dms/image/v2/D5635AQEqIQdbVVCFvQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1720831016968?e=1765562400&v=beta&t=uKOsjWip1oj2VyMwa-MKS4Qnucd78lfq934AVBcOHj4',
          atThrustMIT: 'Controls Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vignesh-renganathan-8bb2101b5',
            email: 'renganvignesh2@gmail.com'
          }
        },
        {
          id: 57,
          name: 'Prakhar Swarnakar',
          image: '',
          atThrustMIT: 'Management Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/prakhar-swarnakar-5771a5199/'
          }
        },
        {          
          id: 58,
          name: 'Abhyudaya Singh',
          image: '',
          atThrustMIT: 'Aerodynamics Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/abhyudaya-singh-58a38b1b5',
            email: 'abhyudayasingh08@gmail.com'
          }
        },
        {
          id: 59,
          name: 'Advait Bongu',
          image: '',
          atThrustMIT: 'Propulsion Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/advait-bongu',
            email: 'advait.bongu@gmail.com'
          }
        },
        {
          id: 60,
          name: 'Aditya Vamsi Kumbhari',
          image: '',
          atThrustMIT: 'Avionics Member',
          currentWork: '',
          socials: {
            email: 'adityavamsik@gmail.com'
          }
        },
        {
          id: 61,
          name: 'Nathan Karl Tauro',
          image: 'https://ik.imagekit.io/2wpcbxztl/nathanedit_BNaTRGyrK?ik-sdk-version=javascript-1.4.3&updatedAt=1665568697427',
          atThrustMIT: 'Structures Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/nathantauro',
            email: 'cr7ntg@gmail.com'
          }
        },
        {
          id: 62,
          name: 'Khushal Amrish Agarwal',
          image: '',
          atThrustMIT: 'Structures Member',
          currentWork: '',
          socials: {
            linkedin: 'https://linkedin.com/in/khushal-agarwal-30875a1a2',
            email: 'agarwalkhushal2001@gmail.com'
          }
        },
        {
          id: 63,
          name: 'Jeslyn Mary Bijju',
          image: '',
          atThrustMIT: 'Management Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/jeslyn-bijju-173734216/',
            email: 'jeslynbijju77@gmail.com'
          }
        }
      ]
    },
    '2021': {
      members: [
        {
          id: 9,
          name: 'Sai Sankalp S',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/sai2_hEfaLOLDP?ik-sdk-version=javascript-1.4.3&updatedAt=1666977940607',
          atThrustMIT: 'Team Leader',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/sai-sankalp-shekar-897820169',
            email: 'sai.sankalp26@gmail.com'
          }
        },
        {
          id: 64,
          name: 'Vandan Chinnappa',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/vandan2_zJ0nr_JuD?ik-sdk-version=javascript-1.4.3&updatedAt=1666978006225',
          atThrustMIT: 'Team Manager',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vandanchinnappa',
            email: 'vandanchinnappams@gmail.com'
          }
        },
        {
          id: 65,
          name: 'Avinav Pandey',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/Avinav_Pandey_NYUwJS8GB.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976437621',
          atThrustMIT: 'Structures Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/avinavpandey0604',
            email: 'pavinav@gmail.com'
          }
        },
        {
          id: 66,
          name: 'Yuvraj Jain',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/Yuvraj_xa9rzjDzs.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976436997',
          atThrustMIT: 'Payload and Research Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/mwlite/in/yuvraj-jain-1a8a591b7',
            github: 'https://github.com/nutcasev15',
            email: 'yuvraj.jtlr@outlook.in'
          }
        },
        {
          id: 67,
          name: 'Priyank Agarwal',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/Priyank_Agarwal_7K7ydud49.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976429738',
          atThrustMIT: 'Payload and Research Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/priyankagarwal1',
            email: 'priyank.agarwal2001@gmail.com'
          }
        },
        {
          id: 68,
          name: 'Nirvik Choudhury',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/Nirvik_Choudhury_GTD9o4NcEj.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976429762',
          atThrustMIT: 'Propulsion Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/nirvikchoudhury',
            email: 'nirvik99choudhury@gmail.com'
          }
        },
        {
          id: 69,
          name: 'Vansh Ratna Sharma',
          image: '',
          atThrustMIT: 'Aerodynamics Member',
          currentWork: '',
          socials: {
            email: 'vanshsharma1028@gmail.com'
          }
        },
        {
          id: 70,
          name: 'Aashna Seth',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/Aashna_Seth_oXK76C933x.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976428833',
          atThrustMIT: 'Propulsion Member',
          currentWork: '',
          socials: {
            linkedin: 'http://linkedin.com/in/aashna-seth-312367186',
            email: 'aashnaseth259@gmail.com'
          }
        },
        {
          id: 71,
          name: 'Ritisha Verma',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/ritisha2_eWUv4aj5B?ik-sdk-version=javascript-1.4.3&updatedAt=1666977909862',
          atThrustMIT: 'Management Member',
          currentWork: '',
          socials: {
            email: 'ritisha.r.verma@gmail.com'
          }
        }
      ]
    },
    '2020': {
      members: [
        {
          id: 10,
          name: 'Ambarish Ghan',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2020/ambrish2_OZbatrB0I?ik-sdk-version=javascript-1.4.3&updatedAt=1666982400351',
          atThrustMIT: 'Team Leader',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ambarish-ghan',
            email: 'ambarishghan@yahoo.com'
          }
        },
        {
          id: 73,
          name: 'Vinit S. Shettigar',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2021/Vinit_Shettigar_DHMrQcpCW9.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976437209',
          atThrustMIT: 'Structures Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vinit-shettigar-256073183',
            email: 'shettigarvinit23299@gmail.com'
          }
        },
        {
          id: 74,
          name: 'Vedant Ladsaria',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2020/vedant2_51yppcW1F?ik-sdk-version=javascript-1.4.3&updatedAt=1666978231470',
          atThrustMIT: 'Treasurer',
          currentWork: '',
          socials: {
            email: 'vedant.ladsaria@learner.manipal.edu'
          }
        },
        {
          id: 75,
          name: 'Tilak Kumar',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2020/tilak2_hQsEDS8Q5?ik-sdk-version=javascript-1.4.3&updatedAt=1666978294934',
          atThrustMIT: 'Propulsion Head',
          currentWork: '',
          socials: {
            email: 'Tk4121997@gmail.com'
          }
        },
        {
          id: 76,
          name: 'Shekhar Pathak',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2020/shekhar_pathak_bFe3uOLOta.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666976087795',
          atThrustMIT: 'Avionics Head',
          currentWork: '',
          socials: {
            email: 'shekharpathak125@gmail.com'
          }
        },
        {
          id: 77,
          name: 'Rishi Chauhan',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2020/Rishi_SytMV9v5-N.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976087267',
          atThrustMIT: 'Aerodynamics Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/mwlite/in/rishi-anil-chauhan',
            email: 'rishiforwork@outlook.com'
          }
        },
        {
          id: 78,
          name: 'Viswanath RS',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2020/Visvanath_FrdBFBMJo.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976086952',
          atThrustMIT: 'Propulsion Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/viswanath-rs/',
            email: 'viswanathsomu6@gmail.com'
          }
        },
        {
          id: 79,
          name: 'Sameer Agarwal',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2020/Sameer_Agarwal_UdmqGEGuk.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976087157',
          atThrustMIT: 'Avionics Member',
          currentWork: '',
          socials: {
            linkedin: 'http://www.linkedin.com/in/sameer-agarwal-O33O',
            github: 'https://github.com/sameer0330',
            email: 'agarwalsameer99@gmail.com'
          }
        },
        {
          id: 80,
          name: 'Sohith Kakumanu',
          image: 'https://ik.imagekit.io/dvm2lzx5v/WhatsApp%20Image%202024-09-05%20at%2018.48.14_a37feacb.jpg?updatedAt=1725545152761',
          atThrustMIT: 'Avionics Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/sohith-kakumanu'
          }
        }
      ]
    },
    '2019': {
      members: [
        {
          id: 11,
          name: 'Ashish Samanta',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Ashish_Samanta_R0qsAc3BO.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975711276',
          atThrustMIT: 'Team Leader',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ashish-samanta-spjimr',
            github: 'https://github.com/samash1729',
            email: 'sam.ash1729@gmail.com'
          }
        },
        {
          id: 81,
          name: 'Kanishk Gupta',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Kanishk_Gupta_4FCstt-H9x.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975712197',
          atThrustMIT: 'Team Manager',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/kanishkgupta1/',
            email: 'kanishkg99@gmail.com'
          }
        },
        {
          id: 82,
          name: 'Mithil Bhuta',
          image: '',
          atThrustMIT: 'Propulsion Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/realmithilbhuta/',
            email: 'mithilbhuta3@gmail.com'
          }
        },
        {
          id: 83,
          name: 'Utkarsh Mehra',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Utkarsh_Mehra_Xvw5-KmdB.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975714436',
          atThrustMIT: 'Aerodynamics Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/utkarsh-mehra-spjimr',
            email: 'singhutk1998@gmail.com'
          }
        },
        {
          id: 84,
          name: 'Aurindom Mahanti',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Aurindom_Mahanti_5Jqx3kgd5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975713103',
          atThrustMIT: 'Avionics Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/aurindom-mahanti-5b47b8135/',
            email: 'aurindommahanti@gmail.com'
          }
        },
        {
          id: 85,
          name: 'Saransh Goel',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/saransh2_rt3caUPUd?ik-sdk-version=javascript-1.4.3&updatedAt=1666978568913',
          atThrustMIT: 'Avionics Member',
          currentWork: '',
          socials: {
            linkedin: 'http://www.linkedin.com/in/saransh-goel-179304158',
            email: 'saransh.jvv@gmail.com'
          }
        },
        {
          id: 86,
          name: 'Pavan',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Pavan_Nimmagadda_zI3Dq9514.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975711805',
          atThrustMIT: 'Structures Member',
          currentWork: '',
          socials: {
            email: 'nimmagadda.pavan1998@gmail.com'
          }
        },
        {
          id: 87,
          name: 'Abhishek Murali Kalluri',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Abhishek_Kalluri_ibYNWoNeH.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975712320',
          atThrustMIT: 'Propulsion Member',
          currentWork: '',
          socials: {
            linkedin: 'http://www.linkedin.com/in/abhishek-kalluri',
            email: 'abhishekkalluri@gmail.com'
          }
        },
        {
          id: 88,
          name: 'Ayushi Jha',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Ayushi_Jha_1J9mJ4NOm.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975715401',
          atThrustMIT: 'Management Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ayushijha31',
            email: 'ayushi.jha31@gmail.com'
          }
        },
        {
          id: 89,
          name: 'Shubham Droliya',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Shubham_Droliya_ak6wOzBO8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975719244',
          atThrustMIT: 'Treasurer',
          currentWork: '',
          socials: {
            email: 'shubhamdroliya1997@gmail.com'
          }
        },
        {
          id: 90,
          name: 'Praveen Kumar Chaubey',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2019/Praveen_Chaubey_6JM7BeAer.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975715266',
          atThrustMIT: 'Avionics Member',
          currentWork: '',
          socials: {
            email: 'chaubey0praveen@gmail.com'
          }
        },
        {
          id: 91,
          name: 'Ashish Paka',
          image: '',
          atThrustMIT: 'Structures and composites',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/ashish-paka-621034b5/',
            email: 'ashishpaka1998@gmail.com'
          }
        }
      ]
    },
    '2018': {
      members: [
        {
          id: 12,
          name: 'Amogh Govil',
          image: 'https://ik.imagekit.io/sayou7z5b/amogh.jpeg?updatedAt=1705866056019',
          atThrustMIT: 'Co-Founder, Team Leader',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/govilamogh',
            email: 'govilamogh@gmail.com'
          }
        },
        {
          id: 92,
          name: 'Surya Nittur',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2018/Surya_azZdxJBOt.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975214296',
          atThrustMIT: 'Co-Founder, Team Manager',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/suryanittur/',
            email: 'nittur.surya@gmail.com'
          }
        },
        {
          id: 93,
          name: 'Lokesh Kumar',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2018/Lokesh_f6R0tSacNg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666975214287',
          atThrustMIT: 'Co-Founder, Mechanical Head',
          currentWork: '',
          socials: {
            linkedin: 'http://linkedin.com/in/lokesh9393',
            email: 'lokeshsolanki9393@gmail.com'
          }
        },
        {          
          id: 94,
          name: 'Vedang Kokil',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2018/Vedang_OpDXgSKN1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975214293',
          atThrustMIT: 'Co-Founder, Avionics Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vedang-kokil',
            email: 'vedangkokil22@gmail.com'
          }
        },
        {
          id: 95,
          name: 'M Vishnu Teja Chowdary',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2018/Vishnu_teja_pbqLWBIlQq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975214295',
          atThrustMIT: 'Aerodynamics Head',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/vishnu-teja-maddipatla-557552160',
            email: 'vishnutejamaddipatla@gmail.com'
          }
        },
        {
          id: 96,
          name: 'Nakul Gupta',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2018/NakulGupta_3vDn3dzSo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666975214319',
          atThrustMIT: 'Structures Member',
          currentWork: '',
          socials: {
            linkedin: 'http://www.linkedin.com/in/gnakul',
            email: 'nakulg1998@gmail.com'
          }
        },
        {
          id: 97,
          name: 'Saurabh Vijay Bagare',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2018/saurabh2_xQVn80H9R6?ik-sdk-version=javascript-1.4.3&updatedAt=1666978874167',
          atThrustMIT: 'Aerodynamics Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/saurabh-bagare/'
          }
        },
        {
          id: 98,
          name: 'Prashul Kumar',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2018/prashul2_kuKHXVyww?ik-sdk-version=javascript-1.4.3&updatedAt=1666978939999',
          atThrustMIT: 'Structures Member',
          currentWork: '',
          socials: {
            linkedin: 'http://www.linkedin.com/in/prashul-kumar',
            email: 'kumarprashul@yahoo.co.in'
          }
        },
        {
          id: 99,
          name: 'Shubhankar Murar',
          image: 'https://ik.imagekit.io/shasta/thrustMIT_website/2018/Shubhankar_Murar_IfRwh0hOp.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1666975214292',
          atThrustMIT: 'Management Member',
          currentWork: '',
          socials: {
            linkedin: 'https://www.linkedin.com/in/shubhankar-murar/',
            email: 'murar.shubhankar@gmail.com'
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