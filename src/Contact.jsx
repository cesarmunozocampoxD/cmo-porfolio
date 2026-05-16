import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import ContactForm from './components/ContactForm';
import profile from './data/profile';

const Contact = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: 8, bgcolor: 'background.paper', scrollMarginTop: 64 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="text.primary"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 5, maxWidth: 580, mx: 'auto' }}
        >
          Whether you have a project in mind, want to enroll in a course, or just want to say
          hello — I'd love to hear from you.
        </Typography>

        <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
          {/* Contact info */}
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Contact Info
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Email color="primary" />
                <Typography
                  variant="body2"
                  component="a"
                  href={`mailto:${profile.contact.email}`}
                  sx={{ color: 'primary.main', textDecoration: 'none', wordBreak: 'break-word' }}
                >
                  {profile.contact.email}
                </Typography>
              </Stack>

              <Typography variant="subtitle2" gutterBottom color="text.secondary" sx={{ mt: 3 }}>
                Find me online
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <IconButton
                  color="primary"
                  aria-label="GitHub profile"
                  onClick={() => window.open(profile.contact.social.github, '_blank')}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="LinkedIn profile"
                  onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
                >
                  <LinkedIn />
                </IconButton>
              </Stack>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 3, lineHeight: 1.7 }}>
                I'm open to consulting opportunities, full-time positions, and course enrollments.
                Response time is typically 1–2 business days.
              </Typography>
            </Paper>
          </Grid>

          {/* Contact form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Send a Message
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
