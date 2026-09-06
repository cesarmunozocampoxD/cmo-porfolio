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
    lead:
      'I started out building whole websites on my own. ' +
      '**Today I design the services that run behind them.**',
    story: [
      'I studied Computer Systems Engineering at TESE, but what really taught me the trade ' +
        'were the projects nobody assigned me: small web apps where I wrote the markup, the ' +
        'styles, the queries and the deployment myself. Between 2015 and 2018 software stopped ' +
        'being a set of files and became **a system I could reason about**, where data is ' +
        'modeled, a request travels, and a decision taken in the first week shows up six ' +
        'months later.',
      'For the four years that followed I built complete web applications with JavaScript and ' +
        'PHP, owning features from the database schema all the way to the interface, inside ' +
        'agile teams working next to design, QA and stakeholders. **Shipping turned out to be ' +
        'a team sport**, and that changed how I write code. It also made something obvious: ' +
        'the problems that held my attention were never on the screen. They were behind it, in ' +
        'the data model that did not fit, the integration that broke at the worst hour, the ' +
        'query that got slower every month.',
      'In 2022 I moved to where those problems live. At BranchBit I designed and maintained ' +
        'RESTful services in Java and Spring Boot and carried them through development, QA and ' +
        'production on Google Cloud: **the first time I owned the entire life of a service, ' +
        'not just its code**. I pushed in the same direction on my own time, with an AWS cloud ' +
        'certification and side projects like the aoe.gg API, running Spring Boot on AWS, ' +
        'where every architectural decision was mine to make and mine to live with.',
      'Since September 2022 I have been at COPPEL, building and running microservices for a ' +
        'large retail organization: containerized on Kubernetes, cached with Redis, and gated ' +
        'by SonarQube and Checkmarx before anything reaches production. The question I get ' +
        'asked has changed shape. It used to be whether the endpoint works; now it is ' +
        '**what happens to everything around it when this service does not**. That is ' +
        'architecture work, and it is where I want to keep going: bringing technical and ' +
        'strategic vision to the systems I help build, and passing on what I have learned ' +
        'through mentoring and consulting.',
    ],
    growth: [
      {
        label: 'Scope',
        steps: ['a page', 'a feature', 'a service', 'a system'],
      },
      {
        label: 'Stack',
        steps: [
          'HTML / CSS / PHP',
          'JavaScript / MySQL',
          'Java / Spring Boot / GCP',
          'Kubernetes / Redis',
        ],
      },
    ],
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
