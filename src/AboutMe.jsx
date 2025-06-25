// This file will contain the AboutMe component using MUI
import React from 'react';
import { 
  Container, 
  Typography, 
  Avatar, 
  Box, 
  Paper, 
  Button, 
  Grid, 
  Chip,
  Card,
  CardContent,
  CardMedia,
  TextField,
  IconButton,
  Stack,
  Divider
} from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Twitter, 
  Email 
} from '@mui/icons-material';

const AboutMe = () => {
  return (
    <Box>
      {/* Header Section with Purple Background */}
      <Paper 
        elevation={0}
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'primary.contrastText', 
          py: 8, 
          textAlign: 'center',
          borderRadius: 0
        }}
      >
        <Container maxWidth="lg">
          <Avatar
            alt="Alex Smith"
            sx={{ 
              width: { xs: 100, md: 120 }, 
              height: { xs: 100, md: 120 }, 
              mx: 'auto',
              mb: 3,
              bgcolor: 'primary.light',
              border: 2,
              borderColor: 'rgba(255,255,255,0.3)'
            }}
          >
            <Box sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>👨‍💻</Box>
          </Avatar>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Soy .....
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 300, mb: 4 }}>
            Desarrollador Web
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            sx={{ 
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
              textTransform: 'none',
              px: 4
            }}
          >
            contactarme
          </Button>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 2 }}>
        {/* About Me Section */}
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={3} alignItems="center">
           
            <Grid item xs={12} md={9}>
              <Typography variant="h4" component="h2" gutterBottom color="text.primary">
                Sobre mí
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                Soy un desarrollador web con experiencia en la construcción de sitios y aplicaciones 
                web. Me especializo en tecnologías frontend y estoy comprometido crear experiencias 
                de usuario de alta calidad.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Experience Section */}
        <Paper elevation={1} sx={{ p: 3, mb: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="text.primary">
            Experiencia
          </Typography>
          <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
            {[
              {
                period: '2022 - Presente',
                title: 'Desarrollador Full Stack Senior',
                institution: 'Tech Solutions Inc.',
                description: 'Desarrollo y mantenimiento de aplicaciones web utilizando React, Spring Boot y bases de datos SQL.',
                type: 'Senior'
              },
              {
                period: '2020 - 2022',
                title: 'Desarrollador Frontend',
                institution: 'Digital Agency Co.',
                description: 'Creación de interfaces de usuario responsivas y dinámicas. Trabajo con APIs REST.',
                type: 'Mid-Level'
              },
              {
                period: '2019 - 2020',
                title: 'Desarrollador Junior',
                institution: 'StartUp Solutions',
                description: 'Desarrollo de funcionalidades web y mantenimiento de aplicaciones existentes.',
                type: 'Junior'
              },
              {
                period: '2018 - 2019',
                title: 'Desarrollador Intern',
                institution: 'Code Academy',
                description: 'Aprendizaje de bases de programación y desarrollo de proyectos académicos.',
                type: 'Intern'
              }
            ].map((experience, index) => (
              <Grid item xs={6} sm={6} md={6} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2, maxWidth: 500 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>
                    {experience.period}
                  </Typography>
                  <Chip 
                    label={experience.type} 
                    size="small" 
                    variant="filled" 
                    color="primary" 
                    sx={{ alignSelf: 'flex-start', mb: 1 }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
                    {experience.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                    {experience.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, flexGrow: 1 }}>
                    {experience.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Divider sx={{ mb: 3 }} />

        {/* Formation/Academy Section */}
        <Paper elevation={1} sx={{ p: 3, mb: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="text.primary">
            Formación Académica
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {[
              {
                period: '2018 - 2022',
                title: 'Ingeniería en Sistemas Computacionales',
                institution: 'Universidad Tecnológica',
                description: 'Licenciatura en Ingeniería con especialización en desarrollo de software y sistemas.',
                type: 'Licenciatura'
              },
              {
                period: '2022 - 2023',
                title: 'Certificación en Cloud Computing',
                institution: 'AWS Academy',
                description: 'Certificación profesional en servicios de nube y arquitecturas distribuidas.',
                type: 'Certificación'
              },
              {
                period: '2023',
                title: 'Full Stack Web Development',
                institution: 'FreeCodeCamp',
                description: 'Bootcamp intensivo de desarrollo web full stack con tecnologías modernas.',
                type: 'Bootcamp'
              },
              {
                period: '2021',
                title: 'Curso de React Avanzado',
                institution: 'Platzi',
                description: 'Especialización en React.js, hooks, context API y mejores prácticas.',
                type: 'Curso'
              }
            ].map((formation, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2, maxWidth: 500 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>
                    {formation.period}
                  </Typography>
                  <Chip 
                    label={formation.type} 
                    size="small" 
                    variant="filled" 
                    color="primary" 
                    sx={{ alignSelf: 'flex-start', mb: 1 }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
                    {formation.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                    {formation.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, flexGrow: 1 }}>
                    {formation.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Divider sx={{ mb: 3 }} />

        {/* Skills Section */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="text.primary">
            Skills
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'Git', 'GitHub'].map((skill) => (
                <Chip 
                  key={skill}
                  label={skill} 
                  variant="outlined"
                  color="primary"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Projects Section */}
        <Paper elevation={1} sx={{ p: 3, mb: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="text.primary">
            Proyectos
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {[
              { title: 'Título del Proyecto', desc: 'Descripción breve del proyecto' },
              { title: 'Título del Proyecto', desc: 'Descripción breve del proyecto' },
              { title: 'Proyectos', desc: 'Descripción breve del proyecto' },
              { title: 'Proyectos', desc: 'Descripción breve del proyecto' }
            ].map((project, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 100,
                      bgcolor: 'grey.100',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px dashed',
                      borderColor: 'grey.300',
                      m: 1,
                      borderRadius: 1
                    }}
                  >
                    <Typography variant="h4" color="primary.main">🖼️</Typography>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Typography gutterBottom variant="h6" component="h3">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Contact Section */}
        <Paper id="contact-section" elevation={1} sx={{ p: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="text.primary">
            Contacto
          </Typography>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 2, bgcolor: 'grey.50' }}>
                <TextField
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                  disabled
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  disabled
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Enviar correo
                </Typography>
                <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
                  <Email sx={{ mr: 1, verticalAlign: 'middle' }} />
                  alexsmith@example.com
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Sígueme en redes
                </Typography>
                <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
                  <IconButton color="primary" aria-label="GitHub">
                    <GitHub />
                  </IconButton>
                  <IconButton color="primary" aria-label="LinkedIn">
                    <LinkedIn />
                  </IconButton>
                  <IconButton color="primary" aria-label="Twitter">
                    <Twitter />
                  </IconButton>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutMe;
