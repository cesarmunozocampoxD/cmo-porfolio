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
  Divider,
  Badge
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  PictureAsPdf,
  Launch
} from '@mui/icons-material';
import profilePhoto from './assets/img/photo.jpg';
import ViewCounter from './components/ViewCounter';

// Profile data object containing all dynamic content
const profile = {
  personalInfo: {
    name: "Cesar Muñoz Ocampo",
    title: "Computer Systems Engineer",
    aboutMe: `I am a Senior Fullstack Developer with solid experience in designing and developing web applications and microservices. I specialize in creating scalable 
    and efficient solutions, both frontend and backend, working in cloud environments and with modern development methodologies.
    I stand out for my proactive approach, problem-solving ability and ease of integrating into multidisciplinary teams.
    My professional goal is to continue growing towards roles focused on software architecture, contributing technical and strategic vision to projects.`,
    photo: profilePhoto
  },
  experience: [
    {
      period: 'September 2022 - Present',
      title: 'Backend Developer',
      institution: 'COPPEL S.A. de C.V.',
      description: 'Development of RESTful API microservices deployed in development, QA, and production environments on GCP Cloud and collaboration in agile teams.',
      type: 'Senior'
    },
    {
      period: 'May 2022 - August 2022',
      title: 'Backend Developer',
      institution: 'BranchBit S.A. de C.V.',
      description: 'Development and maintenance of RESTful API services, deploying in development, QA, and production environments on GCP Cloud.',
      type: 'Mid-Level'
    },
    {
      period: 'March 2018 - May 2022',
      title: 'Junior Developer',
      institution: 'Full Stack Web Developer',
      description: 'Development of web applications using technologies such as HTML, CSS, JavaScript and PHP. Participation in agile development projects and collaboration with multidisciplinary teams.',
      type: 'Junior'
    }
  ],
  education: [
    {
      period: '2015 - 2021',
      title: 'Computer Systems Engineering',
      institution: 'Universidad Tecnológica de Estudios Superiores de Ecatepec (TESE)',
      description: 'Degree in Engineering with specialization in software and systems development.',
      type: 'Degree'
    },
    {
      period: '2022 - 2023',
      title: 'Cloud Computing Certification',
      institution: 'AWS Academy',
      description: 'Professional certification in cloud services and distributed architectures.',
      type: 'Certification'
    },
    {
      period: '2023 - 2024',
      title: 'English Language',
      institution: 'Quick Learning',
      description: 'Intensive English course.',
      type: 'Course'
    }
  ],
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'Git', 'GitHub', 'Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'AWS', 'GCP', 'Docker', 'Kubernetes',
    'Agile Methodologies', 'Redis', 'Checkmarx', 'SonarQube'
  ],
  projects: [
    /*
    {
      title: 'GMTLaboratory',
      desc: 'Web application where technologies such as React, Java SpringBoot and AWS were used',
      pdfLink: '/pdfs/gmtlaboratory-project.pdf',
      githubLink: null,
      isPrivate: true
    },
    {
      title: 'aoe.gg',
      desc: 'Personal API developed with Java SpringBoot and deployed on AWS',
      pdfLink: '/pdfs/aoe-api-project.pdf',
      githubLink: 'https://github.com/cesarmunozocampoxD/age.gg',
      isPrivate: false
    },
    */
    {
      title: 'Portfolio Website',
      desc: 'Personal portfolio website with responsive design using React and GitHub Pages',
      pdfLink: '/pdfs/portfolio-project.pdf',
      githubLink: 'https://github.com/cesarmunozocampoxD/cmo-porfolio',
      isPrivate: false
    }
  ],
  contact: {
    email: 'cesar_munozocampo@hotmail.com',
    cvPdf: ' /cmo-porfolio/pdfs/cesar-munoz-portfolio.pdf',
    social: {
      github: 'https://github.com/cesarmunozocampoxD',
      linkedin: 'https://www.linkedin.com/in/developer-cesar-munoz-ocampo/'
    }
  }
};

const AboutMe = () => {
  return (
    <Box>
      {/* Viewer Count Badge */}
      <ViewCounter 
        variant="badge" 
        position="fixed" 
        showIcon={true} 
      />

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
            alt={profile.personalInfo.name}
            src={profile.personalInfo.photo}
            sx={{
              width: { xs: 200, md: 180 },
              height: { xs: 200, md: 180 },
              mx: 'auto',
              mb: 3,
              bgcolor: 'primary.light',
              border: 2,
              borderColor: 'rgba(255,255,255,0.3)'
            }}
          />
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            I'm {profile.personalInfo.name}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 300, mb: 4 }}>
            {profile.personalInfo.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
              Contact Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PictureAsPdf />}
              onClick={() => window.open(profile.contact.cvPdf, '_blank')}
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: 'primary.contrastText',
                '&:hover': { 
                  borderColor: 'rgba(255,255,255,0.8)',
                  bgcolor: 'rgba(255,255,255,0.1)'
                },
                textTransform: 'none',
                px: 4
              }}
            >
              Download CV
            </Button>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 2 }}>
        {/* About Me Section */}
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={3} alignItems="center">

            <Grid item xs={12} md={9}>
              <Typography variant="h4" component="h2" gutterBottom color="text.primary">
                About Me
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {profile.personalInfo.aboutMe}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Experience Section */}
        <Paper elevation={1} sx={{ p: 3, mb: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="text.primary">
            Experience
          </Typography>
          <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
            {profile.experience.map((experience, index) => (
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
            Academic Background
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {profile.education.map((formation, index) => (
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
              {profile.skills.map((skill) => (
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
            Projects
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {profile.projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                  <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography gutterBottom variant="h6" component="h3" sx={{ flexGrow: 1 }}>
                        {project.title}
                      </Typography>
                      {project.isPrivate && (
                        <Chip
                          label="Private"
                          size="small"
                          color="warning"
                          variant="outlined"
                          sx={{ ml: 1 }}
                        />
                      )}
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                      {project.desc}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 'auto' }}>
                      <IconButton
                        color="primary"
                        aria-label="View PDF"
                        onClick={() => window.open(project.pdfLink, '_blank')}
                        size="small"
                      >
                        <PictureAsPdf />
                      </IconButton>
                      {project.githubLink && !project.isPrivate && (
                        <IconButton
                          color="primary"
                          aria-label="View on GitHub"
                          onClick={() => window.open(project.githubLink, '_blank')}
                          size="small"
                        >
                          <GitHub />
                        </IconButton>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Contact Section */}
        <Paper id="contact-section" elevation={1} sx={{ p: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="text.primary">
            Contact
          </Typography>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {
              /* Contact Form Section 
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, bgcolor: 'grey.50' }}>
                  <TextField
                    fullWidth
                    label="Name"
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
              */
            }
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Send Email
                </Typography>
                <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
                  <Email sx={{ mr: 1, verticalAlign: 'middle' }} />
                  {profile.contact.email}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Follow Me
                </Typography>
                <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
                  <IconButton
                    color="primary"
                    aria-label="GitHub"
                    onClick={() => window.open(profile.contact.social.github, '_blank')}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="LinkedIn"
                    onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
                  >
                    <LinkedIn />
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
