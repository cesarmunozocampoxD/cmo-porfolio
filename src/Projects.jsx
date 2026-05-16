import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Tooltip,
} from '@mui/material';
import { GitHub, PictureAsPdf, Launch } from '@mui/icons-material';
import profile from './data/profile';

const GRAD = 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)';

const thumbGrads = [
  'linear-gradient(135deg, #1e3a8a 0%, #4f46e5 100%)',
  'linear-gradient(135deg, #064e3b 0%, #1d4ed8 100%)',
  'linear-gradient(135deg, #4c1d95 0%, #0891b2 100%)',
  'linear-gradient(135deg, #7c2d12 0%, #be185d 100%)',
  'linear-gradient(135deg, #1e3a5f 0%, #312e81 100%)',
];

const Projects = () => {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 1 }}
          >
            My Work
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: GRAD,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}>
            A selection of personal and professional projects showcasing my technical range.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {profile.projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 50px rgba(37,99,235,0.14)',
                  },
                }}
              >
                {/* Thumbnail banner */}
                <Box
                  sx={{
                    height: 110,
                    background: thumbGrads[index % thumbGrads.length],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(ellipse at 75% 30%, rgba(255,255,255,0.12) 0%, transparent 55%)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 700,
                      textAlign: 'center',
                      textShadow: '0 2px 6px rgba(0,0,0,0.3)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  {project.isPrivate && (
                    <Chip
                      label="Private"
                      size="small"
                      color="warning"
                      sx={{ position: 'absolute', top: 10, right: 10, fontWeight: 600 }}
                    />
                  )}
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, flexGrow: 1, lineHeight: 1.8 }}
                  >
                    {project.desc}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={0.6} sx={{ mb: 2.5 }}>
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                        sx={{ fontWeight: 500 }}
                      />
                    ))}
                  </Stack>

                  {/* Action buttons */}
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Tooltip title="View PDF">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<PictureAsPdf />}
                        onClick={() => window.open(project.pdfLink, '_blank')}
                        sx={{ flex: 1, py: 0.8 }}
                      >
                        Docs
                      </Button>
                    </Tooltip>
                    {project.githubLink && !project.isPrivate && (
                      <Tooltip title="GitHub">
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<GitHub />}
                          onClick={() => window.open(project.githubLink, '_blank')}
                          sx={{ flex: 1, py: 0.8 }}
                        >
                          Code
                        </Button>
                      </Tooltip>
                    )}
                    {project.demoLink && (
                      <Tooltip title="Live Demo">
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<Launch />}
                          onClick={() => window.open(project.demoLink, '_blank')}
                          sx={{ flex: 1, py: 0.8 }}
                        >
                          Demo
                        </Button>
                      </Tooltip>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
