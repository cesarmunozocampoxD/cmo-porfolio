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
    headline:
      'Seven years moving in one direction: from building whole websites on my own ' +
      'to designing the services that run behind them.',
    summary:
      'Four chapters so far, plus the one I am writing now. Open any of them to see what ' +
      'changed, what I built, and where it led next.',
    chapters: [
      {
        id: 'foundations',
        years: '2015 - 2018',
        title: 'Foundations',
        shift: 'From studying systems to building them',
        role: 'Computer Systems Engineering',
        organization: 'TESE',
        narrative:
          'It started at engineering school, where software stopped being a set of files and ' +
          'became a system: how data is modeled, how a request travels, why a decision taken ' +
          'early shows up months later. I spent those years turning coursework into web ' +
          'projects that actually ran, and got hooked on the moment an idea becomes something ' +
          'someone else can open in a browser.',
        highlights: [
          'Computer Systems Engineering, specialized in software and systems development',
          'First web projects built end to end, from the database to the browser',
          'The fundamentals I still lean on: data modeling, HTTP, and version control',
        ],
        stack: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Git'],
      },
      {
        id: 'fullstack',
        years: '2018 - 2022',
        title: 'Full-stack years',
        shift: 'From writing code to shipping products',
        role: 'Full Stack Web Developer',
        organization: null,
        narrative:
          'For four years I built complete web applications with JavaScript and PHP, owning ' +
          'features from the database schema all the way to the interface. Working inside ' +
          'agile, multidisciplinary teams taught me that shipping is a team sport: estimates, ' +
          'reviews, and handoffs matter as much as the code. It also made something obvious. ' +
          'The problems I enjoyed most were never on the screen, they were in the data, the ' +
          'integrations, and the performance behind it.',
        highlights: [
          'Web applications delivered end to end: schema, backend, and interface',
          'Agile delivery alongside design, QA, and stakeholders',
          'Discovered where I wanted to go deeper: the layer behind the UI',
        ],
        stack: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Sass', 'MySQL', 'Git', 'Agile Methodologies'],
      },
      {
        id: 'backend',
        years: '2022',
        title: 'Into the cloud',
        shift: 'From generalist to backend engineer',
        role: 'Backend Developer',
        organization: 'BranchBit S.A. de C.V.',
        narrative:
          'At BranchBit I committed to the side of the stack I kept gravitating to. I designed ' +
          'and maintained RESTful services in Java and Spring Boot, and carried them through ' +
          'development, QA, and production on Google Cloud: the first time I owned the whole ' +
          'life of a service and not only its code. I doubled down outside work too, with an ' +
          'AWS cloud certification and side projects like the aoe.gg API, built with Spring ' +
          'Boot and deployed on AWS.',
        highlights: [
          'RESTful APIs designed, built, and maintained in production',
          'Release path owned across development, QA, and production on GCP',
          'AWS Academy cloud certification and personal Spring Boot projects on AWS',
        ],
        stack: ['Java', 'Spring Boot', 'GCP', 'AWS', 'PostgreSQL', 'Docker'],
      },
      {
        id: 'scale',
        years: '2022 - Present',
        title: 'Systems at scale',
        shift: 'From single services to systems that have to hold',
        role: 'Backend Developer',
        organization: 'COPPEL S.A. de C.V.',
        narrative:
          'At COPPEL I build and run RESTful microservices inside a large retail organization: ' +
          'containerized on Kubernetes, cached with Redis, and gated by SonarQube and Checkmarx ' +
          'before anything reaches production. The day to day moved from writing endpoints to ' +
          'choosing boundaries, contracts, and failure modes, and then answering for them once ' +
          'the service is live. That is where the architecture questions started to feel like ' +
          'my questions.',
        highlights: [
          'Microservices designed, deployed, and operated across dev, QA, and production',
          'Kubernetes, Redis, and GCP as everyday tools rather than line items',
          'Quality and security gates built into the definition of done',
        ],
        stack: [
          'Java',
          'Spring Boot',
          'Kubernetes',
          'Docker',
          'GCP',
          'Redis',
          'SonarQube',
          'Checkmarx',
        ],
      },
      {
        id: 'next',
        years: 'Next',
        title: 'Architecture',
        shift: 'From building systems to designing them',
        role: null,
        organization: null,
        future: true,
        narrative:
          'Every chapter widened the same lens: from a file, to a feature, to a service, to a ' +
          'system. The next one is software architecture, bringing technical and strategic ' +
          'vision to the products I work on, and passing on what I have learned through ' +
          'mentoring and consulting.',
        highlights: [
          'Going deeper into distributed systems and cloud architecture',
          'Mentoring and consulting next to hands-on engineering',
          'Looking for problems where the architecture decides the outcome',
        ],
        stack: ['Software Architecture', 'Distributed Systems', 'Cloud Design', 'Mentoring'],
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
