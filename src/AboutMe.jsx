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
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  PictureAsPdf,
} from '@mui/icons-material';
import profile from './data/profile';
import ViewCounter from './components/ViewCounter';

const AboutMe = () => {
  return (
    <Box component="main">
      {/* Viewer Count Badge */}
      <ViewCounter variant="badge" position="fixed" showIcon={true} />

      {/* Header Section */}
      <Paper
        component="section"
        id="about"
        elevation={0}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 10,
          textAlign: 'center',
          borderRadius: 0,
          scrollMarginTop: 64,
        }}
      >
        <Container maxWidth="lg">
          <Avatar
            alt={profile.personalInfo.name}
            src={profile.personalInfo.photo}
            sx={{
              width: { xs: 160, md: 180 },
              height: { xs: 160, md: 180 },
              mx: 'auto',
              mb: 3,
              border: 4,
              borderColor: 'rgba(255,255,255,0.4)',
              boxShadow: '0 0 0 8px rgba(255,255,255,0.1)',
            }}
          />
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            I'm {profile.personalInfo.name}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 300, mb: 1 }}>
            {profile.personalInfo.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, opacity: 0.85, maxWidth: 600, mx: 'auto' }}
          >
            {profile.personalInfo.tagline}
          </Typography>

          {/* Stats row */}
          <Stack
            direction="row"
            spacing={{ xs: 2, md: 6 }}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 4 }}
          >
            {profile.personalInfo.stats.map((stat) => (
              <Box key={stat.label} sx={{ textAlign: 'center', minWidth: 80 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8, letterSpacing: 0.5 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{
                bgcolor: 'rgba(0,0,0,0.3)',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
                textTransform: 'none',
                px: 4,
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
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
                textTransform: 'none',
                px: 4,
              }}
            >
              Download CV
            </Button>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 2 }}>
        {/* About Me Section */}
        <Box sx={{ mb: 3, scrollMarginTop: 80 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={9}>
              <Typography variant="h4" component="h2" gutterBottom color="text.primary">
                About Me
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
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
      </Container>
    </Box>
  );
};

export default AboutMe;
