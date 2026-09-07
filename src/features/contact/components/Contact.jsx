import React from 'react';
import './Contact.css';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import ContactForm from './ContactForm';
import profile from '../../../shared/constants/profile';

const Contact = () => {
  return (
    <section className="contact-root">
      <Container maxWidth="lg">
        <div className="contact-header">
          <Typography variant="overline" className="contact-overline">Hablemos</Typography>
          <Typography variant="h3" component="h2" className="contact-title">Ponte en contacto</Typography>
          <Typography variant="body1" color="text.secondary" className="contact-subtitle">
            Si tienes un proyecto en mente, quieres inscribirte en un curso o simplemente deseas
            saludar, me encantará saber de ti.
          </Typography>
        </div>

        <Grid container spacing={3} alignItems="stretch" justifyContent="center">
          {/* Info panel */}
          <Grid item xs={12} md={4}>
            <div className="contact-info-panel">
              <div className="contact-info-body">
                <div>
                  <Typography variant="h5" className="contact-info-heading">Información de contacto</Typography>
                  <Typography variant="body2" className="contact-info-sub">
                    Estoy disponible para consultoría, proyectos independientes y puestos de tiempo
                    completo. Respondo en uno o dos días hábiles.
                  </Typography>
                </div>

                <div>
                  <Typography variant="caption" className="contact-label">Encuéntrame en línea</Typography>
                  <Stack direction="row" spacing={1} className="contact-socials">
                    <Tooltip title="GitHub">
                      <IconButton
                        size="small"
                        className="contact-social-btn"
                        onClick={() => window.open(profile.contact.social.github, '_blank')}
                      >
                        <GitHub fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                      <IconButton
                        size="small"
                        className="contact-social-btn"
                        onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
                      >
                        <LinkedIn fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </div>
              </div>
            </div>
          </Grid>

          {/* Form panel */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className="contact-form-panel">
              <Typography variant="h6" className="contact-form-heading">Enviar un mensaje</Typography>
              <Typography variant="body2" color="text.secondary" className="contact-form-sub">
                Completa el formulario y me pondré en contacto contigo lo antes posible.
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
