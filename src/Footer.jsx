import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Stack,
  Divider,
  Button,
  Tooltip,
} from '@mui/material';
import { GitHub, LinkedIn, Email, KeyboardArrowUp } from '@mui/icons-material';
import profile from './data/profile';

const navLinks = [
  { text: 'About',    path: '/' },
  { text: 'Services', path: '/services' },
  { text: 'Courses',  path: '/courses' },
  { text: 'Projects', path: '/projects' },
  { text: 'Contact',  path: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 40%, #1e3a8a 100%)',
        color: '#fff',
        pt: 7,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              onClick={() => navigate('/')}
              sx={{
                fontWeight: 800,
                letterSpacing: 1,
                mb: 1,
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              CMO
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.65, mb: 2.5, lineHeight: 1.8 }}>
              Senior Fullstack Developer · Consultant · Mentor<br />
              Building scalable solutions since 2018.
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <Tooltip title="GitHub">
                <IconButton
                  aria-label="GitHub"
                  size="small"
                  onClick={() => window.open(profile.contact.social.github, '_blank')}
                  sx={{
                    color: '#fff',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <GitHub fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  aria-label="LinkedIn"
                  size="small"
                  onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
                  sx={{
                    color: '#fff',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton
                  aria-label="Email"
                  size="small"
                  component="a"
                  href={`mailto:${profile.contact.email}`}
                  sx={{
                    color: '#fff',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <Email fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>

          {/* Quick nav column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 2, letterSpacing: 1, opacity: 0.5, textTransform: 'uppercase', fontSize: '0.7rem' }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.2}>
              {navLinks.map((link) => (
                <Typography
                  key={link.text}
                  variant="body2"
                  onClick={() => navigate(link.path)}
                  sx={{
                    opacity: 0.7,
                    cursor: 'pointer',
                    width: 'fit-content',
                    fontWeight: 500,
                    transition: 'opacity 0.2s, transform 0.2s',
                    '&:hover': { opacity: 1, transform: 'translateX(4px)' },
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* CTA column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 2, letterSpacing: 1, opacity: 0.5, textTransform: 'uppercase', fontSize: '0.7rem' }}
            >
              Hire Me
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.65, mb: 2.5, lineHeight: 1.8 }}>
              Available for consulting, freelance projects, and full-time roles.
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate('/contact')}
              sx={{
                borderColor: 'rgba(255,255,255,0.35)',
                color: '#fff',
                fontWeight: 600,
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.5, fontSize: '0.8rem' }}>
            © {year} Cesar Muñoz Ocampo. All rights reserved.
          </Typography>
          <Tooltip title="Back to top">
            <IconButton
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="small"
              sx={{
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.12)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
              }}
            >
              <KeyboardArrowUp />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
