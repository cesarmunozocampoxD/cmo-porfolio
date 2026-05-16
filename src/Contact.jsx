import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  IconButton,
  Button,
  Tooltip,
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import ContactForm from './components/ContactForm';
import profile from './data/profile';

const GRAD = 'linear-gradient(135deg, #0f0c29 0%, #302b63 45%, #1e3a8a 100%)';

const Contact = () => {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 1 }}
          >
            Let's Talk
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            Get In Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}>
            Whether you have a project in mind, want to enroll in a course, or just want to say
            hello â€” I'd love to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={3} alignItems="stretch" justifyContent="center">
          {/* Left panel â€” gradient contact info */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: '100%',
                borderRadius: 4,
                p: 4,
                background: GRAD,
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(ellipse at 10% 90%, rgba(99,102,241,0.4) 0%, transparent 60%),' +
                    'radial-gradient(ellipse at 90% 10%, rgba(37,99,235,0.3) 0%, transparent 60%)',
                  pointerEvents: 'none',
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Contact Info
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.7 }}>
                  I'm open to consulting, freelance, and full-time roles. Response within 1â€“2 business days.
                </Typography>
              </Box>

              {/* Email */}
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ position: 'relative', zIndex: 1 }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: 'rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Email sx={{ fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.6, display: 'block' }}>
                    Email
                  </Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    href={`mailto:${profile.contact.email}`}
                    sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, wordBreak: 'break-word', '&:hover': { opacity: 0.85 } }}
                  >
                    {profile.contact.email}
                  </Typography>
                </Box>
              </Stack>

              {/* Social links */}
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="caption" sx={{ opacity: 0.6, display: 'block', mb: 1.5 }}>
                  Find me online
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Tooltip title="GitHub">
                    <IconButton
                      size="small"
                      onClick={() => window.open(profile.contact.social.github, '_blank')}
                      sx={{
                        color: '#fff',
                        bgcolor: 'rgba(255,255,255,0.12)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
                      }}
                    >
                      <GitHub fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                    <IconButton
                      size="small"
                      onClick={() => window.open(profile.contact.social.linkedin, '_blank')}
                      sx={{
                        color: '#fff',
                        bgcolor: 'rgba(255,255,255,0.12)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
                      }}
                    >
                      <LinkedIn fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Right panel â€” form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                height: '100%',
                borderRadius: 4,
                border: (theme) =>
                  `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 0.5 }}>
                Send a Message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Fill in the form below and I'll get back to you as soon as possible.
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
