export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
    // style: 'bg-customColor p-2 text-sm rounded-md',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Shivani Sharma',
    position: 'Director at Veecorp',
    img: 'assets/review1.png',
    review:
      'Working with Ashutosh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Jay Bhosale',
    position: 'Founder of bhagwati consultancy',
    img: 'assets/review2.png',
    review:
      'Ashutosh expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Ashutosh. He was able to take our complex project requirements and turn them into a seamless, functional software. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Adithan',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Ashutosh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Flipkart App - Shopping App | Ecommerce',
    desc: 'I built a full-featured Flipkart-like shopping app using the MERN stack. The app allows users to browse and purchase products, add new items, and manage accounts with login/registration and secure JWT authentication.',
    subdesc:
      'Built as a unique Software-as-a-Service. This project highlights my full-stack development skills, combining React.js on the frontend and Node.js for backend APIs.',
    href: 'https://ashutoshpariharr.github.io/flipkart-app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/node-js.svg',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/mongodb.svg',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Meeting Software - Make Quick Mettings',
    desc: 'I developed a feature-rich Zoom-like meeting software designed for seamless virtual communication. The platform supports real-time video conferencing, screen sharing, and chat functionality, providing an intuitive and reliable solution for hosting online meetings.',
    subdesc:
      'Video Conferencing: High-quality, real-time video and audio, Screen Sharing: Share screens for presentations or collaboration, Chat Functionality: In-meeting messaging for enhanced communication.',
    href: 'https://github.com/ashutoshpariharr/Video-calling-app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Ping Pong - Play Game Score Send To Email',
    desc: 'I developed a classic Ping Pong game using Python and Tkinter, offering an engaging, interactive experience. The game features smooth paddle control, a dynamic ball, and score tracking. Each time a new high score is achieved, the game automatically sends a congratulatory email, enhancing the competitive spirit',
    subdesc:
      'My skills in game development and integrating external functionalities like email notifications, creating a fun and feature-rich experience.',
    href: 'https://github.com/ashutoshpariharr/Ping-Pong',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/selenium.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/sql.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/flask.svg',
      },
    ],
  },
  {
    title: 'Portfolio - Showcase All MERN Skills',
    desc: 'I developed a showcase skill portfolio using the MERN stack to highlight my relevant skills. The platform includes user authentication with login and logout functionality, as well as an admin panel for managing content.',
    subdesc:
      'User Authentication: Secure login and logout functionality, Admin Panel: Allows for easy management of portfolio content and user information, Responsive Design',
    href: 'https://ashutosh-portfolio-mern.web.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'UI / UX - Figma Design, Graphic Design',
    desc: 'I recently completed a modern, visually stunning portfolio design using Figma that showcases creativity, functionality, and user-centered design. Every element of the UI was crafted with precision to ensure an engaging user experience, from smooth navigation to responsive layouts. The design seamlessly blends aesthetics with functionality.',
    subdesc:
      'This portfolio project demonstrates my ability to design elegant and effective UIs that leave a lasting impact.',
    href: 'https://www.figma.com/design/TMICuVnPBDyRfK9Uy2fS62/Untitled?node-id=0-1&t=7JcxVRobAeZoiDRW-1',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/figma.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/adobeai.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/canva.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/photoshop.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Developer',
    pos: 'Full Stack Developer',
    duration: '2023 - Present',
    title: "I develop responsive, scalable web applications using the MERN stack, handling both frontend and backend tasks. With expertise in React.js, Node.js, Express.js, and MongoDB, I deliver clean, efficient solutions that meet client needs from start to finish.",
    icon: '/assets/coding.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Developer',
    pos: 'Frontend Developer',
    duration: '2022 - 2023',
    title: "I build responsive, user-friendly interfaces using React.js, Next.js, TypeScript and more. I focus on clean design, performance, and seamless user experiences across all devices.",
    icon: '/assets/ux-design.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Junior Developer',
    pos: 'Junior UI/UX and Web Developer',
    duration: '2021 - 2022',
    title: "I create intuitive, user-centered web designs with a focus on both UI/UX and development. Using tools like Figma and Adobe XD, I design responsive layouts and implement them with HTML, CSS, and JavaScript to ensure smooth user experiences and visually appealing interfaces.",
    icon: '/assets/ui-design.png',
    animation: 'salute',
  },
];

export const iconSlugs = [
  'javascript',
  'react',
  'next-dot-js',
  'tailwindcss',
  'typescript',
  'node-dot-js',
  'redux',
  'python',
  'django',
  'flask',
  'mongodb',
  'html5',
  'css3',
  'figma',
  'postgresql',
  'amazonwebservices',
  'selenium',
  'pandas',
  'github',
  'mui',
  'docker',
];


export const languages = ["English", "German", "French", "Spanish"];
