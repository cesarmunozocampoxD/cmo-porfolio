import React from 'react';
import './AboutMe.css';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Avatar,
  Button,
  Grid,
  Chip,
  Card,
  Stack,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  PictureAsPdf,
  SchoolOutlined,
} from '@mui/icons-material';
import profile from '../../../shared/constants/profile';
import ViewCounter from '../../../shared/components/ui/ViewCounter';
import CareerJourney from './CareerJourney';

const typeKey = (t) => t.toLowerCase().replace(/[^a-z]/g, '');

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <main>
      <ViewCounter variant="badge" position="fixed" showIcon />

      {/* -- Hero -- */}
      <section className="about-hero">
        <Container maxWidth="md" className="about-hero-inner">
          <div className="about-avatar-wrapper">
            <Avatar
              alt={profile.personalInfo.name}
              src={profile.personalInfo.photo}
              className="about-avatar"
            />
          </div>

          <Typography
            variant="h2"
            component="h1"
            className="animate-fadeInUp about-hero-name"
          >
            Hi, I&apos;m <span className="gradient-text">{profile.personalInfo.name}</span>
          </Typography>

          <Typography variant="h5" className="animate-fadeInUp delay-1 about-hero-subtitle">
            {profile.personalInfo.title}
          </Typography>

          <Typography variant="body1" className="animate-fadeInUp delay-2 about-hero-tagline">
            {profile.personalInfo.tagline}
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 3 }}
            justifyContent="center"
            flexWrap="wrap"
            className="animate-fadeInUp delay-2 about-stats-row"
          >
            {profile.personalInfo.stats.map((stat) => (
              <div key={stat.label} className="about-stat-card">
                <Typography variant="h3" className="about-stat-value">{stat.value}</Typography>
                <Typography variant="caption" className="about-stat-label">{stat.label}</Typography>
              </div>
            ))}
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            className="animate-fadeInUp delay-3"
          >
            <Button
              variant="contained"
              size="large"
              className="about-cta-primary"
              onClick={() => navigate('/contact')}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PictureAsPdf />}
              className="about-cta-cv"
              onClick={() => window.open(profile.contact.cvPdf, '_blank')}
            >
              Download CV
            </Button>
          </Stack>
        </Container>
      </section>

      {/* -- About Me -- */}
      <Container maxWidth="lg" className="about-section">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <div className="section-header">
              <Typography variant="h4" component="h2" className="section-title">About Me</Typography>
            </div>
            <Typography variant="body1" color="text.secondary" className="about-bio">
              {profile.personalInfo.aboutMe}
            </Typography>
            <Stack direction="row" spacing={1.5} justifyContent="center" className="about-social-row">
              <Button variant="outlined" size="small" startIcon={<GitHub />}
                onClick={() => window.open(profile.contact.social.github, '_blank')}>
                GitHub
              </Button>
              <Button variant="outlined" size="small" startIcon={<LinkedIn />}
                onClick={() => window.open(profile.contact.social.linkedin, '_blank')}>
                LinkedIn
              </Button>
              <Button variant="outlined" size="small" startIcon={<Email />}
                href={`mailto:${profile.contact.email}`}>
                Email
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* -- Career Journey -- */}
      <CareerJourney />

      <Divider />

      {/* -- Education -- */}
      <Container maxWidth="lg" className="about-section">
        <div className="section-header">
          <Typography variant="h4" component="h2" className="section-title">Academic Background</Typography>
          <Typography variant="body1" color="text.secondary" className="section-subtitle">
            Academic background and continuous learning
          </Typography>
        </div>
        <Grid container spacing={3} justifyContent="center">
          {profile.education.map((edu, index) => {
            const key = typeKey(edu.type);
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={0} className={`about-edu-card about-edu-card--${key}`}>
                  <div className={`about-edu-icon-box about-edu-icon-box--${key}`}>
                    <SchoolOutlined className="about-edu-icon" />
                  </div>
                  <Typography variant="caption" color="text.secondary" className="about-edu-period">
                    {edu.period}
                  </Typography>
                  <Typography variant="h6" className="about-edu-title">{edu.title}</Typography>
                  <Typography variant="body2" color="text.secondary" className="about-edu-company">
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="about-edu-desc">
                    {edu.description}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Divider />

      {/* -- Skills -- */}
      <div className="about-dark-section">
        <Container maxWidth="lg" className="about-section">
          <div className="section-header">
            <Typography variant="h4" component="h2" className="section-title">
              Skills &amp; Technologies
            </Typography>
            <Typography variant="body1" color="text.secondary" className="section-subtitle">
              Technologies and tools I work with daily
            </Typography>
          </div>
          <div className="about-skills-cloud">
            {profile.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                color="primary"
                className="about-skill-chip"
              />
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
};

export default AboutMe;
