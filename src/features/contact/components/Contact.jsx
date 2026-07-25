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
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import ContactForm from './ContactForm';
import profile from '../../../shared/constants/profile';

const Contact = () => {
  return (
    <section className="contact-root">
      <Container maxWidth="lg">
        <div className="contact-header">
          <Typography variant="overline" className="contact-overline">Let&apos;s Talk</Typography>
          <Typography variant="h3" component="h2" className="contact-title">Get In Touch</Typography>
          <Typography variant="body1" color="text.secondary" className="contact-subtitle">
            Whether you have a project in mind, want to enroll in a course, or just want to say
            hello &mdash; I&apos;d love to hear from you.
          </Typography>
        </div>

        <Grid container spacing={3} alignItems="stretch" justifyContent="center">
          {/* Info panel */}
          <Grid item xs={12} md={4}>
            <div className="contact-info-panel">
              <div className="contact-info-body">
                <div>
                  <Typography variant="h5" className="contact-info-heading">Contact Info</Typography>
                  <Typography variant="body2" className="contact-info-sub">
                    I&apos;m open to consulting, freelance, and full-time roles. Response within 1&ndash;2 business days.
                  </Typography>
                </div>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <div className="contact-icon-box">
                    <Email className="contact-icon" />
                  </div>
                  <div>
                    <Typography variant="caption" className="contact-label">Email</Typography>
                    <Typography
                      variant="body2"
                      component="a"
                      href={`mailto:${profile.contact.email}`}
                      className="contact-email-link"
                    >
                      {profile.contact.email}
                    </Typography>
                  </div>
                </Stack>

                <div>
                  <Typography variant="caption" className="contact-label">Find me online</Typography>
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
              <Typography variant="h6" className="contact-form-heading">Send a Message</Typography>
              <Typography variant="body2" color="text.secondary" className="contact-form-sub">
                Fill in the form below and I&apos;ll get back to you as soon as possible.
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
