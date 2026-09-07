const courses = [
  {
    title: 'Microservicios con Spring Boot',
    level: 'Intermedio',
    levelColor: 'warning',
    description:
      'Aprende a construir microservicios listos para producción con Java y Spring Boot, incluyendo APIs REST, descubrimiento de servicios, seguridad y despliegue en la nube.',
    duration: '8 horas',
    topics: ['APIs REST', 'Spring Security', 'Docker', 'Despliegue en GCP'],
    status: 'Disponible',
  },
  {
    title: 'React para desarrolladores backend',
    level: 'Principiante',
    levelColor: 'success',
    description:
      'Un curso práctico de React pensado para desarrolladores con experiencia en backend. Crea componentes de interfaz reales y conéctalos con tus propias APIs.',
    duration: '6 horas',
    topics: ['Hooks de React', 'Gestión de estado', 'Integración de APIs', 'Componentes de MUI'],
    status: 'Disponible',
  },
  {
    title: 'Despliegue en la nube con GCP',
    level: 'Intermedio',
    levelColor: 'warning',
    description:
      'Guía paso a paso para desplegar aplicaciones en contenedores sobre Google Cloud Platform con Cloud Run, GKE y Cloud SQL.',
    duration: '5 horas',
    topics: ['Cloud Run', 'GKE', 'Cloud SQL', 'CI/CD con Cloud Build'],
    status: 'Próximamente',
  },
  {
    title: 'Código limpio y arquitectura',
    level: 'Avanzado',
    levelColor: 'error',
    description:
      'Profundiza en los principios SOLID, patrones de diseño, arquitectura hexagonal y la creación de código mantenible y comprobable a escala.',
    duration: '7 horas',
    topics: ['Principios SOLID', 'Patrones de diseño', 'Arquitectura hexagonal', 'TDD'],
    status: 'Próximamente',
  },
];

export default courses;
