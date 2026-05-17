import React from 'react';
import './Projects.css';
import {
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
import profile from '../../../shared/constants/profile';

const Projects = () => {
  return (
    <section className="projects-root">
      <Container maxWidth="lg">
        <div className="projects-header">
          <Typography variant="overline" className="projects-overline">My Work</Typography>
          <Typography variant="h3" component="h2" className="projects-title">Projects</Typography>
          <Typography variant="body1" color="text.secondary" className="projects-subtitle">
            A selection of personal and professional projects showcasing my technical range.
          </Typography>
        </div>

        <Grid container spacing={3} justifyContent="center">
          {profile.projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={0} className="projects-card">
                <div className={`projects-thumb projects-thumb--${index % 5}`}>
                  <Typography variant="h6" className="projects-thumb-title">
                    {project.title}
                  </Typography>
                  {project.isPrivate && (
                    <Chip
                      label="Private"
                      size="small"
                      color="warning"
                      className="projects-private-badge"
                    />
                  )}
                </div>

                <CardContent className="projects-card-content">
                  <Typography variant="body2" color="text.secondary" className="projects-desc">
                    {project.desc}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={0.6} className="projects-tech-row">
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="projects-tech-chip"
                      />
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Tooltip title="View PDF">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<PictureAsPdf />}
                        className="projects-action-btn"
                        onClick={() => window.open(project.pdfLink, '_blank')}
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
                          className="projects-action-btn"
                          onClick={() => window.open(project.githubLink, '_blank')}
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
                          className="projects-action-btn"
                          onClick={() => window.open(project.demoLink, '_blank')}
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
    </section>
  );
};

export default Projects;
