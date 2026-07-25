import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import {
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
import profile from '../../constants/profile';

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
    <footer className="footer-root">
      <Container maxWidth="lg">
        <Grid container spacing={4} className="footer-grid">
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="footer-logo" onClick={() => navigate('/')}>
              CMO
            </Typography>
            <Typography variant="body2" className="footer-tagline">
              Senior Fullstack Developer · Consultant · Mentor<br />
              Building scalable solutions since 2018.
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <Tooltip title="GitHub">
                <IconButton
                  aria-label="GitHub"
                  size="small"
                  className="footer-social-btn"
                  onClick={() => window.open(profile.contact.social.github, '_blank')}
                >
                  <GitHub fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  aria-label="LinkedIn"
                  size="small"
                  className="footer-social-btn"
                  onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton
                  aria-label="Email"
                  size="small"
                  component="a"
                  className="footer-social-btn"
                  href={`mailto:${profile.contact.email}`}
                >
                  <Email fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" className="footer-col-heading">Quick Links</Typography>
            <Stack spacing={1.2}>
              {navLinks.map((link) => (
                <Typography
                  key={link.text}
                  variant="body2"
                  className="footer-nav-link"
                  onClick={() => navigate(link.path)}
                >
                  {link.text}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Hire Me */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" className="footer-col-heading">Hire Me</Typography>
            <Typography variant="body2" className="footer-cta-text">
              Available for consulting, freelance projects, and full-time roles.
            </Typography>
            <Button
              variant="outlined"
              size="small"
              className="footer-cta-btn"
              onClick={() => navigate('/contact')}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>

        <Divider className="footer-divider" />

        <div className="footer-bottom">
          <Typography variant="body2" className="footer-copyright">
            &copy; {year} Cesar Muñoz Ocampo. All rights reserved.
          </Typography>
          <Tooltip title="Back to top">
            <IconButton
              aria-label="Back to top"
              size="small"
              className="footer-back-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <KeyboardArrowUp />
            </IconButton>
          </Tooltip>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
