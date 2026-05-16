import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Stack,
  Chip,
} from '@mui/material';
import { GitHub, PictureAsPdf, Launch } from '@mui/icons-material';
import profile from './data/profile';

const Projects = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: 8, bgcolor: 'background.default', scrollMarginTop: 64 }}
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
          Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 5, maxWidth: 580, mx: 'auto' }}
        >
          A selection of personal and professional projects showcasing my technical range.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {profile.projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                {/* Styled thumbnail banner */}
                <Box
                  sx={{
                    height: 100,
                    background: 'linear-gradient(135deg, #1976D2 0%, #9c27b0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                    position: 'relative',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 700,
                      textAlign: 'center',
                      textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                    }}
                  >
                    {project.title}
                  </Typography>
                  {project.isPrivate && (
                    <Chip
                      label="Private"
                      size="small"
                      color="warning"
                      sx={{ position: 'absolute', top: 8, right: 8 }}
                    />
                  )}
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, lineHeight: 1.7 }}>
                    {project.desc}
                  </Typography>

                  {/* Tech stack chips */}
                  <Stack direction="row" flexWrap="wrap" gap={0.6} sx={{ mb: 2 }}>
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Stack>

                  {/* Action buttons */}
                  <Stack direction="row" spacing={0.5} justifyContent="center">
                    <IconButton
                      color="primary"
                      aria-label="View PDF documentation"
                      onClick={() => window.open(project.pdfLink, '_blank')}
                      size="small"
                      title="View PDF"
                    >
                      <PictureAsPdf />
                    </IconButton>
                    {project.githubLink && !project.isPrivate && (
                      <IconButton
                        color="primary"
                        aria-label="View source on GitHub"
                        onClick={() => window.open(project.githubLink, '_blank')}
                        size="small"
                        title="GitHub"
                      >
                        <GitHub />
                      </IconButton>
                    )}
                    {project.demoLink && (
                      <IconButton
                        color="primary"
                        aria-label="View live demo"
                        onClick={() => window.open(project.demoLink, '_blank')}
                        size="small"
                        title="Live Demo"
                      >
                        <Launch />
                      </IconButton>
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
