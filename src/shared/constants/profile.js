import profilePhoto from '../assets/img/photo.jpg';

const profile = {
  personalInfo: {
    name: 'Cesar Muñoz Ocampo',
    title: 'Desarrollador full stack senior',
    tagline:
      'Creando aplicaciones web escalables y soluciones en la nube; disponible para consultoría y mentoría.',
    aboutMe:
      'Soy un desarrollador full stack senior con sólida experiencia en el diseño y desarrollo de aplicaciones web y microservicios. ' +
      'Me especializo en crear soluciones escalables y eficientes, tanto en frontend como en backend, trabajando con entornos de nube y metodologías modernas de desarrollo. ' +
      'Destaco por mi enfoque proactivo, mi capacidad para resolver problemas y mi facilidad para integrarme en equipos multidisciplinarios. ' +
      'Mi objetivo profesional es continuar creciendo hacia funciones enfocadas en arquitectura de software, aportando una visión técnica y estratégica a los proyectos.',
    biography: [
      'Mi historia en la tecnología comenzó mientras estudiaba Ingeniería en Sistemas Computacionales. Esa formación me dio bases sólidas en software y desarrollo de sistemas, mientras que mis primeras experiencias profesionales me permitieron convertir la curiosidad en trabajo práctico. Comencé creando aplicaciones web con HTML, CSS, JavaScript y PHP, aprendiendo cómo una idea puede transformarse en algo que las personas realmente utilizan.',
      'A medida que creció mi experiencia, mi atención pasó gradualmente de la parte visible de las aplicaciones web hacia los sistemas que funcionan detrás de ellas. Java se convirtió en uno de los pilares más importantes de mi carrera profesional, especialmente mediante el desarrollo de sistemas backend, APIs REST y microservicios con Spring Boot. Los años trabajando con el ecosistema Java me han dado la profundidad necesaria para abordar problemas complejos con énfasis en mantenibilidad, rendimiento y evolución a largo plazo.',
      'Mi experiencia actual está ampliando esa base hacia nuevas direcciones. Estoy creando microservicios con Python y desarrollando experiencia práctica con infraestructura como código (IaC), aprendiendo a definir y administrar infraestructura de nube de forma consistente y repetible en AWS y GCP. Esta evolución me está ayudando a conectar el desarrollo de aplicaciones con las decisiones de infraestructura y entrega que las sostienen.',
      'A lo largo de ese recorrido, el trabajo ágil y la colaboración con equipos multidisciplinarios han sido fundamentales en mi manera de desarrollar software. Cada proyecto ha fortalecido mi capacidad para resolver problemas de forma proactiva, comunicar ideas técnicas y adaptarme a distintos desafíos. La formación continua en computación en la nube y el aprendizaje del inglés también han ampliado los entornos y conversaciones en los que puedo contribuir.',
      'Hoy me considero un desarrollador full stack con amplia experiencia en Java y una sólida perspectiva de backend y nube. Mi trabajo reúne Java, Python, servicios distribuidos, datos, contenedores, infraestructura como código, calidad de código y prácticas modernas de entrega. Más que acumular tecnologías, busco comprender cómo cada una puede ayudar a crear software eficiente, confiable y verdaderamente útil.',
    ],
    photo: profilePhoto,
    stats: [
      { label: 'Años de experiencia', value: '7+' },
      { label: 'Proyectos entregados', value: '20+' },
      { label: 'Tecnologías', value: '22+' },
    ],
  },
  experience: [
    {
      period: 'Septiembre de 2022 - Actualidad',
      title: 'Desarrollador backend',
      institution: 'COPPEL S.A. de C.V.',
      description:
        'Desarrollo de microservicios con APIs REST desplegados en entornos de desarrollo, QA y producción en GCP, colaborando con equipos ágiles.',
      autobiography:
        'En septiembre de 2022 me incorporé a COPPEL como desarrollador backend. Mi trabajo se ha centrado en microservicios con APIs REST para entornos de desarrollo, QA y producción en GCP. La colaboración en equipos ágiles ha fortalecido mi manera de crear servicios orientados a necesidades operativas reales.',
      type: 'Senior',
    },
    {
      period: 'Mayo de 2022 - Agosto de 2022',
      title: 'Desarrollador backend',
      institution: 'BranchBit S.A. de C.V.',
      description:
        'Desarrollo y mantenimiento de servicios con APIs REST, desplegados en entornos de desarrollo, QA y producción en GCP.',
      autobiography:
        'Mi paso por BranchBit amplió mi experiencia backend mediante el desarrollo y mantenimiento de servicios con APIs REST. Trabajé con despliegues de desarrollo, QA y producción en GCP, profundizando mi comprensión del recorrido de un servicio hasta convertirse en una solución estable en la nube.',
      type: 'Intermedio',
    },
    {
      period: 'Marzo de 2018 - Mayo de 2022',
      title: 'Desarrollador junior',
      institution: 'Desarrollo web full stack',
      description:
        'Desarrollo de aplicaciones web con tecnologías como HTML, CSS, JavaScript y PHP. Participación en proyectos ágiles y colaboración con equipos multidisciplinarios.',
      autobiography:
        'Comencé mi trayectoria profesional en el desarrollo web en marzo de 2018. Crear aplicaciones con HTML, CSS, JavaScript y PHP me dio una base práctica en todo el entorno web. Esos primeros proyectos también me acercaron al desarrollo ágil y a la colaboración con equipos multidisciplinarios, dos prácticas que siguen formando parte de mi trabajo.',
      type: 'Junior',
    },
  ],
  education: [
    {
      period: '2015 - 2021',
      title: 'Ingeniería en Sistemas Computacionales',
      institution:
        'Universidad Tecnológica de Estudios Superiores de Ecatepec (TESE)',
      description:
        'Formación en ingeniería con especialización en desarrollo de software y sistemas.',
      type: 'Licenciatura',
    },
    {
      period: '2022 - 2023',
      title: 'Certificación en computación en la nube',
      institution: 'AWS Academy',
      description:
        'Certificación profesional en servicios de nube y arquitecturas distribuidas.',
      type: 'Certificación',
    },
    {
      period: '2023 - 2024',
      title: 'Idioma inglés',
      institution: 'Quick Learning',
      description: 'Curso intensivo de inglés.',
      type: 'Curso',
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
    'Metodologías ágiles',
    'Redis',
    'Checkmarx',
    'SonarQube',
  ],
  projects: [
    {
      title: 'Sitio web personal',
      desc: 'Sitio web personal con diseño adaptable desarrollado con React y publicado mediante GitHub Pages.',
      techStack: ['React', 'MUI', 'Vite', 'GitHub Pages'],
      pdfLink: '/cmo-porfolio/pdfs/portfolio-project.pdf',
      githubLink: 'https://github.com/cesarmunozocampoxD/cmo-porfolio',
      demoLink: 'https://cesarmunozocampoxD.github.io/cmo-porfolio/',
      isPrivate: false,
    },
    {
      title: 'API de aoe.gg',
      desc: 'API REST personal desarrollada con Java y Spring Boot, desplegada en AWS para proporcionar datos relacionados con el juego.',
      techStack: ['Java', 'Spring Boot', 'AWS', 'MySQL'],
      pdfLink: '/cmo-porfolio/pdfs/aoe-api-project.pdf',
      githubLink: 'https://github.com/cesarmunozocampoxD/age.gg',
      demoLink: null,
      isPrivate: false,
    },
    {
      title: 'GMTLaboratory',
      desc: 'Aplicación web full stack con frontend en React y backend en Java con Spring Boot, desplegada en AWS.',
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
