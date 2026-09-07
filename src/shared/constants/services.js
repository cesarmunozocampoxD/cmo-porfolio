import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';

const services = [
  {
    icon: CodeIcon,
    title: 'Desarrollo web full stack',
    description:
      'Desarrollo integral de aplicaciones web modernas con React, Java, Spring Boot y APIs REST, desde el diseño de la interfaz hasta la arquitectura de bases de datos.',
    highlights: ['React / JavaScript', 'Java y Spring Boot', 'APIs REST', 'Diseño adaptable'],
  },
  {
    icon: StorageIcon,
    title: 'Arquitectura backend y de APIs',
    description:
      'Diseño e implementación de microservicios escalables, APIs REST y esquemas de bases de datos optimizados para el rendimiento y la mantenibilidad.',
    highlights: ['Microservicios', 'PostgreSQL / MySQL / MongoDB', 'Caché con Redis', 'Diseño de APIs'],
  },
  {
    icon: CloudIcon,
    title: 'Infraestructura en la nube (GCP / AWS)',
    description:
      'Configuración de infraestructura en la nube, pipelines de CI/CD, contenerización con Docker y Kubernetes, y despliegue en Google Cloud Platform o AWS.',
    highlights: ['GCP y AWS', 'Docker y Kubernetes', 'Pipelines de CI/CD', 'Seguridad en la nube'],
  },
  {
    icon: SchoolIcon,
    title: 'Revisión de código y mentoría técnica',
    description:
      'Revisiones prácticas de código, retroalimentación sobre arquitectura y sesiones individuales de mentoría para desarrolladores que buscan fortalecer sus habilidades.',
    highlights: ['Revisión de código', 'Mentoría individual', 'Buenas prácticas', 'Orientación profesional'],
  },
  {
    icon: ExploreIcon,
    title: 'Asesorías personalizadas en tecnología y software',
    description:
      'Sesiones individuales para personas que desean iniciar o reorientar su camino hacia una carrera relacionada con tecnología, sistemas o desarrollo de software. Te ayudo a comprender las opciones y construir un plan realista de acuerdo con tus objetivos.',
    highlights: ['Orientación de carrera', 'Ruta de aprendizaje', 'Áreas de especialización', 'Plan personalizado'],
  },
];

export default services;
