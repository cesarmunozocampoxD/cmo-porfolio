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
import { GitHub, LinkedIn, KeyboardArrowUp } from '@mui/icons-material';
import profile from '../../constants/profile';

const navLinks = [
  { text: 'Biografía', path: '/' },
  { text: 'Servicios', path: '/services' },
  { text: 'Cursos', path: '/courses' },
  { text: 'Proyectos', path: '/projects' },
  { text: 'Contacto', path: '/contact' },
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
              Desarrollador full stack senior · Consultor · Mentor<br />
              Creando soluciones escalables desde 2018.
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
            </Stack>
          </Grid>

          {/* Enlaces rápidos */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" className="footer-col-heading">Enlaces rápidos</Typography>
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

          {/* Trabajemos juntos */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" className="footer-col-heading">Trabajemos juntos</Typography>
            <Typography variant="body2" className="footer-cta-text">
              Disponible para consultoría, proyectos independientes y puestos de tiempo completo.
            </Typography>
            <Button
              variant="outlined"
              size="small"
              className="footer-cta-btn"
              onClick={() => navigate('/contact')}
            >
              Contáctame
            </Button>
          </Grid>
        </Grid>

        <Divider className="footer-divider" />

        <div className="footer-bottom">
          <Typography variant="body2" className="footer-copyright">
            &copy; {year} Cesar Muñoz Ocampo. Todos los derechos reservados.
          </Typography>
          <Tooltip title="Volver al inicio">
            <IconButton
              aria-label="Volver al inicio"
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
