import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Avatar,
  Box,
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
  WorkOutline,
} from '@mui/icons-material';
import profile from './data/profile';
import ViewCounter from './components/ViewCounter';

/* â”€â”€ Gradient helpers â”€â”€ */
const GRAD = 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)';

const typeGrad = {
  Senior:        'linear-gradient(135deg, #059669, #10b981)',
  'Mid-Level':   'linear-gradient(135deg, #2563eb, #60a5fa)',
  Junior:        'linear-gradient(135deg, #d97706, #fbbf24)',
  Degree:        'linear-gradient(135deg, #7c3aed, #a78bfa)',
  Certification: 'linear-gradient(135deg, #0891b2, #67e8f9)',
  Course:        'linear-gradient(135deg, #be185d, #f472b6)',
};

const GradientText = ({ children }) => (
  <Box
    component="span"
    sx={{
      background: 'linear-gradient(135deg, #93C5FD 0%, #C4B5FD 50%, #67E8F9 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    {children}
  </Box>
);

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
    <Typography
      variant="h4"
      component="h2"
      sx={{
        fontWeight: 800,
        mb: 1,
        background: GRAD,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        display: 'inline-block',
      }}
    >
      {children}
    </Typography>
    {subtitle && (
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mt: 0.5 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <Box component="main">
      <ViewCounter variant="badge" position="fixed" showIcon />

      {/* â”€â”€ Hero â”€â”€ */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 14, md: 18 },
          textAlign: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 35%, #1e3a8a 65%, #0f172a 100%)',
          color: '#fff',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 15% 65%, rgba(99,102,241,0.45) 0%, transparent 55%),' +
              'radial-gradient(ellipse at 85% 20%, rgba(37,99,235,0.35) 0%, transparent 55%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Avatar with spinning gradient ring */}
          <Box
            sx={{
              display: 'inline-block',
              mb: 4,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: -4,
                borderRadius: '50%',
                background: 'conic-gradient(#2563EB, #7C3AED, #06B6D4, #2563EB)',
                animation: 'spinRing 4s linear infinite',
                zIndex: 0,
              },
              '@keyframes spinRing': {
                from: { transform: 'rotate(0deg)' },
                to:   { transform: 'rotate(360deg)' },
              },
            }}
          >
            <Avatar
              alt={profile.personalInfo.name}
              src={profile.personalInfo.photo}
              sx={{
                width: { xs: 140, md: 168 },
                height: { xs: 140, md: 168 },
                position: 'relative',
                zIndex: 1,
                border: '4px solid #0f172a',
              }}
            />
          </Box>

          <Typography
            variant="h2"
            component="h1"
            className="animate-fadeInUp"
            sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '2.1rem', md: '3.4rem' } }}
          >
            Hi, I'm <GradientText>{profile.personalInfo.name}</GradientText>
          </Typography>

          <Typography
            variant="h5"
            className="animate-fadeInUp delay-1"
            sx={{ fontWeight: 400, mb: 2, opacity: 0.8, fontSize: { xs: '1.1rem', md: '1.4rem' } }}
          >
            {profile.personalInfo.title}
          </Typography>

          <Typography
            variant="body1"
            className="animate-fadeInUp delay-2"
            sx={{ mb: 5, opacity: 0.65, maxWidth: 560, mx: 'auto', lineHeight: 1.85 }}
          >
            {profile.personalInfo.tagline}
          </Typography>

          {/* Stats glassmorphism cards */}
          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 3 }}
            justifyContent="center"
            flexWrap="wrap"
            className="animate-fadeInUp delay-2"
            sx={{ mb: 5 }}
          >
            {profile.personalInfo.stats.map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  textAlign: 'center',
                  px: { xs: 2, md: 3 },
                  py: 2,
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  minWidth: 100,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.65, letterSpacing: 0.5, display: 'block', mt: 0.5 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* CTA buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            className="animate-fadeInUp delay-3"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PictureAsPdf />}
              onClick={() => window.open(profile.contact.cvPdf, '_blank')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderColor: 'rgba(255,255,255,0.35)',
                color: '#fff',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.65)',
                  bgcolor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* â”€â”€ About Me â”€â”€ */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <SectionTitle>About Me</SectionTitle>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.9, fontSize: '1.05rem', textAlign: 'center' }}
            >
              {profile.personalInfo.aboutMe}
            </Typography>
            <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mt: 4 }}>
              <Button
                variant="outlined"
                size="small"
                startIcon={<GitHub />}
                onClick={() => window.open(profile.contact.social.github, '_blank')}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<LinkedIn />}
                onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<Email />}
                href={`mailto:${profile.contact.email}`}
              >
                Email
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* â”€â”€ Experience â”€â”€ */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionTitle subtitle="My professional journey and career milestones">
            Experience
          </SectionTitle>
          {/* Timeline */}
          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                top: 0,
                bottom: 0,
                width: 2,
                background: GRAD,
                transform: { md: 'translateX(-50%)' },
                borderRadius: 1,
              },
            }}
          >
            {profile.experience.map((exp, index) => {
              const isRight = index % 2 !== 0;
              return (
                <Grid
                  container
                  key={index}
                  sx={{ mb: 4, position: 'relative' }}
                  justifyContent={isRight ? 'flex-end' : 'flex-start'}
                >
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 13, md: 'calc(50% - 7px)' },
                      top: 22,
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: GRAD,
                      boxShadow: '0 0 0 4px rgba(37,99,235,0.2)',
                      zIndex: 1,
                    }}
                  />
                  <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{ pl: { xs: 7, md: isRight ? 4 : 0 }, pr: { md: isRight ? 0 : 4 } }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        p: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.25s, box-shadow 0.25s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 16px 40px rgba(37,99,235,0.12)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0, left: 0, right: 0,
                          height: 3,
                          background: typeGrad[exp.type] || typeGrad.Junior,
                        },
                      }}
                    >
                      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                          {exp.period}
                        </Typography>
                        <Chip
                          label={exp.type}
                          size="small"
                          sx={{
                            background: typeGrad[exp.type] || typeGrad.Junior,
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                          }}
                        />
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                        <WorkOutline sx={{ fontSize: 18, color: 'primary.main' }} />
                        <Typography variant="h6" sx={{ fontWeight: 700 }} color="primary.main">
                          {exp.title}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1.5 }}>
                        {exp.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {exp.description}
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* â”€â”€ Education â”€â”€ */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <SectionTitle subtitle="Academic background and continuous learning">
          Academic Background
        </SectionTitle>
        <Grid container spacing={3} justifyContent="center">
          {profile.education.map((edu, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  p: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 44px rgba(37,99,235,0.13)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: 3,
                    background: typeGrad[edu.type] || typeGrad.Degree,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    background: typeGrad[edu.type] || typeGrad.Degree,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <SchoolOutlined sx={{ color: '#fff', fontSize: 22 }} />
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                  {edu.period}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.3 }}>
                  {edu.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1.5 }}>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {edu.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider />

      {/* â”€â”€ Skills â”€â”€ */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionTitle subtitle="Technologies and tools I work with daily">
            Skills & Technologies
          </SectionTitle>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}>
            {profile.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                color="primary"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  px: 0.5,
                  py: 0.5,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: GRAD,
                    color: '#fff',
                    borderColor: 'transparent',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutMe;
