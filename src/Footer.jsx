import React from 'react';
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
  { text: 'About', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'Courses', href: '#courses' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' },
];

const scrollToSection = (href) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        pt: 6,
        pb: 3,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                letterSpacing: 1,
                mb: 1,
              }}
            >
              CMO
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2, lineHeight: 1.7 }}>
              Senior Fullstack Developer · Consultant · Mentor<br />
              Building scalable solutions since 2018.
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <Tooltip title="GitHub">
                <IconButton
                  aria-label="GitHub"
                  size="small"
                  onClick={() => window.open(profile.contact.social.github, '_blank')}
                  sx={{ color: 'primary.contrastText', opacity: 0.85, '&:hover': { opacity: 1 } }}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  aria-label="LinkedIn"
                  size="small"
                  onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
                  sx={{ color: 'primary.contrastText', opacity: 0.85, '&:hover': { opacity: 1 } }}
                >
                  <LinkedIn />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton
                  aria-label="Email"
                  size="small"
                  component="a"
                  href={`mailto:${profile.contact.email}`}
                  sx={{ color: 'primary.contrastText', opacity: 0.85, '&:hover': { opacity: 1 } }}
                >
                  <Email />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>

          {/* Quick nav column */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, letterSpacing: 0.5 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {navLinks.map((link) => (
                <Typography
                  key={link.text}
                  variant="body2"
                  onClick={() => scrollToSection(link.href)}
                  sx={{
                    opacity: 0.8,
                    cursor: 'pointer',
                    width: 'fit-content',
                    '&:hover': { opacity: 1, textDecoration: 'underline' },
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* CTA column */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, letterSpacing: 0.5 }}>
              Hire Me
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2, lineHeight: 1.7 }}>
              Available for consulting, freelance projects, and full-time roles.
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => scrollToSection('#contact')}
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: 'primary.contrastText',
                textTransform: 'none',
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)', mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {year} Cesar Muñoz Ocampo. All rights reserved.
          </Typography>
          <Tooltip title="Back to top">
            <IconButton
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              sx={{
                color: 'primary.contrastText',
                bgcolor: 'rgba(255,255,255,0.15)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' },
              }}
              size="small"
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
