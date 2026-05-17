const courses = [
  {
    title: 'Spring Boot Microservices',
    level: 'Intermediate',
    levelColor: 'warning',
    description:
      'Learn to build production-ready microservices with Java Spring Boot, covering REST APIs, service discovery, security, and deployment on the cloud.',
    duration: '8 hours',
    topics: ['REST APIs', 'Spring Security', 'Docker', 'GCP Deployment'],
    status: 'Available',
  },
  {
    title: 'React for Backend Devs',
    level: 'Beginner',
    levelColor: 'success',
    description:
      'A practical React course tailored for developers with a backend background. Build real UI components and connect them to your own APIs.',
    duration: '6 hours',
    topics: ['React Hooks', 'State Management', 'API Integration', 'MUI Components'],
    status: 'Available',
  },
  {
    title: 'Cloud Deployment on GCP',
    level: 'Intermediate',
    levelColor: 'warning',
    description:
      'Step-by-step guide to deploying containerised applications on Google Cloud Platform using Cloud Run, GKE, and Cloud SQL.',
    duration: '5 hours',
    topics: ['Cloud Run', 'GKE', 'Cloud SQL', 'CI/CD with Cloud Build'],
    status: 'Coming Soon',
  },
  {
    title: 'Clean Code & Architecture',
    level: 'Advanced',
    levelColor: 'error',
    description:
      'Deep-dive into SOLID principles, design patterns, hexagonal architecture, and how to write maintainable, testable code at scale.',
    duration: '7 hours',
    topics: ['SOLID Principles', 'Design Patterns', 'Hexagonal Architecture', 'TDD'],
    status: 'Coming Soon',
  },
];

export default courses;
