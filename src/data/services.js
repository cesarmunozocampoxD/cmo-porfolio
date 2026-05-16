import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SchoolIcon from '@mui/icons-material/School';

const services = [
  {
    icon: CodeIcon,
    title: 'Fullstack Web Development',
    description:
      'End-to-end development of modern web applications using React, Java Spring Boot, and REST APIs. From UI design to database architecture.',
    highlights: ['React / JavaScript', 'Java Spring Boot', 'REST APIs', 'Responsive Design'],
  },
  {
    icon: StorageIcon,
    title: 'Backend & API Architecture',
    description:
      'Design and implementation of scalable microservices, RESTful APIs, and database schemas optimised for performance and maintainability.',
    highlights: ['Microservices', 'PostgreSQL / MySQL / MongoDB', 'Redis Caching', 'API Design'],
  },
  {
    icon: CloudIcon,
    title: 'Cloud Infrastructure (GCP / AWS)',
    description:
      'Cloud setup, CI/CD pipelines, containerisation with Docker & Kubernetes, and deployment on Google Cloud Platform or AWS.',
    highlights: ['GCP & AWS', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Cloud Security'],
  },
  {
    icon: SchoolIcon,
    title: 'Code Review & Tech Mentoring',
    description:
      'Hands-on code reviews, architecture feedback, and 1-on-1 mentoring sessions for developers who want to level up their skills.',
    highlights: ['Code Reviews', '1-on-1 Mentoring', 'Best Practices', 'Career Guidance'],
  },
];

export default services;
