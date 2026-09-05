import profilePhoto from '../assets/img/photo.jpg';

const profile = {
  personalInfo: {
    name: 'Cesar Muñoz Ocampo',
    title: 'Senior Fullstack Developer',
    tagline:
      'Building scalable web apps & cloud solutions — available for consulting & mentoring.',
    aboutMe:
      'I am a Senior Fullstack Developer with solid experience in designing and developing web applications and microservices. ' +
      'I specialize in creating scalable and efficient solutions, both frontend and backend, working in cloud environments and with modern development methodologies. ' +
      'I stand out for my proactive approach, problem-solving ability and ease of integrating into multidisciplinary teams. ' +
      'My professional goal is to continue growing towards roles focused on software architecture, contributing technical and strategic vision to projects.',
    photo: profilePhoto,
    stats: [
      { label: 'Years Experience', value: '7+' },
      { label: 'Projects Delivered', value: '20+' },
      { label: 'Technologies', value: '22+' },
    ],
  },
  careerJourney: {
    intro:
      'Every role has been a deliberate step rather than a separate job — one continuous ' +
      'trajectory from writing my first web page to architecting cloud-native microservices.',
    stages: [
      {
        period: 'March 2018 – May 2022',
        role: 'Junior Developer',
        organization: 'Early full-stack web projects',
        headline: 'Learning to build, end to end',
        narrative:
          'My career began building complete web applications from the ground up with HTML, ' +
          'CSS, JavaScript and PHP, inside agile teams where I owned a feature from database to ' +
          'browser. That full-stack exposure taught me how the pieces of a system fit together — ' +
          'a perspective that still shapes how I design backend services today.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Agile Methodologies'],
        connector:
          'As those projects matured, my curiosity shifted from what people see to what makes ' +
          'it run: the APIs, the data, the infrastructure underneath.',
      },
      {
        period: 'May 2022 – August 2022',
        role: 'Backend Developer',
        organization: 'BranchBit S.A. de C.V.',
        headline: 'Specializing in services, not just screens',
        narrative:
          'At BranchBit I moved from building interfaces to building what powers them — ' +
          'designing and maintaining RESTful APIs and shipping them through development, QA and ' +
          'production on GCP. It was a short but pivotal chapter: the first time I owned a ' +
          'service\'s full lifecycle in the cloud, not just its code.',
        skills: ['Java', 'Spring Boot', 'GCP', 'MySQL', 'PostgreSQL', 'Docker'],
        connector:
          'That first taste of cloud-native backend work set the direction for what came next: ' +
          'doing it at a larger scale, with more ownership.',
      },
      {
        period: 'September 2022 – Present',
        role: 'Backend Developer',
        organization: 'COPPEL S.A. de C.V.',
        headline: 'Owning microservices at scale',
        narrative:
          'At COPPEL I design and develop RESTful API microservices deployed across development, ' +
          'QA and production on GCP, collaborating inside agile teams on systems serving a large ' +
          'user base. The scope grew from writing endpoints to reasoning about architecture, ' +
          'reliability and how services interact — the natural next step from everything before it.',
        skills: ['Java', 'Spring Boot', 'Kubernetes', 'GCP', 'Redis', 'SonarQube', 'Checkmarx'],
        connector: null,
      },
    ],
    throughLine:
      'The arc is consistent: from full-stack generalist, to backend specialist, to someone who ' +
      'thinks in systems. The next chapter is software architecture — turning that experience ' +
      'into technical and strategic vision for the products I help build.',
  },
  education: [
    {
      period: '2015 - 2021',
      title: 'Computer Systems Engineering',
      institution:
        'Universidad Tecnológica de Estudios Superiores de Ecatepec (TESE)',
      description:
        'Degree in Engineering with specialization in software and systems development.',
      type: 'Degree',
    },
    {
      period: '2022 - 2023',
      title: 'Cloud Computing Certification',
      institution: 'AWS Academy',
      description:
        'Professional certification in cloud services and distributed architectures.',
      type: 'Certification',
    },
    {
      period: '2023 - 2024',
      title: 'English Language',
      institution: 'Quick Learning',
      description: 'Intensive English course.',
      type: 'Course',
    },
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Sass',
    'Git',
    'GitHub',
    'Java',
    'Spring Boot',
    'MySQL',
    'PostgreSQL',
    'SQL Server',
    'MongoDB',
    'AWS',
    'GCP',
    'Docker',
    'Kubernetes',
    'Agile Methodologies',
    'Redis',
    'Checkmarx',
    'SonarQube',
  ],
  projects: [
    {
      title: 'Portfolio Website',
      desc: 'Personal portfolio website with responsive design using React and GitHub Pages',
      techStack: ['React', 'MUI', 'Vite', 'GitHub Pages'],
      pdfLink: '/cmo-porfolio/pdfs/portfolio-project.pdf',
      githubLink: 'https://github.com/cesarmunozocampoxD/cmo-porfolio',
      demoLink: 'https://cesarmunozocampoxD.github.io/cmo-porfolio/',
      isPrivate: false,
    },
    {
      title: 'aoe.gg API',
      desc: 'Personal REST API developed with Java Spring Boot and deployed on AWS, providing game-related data endpoints.',
      techStack: ['Java', 'Spring Boot', 'AWS', 'MySQL'],
      pdfLink: '/cmo-porfolio/pdfs/aoe-api-project.pdf',
      githubLink: 'https://github.com/cesarmunozocampoxD/age.gg',
      demoLink: null,
      isPrivate: false,
    },
    {
      title: 'GMTLaboratory',
      desc: 'Full-stack web application built with React frontend and Java Spring Boot backend, deployed on AWS.',
      techStack: ['React', 'Java', 'Spring Boot', 'AWS'],
      pdfLink: '/cmo-porfolio/pdfs/gmtlaboratory-project.pdf',
      githubLink: null,
      demoLink: null,
      isPrivate: true,
    },
  ],
  contact: {
    email: 'cesar_munozocampo@hotmail.com',
    cvPdf: '/cmo-porfolio/pdfs/cesar-munoz-portfolio.pdf',
    social: {
      github: 'https://github.com/cesarmunozocampoxD',
      linkedin:
        'https://www.linkedin.com/in/developer-cesar-munoz-ocampo/',
    },
  },
};

export default profile;
