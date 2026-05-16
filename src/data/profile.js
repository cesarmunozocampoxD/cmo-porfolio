import profilePhoto from '../assets/img/photo.jpg';

const profile = {
  personalInfo: {
    name: 'Cesar Muñoz Ocampo',
    title: 'Senior Fullstack Developer',
    tagline:
      'Building scalable web apps & cloud solutions — available for consulting & mentoring.',
    aboutMe: `I am a Senior Fullstack Developer with solid experience in designing and developing web applications and microservices. I specialize in creating scalable 
    and efficient solutions, both frontend and backend, working in cloud environments and with modern development methodologies.
    I stand out for my proactive approach, problem-solving ability and ease of integrating into multidisciplinary teams.
    My professional goal is to continue growing towards roles focused on software architecture, contributing technical and strategic vision to projects.`,
    photo: profilePhoto,
    stats: [
      { label: 'Years Experience', value: '7+' },
      { label: 'Projects Delivered', value: '20+' },
      { label: 'Technologies', value: '22+' },
    ],
  },
  experience: [
    {
      period: 'September 2022 - Present',
      title: 'Backend Developer',
      institution: 'COPPEL S.A. de C.V.',
      description:
        'Development of RESTful API microservices deployed in development, QA, and production environments on GCP Cloud and collaboration in agile teams.',
      type: 'Senior',
    },
    {
      period: 'May 2022 - August 2022',
      title: 'Backend Developer',
      institution: 'BranchBit S.A. de C.V.',
      description:
        'Development and maintenance of RESTful API services, deploying in development, QA, and production environments on GCP Cloud.',
      type: 'Mid-Level',
    },
    {
      period: 'March 2018 - May 2022',
      title: 'Junior Developer',
      institution: 'Full Stack Web Developer',
      description:
        'Development of web applications using technologies such as HTML, CSS, JavaScript and PHP. Participation in agile development projects and collaboration with multidisciplinary teams.',
      type: 'Junior',
    },
  ],
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
